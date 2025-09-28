// Token Manager for authentication tokens
// Generates and validates authentication tokens with 6-hour expiry

class TokenManager {
    static TOKEN_PREFIX = 'auth_';
    static TOKEN_LENGTH = 32;
    
    // Generate authentication token
    static async generateToken() {
        const token = this.TOKEN_PREFIX + this.generateRandomString(this.TOKEN_LENGTH);
        const expiry = Date.now() + self.TOKEN_EXPIRY;
        
        const tokenData = {
            type: 'auth',
            created: Date.now(),
            expires: expiry,
            used: false
        };
        
        await DBManager.storeToken(token, tokenData);
        
        return {
            token: token,
            expires: new Date(expiry).toISOString(),
            type: 'bearer'
        };
    }
    
    // Validate authentication token
    static async validateToken(token) {
        if (!token || !token.startsWith(this.TOKEN_PREFIX)) {
            return { valid: false, reason: 'Invalid token format' };
        }
        
        const tokenData = await DBManager.getToken(token);
        if (!tokenData) {
            return { valid: false, reason: 'Token not found' };
        }
        
        if (Date.now() > tokenData.expires) {
            await DBManager.deleteToken(token);
            return { valid: false, reason: 'Token expired' };
        }
        
        if (tokenData.type !== 'auth') {
            return { valid: false, reason: 'Invalid token type' };
        }
        
        return { valid: true, tokenData: tokenData };
    }
    
    // Mark token as used (for login)
    static async markTokenAsUsed(token) {
        const tokenData = await DBManager.getToken(token);
        if (tokenData) {
            tokenData.used = true;
            tokenData.usedAt = new Date().toISOString();
            await DBManager.performOperation('tokens', (store) => store.put(tokenData), 'readwrite');
        }
    }
    
    // Extract token from Authorization header
    static extractTokenFromHeader(authHeader) {
        if (!authHeader) return null;
        
        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') return null;
        
        return parts[1];
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
    
    // Cleanup expired tokens
    static async cleanupExpiredTokens(expiryTime) {
        const now = Date.now();
        const cutoffTime = now - expiryTime;
        
        return new Promise((resolve, reject) => {
            const transaction = DBManager.db.transaction(['tokens'], 'readwrite');
            const store = transaction.objectStore('tokens');
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
                    console.log(`[TokenManager] Cleaned up ${deletedCount} expired tokens`);
                    resolve(deletedCount);
                }
            };
            request.onerror = () => reject(request.error);
        });
    }
    
    // Extract token from Authorization header
    static extractTokenFromHeader(authHeader) {
        if (!authHeader) return null;
        
        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') return null;
        
        return parts[1];
    }
}

// Make available globally
self.TokenManager = TokenManager;