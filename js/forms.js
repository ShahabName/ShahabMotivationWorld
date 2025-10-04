// Copyright (c) 2025 shahabjini@gmail.com
// 
// All rights reserved. This software and associated documentation files
// are proprietary and confidential. Unauthorized copying, distribution,
// modification, uploading to code repositories (GitHub, GitLab, etc.),
// or sharing in any way is strictly prohibited.
// 
// For licensing Contact: shahabjini@gmail.com

// Forms page JavaScript functionality

// Data arrays for auto-fill
const autoFillData = {
    names: [
        "Alex Johnson",
        "Sarah Williams",
        "Michael Chen",
        "Emily Rodriguez",
        "David Kim",
        "Jessica Martinez",
        "Ryan Patel",
        "Olivia Brown",
        "Daniel Garcia",
        "Sophia Anderson",
        "Mohammed Amin",
        "Mohammed Shahab"
    ],
    emails: [
        "alex.johnson@motivation.com",
        "sarah.williams@inspire.com",
        "michael.chen@success.com",
        "emily.rodriguez@achieve.com",
        "david.kim@goals.com",
        "jessica.martinez@dreams.com",
        "ryan.patel@victory.com",
        "olivia.brown@excellence.com",
        "daniel.garcia@triumph.com",
        "sophia.anderson@summit.com",
        "mohammed.amin@goals.com",
        "mohammed.shahab@mentor.com"
    ],
    passwords: [
        "Inspire@2025",
        "Success#123",
        "Dream$456",
        "Victory!789",
        "Achieve&321",
        "Goals@654",
        "Summit#987",
        "Excel!234",
        "Triumph$567",
        "Aspire&890",
        "IITJEE@2025",
        "Mentor#2025"
    ],
    ages: [25, 28, 32, 35, 27, 30, 29, 34, 26, 31, 17, 45],
    dates: [
        "1995-06-15",
        "1992-03-22",
        "1988-11-10",
        "1985-07-18",
        "1993-09-05",
        "1990-12-30",
        "1991-04-12",
        "1986-08-25",
        "1994-02-14",
        "1989-10-08",
        "2007-08-15",
        "1979-11-20"
    ],
    times: [
        "06:00",
        "07:30",
        "08:00",
        "09:00",
        "05:30",
        "06:30",
        "07:00",
        "08:30",
        "09:30",
        "10:00",
        "05:00",
        "06:15"
    ],
    websites: [
        "https://alexjohnson.com",
        "https://sarahwilliams.net",
        "https://michaelchen.io",
        "https://emilyrodriguez.com",
        "https://davidkim.dev",
        "https://jessicamartinez.com",
        "https://ryanpatel.net",
        "https://oliviabrown.io",
        "https://danielgarcia.com",
        "https://sophiaanderson.dev",
        "https://mohammedamin.edu",
        "https://mohammedshahab.mentor"
    ],
    phones: [
        "+1-555-0101",
        "+1-555-0202",
        "+1-555-0303",
        "+1-555-0404",
        "+1-555-0505",
        "+1-555-0606",
        "+1-555-0707",
        "+1-555-0808",
        "+1-555-0909",
        "+1-555-1010",
        "+91-98765-43210",
        "+91-98765-12345"
    ],
    motivationLevels: [7, 8, 9, 10, 6, 8, 9, 7, 8, 10, 10, 10],
    countries: ["us", "uk", "ca", "au", "in", "us", "ca", "uk", "au", "in", "in", "in"],
    goals: [
        "Launch my own business within the next 12 months and achieve financial independence.",
        "Complete a marathon and improve my overall fitness level by 50% this year.",
        "Learn three new programming languages and build 5 portfolio projects.",
        "Write and publish my first book while inspiring 10,000+ readers globally.",
        "Achieve work-life balance by implementing a 4-day work week schedule.",
        "Build a passive income stream generating $5,000 monthly within 18 months.",
        "Master public speaking by delivering 20 presentations to audiences of 100+.",
        "Develop leadership skills by mentoring 10 junior professionals this year.",
        "Travel to 15 countries while working remotely and documenting the journey.",
        "Create a successful YouTube channel reaching 100K subscribers in 12 months.",
        "Pass 12th in flying colors and clear IIT JEE Mains.",
        "Mentor Amin to help him Pass 12th in flying colors and clear IIT JEE Mains, along with handling all the problems in life gracefully."
    ],
    // Special handling for Mohammed Amin - always select all topics
    specialProfiles: {
        10: { selectAllTopics: true }, // Mohammed Amin
        11: { selectAllTopics: false }  // Mohammed Shahab
    }
};

