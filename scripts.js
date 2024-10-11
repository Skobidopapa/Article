let isLoggedIn = false; // Track the login state

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    isLoggedIn = true; // Set the login state to true
    document.getElementById("login-section").style.display = "none"; // Hide the login section
    document.getElementById("article-section").style.display = "block"; // Show the article section
});

// Function to clear the login status and go back to login page
function clearLoginStatus() {
    isLoggedIn = false; // Reset login status
    document.getElementById("login-section").style.display = "flex"; // Show the login section
    document.getElementById("article-section").style.display = "none"; // Hide the article section
}

// Check login status on page load
window.onload = function() {
    if (isLoggedIn) {
        document.getElementById("login-section").style.display = "none"; // Hide login section
        document.getElementById("article-section").style.display = "block"; // Show article section
    } else {
        document.getElementById("login-section").style.display = "flex"; // Show login section
        document.getElementById("article-section").style.display = "none"; // Hide article section
    }
};