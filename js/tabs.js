// Tabs page JavaScript functionality using jQuery

$(document).ready(function() {
    // Initialize tabs functionality
    $('.tab-button').on('click', function() {
        const targetTab = $(this).data('tab');
        
        // Remove active class from all buttons and contents
        $('.tab-button').removeClass('active');
        $('.tab-content').removeClass('active').hide();
        
        // Add active class to clicked button and show corresponding content
        $(this).addClass('active');
        $(`#${targetTab}`).addClass('active').fadeIn(300);
    });
    
    // Handle quote form submission
    $('#quoteForm').on('submit', function(e) {
        e.preventDefault();
        
        const quote = $('#userQuote').val().trim();
        const author = $('#quoteAuthor').val().trim() || 'Anonymous';
        
        if (quote) {
            addUserQuote(quote, author);
            // Clear form
            $('#userQuote').val('');
            $('#quoteAuthor').val('');
            
            // Show success message
            showSuccessMessage('Quote added successfully!');
        }
    });
    
    // Add hover effects to tab buttons
    $('.tab-button').hover(
        function() {
            $(this).css('transform', 'translateY(-2px)');
        },
        function() {
            if (!$(this).hasClass('active')) {
                $(this).css('transform', 'translateY(0)');
            }
        }
    );
    
    // Load saved quotes from localStorage
    loadSavedQuotes();
});

// Function to add user quote to the collection
function addUserQuote(quote, author) {
    const quoteHtml = `
        <div class="motivation-card user-quote" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); margin-bottom: 15px; animation: slideIn 0.5s ease;">
            <p>"${quote}"</p>
            <span>- ${author}</span>
            <button onclick="removeUserQuote(this)" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.3); border: none; color: white; border-radius: 50%; width: 25px; height: 25px; cursor: pointer;">×</button>
        </div>
    `;
    
    $('#userQuotes').prepend(quoteHtml);
    
    // Save to localStorage
    saveQuoteToStorage(quote, author);
    
    // Add animation
    $('.user-quote:first').hide().slideDown(300);
}

// Function to remove user quote
function removeUserQuote(button) {
    const quoteCard = $(button).closest('.user-quote');
    const quote = quoteCard.find('p').text().replace(/"/g, '');
    const author = quoteCard.find('span').text().replace('- ', '');
    
    quoteCard.slideUp(300, function() {
        $(this).remove();
        removeQuoteFromStorage(quote, author);
    });
}

// Function to save quote to localStorage
function saveQuoteToStorage(quote, author) {
    let savedQuotes = JSON.parse(localStorage.getItem('userQuotes') || '[]');
    savedQuotes.push({ quote, author, timestamp: Date.now() });
    localStorage.setItem('userQuotes', JSON.stringify(savedQuotes));
}

// Function to remove quote from localStorage
function removeQuoteFromStorage(quote, author) {
    let savedQuotes = JSON.parse(localStorage.getItem('userQuotes') || '[]');
    savedQuotes = savedQuotes.filter(q => q.quote !== quote || q.author !== author);
    localStorage.setItem('userQuotes', JSON.stringify(savedQuotes));
}

// Function to load saved quotes
function loadSavedQuotes() {
    const savedQuotes = JSON.parse(localStorage.getItem('userQuotes') || '[]');
    
    if (savedQuotes.length > 0) {
        $('#userQuotes').prepend('<h3 style="color: #667eea; margin-bottom: 15px;"><i class="fas fa-bookmark"></i> Your Saved Quotes</h3>');
        
        savedQuotes.reverse().forEach(({ quote, author }) => {
            const quoteHtml = `
                <div class="motivation-card user-quote" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); margin-bottom: 15px; position: relative;">
                    <p>"${quote}"</p>
                    <span>- ${author}</span>
                    <button onclick="removeUserQuote(this)" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.3); border: none; color: white; border-radius: 50%; width: 25px; height: 25px; cursor: pointer;">×</button>
                </div>
            `;
            $('#userQuotes').append(quoteHtml);
        });
    }
}

// Function to show success message
function showSuccessMessage(message) {
    const successHtml = `
        <div class="success-message" style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #28a745, #20c997);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1000;
            animation: slideInRight 0.5s ease;
        ">
            <i class="fas fa-check-circle"></i> ${message}
        </div>
    `;
    
    $('body').append(successHtml);
    
    // Remove after 3 seconds
    setTimeout(() => {
        $('.success-message').fadeOut(300, function() {
            $(this).remove();
        });
    }, 3000);
}

// Add CSS animations
const tabStyles = document.createElement('style');
tabStyles.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .user-quote {
        position: relative;
    }
    
    .user-quote button:hover {
        background: rgba(255,255,255,0.5) !important;
    }
    
    .tab-content {
        min-height: 300px;
    }
    
    .tab-button.active {
        transform: translateY(-2px);
    }
`;
document.head.appendChild(tabStyles);