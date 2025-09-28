// IndexedDB Database Manager for ShahabMotivationWorld API
// Handles all database operations with automatic cleanup and validation

class DBManager {
    static DB_NAME = 'ShahabMotivationAPI';
    static DB_VERSION = 1;
    static db = null;
    
    // Initialize database
    static async init() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);
            
            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };
            
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                // Users store
                if (!db.objectStoreNames.contains('users')) {
                    const userStore = db.createObjectStore('users', { keyPath: 'id' });
                    userStore.createIndex('username', 'username', { unique: true });
                    userStore.createIndex('email', 'email', { unique: true });
                }
                
                // Quotes store
                if (!db.objectStoreNames.contains('quotes')) {
                    const quoteStore = db.createObjectStore('quotes', { keyPath: 'id' });
                    quoteStore.createIndex('author', 'author', { unique: false });
                    quoteStore.createIndex('createdBy', 'createdBy', { unique: false });
                    quoteStore.createIndex('category', 'category', { unique: false });
                }
                
                // Tokens store
                if (!db.objectStoreNames.contains('tokens')) {
                    const tokenStore = db.createObjectStore('tokens', { keyPath: 'token' });
                    tokenStore.createIndex('type', 'type', { unique: false });
                    tokenStore.createIndex('expires', 'expires', { unique: false });
                }
                
                // Sessions store
                if (!db.objectStoreNames.contains('sessions')) {
                    const sessionStore = db.createObjectStore('sessions', { keyPath: 'token' });
                    sessionStore.createIndex('userId', 'userId', { unique: false });
                    sessionStore.createIndex('expires', 'expires', { unique: false });
                }
                
                // User quotes quota store
                if (!db.objectStoreNames.contains('quotas')) {
                    const quotaStore = db.createObjectStore('quotas', { keyPath: 'userId' });
                }
            };
        });
    }
    
    // Generic database operation wrapper
    static async performOperation(storeName, operation, mode = 'readonly') {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], mode);
            const store = transaction.objectStore(storeName);
            const request = operation(store);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }
    
    // User CRUD operations
    static async createUser(userData) {
        const hashedPassword = await this.hashPassword(userData.password);
        const user = {
            ...userData,
            password: hashedPassword,
            createdAt: userData.createdAt || new Date().toISOString()
        };
        
        return this.performOperation('users', (store) => store.add(user), 'readwrite');
    }
    
    static async getUserById(id) {
        return this.performOperation('users', (store) => store.get(id));
    }
    
    static async getUserByUsername(username) {
        return this.performOperation('users', (store) => store.index('username').get(username));
    }
    
    static async updateUser(id, updates) {
        const user = await this.getUserById(id);
        if (!user) return null;
        
        const updatedUser = { ...user, ...updates, updatedAt: new Date().toISOString() };
        await this.performOperation('users', (store) => store.put(updatedUser), 'readwrite');
        return updatedUser;
    }
    
    // Quote CRUD operations
    static async createQuote(quoteData) {
        const quote = {
            id: `quote_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            ...quoteData,
            createdAt: new Date().toISOString()
        };
        
        await this.performOperation('quotes', (store) => store.add(quote), 'readwrite');
        return quote;
    }
    
    static async getQuoteById(id) {
        return this.performOperation('quotes', (store) => store.get(id));
    }
    
    static async getAllQuotes(limit = 10, offset = 0) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['quotes'], 'readonly');
            const store = transaction.objectStore('quotes');
            const request = store.getAll();
            
            request.onsuccess = () => {
                const quotes = request.result.slice(offset, offset + limit);
                resolve(quotes);
            };
            request.onerror = () => reject(request.error);
        });
    }
    
    static async getQuotesCount() {
        return this.performOperation('quotes', (store) => store.count());
    }
    
    static async updateQuote(quoteData) {
        await this.performOperation('quotes', (store) => store.put(quoteData), 'readwrite');
        return quoteData;
    }
    
    static async getQuotesByAuthor(author) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['quotes'], 'readonly');
            const store = transaction.objectStore('quotes');
            const index = store.index('author');
            const request = index.getAll(author);
            
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    }
    
    static async getQuotesPaginated(page, limit, author = null) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['quotes'], 'readonly');
            const store = transaction.objectStore('quotes');
            
            let request;
            if (author) {
                const index = store.index('author');
                request = index.getAll(author);
            } else {
                request = store.getAll();
            }
            
            request.onsuccess = () => {
                const allQuotes = request.result;
                const startIndex = (page - 1) * limit;
                const endIndex = startIndex + limit;
                const quotes = allQuotes.slice(startIndex, endIndex);
                
                resolve({
                    quotes: quotes,
                    totalCount: allQuotes.length
                });
            };
            request.onerror = () => reject(request.error);
        });
    }
    
    static async deleteQuote(id) {
        return this.performOperation('quotes', (store) => store.delete(id), 'readwrite');
    }
    
    static async getRandomQuote() {
        const quotes = await this.getAllQuotes(1000); // Get a large sample
        if (quotes.length === 0) return null;
        
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }
    
    // Token operations
    static async storeToken(token, data) {
        const tokenData = {
            token: token,
            ...data,
            createdAt: new Date().toISOString()
        };
        return this.performOperation('tokens', (store) => store.add(tokenData), 'readwrite');
    }
    
    static async getToken(token) {
        return this.performOperation('tokens', (store) => store.get(token));
    }
    
    static async deleteToken(token) {
        return this.performOperation('tokens', (store) => store.delete(token), 'readwrite');
    }
    
    // Session operations
    static async storeSession(token, data) {
        const sessionData = {
            token: token,
            ...data,
            createdAt: new Date().toISOString()
        };
        return this.performOperation('sessions', (store) => store.add(sessionData), 'readwrite');
    }
    
    static async getSession(token) {
        return this.performOperation('sessions', (store) => store.get(token));
    }
    
    static async deleteSession(token) {
        return this.performOperation('sessions', (store) => store.delete(token), 'readwrite');
    }
    
    // Quota operations
    static async getUserQuota(userId) {
        const quota = await this.performOperation('quotas', (store) => store.get(userId));
        return quota || { userId: userId, quotesCount: 0, lastReset: new Date().toISOString() };
    }
    
    static async updateQuota(userId, increment = 1) {
        const quota = await this.getUserQuota(userId);
        quota.quotesCount += increment;
        quota.updatedAt = new Date().toISOString();
        
        await this.performOperation('quotas', (store) => store.put(quota), 'readwrite');
        return quota;
    }
    
    // Seed initial quotes data
    static async seedQuotes(quotesArray) {
        const existingCount = await this.getQuotesCount();
        if (existingCount > 0) return; // Already seeded
        
        const transaction = this.db.transaction(['quotes'], 'readwrite');
        const store = transaction.objectStore('quotes');
        
        quotesArray.forEach((quote, index) => {
            const quoteData = {
                id: `quote_${String(index + 1).padStart(3, '0')}`,
                text: quote.quote || quote.text || quote,
                author: quote.author || 'Unknown',
                category: quote.category || 'motivation',
                createdBy: 'system',
                createdAt: new Date().toISOString(),
                isSystem: true
            };
            store.add(quoteData);
        });
    }
    
    // Cleanup expired data (6-hour expiry)
    static async cleanupExpiredData(expiryTime) {
        const now = Date.now();
        const cutoffTime = now - expiryTime;
        
        // Clean expired tokens
        await this.cleanupExpiredItems('tokens', 'expires', cutoffTime);
        
        // Clean expired sessions  
        await this.cleanupExpiredItems('sessions', 'expires', cutoffTime);
        
        // Clean user-generated quotes older than 6 hours (preserve system quotes)
        await this.cleanupUserQuotes(cutoffTime);
        
        console.log(`[DB] Cleanup completed for data older than ${new Date(cutoffTime).toISOString()}`);
    }
    
    static async cleanupExpiredItems(storeName, timeField, cutoffTime) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([storeName], 'readwrite');
            const store = transaction.objectStore(storeName);
            const index = store.index(timeField);
            const range = IDBKeyRange.upperBound(cutoffTime);
            
            const request = index.openCursor(range);
            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    cursor.delete();
                    cursor.continue();
                } else {
                    resolve();
                }
            };
            request.onerror = () => reject(request.error);
        });
    }
    
    static async cleanupUserQuotes(cutoffTime) {
        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['quotes'], 'readwrite');
            const store = transaction.objectStore('quotes');
            const request = store.openCursor();
            
            request.onsuccess = (event) => {
                const cursor = event.target.result;
                if (cursor) {
                    const quote = cursor.value;
                    // Only delete user-generated quotes (not system quotes)
                    if (!quote.isSystem && new Date(quote.createdAt).getTime() < cutoffTime) {
                        cursor.delete();
                    }
                    cursor.continue();
                } else {
                    resolve();
                }
            };
            request.onerror = () => reject(request.error);
        });
    }
    
    // Password hashing (simple hash for demo purposes)
    static async hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
    
    // Validate password
    static async validatePassword(inputPassword, hashedPassword) {
        const hashedInput = await this.hashPassword(inputPassword);
        return hashedInput === hashedPassword;
    }
}

// Make available globally
self.DBManager = DBManager;