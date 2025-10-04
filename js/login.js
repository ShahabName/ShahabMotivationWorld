// Login page JavaScript functionality

// Demo user credentials
const users = {
    'admin': { password: 'password123', fullName: 'Administrator' },
    'john': { password: 'password123', fullName: 'John Smith' },
    'sarah': { password: 'password123', fullName: 'Sarah Johnson' },
    'alex': { password: 'password123', fullName: 'Alex Rodriguez' },
    // Sports Legends (including 2 famous Indian female sports persons)
    'virat': { password: 'password123', fullName: 'Virat Kohli', profession: '🏏 Cricket Champion' },
    'sindhu': { password: 'password123', fullName: 'P.V. Sindhu', profession: '🏸 Badminton Champion' },
    'mary': { password: 'password123', fullName: 'Mary Kom', profession: '🥊 Boxing Legend' },
    'dhoni': { password: 'password123', fullName: 'MS Dhoni', profession: '🏏 Cricket Captain' },
    'neeraj': { password: 'password123', fullName: 'Neeraj Chopra', profession: '🥇 Olympic Javelin Champion' }
};

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');
    
    // Clear previous error
    errorDiv.classList.add('hidden');
    
    // Validate credentials
    if (users[username] && users[username].password === password) {
        // Successful login
        showDashboard(users[username], username);
        
        // Save login state
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', username);
        localStorage.setItem('userFullName', users[username].fullName);
        localStorage.setItem('userProfession', users[username].profession || '');
        localStorage.setItem('loginTime', Date.now());
    } else {
        // Invalid credentials
        errorDiv.classList.remove('hidden');
        
        // Add shake animation to form
        const loginSection = document.getElementById('loginSection');
        loginSection.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            loginSection.style.animation = '';
        }, 500);
    }
}

// Show dashboard after successful login
function showDashboard(userProfile, username) {
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const topbarUsername = document.getElementById('topbarUsername');
    const memberBadge = document.querySelector('.member-badge');
    
    // Update welcome message with profession if available
    const fullName = typeof userProfile === 'string' ? userProfile : userProfile.fullName;
    const profession = (userProfile && userProfile.profession) ? ` - ${userProfile.profession}` : '';
    welcomeMessage.textContent = `Hello ${fullName}${profession}, Get Motivated!`;
    
    // Update topbar username
    topbarUsername.textContent = fullName;
    
    // Update badge based on user role
    const currentUsername = username || localStorage.getItem('currentUser');
    if (currentUsername === 'admin') {
        memberBadge.innerHTML = '<i class="fas fa-crown"></i> Admin';
        memberBadge.style.background = 'rgba(255, 215, 0, 0.3)';
        memberBadge.style.color = '#ffd700';
        memberBadge.style.borderColor = 'rgba(255, 215, 0, 0.5)';
    } else {
        memberBadge.innerHTML = '<i class="fas fa-shield-alt"></i> Member';
        memberBadge.style.background = 'rgba(255, 215, 0, 0.2)';
        memberBadge.style.color = '#ffd700';
        memberBadge.style.borderColor = 'rgba(255, 215, 0, 0.4)';
    }
    
    // Hide login form and show dashboard
    loginSection.style.opacity = '0';
    setTimeout(() => {
        loginSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
        dashboardSection.style.opacity = '0';
        
        // Scroll to top of page to show dashboard topbar
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        setTimeout(() => {
            dashboardSection.style.opacity = '1';
        }, 100);
        
        // Initialize dashboard
        initializeDashboard();
    }, 300);
}

// Initialize dashboard with data
function initializeDashboard() {
    // Set daily quote
    getNewDailyQuote();
    
    // Update stats
    updateUserStats();
    
    // Add welcome animation
    const dashboardSection = document.getElementById('dashboardSection');
    dashboardSection.style.transform = 'translateY(20px)';
    setTimeout(() => {
        dashboardSection.style.transition = 'all 0.5s ease';
        dashboardSection.style.transform = 'translateY(0)';
    }, 100);
}

// Get new daily quote for dashboard
function getNewDailyQuote() {
    // Use quotes from the main quotes.js file
    const quote = getRandomQuote();
    document.getElementById('dailyQuoteText').textContent = `"${quote.text}"`;
    document.getElementById('dailyQuoteAuthor').textContent = `- ${quote.author}`;
    
    // Update quote count
    let quotesViewed = parseInt(localStorage.getItem('quotesViewed') || '0');
    quotesViewed++;
    localStorage.setItem('quotesViewed', quotesViewed.toString());
    document.getElementById('quotesCount').textContent = quotesViewed;
}

// Update user statistics
function updateUserStats() {
    // Calculate days since first login
    const firstLogin = localStorage.getItem('firstLogin');
    let daysCount = 1;
    
    if (firstLogin) {
        const daysDiff = Math.floor((Date.now() - parseInt(firstLogin)) / (1000 * 60 * 60 * 24));
        daysCount = Math.max(1, daysDiff + 1);
    } else {
        localStorage.setItem('firstLogin', Date.now());
    }
    
    document.getElementById('daysCount').textContent = daysCount;
    
    // Update quotes count
    const quotesViewed = localStorage.getItem('quotesViewed') || '1';
    document.getElementById('quotesCount').textContent = quotesViewed;
}

// Logout function
function logout() {
    // Clear login state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userFullName');
    
    // Show login form and hide dashboard
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    
    dashboardSection.style.opacity = '0';
    setTimeout(() => {
        dashboardSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
        loginSection.style.opacity = '1';
        
        // Clear form
        document.getElementById('loginForm').reset();
        document.getElementById('loginError').classList.add('hidden');
    }, 300);
}

// Check if user is already logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userFullName = localStorage.getItem('userFullName');
    const userProfession = localStorage.getItem('userProfession');
    const currentUser = localStorage.getItem('currentUser');
    
    if (isLoggedIn === 'true' && userFullName) {
        const userProfile = {
            fullName: userFullName,
            profession: userProfession || ''
        };
        showDashboard(userProfile, currentUser);
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    checkLoginStatus();
    
    // Add input animations
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateX(5px)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateX(0)';
        });
    });
    
    // Add enter key support
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !document.getElementById('loginSection').classList.contains('hidden')) {
            document.getElementById('loginForm').dispatchEvent(new Event('submit'));
        }
    });
});

// Add CSS for animations
const loginStyles = document.createElement('style');
loginStyles.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .form-group {
        transition: all 0.3s ease;
    }
    
    .dashboard {
        transition: all 0.3s ease;
    }
    
    .daily-quote-dashboard {
        animation: fadeInUp 0.6s ease 0.3s both;
    }
    
    .feature-card {
        animation: fadeInUp 0.6s ease 0.6s both;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .motivation-section {
        animation: fadeInUp 0.6s ease 0.9s both;
    }
`;
document.head.appendChild(loginStyles);