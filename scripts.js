// Get modal elements
const authModal = document.getElementById('auth-modal');
const contactModal = document.getElementById('contact-modal');
const loginBtn = document.getElementById('login-btn');
const closeAuthBtn = document.getElementsByClassName('close-btn')[0];
const closeContactBtn = document.getElementsByClassName('close-contact-btn')[0];
const authTitle = document.getElementById('auth-title');
const signupLink = document.getElementById('signup-link');
const loginForm = document.getElementById('login-form');
const signupForm = document.createElement('form'); // Dynamically created signup form

// Add signup form elements dynamically
signupForm.innerHTML = `
    <label for="signup-username">Email:</label>
    <input type="email" id="signup-username" name="signup-username" required>
    <label for="signup-password">Password:</label>
    <input type="password" id="signup-password" name="signup-password" required>
    <button type="submit">Sign Up</button>
`;
document.body.appendChild(signupForm);
signupForm.style.display = 'none';

// Show login modal when login button is clicked
loginBtn.onclick = () => {
    authModal.classList.add('show');
    authTitle.textContent = "Login";
    loginForm.style.display = 'block'; 
    signupForm.style.display = 'none'; 
};

// Close login modal when close button is clicked
closeAuthBtn.onclick = () => {
    authModal.classList.remove('show');
};

// Close login modal if clicking outside of the modal
window.onclick = (event) => {
    if (event.target === authModal) {
        authModal.classList.remove('show');
    } else if (event.target === contactModal) {
        contactModal.classList.remove('show');
    }
};

// Simple login form handling
loginForm.onsubmit = (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials
    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        authModal.classList.remove('show');
    } else {
        alert("Invalid login credentials.");
    }
};

// Handle signup link click
signupLink.onclick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    authTitle.textContent = "Sign Up";
    loginForm.style.display = 'none'; 
    signupForm.style.display = 'block'; 
};

// Simple signup form handling
signupForm.onsubmit = (event) => {
    event.preventDefault();

    const signupUsername = document.getElementById('signup-username').value.trim();
    const signupPassword = document.getElementById('signup-password').value.trim();

    // Validate inputs
    if (signupUsername === "" || signupPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Store credentials in localStorage
    localStorage.setItem('username', signupUsername);
    localStorage.setItem('password', signupPassword);

    alert(`Signup successful for ${signupUsername}!`);
    authModal.classList.remove('show');
    signupForm.reset();
    loginForm.reset();
};

// Show contact modal when "Contact Us" is clicked
document.getElementById('contact-btn').onclick = () => {
    contactModal.classList.add('show');
};

// Close contact modal when close button is clicked
closeContactBtn.onclick = () => {
    contactModal.classList.remove('show');
};

// Close contact modal if clicking outside of the modal
window.onclick = (event) => {
    if (event.target === contactModal) {
        contactModal.classList.remove('show');
    }
};

// Simple contact form handling
const contactForm = document.getElementById('contact-form');
contactForm.onsubmit = (event) => {
    event.preventDefault();

    const contactEmail = document.getElementById('contact-email').value.trim();
    const contactMessage = document.getElementById('contact-message').value.trim();

    // Validate inputs
    if (contactEmail === "" || contactMessage === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Here you can add code to send the message to your server or handle it as needed
    alert(`Message sent! \nEmail: ${contactEmail} \nMessage: ${contactMessage}`);

    // Close the modal after submitting
    contactModal.classList.remove('show');
    contactForm.reset(); // Reset the form fields
};