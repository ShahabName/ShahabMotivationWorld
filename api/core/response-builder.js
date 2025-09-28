// Response Builder for consistent API responses
// Creates standardized JSON responses with proper HTTP status codes and CORS headers

class ResponseBuilder {
    // Create success response
    static success(data, message = 'Success', statusCode = 200) {
        return this.json({
            success: true,
            data: data,
            message: message,
            timestamp: new Date().toISOString(),
            statusCode: statusCode
        }, statusCode);
    }
    
    // Create error response
    static error(statusCode, errorCode, message, details = null) {
        const responseData = {
            success: false,
            error: {
                code: errorCode,
                message: message
            },
            timestamp: new Date().toISOString(),
            statusCode: statusCode
        };
        
        if (details) {
            responseData.error.details = details;
        }
        
        return this.json(responseData, statusCode);
    }
    
    // Create paginated response
    static paginated(items, pagination, message = 'Data retrieved successfully') {
        return this.success({
            items: items,
            pagination: pagination
        }, message);
    }
    
    // Create JSON response with CORS headers
    static json(data, status = 200) {
        return new Response(JSON.stringify(data, null, 2), {
            status: status,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
                'Access-Control-Max-Age': '86400',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
    }
    
    // Handle OPTIONS requests for CORS
    static options() {
        return new Response(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
                'Access-Control-Max-Age': '86400'
            }
        });
    }
    
    // Common error responses
    static unauthorized(message = 'Unauthorized access') {
        return this.error(401, 'UNAUTHORIZED', message);
    }
    
    static forbidden(message = 'Forbidden access') {
        return this.error(403, 'FORBIDDEN', message);
    }
    
    static notFound(message = 'Resource not found') {
        return this.error(404, 'NOT_FOUND', message);
    }
    
    static badRequest(message = 'Bad request', details = null) {
        return this.error(400, 'BAD_REQUEST', message, details);
    }
    
    static tooManyRequests(message = 'Too many requests') {
        return this.error(429, 'TOO_MANY_REQUESTS', message);
    }
    
    static internalError(message = 'Internal server error') {
        return this.error(500, 'INTERNAL_ERROR', message);
    }
    
    static serviceUnavailable(message = 'Service unavailable') {
        return this.error(503, 'SERVICE_UNAVAILABLE', message);
    }
}

// Make available globally
self.ResponseBuilder = ResponseBuilder;