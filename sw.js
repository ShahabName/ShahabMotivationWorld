// Service Worker for ShahabMotivationWorld Mock API
// Base URI: https://shahabname.github.io/ShahabMotivationWorld/api

const CACHE_NAME = 'shahab-motivation-api-v1';
const API_BASE_PATH = '/ShahabMotivationWorld/api';
const TOKEN_EXPIRY = 6 * 60 * 60 * 1000; // 6 hours in milliseconds
const DATA_EXPIRY = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

// Import API modules
importScripts('/ShahabMotivationWorld/api/core/response-builder.js');
importScripts('/ShahabMotivationWorld/api/storage/db-manager.js');
importScripts('/ShahabMotivationWorld/api/auth/token-manager.js');
importScripts('/ShahabMotivationWorld/api/auth/session-manager.js');
importScripts('/ShahabMotivationWorld/api/endpoints/auth-handler.js');
importScripts('/ShahabMotivationWorld/api/endpoints/quote-handler.js');
importScripts('/ShahabMotivationWorld/api/endpoints/member-handler.js');
importScripts('/ShahabMotivationWorld/api/endpoints/test-handler.js');

// Service Worker Installation
self.addEventListener('install', (event) => {
    console.log('[SW] Installing Service Worker...');
    event.waitUntil(
        Promise.all([
            caches.open(CACHE_NAME),
            DBManager.init(),
            seedInitialData()
        ])
    );
    self.skipWaiting();
});

// Service Worker Activation
self.addEventListener('activate', (event) => {
    console.log('[SW] Activating Service Worker...');
    event.waitUntil(
        Promise.all([
            clearOldCaches(),
            startCleanupScheduler()
        ])
    );
    self.clients.claim();
});

// Request Interception and Routing
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Handle API requests  
    if (url.pathname.startsWith('/ShahabMotivationWorld/api/')) {
        event.respondWith(handleApiRequest(event.request));
        return;
    }    // Handle other requests normally
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(() => new Response('Network error', { status: 503 }))
    );
});

// Main API Request Router
async function handleApiRequest(request) {
    try {
        const url = new URL(request.url);
        const path = url.pathname.replace(API_BASE_PATH, '');
        const method = request.method;
        const startTime = Date.now();
        
        console.log(`[API] ${method} ${path}`);
        
        let response;
        
        // Route requests to appropriate handlers
        if (path.startsWith('/auth/')) {
            response = await AuthHandler.handle(path, method, request);
        } else if (path.startsWith('/quotes')) {
            response = await QuoteHandler.handle(path, method, request);
        } else if (path.startsWith('/members/')) {
            response = await MemberHandler.handle(path, method, request);
        } else if (path.startsWith('/test/')) {
            response = await TestHandler.handle(path, method, request);
        } else if (path === '/status' && method === 'GET') {
            response = ResponseBuilder.success({
                status: 'operational',
                service: 'Mock API for ShahabMotivationWorld',
                timestamp: new Date().toISOString(),
                version: '1.0.0',
                endpoints: {
                    auth: ['/auth/token', '/auth/login', '/auth/signup'],
                    quotes: ['/quotes/list', '/quotes/add', '/quotes/update', '/quotes/delete', '/quotes/{id}'],
                    members: ['/members/profile', '/members/quota'],
                    testing: ['/test/404', '/test/500', '/test/401', '/test/403', '/test/429', '/test/400', '/test/503', '/test/delay', '/test/timeout', '/test/status']
                }
            }, 'API is running');
        } else {
            response = ResponseBuilder.notFound('API endpoint not found');
        }
        
        // Add processing time
        const processingTime = Date.now() - startTime;
        const responseData = await response.json();
        responseData.meta = { processingTime: `${processingTime}ms` };
        
        return ResponseBuilder.json(responseData, response.status);
        
    } catch (error) {
        console.error('[API] Error:', error);
        return ResponseBuilder.error(500, 'INTERNAL_ERROR', 'Internal server error');
    }
}

// Initialize data on first run
async function seedInitialData() {
    try {
        // Import quotes from existing quotes.js
        if (typeof quotesArray !== 'undefined') {
            await DBManager.seedQuotes(quotesArray);
        }
        
        // Create demo users
        await createDemoUsers();
        
        console.log('[SW] Initial data seeded successfully');
    } catch (error) {
        console.error('[SW] Error seeding data:', error);
    }
}