// Auto Fill Form Function
function autoFillForm() {
    // Get random index (now 0-11 for 12 profiles)
    const randomIndex = Math.floor(Math.random() * 12);
    
    // Fill basic fields
    document.getElementById('fullName').value = autoFillData.names[randomIndex];
    document.getElementById('email').value = autoFillData.emails[randomIndex];
    document.getElementById('password').value = autoFillData.passwords[randomIndex];
    document.getElementById('age').value = autoFillData.ages[randomIndex];
    document.getElementById('birthDate').value = autoFillData.dates[randomIndex];
    document.getElementById('preferredTime').value = autoFillData.times[randomIndex];
    document.getElementById('website').value = autoFillData.websites[randomIndex];
    document.getElementById('phone').value = autoFillData.phones[randomIndex];
    
    // Fill motivation level
    const motivationLevel = autoFillData.motivationLevels[randomIndex];
    document.getElementById('motivation').value = motivationLevel;
    updateMotivationValue(motivationLevel);
    
    // Fill favorite color (random color)
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe', '#43e97b', '#fa709a', '#30cfd0', '#a8edea', '#11998e', '#38ef7d'];
    document.getElementById('favoriteColor').value = colors[randomIndex];
    
    // Fill country
    document.getElementById('country').value = autoFillData.countries[randomIndex];
    
    // Fill motivational topics with random selection
    const interests = document.getElementById('interests');
    const allOptions = Array.from(interests.options);
    
    // Clear all selections first
    allOptions.forEach(option => option.selected = false);
    
    // Check if this profile has special topic selection rules
    const isSpecialProfile = autoFillData.specialProfiles[randomIndex];
    let numToSelect;
    
    if (isSpecialProfile && isSpecialProfile.selectAllTopics) {
        // Mohammed Amin - always select all topics
        numToSelect = allOptions.length;
    } else {
        // Randomly select how many topics to select (2, 3, 4, or all)
        const selectionType = Math.floor(Math.random() * 4);
        
        switch(selectionType) {
            case 0: numToSelect = 2; break;
            case 1: numToSelect = 3; break;
            case 2: numToSelect = 4; break;
            case 3: numToSelect = allOptions.length; break;
        }
    }
    
    // Randomly select the topics
    const shuffled = allOptions.sort(() => 0.5 - Math.random());
    for (let i = 0; i < numToSelect; i++) {
        shuffled[i].selected = true;
    }
    
    // Fill radio buttons randomly
    const radioOptions = ['daily', 'weekly', 'monthly'];
    const randomRadio = radioOptions[Math.floor(Math.random() * radioOptions.length)];
    document.getElementById(randomRadio).checked = true;
    
    // Fill checkboxes with random selection
    const checkboxes = document.querySelectorAll('input[name="subscriptions"]');
    const checkboxArray = Array.from(checkboxes);
    
    // Clear all checkboxes first
    checkboxArray.forEach(cb => cb.checked = false);
    
    // Randomly select how many checkboxes to check (1, 2, or all)
    const checkboxSelectionType = Math.floor(Math.random() * 3);
    let numCheckboxes;
    
    switch(checkboxSelectionType) {
        case 0: numCheckboxes = 1; break;
        case 1: numCheckboxes = 2; break;
        case 2: numCheckboxes = checkboxArray.length; break;
    }
    
    // Randomly select the checkboxes
    const shuffledCheckboxes = checkboxArray.sort(() => 0.5 - Math.random());
    for (let i = 0; i < numCheckboxes; i++) {
        shuffledCheckboxes[i].checked = true;
    }
    
    // Fill goals textarea with SMART goal info and random goal
    const randomGoal = autoFillData.goals[randomIndex];
    const smartGoalInfo = `SMART Goal Framework: Specific, Measurable, Achievable, Relevant, Time-bound

My Goal: ${randomGoal}`;
    
    document.getElementById('goals').value = smartGoalInfo;
    
    // Skip profile picture (file input) as requested
    
    // Show success message
    const form = document.querySelector('form');
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Add a subtle animation to indicate form was filled
    const formContainer = document.querySelector('.form-container');
    formContainer.style.animation = 'pulse 0.5s ease-in-out';
    setTimeout(() => {
        formContainer.style.animation = '';
    }, 500);
}

