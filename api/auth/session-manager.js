// Session Manager for user sessions
// Manages user login sessions with 6-hour expiry

class SessionManager {
    static SESSION_PREFIX = 'session_';
    static SESSION_LENGTH = 32;
    
    // Create user session
    static async createSession(user) {
        const sessionToken = this.SESSION_PREFIX + this.generateRandomString(this.SESSION_LENGTH);
        const expiry = Date.now() + self.TOKEN_EXPIRY;
        
        const sessionData = {
            userId: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            created: Date.now(),
            expires: expiry,
            permissions: this.getUserPermissions(user.role)
        };
        
        await DBManager.storeSession(sessionToken, sessionData);
        
        return {
            sessionToken: sessionToken,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role
            },
            expires: new Date(expiry).toISOString(),
            permissions: sessionData.permissions
        };
    }
    
    // Validate session token
    static async validateSession(sessionToken) {
        if (!sessionToken || !sessionToken.startsWith(this.SESSION_PREFIX)) {
            return { valid: false, reason: 'Invalid session format' };
        }
        
        const sessionData = await DBManager.getSession(sessionToken);
        if (!sessionData) {
            return { valid: false, reason: 'Session not found' };
        }
        
        if (Date.now() > sessionData.expires) {
            await DBManager.deleteSession(sessionToken);
            return { valid: false, reason: 'Session expired' };
        }
        
        return { valid: true, sessionData: sessionData };
    }
    
    // Get user permissions based on role
    static getUserPermissions(role) {
        switch (role) {
            case 'admin':
                return ['read', 'write', 'delete', 'admin'];
            case 'member':
                return ['read', 'write'];
            default:
                return ['read'];
        }
    }
    
    // Check if session has permission
    static async hasPermission(sessionToken, requiredPermission) {
        const validation = await this.validateSession(sessionToken);
        if (!validation.valid) {
            return { hasPermission: false, reason: validation.reason };
        }
        
        const permissions = validation.sessionData.permissions || [];
        return {
            hasPermission: permissions.includes(requiredPermission),
            sessionData: validation.sessionData
        };
    }
    
    // Generate cryptographically secure random string
    static generateRandomString(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const randomArray = new Uint8Array(length);
        crypto.getRandomValues(randomArray);
        
        for (let i = 0; i < length; i++) {
            result += chars[randomArray[i] % chars.length];
        }
        return result;
    }
    
    // Cleanup expired sessions
    static async cleanupExpiredSessions(expiryTime) {
        const now = Date.now();
        const cutoffTime = now - expiryTime;
        
        return new Promise((resolve, reject) => {
            const transaction = DBManager.db.transaction(['sessions'], 'readwrite');
            const store = transaction.objectStore('sessions');
            const index = store.index('expires');
            const range = IDBKeyRange.upperBound(cutoffTime);
            
            const request = index.openCursor(range);
            let deletedCount = 0;
            
            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    cursor.delete();
                    deletedCount++;
                    cursor.continue();
                } else {
                    console.log(`[SessionManager] Cleaned up ${deletedCount} expired sessions`);
                    resolve(deletedCount);
                }
            };
            request.onerror = () => reject(request.error);
        });
    }
    
    // Extract session token from Authorization header
    static extractSessionFromHeader(authHeader) {
        if (!authHeader) return null;
        
        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') return null;
        
        return parts[1];
    }
    
    // Extract token from Authorization header (alias for compatibility)
    static extractTokenFromHeader(authHeader) {
        return this.extractSessionFromHeader(authHeader);
    }
    
    // Logout user (delete session)
    static async logout(sessionToken) {
        if (sessionToken) {
            await DBManager.deleteSession(sessionToken);
        }
    }
    
    // Enhanced session validation with user data
    static async validateSession(sessionToken) {
        if (!sessionToken || !sessionToken.startsWith(this.SESSION_PREFIX)) {
            return { valid: false, message: 'Invalid session format' };
        }
        
        const sessionData = await DBManager.getSession(sessionToken);
        if (!sessionData) {
            return { valid: false, message: 'Session not found' };
        }
        
        if (Date.now() > sessionData.expires) {
            await DBManager.deleteSession(sessionToken);
            return { valid: false, message: 'Session expired' };
        }
        
        // Get full user data
        const user = await DBManager.getUserById(sessionData.userId);
        if (!user) {
            await DBManager.deleteSession(sessionToken);
            return { valid: false, message: 'User not found' };
        }
        
        return { 
            valid: true, 
            sessionToken: sessionToken,
            sessionData: sessionData,
            user: user 
        };
    }
    
    // Update user data in session
    static async updateUserInSession(sessionToken, updatedUser) {
        const sessionData = await DBManager.getSession(sessionToken);
        if (sessionData) {
            sessionData.email = updatedUser.email;
            await DBManager.performOperation('sessions', (store) => store.put(sessionData), 'readwrite');
        }
    }
}

// Make available globally
self.SessionManager = SessionManager;