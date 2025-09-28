// Quote Management Endpoints Handler
// Handles /api/quotes/* routes

class QuoteHandler {
    static async handle(path, method, request) {
        // Handle CORS preflight
        if (method === 'OPTIONS') {
            return ResponseBuilder.options();
        }
        
        switch (true) {
            case path === '/quotes/list' && method === 'GET':
                return await this.getQuotes(request);
                
            case path === '/quotes/add' && method === 'POST':
                return await this.addQuote(request);
                
            case path === '/quotes/update' && method === 'POST':
                return await this.updateQuote(request);
                
            case path === '/quotes/delete' && method === 'POST':
                return await this.deleteQuote(request);
                
            case path.startsWith('/quotes/') && method === 'GET':
                return await this.getQuoteById(path, request);
                
            default:
                return ResponseBuilder.notFound('Quote endpoint not found');
        }
    }
    
    // GET /api/quotes/list - Get quotes with pagination
    static async getQuotes(request) {
        try {
            // Validate session
            const sessionValidation = await this.validateSession(request);
            if (!sessionValidation.valid) {
                return ResponseBuilder.unauthorized(sessionValidation.message);
            }
            
            const url = new URL(request.url);
            const page = parseInt(url.searchParams.get('page')) || 1;
            const limit = parseInt(url.searchParams.get('limit')) || 10;
            const random = url.searchParams.get('random') === 'true';
            const author = url.searchParams.get('author') || null;
            
            // Validate pagination parameters
            if (page < 1 || limit < 1 || limit > 100) {
                return ResponseBuilder.badRequest('Invalid pagination parameters. Page must be >= 1, limit must be 1-100');
            }
            
            let quotes;
            let totalCount;
            
            if (random) {
                // Get random quotes
                const allQuotes = await DBManager.getAllQuotes();
                quotes = this.getRandomQuotes(allQuotes, limit);
                totalCount = allQuotes.length;
            } else {
                // Get paginated quotes
                const result = await DBManager.getQuotesPaginated(page, limit, author);
                quotes = result.quotes;
                totalCount = result.totalCount;
            }
            
            const responseData = {
                quotes: quotes,
                pagination: {
                    page: page,
                    limit: limit,
                    total: totalCount,
                    pages: Math.ceil(totalCount / limit),
                    hasNext: page < Math.ceil(totalCount / limit),
                    hasPrev: page > 1
                },
                filters: {
                    author: author,
                    random: random
                }
            };
            
            return ResponseBuilder.success(responseData, `Retrieved ${quotes.length} quotes`);
            
        } catch (error) {
            console.error('[QuoteHandler] Get quotes error:', error);
            return ResponseBuilder.internalError('Failed to retrieve quotes');
        }
    }
    
    // GET /api/quotes/{id} - Get specific quote by ID
    static async getQuoteById(path, request) {
        try {
            // Validate session
            const sessionValidation = await this.validateSession(request);
            if (!sessionValidation.valid) {
                return ResponseBuilder.unauthorized(sessionValidation.message);
            }
            
            const quoteId = path.split('/quotes/')[1];
            if (!quoteId) {
                return ResponseBuilder.badRequest('Quote ID required');
            }
            
            const quote = await DBManager.getQuoteById(quoteId);
            if (!quote) {
                return ResponseBuilder.notFound('Quote not found');
            }
            
            return ResponseBuilder.success({ quote: quote }, 'Quote retrieved successfully');
            
        } catch (error) {
            console.error('[QuoteHandler] Get quote by ID error:', error);
            return ResponseBuilder.internalError('Failed to retrieve quote');
        }
    }
    
