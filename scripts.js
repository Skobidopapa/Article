document.addEventListener('DOMContentLoaded', () => {
    const authModal = document.getElementById('auth-modal');
    const contactModal = document.getElementById('contact-modal');
    const loginBtn = document.getElementById('login-btn');
    const closeAuthBtn = document.querySelector('.close-btn');
    const closeContactBtn = document.querySelector('.close-contact-btn');
    const authTitle = document.getElementById('auth-title');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.createElement('form');

    signupForm.innerHTML = `
        <label for="signup-username">Email:</label>
        <input type="email" id="signup-username" name="signup-username" required>
        <label for="signup-password">Password:</label>
        <input type="password" id="signup-password" name="signup-password" required>
        <button type="submit">Sign Up</button>
    `;
    signupForm.style.display = 'none';
    document.querySelector('.modal-content').appendChild(signupForm);

    loginBtn.addEventListener('click', () => {
        authModal.classList.add('show');
        authTitle.textContent = "Login";
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    closeAuthBtn.addEventListener('click', () => {
        authModal.classList.remove('show');
    });

    closeContactBtn.addEventListener('click', () => {
        contactModal.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === authModal) {
            authModal.classList.remove('show');
        } else if (event.target === contactModal) {
            contactModal.classList.remove('show');
        }
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username === storedUsername && password === storedPassword) {
            alert("Login successful!");
            authModal.classList.remove('show');
        } else {
            alert("Invalid login credentials.");
        }
    });

    document.getElementById('signup-link').addEventListener('click', (e) => {
        e.preventDefault();
        authTitle.textContent = "Sign Up";
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const signupUsername = document.getElementById('signup-username').value.trim();
        const signupPassword = document.getElementById('signup-password').value.trim();

        if (signupUsername && signupPassword) {
            localStorage.setItem('username', signupUsername);
            localStorage.setItem('password', signupPassword);
            alert(`Signup successful for ${signupUsername}!`);
            authModal.classList.remove('show');
            signupForm.reset();
            loginForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    document.getElementById('contact-btn').addEventListener('click', () => {
        contactModal.classList.add('show');
    });
});