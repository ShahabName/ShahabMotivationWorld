// Testing Endpoints Handler
// Handles /api/test/* routes for error simulation and testing

class TestHandler {
    static async handle(path, method, request) {
        // Handle CORS preflight
        if (method === 'OPTIONS') {
            return ResponseBuilder.options();
        }
        
        switch (true) {
            case path === '/test/404' && method === 'GET':
                return await this.test404();
                
            case path === '/test/500' && method === 'GET':
                return await this.test500();
                
            case path === '/test/401' && method === 'GET':
                return await this.test401();
                
            case path === '/test/403' && method === 'GET':
                return await this.test403();
                
            case path === '/test/429' && method === 'GET':
                return await this.test429();
                
            case path === '/test/400' && method === 'POST':
                return await this.test400();
                
            case path === '/test/503' && method === 'GET':
                return await this.test503();
                
            case path === '/test/delay' && method === 'GET':
                return await this.testDelay(request);
                
            case path === '/test/timeout' && method === 'GET':
                return await this.testTimeout(request);
                
            case path === '/test/status' && method === 'GET':
                return await this.getTestStatus();
                
            default:
                return ResponseBuilder.notFound('Test endpoint not found');
        }
    }
    
    // GET /api/test/404 - Simulate 404 Not Found
    static async test404() {
        return ResponseBuilder.notFound('This is a simulated 404 error for testing purposes', {
            testEndpoint: true,
            errorCode: 'TEST_404',
            timestamp: new Date().toISOString()
        });
    }
    
    // GET /api/test/500 - Simulate 500 Internal Server Error
    static async test500() {
        return ResponseBuilder.internalError('This is a simulated 500 error for testing purposes', {
            testEndpoint: true,
            errorCode: 'TEST_500',
            timestamp: new Date().toISOString(),
            simulatedError: 'Database connection failed'
        });
    }
    
    // GET /api/test/401 - Simulate 401 Unauthorized
    static async test401() {
        return ResponseBuilder.unauthorized('This is a simulated 401 error for testing purposes', {
            testEndpoint: true,
            errorCode: 'TEST_401',
            timestamp: new Date().toISOString(),
            requiredAuth: 'Bearer token required'
        });
    }
    
    // GET /api/test/403 - Simulate 403 Forbidden
    static async test403() {
        return ResponseBuilder.forbidden('This is a simulated 403 error for testing purposes', {
            testEndpoint: true,
            errorCode: 'TEST_403',
            timestamp: new Date().toISOString(),
            reason: 'Insufficient permissions'
        });
    }
    
    // GET /api/test/429 - Simulate 429 Too Many Requests
    static async test429() {
        return ResponseBuilder.tooManyRequests('This is a simulated 429 error for testing purposes', {
            testEndpoint: true,
            errorCode: 'TEST_429',
            timestamp: new Date().toISOString(),
            retryAfter: 60,
            limit: '100 requests per hour'
        });
    }
    
    // POST /api/test/400 - Simulate 400 Bad Request
    static async test400() {
        return ResponseBuilder.badRequest('This is a simulated 400 error for testing purposes', {
            testEndpoint: true,
            errorCode: 'TEST_400',
            timestamp: new Date().toISOString(),
            validationErrors: [
                { field: 'email', message: 'Invalid email format' },
                { field: 'password', message: 'Password too short' }
            ]
        });
    }
    
    // GET /api/test/503 - Simulate 503 Service Unavailable
    static async test503() {
        return ResponseBuilder.serviceUnavailable('This is a simulated 503 error for testing purposes', {
            testEndpoint: true,
            errorCode: 'TEST_503',
            timestamp: new Date().toISOString(),
            reason: 'Service temporarily unavailable for maintenance'
        });
    }
    
    // GET /api/test/delay - Simulate delayed response
    static async testDelay(request) {
        try {
            const url = new URL(request.url);
            const delay = parseInt(url.searchParams.get('ms')) || 2000;
            
            // Limit delay to reasonable range (100ms to 10s)
            const clampedDelay = Math.min(Math.max(delay, 100), 10000);
            
            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, clampedDelay));
            
