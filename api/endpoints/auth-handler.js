// Authentication Endpoints Handler
// Handles /api/auth/* routes

class AuthHandler {
    static async handle(path, method, request) {
        // Handle CORS preflight
        if (method === 'OPTIONS') {
            return ResponseBuilder.options();
        }
        
        switch (true) {
            case path === '/auth/token' && method === 'GET':
                return await this.generateToken();
                
            case path === '/auth/login' && method === 'POST':
                return await this.login(request);
                
            case path === '/auth/signup' && method === 'POST':
                return await this.signup(request);
                
            default:
                return ResponseBuilder.notFound('Authentication endpoint not found');
        }
    }
    
    // GET /api/auth/token - Generate authentication token
    static async generateToken() {
        try {
            const tokenData = await TokenManager.generateToken();
            
            return ResponseBuilder.success(tokenData, 'Authentication token generated successfully');
            
        } catch (error) {
            console.error('[AuthHandler] Token generation error:', error);
            return ResponseBuilder.internalError('Failed to generate token');
        }
    }
    
    // POST /api/auth/login - User login
    static async login(request) {
        try {
            // Validate authentication token first
            const authHeader = request.headers.get('Authorization');
            const authToken = TokenManager.extractTokenFromHeader(authHeader);
            
            const tokenValidation = await TokenManager.validateToken(authToken);
            if (!tokenValidation.valid) {
                return ResponseBuilder.unauthorized(`Authentication required: ${tokenValidation.reason}`);
            }
            
            // Get login credentials
            const body = await request.json();
            const { username, password } = body;
            
            if (!username || !password) {
                return ResponseBuilder.badRequest('Username and password required');
            }
            
            // Find user by username
            const user = await DBManager.getUserByUsername(username);
            if (!user) {
                return ResponseBuilder.unauthorized('Invalid username or password');
            }
            
            // Validate password
            const isValidPassword = await DBManager.validatePassword(password, user.password);
            if (!isValidPassword) {
                return ResponseBuilder.unauthorized('Invalid username or password');
            }
            
            // Mark auth token as used
            await TokenManager.markTokenAsUsed(authToken);
            
            // Create session
            const sessionData = await SessionManager.createSession(user);
            
            return ResponseBuilder.success(sessionData, 'Login successful');
            
        } catch (error) {
            console.error('[AuthHandler] Login error:', error);
            return ResponseBuilder.internalError('Login failed');
        }
    }
    
    // POST /api/auth/signup - User registration
    static async signup(request) {
        try {
            // Validate authentication token first
            const authHeader = request.headers.get('Authorization');
            const authToken = TokenManager.extractTokenFromHeader(authHeader);
            
            const tokenValidation = await TokenManager.validateToken(authToken);
            if (!tokenValidation.valid) {
                return ResponseBuilder.unauthorized(`Authentication required: ${tokenValidation.reason}`);
            }
            
            // Get signup data
            const body = await request.json();
            const {
                firstName,
                lastName,
                email,
                phone,
                address,
                city,
                country,
                dob
            } = body;
            
            // Validate required fields
            if (!firstName || !lastName || !email || !phone || !address || !city || !country || !dob) {
                return ResponseBuilder.badRequest('All fields are required', {
                    required: ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'country', 'dob']
                });
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return ResponseBuilder.badRequest('Invalid email format');
            }
            
            // Generate username and password
            const username = this.generateUsername(firstName, lastName);
            const password = this.generatePassword();
            
            // Create user data
            const userId = self.generateId('user');
            const userData = {
                id: userId,
                username: username,
                password: password, // Will be hashed in DBManager
                email: email,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                address: address,
                city: city,
                country: country,
                dob: dob,
                role: 'member',
                createdAt: new Date().toISOString()
            };
            
            // Check if email already exists
            try {
                const existingUser = await DBManager.performOperation('users', 
                    (store) => store.index('email').get(email)
                );
                if (existingUser) {
                    return ResponseBuilder.badRequest('Email already exists');
                }
            } catch (error) {
                // Continue if user doesn't exist
            }
            
            // Create user
            await DBManager.createUser(userData);
            
            // Mark auth token as used
            await TokenManager.markTokenAsUsed(authToken);
            
            // Return response with credentials and full profile
            const responseData = {
                username: username,
                password: password,
                profile: {
                    id: userId,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    address: address,
                    city: city,
                    country: country,
                    dob: dob,
                    role: 'member',
                    createdAt: userData.createdAt
                }
            };
            
            return ResponseBuilder.success(responseData, 'Account created successfully');
            
        } catch (error) {
            console.error('[AuthHandler] Signup error:', error);
            return ResponseBuilder.internalError('Signup failed');
        }
    }
    
    // Generate unique username
    static generateUsername(firstName, lastName) {
        const base = (firstName.toLowerCase() + lastName.toLowerCase()).replace(/[^a-z]/g, '');
        const randomSuffix = Math.random().toString(36).substr(2, 4);
        return `${base}_${randomSuffix}`;
    }
    
    // Generate secure random password
    static generatePassword(length = 8) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let password = '';
        const randomArray = new Uint8Array(length);
        crypto.getRandomValues(randomArray);
        
        for (let i = 0; i < length; i++) {
            password += chars[randomArray[i] % chars.length];
        }
        return password;
    }
}

// Make available globally
self.AuthHandler = AuthHandler;