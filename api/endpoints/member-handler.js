// Member Management Endpoints Handler
// Handles /api/members/* routes

class MemberHandler {
    static async handle(path, method, request) {
        // Handle CORS preflight
        if (method === 'OPTIONS') {
            return ResponseBuilder.options();
        }
        
        switch (true) {
            case path === '/members/profile' && method === 'GET':
                return await this.getProfile(request);
                
            case path === '/members/profile' && method === 'POST':
                return await this.updateProfile(request);
                
            case path === '/members/quota' && method === 'GET':
                return await this.getQuota(request);
                
            default:
                return ResponseBuilder.notFound('Member endpoint not found');
        }
    }
    
    // GET /api/members/profile - Get current user profile
    static async getProfile(request) {
        try {
            // Validate session
            const sessionValidation = await this.validateSession(request);
            if (!sessionValidation.valid) {
                return ResponseBuilder.unauthorized(sessionValidation.message);
            }
            
            const { user } = sessionValidation;
            
            // Remove password from response
            const profile = {
                id: user.id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                phone: user.phone,
                address: user.address,
                city: user.city,
                country: user.country,
                dob: user.dob,
                role: user.role,
                createdAt: user.createdAt
            };
            
            return ResponseBuilder.success({ profile }, 'Profile retrieved successfully');
            
        } catch (error) {
            console.error('[MemberHandler] Get profile error:', error);
            return ResponseBuilder.internalError('Failed to retrieve profile');
        }
    }
    
    // POST /api/members/profile - Update user profile
    static async updateProfile(request) {
        try {
            // Validate session
            const sessionValidation = await this.validateSession(request);
            if (!sessionValidation.valid) {
                return ResponseBuilder.unauthorized(sessionValidation.message);
            }
            
            const { user } = sessionValidation;
            
            // Get update data
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
                return ResponseBuilder.badRequest('All profile fields are required', {
                    required: ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'country', 'dob']
                });
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return ResponseBuilder.badRequest('Invalid email format');
            }
            
            // Check if email is already in use by another user
            if (email !== user.email) {
                try {
                    const existingUser = await DBManager.performOperation('users', 
                        (store) => store.index('email').get(email)
                    );
                    if (existingUser && existingUser.id !== user.id) {
                        return ResponseBuilder.badRequest('Email already in use by another user');
                    }
                } catch (error) {
                    // Continue if no existing user found
                }
            }
            
            // Update user data
            const updatedUser = {
                ...user,
                firstName: firstName.trim(),
                lastName: lastName.trim(),
                email: email.trim(),
                phone: phone.trim(),
                address: address.trim(),
                city: city.trim(),
                country: country.trim(),
                dob: dob,
                updatedAt: new Date().toISOString()
            };
            
            await DBManager.updateUser(updatedUser);
            
            // Update session with new user data
            await SessionManager.updateUserInSession(sessionValidation.sessionToken, updatedUser);
            
            // Return updated profile (without password)
            const profile = {
                id: updatedUser.id,
                username: updatedUser.username,
                email: updatedUser.email,
                firstName: updatedUser.firstName,
                lastName: updatedUser.lastName,
                phone: updatedUser.phone,
                address: updatedUser.address,
                city: updatedUser.city,
                country: updatedUser.country,
                dob: updatedUser.dob,
                role: updatedUser.role,
                createdAt: updatedUser.createdAt,
                updatedAt: updatedUser.updatedAt
            };
            
            return ResponseBuilder.success({ profile }, 'Profile updated successfully');
            
        } catch (error) {
            console.error('[MemberHandler] Update profile error:', error);
            return ResponseBuilder.internalError('Failed to update profile');
        }
    }
    
    // GET /api/members/quota - Get user's quote quota information
    static async getQuota(request) {
        try {
            // Validate session
            const sessionValidation = await this.validateSession(request);
            if (!sessionValidation.valid) {
                return ResponseBuilder.unauthorized(sessionValidation.message);
            }
            
            const { user } = sessionValidation;
            
            // Get user's quotes
            const userQuotes = await DBManager.getQuotesByAuthor(user.username);
            
            const quotaInfo = {
                username: user.username,
                quotesUsed: userQuotes.length,
                quotesLimit: 100,
                quotesRemaining: 100 - userQuotes.length,
                percentageUsed: Math.round((userQuotes.length / 100) * 100),
                canAddMore: userQuotes.length < 100,
                recentQuotes: userQuotes
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 5)
                    .map(quote => ({
                        id: quote.id,
                        text: quote.text.length > 50 ? quote.text.substring(0, 50) + '...' : quote.text,
                        category: quote.category,
                        createdAt: quote.createdAt
                    }))
            };
            
            return ResponseBuilder.success({ quota: quotaInfo }, 'Quota information retrieved successfully');
            
        } catch (error) {
            console.error('[MemberHandler] Get quota error:', error);
            return ResponseBuilder.internalError('Failed to retrieve quota information');
        }
    }
    
    // Helper method to validate session
    static async validateSession(request) {
        try {
            const authHeader = request.headers.get('Authorization');
            const sessionToken = SessionManager.extractTokenFromHeader(authHeader);
            
            return await SessionManager.validateSession(sessionToken);
            
        } catch (error) {
            return { valid: false, message: 'Session validation failed' };
        }
    }
}

// Make available globally
self.MemberHandler = MemberHandler;