// Update motivation level display
function updateMotivationValue(value) {
    document.getElementById('motivationValue').textContent = value;
    
    // Change color based on value
    const valueSpan = document.getElementById('motivationValue');
    if (value >= 8) {
        valueSpan.style.color = '#28a745';
        valueSpan.style.fontWeight = 'bold';
    } else if (value >= 5) {
        valueSpan.style.color = '#ffc107';
        valueSpan.style.fontWeight = 'normal';
    } else {
        valueSpan.style.color = '#dc3545';
        valueSpan.style.fontWeight = 'normal';
    }
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {};
    
    // Collect all form data
    for (let [key, value] of formData.entries()) {
        if (data[key]) {
            // Handle multiple values (like checkboxes)
            if (Array.isArray(data[key])) {
                data[key].push(value);
            } else {
                data[key] = [data[key], value];
            }
        } else {
            data[key] = value;
        }
    }
    
    // Display success message
    const resultDiv = document.getElementById('formResult');
    const dataDiv = document.getElementById('submittedData');
    
    let dataHtml = '<h4>Submitted Information:</h4><ul>';
    
    for (let [key, value] of Object.entries(data)) {
        if (key === 'formSource') continue; // Skip hidden field
        
        let displayKey = key.charAt(0).toUpperCase() + key.slice(1);
        displayKey = displayKey.replace(/([A-Z])/g, ' $1').trim();
        
        if (Array.isArray(value)) {
            dataHtml += `<li><strong>${displayKey}:</strong> ${value.join(', ')}</li>`;
        } else {
            dataHtml += `<li><strong>${displayKey}:</strong> ${value}</li>`;
        }
    }
    
    dataHtml += '</ul>';
    dataDiv.innerHTML = dataHtml;
    
    resultDiv.classList.remove('hidden');
    resultDiv.scrollIntoView({ behavior: 'smooth' });
    
    // Add celebration animation
    confetti();
    
    // Show success alert for 30 seconds
    showSuccessAlert();
}

// Show success alert that auto-dismisses after 30 seconds
function showSuccessAlert() {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.id = 'success-alert';
    alertDiv.className = 'success-alert';
    alertDiv.innerHTML = `
        <div class="success-alert-content">
            <i class="fas fa-check-circle"></i>
            <div class="alert-text">
                <strong>Success!</strong>
                <p>Your form has been submitted successfully!</p>
            </div>
            <button class="alert-close" onclick="closeSuccessAlert()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="alert-progress-bar"></div>
    `;
    
    document.body.appendChild(alertDiv);
    
    // Trigger animation
    setTimeout(() => {
        alertDiv.classList.add('show');
    }, 10);
    
    // Start progress bar animation
    const progressBar = alertDiv.querySelector('.alert-progress-bar');
    progressBar.style.animation = 'progressBarAnimation 30s linear forwards';
    
    // Auto-dismiss after 30 seconds
    const dismissTimeout = setTimeout(() => {
        closeSuccessAlert();
    }, 30000);
    
    // Store timeout ID for manual close
    alertDiv.dataset.timeoutId = dismissTimeout;
}

