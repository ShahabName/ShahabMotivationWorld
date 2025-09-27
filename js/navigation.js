// Multi-navigation page JavaScript functionality

let currentPage = 1;
const totalPages = 5;

// Function to show specific page
function showPage(pageNumber) {
    // Hide all pages
    for (let i = 1; i <= totalPages; i++) {
        const page = document.getElementById(`page${i}`);
        if (page) {
            page.classList.add('hidden');
        }
    }
    
    // Show current page
    const currentPageElement = document.getElementById(`page${pageNumber}`);
    if (currentPageElement) {
        currentPageElement.classList.remove('hidden');
        
        // Add animation
        currentPageElement.style.opacity = '0';
        currentPageElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            currentPageElement.style.transition = 'all 0.5s ease';
            currentPageElement.style.opacity = '1';
            currentPageElement.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Update page indicator
    updatePageIndicator();
    
    // Update progress bar
    updateProgressBar();
    
    // Update quotes read counter
    updateQuotesCounter();
}

// Function to go to next page
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

// Function to go to previous page
function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Update navigation buttons state
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Enable/disable previous button
    prevBtn.disabled = currentPage === 1;
    
    // Enable/disable next button
    nextBtn.disabled = currentPage === totalPages;
    
    // Update button text for last page
    if (currentPage === totalPages) {
        nextBtn.innerHTML = '<i class="fas fa-check"></i> Complete';
    } else {
        nextBtn.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
    }
}

// Update page indicator
function updatePageIndicator() {
    const indicator = document.getElementById('pageIndicator');
    indicator.textContent = `Page ${currentPage} of ${totalPages}`;
}

// Update progress bar
function updateProgressBar() {
    const progress = document.getElementById('progress');
    const percentage = (currentPage / totalPages) * 100;
    progress.style.width = percentage + '%';
}

// Update quotes read counter
function updateQuotesCounter() {
    const quotesRead = currentPage * 2; // 2 quotes per page
    document.getElementById('pagesRead').textContent = quotesRead;
}

// Keyboard navigation
function handleKeyPress(event) {
    switch(event.key) {
        case 'ArrowLeft':
            if (currentPage > 1) {
                previousPage();
            }
            break;
        case 'ArrowRight':
            if (currentPage < totalPages) {
                nextPage();
            }
            break;
        case ' ': // Spacebar
            event.preventDefault();
            if (currentPage < totalPages) {
                nextPage();
            }
            break;
    }
}

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0 && currentPage > 1) {
            // Swipe right - go to previous page
            previousPage();
        } else if (swipeDistance < 0 && currentPage < totalPages) {
            // Swipe left - go to next page
            nextPage();
        }
    }
}

// Auto-save progress to localStorage
function saveProgress() {
    localStorage.setItem('navigationProgress', currentPage);
    localStorage.setItem('navigationTimestamp', Date.now());
}

// Load saved progress
function loadProgress() {
    const savedPage = localStorage.getItem('navigationProgress');
    const timestamp = localStorage.getItem('navigationTimestamp');
    
    // Only load if saved within last 24 hours
    if (savedPage && timestamp) {
        const hoursSince = (Date.now() - parseInt(timestamp)) / (1000 * 60 * 60);
        if (hoursSince < 24) {
            currentPage = parseInt(savedPage);
            showPage(currentPage);
            
            // Show welcome back message
            showWelcomeBackMessage();
        }
    }
}

// Show welcome back message
function showWelcomeBackMessage() {
    const message = document.createElement('div');
    message.className = 'welcome-back-message';
    message.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 20px 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 1000;
            text-align: center;
            animation: fadeInScale 0.5s ease;
        ">
            <i class="fas fa-bookmark" style="font-size: 2rem; margin-bottom: 10px;"></i>
            <h3>Welcome Back!</h3>
            <p>Continuing from page ${currentPage}</p>
        </div>
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            message.remove();
        }, 300);
    }, 2000);
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Load saved progress
    loadProgress();
    
    // Initialize first page if no saved progress
    if (currentPage === 1) {
        showPage(1);
    }
    
    // Add keyboard event listeners
    document.addEventListener('keydown', handleKeyPress);
    
    // Add touch event listeners
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    
    // Save progress whenever page changes
    const originalNextPage = nextPage;
    const originalPreviousPage = previousPage;
    
    nextPage = function() {
        originalNextPage();
        saveProgress();
    };
    
    previousPage = function() {
        originalPreviousPage();
        saveProgress();
    };
    
    // Add hover effects to navigation buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Show navigation instructions
    setTimeout(() => {
        showNavigationTips();
    }, 2000);
});

// Show navigation tips
function showNavigationTips() {
    const tips = document.createElement('div');
    tips.innerHTML = `
        <div style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 15px;
            border-radius: 10px;
            font-size: 0.9rem;
            z-index: 1000;
            animation: slideInUp 0.5s ease;
        ">
            <strong>Navigation Tips:</strong><br>
            • Use arrow keys ← → to navigate<br>
            • Swipe left/right on mobile<br>
            • Press spacebar for next page
        </div>
    `;
    
    document.body.appendChild(tips);
    
    setTimeout(() => {
        tips.style.opacity = '0';
        setTimeout(() => {
            tips.remove();
        }, 300);
    }, 5000);
}

// Add CSS animations
const navigationStyles = document.createElement('style');
navigationStyles.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-btn {
        transition: all 0.3s ease;
    }
    
    .nav-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }
    
    .page-content {
        transition: all 0.5s ease;
    }
    
    .quote-box {
        transform: scale(1);
        transition: all 0.3s ease;
    }
    
    .quote-box:hover {
        transform: scale(1.02);
        box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
`;
document.head.appendChild(navigationStyles);