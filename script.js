
// Button click event
const clickButton = document.getElementById('clickButton');
const clickOutput = document.getElementById('clickOutput');

clickButton.addEventListener('click', () => {
    clickOutput.textContent = 'Button was clicked!';
    clickOutput.style.color = '#2ecc71';
    
    // Reset after 2 seconds
    setTimeout(() => {
        clickOutput.textContent = 'Button not clicked yet';
        clickOutput.style.color = '';
    }, 2000);
});

// Hover effect
const hoverEffect = document.getElementById('hoverEffect');

hoverEffect.addEventListener('mouseenter', () => {
    hoverEffect.style.transform = 'rotate(5deg)';
    hoverEffect.style.backgroundColor = '#f39c12';
});

hoverEffect.addEventListener('mouseleave', () => {
    hoverEffect.style.transform = '';
    hoverEffect.style.backgroundColor = '#e74c3c';
});

// Keypress detection
const keyOutput = document.getElementById('keyOutput');

document.addEventListener('keydown', (event) => {
    keyOutput.textContent = `You pressed: ${event.key} (Key code: ${event.code})`;
    keyOutput.style.backgroundColor = getRandomColor();
    
    // Add animation
    keyOutput.style.animation = 'none';
    void keyOutput.offsetWidth; // Trigger reflow
    keyOutput.style.animation = 'pulse 0.5s';
});

// Add CSS animation for keypress
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Secret action (double click and long press)
const secretOutput = document.getElementById('secretOutput');
let pressTimer;

secretOutput.addEventListener('dblclick', () => {
    showSecret('Double click detected!');
});

secretOutput.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
        showSecret('Long press detected!');
    }, 1000);
});

secretOutput.addEventListener('mouseup', () => {
    clearTimeout(pressTimer);
});

secretOutput.addEventListener('mouseleave', () => {
    clearTimeout(pressTimer);
});

function showSecret(message) {
    secretOutput.textContent = message;
    secretOutput.style.fontSize = '32px';
    secretOutput.style.color = getRandomColor();
    
    // Add confetti effect
    createConfetti();
    
    // Reset after 3 seconds
    setTimeout(() => {
        secretOutput.textContent = '🤐';
        secretOutput.style.fontSize = '';
        secretOutput.style.color = '';
    }, 3000);
}

// Interactive Elements Section

// Button that changes text and color
const colorChanger = document.getElementById('colorChanger');
let colorIndex = 0;
const colors = ['#9b59b6', '#3498db', '#2ecc71', '#e74c3c', '#f39c12'];

colorChanger.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    colorChanger.style.backgroundColor = colors[colorIndex];
    colorChanger.textContent = `Color Changed! (${colorIndex + 1}/${colors.length})`;
    
    // Reset text after 1 second
    setTimeout(() => {
        colorChanger.textContent = 'Change My Color';
    }, 1000);
});

// Image gallery
const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const images = [
    'https://picsum.photos/id/10/400/300',
    'https://picsum.photos/id/11/400/300',
    'https://picsum.photos/id/12/400/300',
    'https://picsum.photos/id/13/400/300',
    'https://picsum.photos/id/14/400/300'
];
let currentImageIndex = 0;

function updateGalleryImage() {
    galleryImage.src = images[currentImageIndex];
    galleryImage.alt = `Gallery image ${currentImageIndex + 1}`;
    
    // Add fade effect
    galleryImage.style.opacity = 0;
    setTimeout(() => {
        galleryImage.style.opacity = 1;
    }, 100);
}

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGalleryImage();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGalleryImage();
});

// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Update active tab button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Update active tab pane
        tabPanes.forEach(pane => pane.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
    });
});

// Form Validation Section
const validationForm = document.getElementById('validationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const strengthBar = document.querySelector('.strength-bar');

// Real-time validation
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
    } else {
        nameError.textContent = '';
    }
});

emailInput.addEventListener('input', () => {
    if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email';
    } else {
        emailError.textContent = '';
    }
});

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    
    // Check length
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
    } else {
        passwordError.textContent = '';
    }
    
    // Update strength meter
    updateStrengthMeter(password);
});

// Form submission
validationForm.addEventListener('submit', (event) => {
    let isValid = true;
    
    // Validate name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    }
    
    // Validate email
    if (emailInput.value && !isValidEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Validate password
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        isValid = false;
    }
    
    if (!isValid) {
        event.preventDefault();
    } else {
        alert('Form submitted successfully!');
    }
});

// Helper functions
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateStrengthMeter(password) {
    let strength = 0;
    
    // Length contributes to strength
    strength += Math.min(password.length / 2, 10);
    
    // Add points for special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 5;
    
    // Add points for numbers
    if (/\d/.test(password)) strength += 5;
    
    // Add points for mixed case
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 5;
    
    // Cap at 100
    strength = Math.min(strength, 100);
    
    // Update the strength bar
    strengthBar.style.width = `${strength}%`;
    
    // Change color based on strength
    if (strength < 30) {
        strengthBar.style.backgroundColor = '#e74c3c';
    } else if (strength < 70) {
        strengthBar.style.backgroundColor = '#f39c12';
    } else {
        strengthBar.style.backgroundColor = '#2ecc71';
    }
}

// Confetti effect for secret action
function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'absolute';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '1000';
    confettiContainer.style.overflow = 'hidden';
    
    secretOutput.appendChild(confettiContainer);
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.borderRadius = '50%';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.top = '-10px';
        confetti.style.transform = 'rotate(0deg)';
        confetti.style.animation = `fall ${Math.random() * 2 + 1}s linear forwards`;
        
        confettiContainer.appendChild(confetti);
    }
    
    // Add CSS animation for confetti
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes fall {
            to {
                top: 100%;
                transform: rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(confettiStyle);
    
    // Remove after animation completes
    setTimeout(() => {
        confettiContainer.remove();
        confettiStyle.remove();
    }, 3000);
}