// Close success alert
function closeSuccessAlert() {
    const alertDiv = document.getElementById('success-alert');
    if (alertDiv) {
        // Clear the timeout if manually closed
        if (alertDiv.dataset.timeoutId) {
            clearTimeout(parseInt(alertDiv.dataset.timeoutId));
        }
        
        alertDiv.classList.remove('show');
        setTimeout(() => {
            alertDiv.remove();
        }, 300);
    }
}

// Simple confetti animation
function confetti() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}vw;
            z-index: 1000;
            border-radius: 50%;
        `;
        
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.5, 0, 0.5, 1)'
        });
        
        animation.addEventListener('finish', () => {
            confetti.remove();
        });
    }
}

// Form validation and interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add real-time validation
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateField(this);
        });
        
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
    
    // Initialize motivation level display
    const motivationRange = document.getElementById('motivation');
    if (motivationRange) {
        updateMotivationValue(motivationRange.value);
    }
});

// Field validation function
function validateField(field) {
    const isValid = field.checkValidity();
    
    // Remove existing validation classes
    field.classList.remove('valid', 'invalid');
    
    // Add appropriate class based on validation
    if (field.value.trim() !== '') {
        if (isValid) {
            field.classList.add('valid');
        } else {
            field.classList.add('invalid');
        }
    }
}

// Add CSS for validation styles
const validationStyle = document.createElement('style');
validationStyle.textContent = `
    .form-group input.valid,
    .form-group select.valid,
    .form-group textarea.valid {
        border-color: #28a745;
        box-shadow: 0 0 5px rgba(40, 167, 69, 0.3);
    }
    
    .form-group input.invalid,
    .form-group select.invalid,
    .form-group textarea.invalid {
        border-color: #dc3545;
        box-shadow: 0 0 5px rgba(220, 53, 69, 0.3);
    }
    
    .form-group small {
        color: #6c757d;
        font-size: 0.875rem;
        margin-top: 5px;
        display: block;
    }
    
    .detail-item {
        margin-bottom: 10px;
        padding: 8px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 5px;
    }
    
    .detail-item strong {
        color: #667eea;
        display: inline-block;
        width: 120px;
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
    
    /* Success Alert Styles */
    .success-alert {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        min-width: 350px;
        max-width: 450px;
        transform: translateX(500px);
        opacity: 0;
        transition: all 0.3s ease-out;
        overflow: hidden;
    }
    
    .success-alert.show {
        transform: translateX(0);
        opacity: 1;
    }
    
    .success-alert-content {
        display: flex;
        align-items: center;
        padding: 20px;
        gap: 15px;
    }
    
    .success-alert i.fa-check-circle {
        font-size: 40px;
        color: white;
        flex-shrink: 0;
    }
    
    .alert-text {
        flex: 1;
    }
    
    .alert-text strong {
        display: block;
        font-size: 18px;
        margin-bottom: 5px;
    }
    
    .alert-text p {
        margin: 0;
        font-size: 14px;
        opacity: 0.9;
    }
    
    .alert-close {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        flex-shrink: 0;
    }
    
    .alert-close:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: scale(1.1);
    }
    
    .alert-progress-bar {
        height: 4px;
        background: rgba(255, 255, 255, 0.3);
        width: 100%;
    }
    
    @keyframes progressBarAnimation {
        from {
            width: 100%;
            background: rgba(255, 255, 255, 0.8);
        }
        to {
            width: 0%;
            background: rgba(255, 255, 255, 0.3);
        }
    }
    
    /* Mobile responsive */
    @media (max-width: 768px) {
        .success-alert {
            right: 10px;
            left: 10px;
            min-width: auto;
            max-width: none;
        }
    }
`;
document.head.appendChild(validationStyle);