    // POST /api/quotes/add - Add new quote
    static async addQuote(request) {
        try {
            // Validate session
            const sessionValidation = await this.validateSession(request);
            if (!sessionValidation.valid) {
                return ResponseBuilder.unauthorized(sessionValidation.message);
            }
            
            const { user } = sessionValidation;
            
            // Check user quota (100 quotes per user)
            const userQuotes = await DBManager.getQuotesByAuthor(user.username);
            if (userQuotes.length >= 100) {
                return ResponseBuilder.forbidden('Quote quota exceeded. Maximum 100 quotes per user.');
            }
            
            // Get quote data
            const body = await request.json();
            const { text, category } = body;
            
            if (!text || !category) {
                return ResponseBuilder.badRequest('Quote text and category are required');
            }
            
            // Validate text length
            if (text.length < 10 || text.length > 500) {
                return ResponseBuilder.badRequest('Quote text must be between 10 and 500 characters');
            }
            
            // Create quote
            const quoteId = self.generateId('quote');
            const quoteData = {
                id: quoteId,
                text: text.trim(),
                author: user.username,
                category: category.trim(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            await DBManager.createQuote(quoteData);
            
            return ResponseBuilder.success({ quote: quoteData }, 'Quote added successfully');
            
        } catch (error) {
            console.error('[QuoteHandler] Add quote error:', error);
            return ResponseBuilder.internalError('Failed to add quote');
        }
    }
    
    // POST /api/quotes/update - Update existing quote
    static async updateQuote(request) {
        try {
            // Validate session
            const sessionValidation = await this.validateSession(request);
            if (!sessionValidation.valid) {
                return ResponseBuilder.unauthorized(sessionValidation.message);
            }
            
            const { user } = sessionValidation;
            
            // Get update data
            const body = await request.json();
            const { id, text, category } = body;
            
            if (!id || !text || !category) {
                return ResponseBuilder.badRequest('Quote ID, text, and category are required');
            }
            
            // Get existing quote
            const existingQuote = await DBManager.getQuoteById(id);
            if (!existingQuote) {
                return ResponseBuilder.notFound('Quote not found');
            }
            
            // Check ownership
            if (existingQuote.author !== user.username) {
                return ResponseBuilder.forbidden('Can only update your own quotes');
            }
            
            // Validate text length
            if (text.length < 10 || text.length > 500) {
                return ResponseBuilder.badRequest('Quote text must be between 10 and 500 characters');
            }
            
            // Update quote
            const updatedQuote = {
                ...existingQuote,
                text: text.trim(),
                category: category.trim(),
                updatedAt: new Date().toISOString()
            };
            
            await DBManager.updateQuote(updatedQuote);
            
            return ResponseBuilder.success({ quote: updatedQuote }, 'Quote updated successfully');
            
        } catch (error) {
            console.error('[QuoteHandler] Update quote error:', error);
            return ResponseBuilder.internalError('Failed to update quote');
        }
    }
    
    // POST /api/quotes/delete - Delete quote
    static async deleteQuote(request) {
        try {
            // Validate session
            const sessionValidation = await this.validateSession(request);
            if (!sessionValidation.valid) {
                return ResponseBuilder.unauthorized(sessionValidation.message);
            }
            
            const { user } = sessionValidation;
            
            // Get quote ID
            const body = await request.json();
            const { id } = body;
            
            if (!id) {
                return ResponseBuilder.badRequest('Quote ID required');
            }
            
            // Get existing quote
            const existingQuote = await DBManager.getQuoteById(id);
            if (!existingQuote) {
                return ResponseBuilder.notFound('Quote not found');
            }
            
            // Check ownership
            if (existingQuote.author !== user.username) {
                return ResponseBuilder.forbidden('Can only delete your own quotes');
            }
            
            // Delete quote
            await DBManager.deleteQuote(id);
            
            return ResponseBuilder.success({ deletedId: id }, 'Quote deleted successfully');
            
        } catch (error) {
            console.error('[QuoteHandler] Delete quote error:', error);
            return ResponseBuilder.internalError('Failed to delete quote');
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
    
    // Helper method to get random quotes
    static getRandomQuotes(quotes, limit) {
        const shuffled = [...quotes].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, limit);
    }
}

// Make available globally
self.QuoteHandler = QuoteHandler;