            return ResponseBuilder.success({
                message: `Delayed response after ${clampedDelay}ms`,
                testEndpoint: true,
                delayMs: clampedDelay,
                timestamp: new Date().toISOString()
            }, `Response delayed by ${clampedDelay}ms for testing`);
            
        } catch (error) {
            console.error('[TestHandler] Delay test error:', error);
            return ResponseBuilder.internalError('Failed to simulate delay');
        }
    }
    
    // GET /api/test/timeout - Simulate timeout (very long delay)
    static async testTimeout(request) {
        try {
            const url = new URL(request.url);
            const timeout = parseInt(url.searchParams.get('ms')) || 30000;
            
            // Limit timeout to reasonable range (5s to 60s)
            const clampedTimeout = Math.min(Math.max(timeout, 5000), 60000);
            
            // Simulate very long delay that should trigger timeouts
            await new Promise(resolve => setTimeout(resolve, clampedTimeout));
            
            // This response likely won't be received due to timeout
            return ResponseBuilder.success({
                message: `This response came after ${clampedTimeout}ms - likely timed out`,
                testEndpoint: true,
                timeoutMs: clampedTimeout,
                timestamp: new Date().toISOString()
            }, `Response after ${clampedTimeout}ms timeout simulation`);
            
        } catch (error) {
            console.error('[TestHandler] Timeout test error:', error);
            return ResponseBuilder.internalError('Failed to simulate timeout');
        }
    }
    
    // GET /api/test/status - Get test endpoint status and documentation
    static async getTestStatus() {
        const testEndpoints = {
            '/test/404': {
                method: 'GET',
                description: 'Simulates 404 Not Found error',
                expectedStatus: 404,
                parameters: 'None'
            },
            '/test/500': {
                method: 'GET',
                description: 'Simulates 500 Internal Server Error',
                expectedStatus: 500,
                parameters: 'None'
            },
            '/test/401': {
                method: 'GET',
                description: 'Simulates 401 Unauthorized error',
                expectedStatus: 401,
                parameters: 'None'
            },
            '/test/403': {
                method: 'GET',
                description: 'Simulates 403 Forbidden error',
                expectedStatus: 403,
                parameters: 'None'
            },
            '/test/429': {
                method: 'GET',
                description: 'Simulates 429 Too Many Requests error',
                expectedStatus: 429,
                parameters: 'None'
            },
            '/test/400': {
                method: 'POST',
                description: 'Simulates 400 Bad Request error',
                expectedStatus: 400,
                parameters: 'None'
            },
            '/test/503': {
                method: 'GET',
                description: 'Simulates 503 Service Unavailable error',
                expectedStatus: 503,
                parameters: 'None'
            },
            '/test/delay': {
                method: 'GET',
                description: 'Simulates delayed response',
                expectedStatus: 200,
                parameters: '?ms=2000 (delay in milliseconds, 100-10000)'
            },
            '/test/timeout': {
                method: 'GET',
                description: 'Simulates timeout with very long delay',
                expectedStatus: 'timeout',
                parameters: '?ms=30000 (timeout in milliseconds, 5000-60000)'
            },
            '/test/status': {
                method: 'GET',
                description: 'Returns this status information',
                expectedStatus: 200,
                parameters: 'None'
            }
        };
        
        const statusInfo = {
            service: 'Mock API Testing Endpoints',
            version: '1.0.0',
            timestamp: new Date().toISOString(),
            endpoints: testEndpoints,
            usage: {
                baseUrl: 'https://shahabname.github.io/ShahabMotivationWorld/api',
                examples: [
                    'GET /api/test/404 - Test 404 error',
                    'GET /api/test/delay?ms=5000 - Test 5 second delay',
                    'POST /api/test/400 - Test validation error'
                ]
            }
        };
        
        return ResponseBuilder.success(statusInfo, 'Test endpoints status retrieved successfully');
    }
}

// Make available globally
self.TestHandler = TestHandler;