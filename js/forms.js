// Forms page JavaScript functionality

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
`;
document.head.appendChild(validationStyle);