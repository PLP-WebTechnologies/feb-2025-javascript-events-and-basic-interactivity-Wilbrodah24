 Interactivity JavaScript Events Assignment



 index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive JavaScript Playground</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>JavaScript Event Playground</h1>
        
        <!-- Event Handling Section -->
        <section class="event-section">
            <h2>Event Handling </h2>
            
            <div class="event-box">
                <button id="clickButton" class="event-button">Click Me!</button>
                <p id="clickOutput">Button not clicked yet</p>
            </div>
            
            <div class="event-box hover-box">
                <p>Hover over me!</p>
                <div id="hoverEffect" class="hover-effect"></div>
            </div>
            
            <div class="event-box">
                <p>Press any key to see the magic:</p>
                <div id="keyOutput" class="key-output">Waiting for keypress...</div>
            </div>
            
            <div class="event-box secret-box">
                <p>Double click or long press for a secret!</p>
                <div id="secretOutput" class="secret-output"></div>
            </div>
        </section>
        
        <!-- Interactive Elements Section -->
        <section class="interactive-section">
            <h2>Interactive Elements 🎮</h2>
            
            <div class="interactive-box">
                <button id="colorChanger" class="color-button">Change My Color</button>
            </div>
            
            <div class="interactive-box">
                <div class="image-gallery">
                    <img id="galleryImage" src="https://picsum.photos/id/10/400/300" alt="Gallery image">
                    <div class="gallery-controls">
                        <button id="prevBtn">Previous</button>
                        <button id="nextBtn">Next</button>
                    </div>
                </div>
            </div>
            
            <div class="interactive-box">
                <div class="tabs">
                    <div class="tab-buttons">
                        <button class="tab-button active" data-tab="tab1">Tab 1</button>
                        <button class="tab-button" data-tab="tab2">Tab 2</button>
                        <button class="tab-button" data-tab="tab3">Tab 3</button>
                    </div>
                    <div class="tab-content">
                        <div id="tab1" class="tab-pane active">
                            <h3>Content for Tab 1</h3>
                            <p>This is the first tab content. Pretty cool, right?</p>
                        </div>
                        <div id="tab2" class="tab-pane">
                            <h3>Content for Tab 2</h3>
                            <p>Second tab here! You discovered me!</p>
                        </div>
                        <div id="tab3" class="tab-pane">
                            <h3>Content for Tab 3</h3>
                            <p>Final tab content. You've explored them all!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Form Validation Section -->
        <section class="form-section">
            <h2>Form Validation</h2>
            
            <form id="validationForm" class="validation-form">
                <div class="form-group">
                    <label for="name">Name (required):</label>
                    <input type="text" id="name" name="name">
                    <div id="nameError" class="error-message"></div>
                </div>
                
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email">
                    <div id="emailError" class="error-message"></div>
                </div>
                
                <div class="form-group">
                    <label for="password">Password (min 8 chars):</label>
                    <input type="password" id="password" name="password">
                    <div id="passwordError" class="error-message"></div>
                    <div id="passwordStrength" class="strength-meter">
                        <div class="strength-bar"></div>
                    </div>
                </div>
                
                <button type="submit" class="submit-button">Submit</button>
            </form>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

style.css
```css
/* Base Styles */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    background-color: blue;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1, h2, h3 {
    color: #2c3e50;
}

/* Event Section Styles */
.event-section, .interactive-section, .form-section {
    margin-bottom: 40px;
    padding: 20px;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.event-box, .interactive-box {
    margin: 20px 0;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: white;
}

.event-button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.event-button:hover {
    background-color: #2980b9;
}

.hover-box {
    cursor: pointer;
}

.hover-effect {
    width: 100%;
    height: 100px;
    background-color: #e74c3c;
    transition: all 0.3s ease;
    border-radius: 5px;
    margin-top: 10px;
}

.hover-box:hover .hover-effect {
    background-color: #c0392b;
    transform: scale(1.02);
}

.key-output {
    padding: 10px;
    background-color: #2ecc71;
    color: white;
    border-radius: 5px;
    min-height: 30px;
}

.secret-box {
    position: relative;
    overflow: hidden;
}

.secret-output {
    font-size: 24px;
    text-align: center;
    padding: 20px;
    transition: all 0.5s;
}

/* Interactive Elements Styles */
.color-button {
    padding: 10px 20px;
    background-color: #9b59b6;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s;
}

.image-gallery {
    text-align: center;
}

.image-gallery img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
}

.image-gallery img:hover {
    transform: scale(1.02);
}

.gallery-controls {
    margin-top: 10px;
}

.gallery-controls button {
    padding: 8px 15px;
    margin: 0 5px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

/* Tabs Styles */
.tabs {
    margin-top: 20px;
}

.tab-buttons {
    display: flex;
    border-bottom: 1px solid #ddd;
}

.tab-button {
    padding: 10px 20px;
    background-color: #f1f1f1;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.tab-button:hover {
    background-color: #ddd;
}

.tab-button.active {
    background-color: #3498db;
    color: white;
}

.tab-content {
    padding: 20px;
    border: 1px solid #ddd;
    border-top: none;
    background-color: white;
}

.tab-pane {
    display: none;
}

.tab-pane.active {
    display: block;
    animation: fadeIn 0.5s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Form Styles */
.validation-form {
    max-width: 500px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

.form-group input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}

.error-message {
    color: #e74c3c;
    font-size: 16px;
    margin-top: 5px;
    min-height: 20px;
}

.submit-button {
    padding: 12px 25px;
    background-color: #2ecc71;
    color: red;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #27ae60;
}

.strength-meter {
    height: 5px;
    background-color: #ecf0f1;
    margin-top: 12px;
    border-radius: 3px;
    overflow: hidden;
}

.strength-bar {
    height: 100%;
    width: 0;
    background-color: transparent;
    transition: width 0.3s, background-color 0.3s;
}

/* Responsive Design */
@media (max-width: 760px) {
    .container {
        padding: 10px;
    }
    
    .event-section, .interactive-section, .form-section {
        padding: 15px;
    }
}
```

script.js
```javascript
// Event Handling Section

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
```