// Create demo users
async function createDemoUsers() {
    const demoUsers = [
        {
            id: 'user_001',
            username: 'admin',
            password: 'admin123', // Will be hashed
            email: 'admin@shahabworld.com',
            firstName: 'Admin',
            lastName: 'User',
            role: 'admin',
            phone: '+91-9876543210',
            address: '123 Admin Street',
            city: 'New Delhi',
            country: 'India',
            dob: '1990-01-15',
            createdAt: new Date().toISOString()
        },
        {
            id: 'user_002',
            username: 'john',
            password: 'john123',
            email: 'john@demo.com',
            firstName: 'John',
            lastName: 'Doe',
            role: 'member',
            phone: '+1-555-0101',
            address: '456 Demo Avenue',
            city: 'New York',
            country: 'USA',
            dob: '1985-05-20',
            createdAt: new Date().toISOString()
        },
        {
            id: 'user_003',
            username: 'sarah',
            password: 'sarah123',
            email: 'sarah@demo.com',
            firstName: 'Sarah',
            lastName: 'Smith',
            role: 'member',
            phone: '+44-20-7946-0958',
            address: '789 London Road',
            city: 'London',
            country: 'UK',
            dob: '1992-08-12',
            createdAt: new Date().toISOString()
        },
        {
            id: 'user_004',
            username: 'alex',
            password: 'alex123',
            email: 'alex@demo.com',
            firstName: 'Alex',
            lastName: 'Johnson',
            role: 'member',
            phone: '+61-2-9876-5432',
            address: '321 Sydney Street',
            city: 'Sydney',
            country: 'Australia',
            dob: '1988-03-25',
            createdAt: new Date().toISOString()
        },
        {
            id: 'user_005',
            username: 'virat',
            password: 'virat123',
            email: 'virat@demo.com',
            firstName: 'Virat',
            lastName: 'Kohli',
            role: 'member',
            phone: '+91-9876543211',
            address: 'Cricket Academy Road',
            city: 'Delhi',
            country: 'India',
            dob: '1988-11-05',
            createdAt: new Date().toISOString()
        },
        {
            id: 'user_006',
            username: 'sindhu',
            password: 'sindhu123',
            email: 'sindhu@demo.com',
            firstName: 'P.V.',
            lastName: 'Sindhu',
            role: 'member',
            phone: '+91-9876543212',
            address: 'Badminton Academy',
            city: 'Hyderabad',
            country: 'India',
            dob: '1995-07-19',
            createdAt: new Date().toISOString()
        },
        {
            id: 'user_007',
            username: 'mary',
            password: 'mary123',
            email: 'mary@demo.com',
            firstName: 'Mary',
            lastName: 'Williams',
            role: 'member',
            phone: '+1-555-0107',
            address: '654 Main Street',
            city: 'Los Angeles',
            country: 'USA',
            dob: '1991-12-08',
            createdAt: new Date().toISOString()
        },
        {
            id: 'user_008',
            username: 'dhoni',
            password: 'dhoni123',
            email: 'dhoni@demo.com',
            firstName: 'M.S.',
            lastName: 'Dhoni',
            role: 'member',
            phone: '+91-9876543213',
            address: 'Captain Cool Street',
            city: 'Ranchi',
            country: 'India',
            dob: '1981-07-07',
            createdAt: new Date().toISOString()
        },
        {
            id: 'user_009',
            username: 'neeraj',
            password: 'neeraj123',
            email: 'neeraj@demo.com',
            firstName: 'Neeraj',
            lastName: 'Chopra',
            role: 'member',
            phone: '+91-9876543214',
            address: 'Olympic Village',
            city: 'Panipat',
            country: 'India',
            dob: '1997-12-24',
            createdAt: new Date().toISOString()
        }
    ];
    
    for (const user of demoUsers) {
        await DBManager.createUser(user);
    }
}

// Cleanup old caches
async function clearOldCaches() {
    const cacheNames = await caches.keys();
    return Promise.all(
        cacheNames
            .filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => caches.delete(cacheName))
    );
}

// Start cleanup scheduler for 6-hour expiry
function startCleanupScheduler() {
    // Run cleanup every hour
    setInterval(async () => {
        try {
            await DBManager.cleanupExpiredData(DATA_EXPIRY);
            await TokenManager.cleanupExpiredTokens(TOKEN_EXPIRY);
            await SessionManager.cleanupExpiredSessions(TOKEN_EXPIRY);
            console.log('[SW] Cleanup completed');
        } catch (error) {
            console.error('[SW] Cleanup error:', error);
        }
    }, 60 * 60 * 1000); // Run every hour
}

// Utility function to generate IDs
function generateId(prefix = 'id') {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Make utilities available globally
self.generateId = generateId;
self.TOKEN_EXPIRY = TOKEN_EXPIRY;
self.DATA_EXPIRY = DATA_EXPIRY;