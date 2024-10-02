// Function to toggle password visibility
function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// Function to validate the password
function validatePassword(password) {
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const digit = /\d/.test(password);
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return uppercase && lowercase && digit && specialCharacter;
}

// Function to validate email format with detailed error messages
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern

    // Check if the email field is empty
    if (!email) {
        return { valid: false, message: 'Email field cannot be empty.' };
    }

    // Check if the email matches the pattern
    if (!emailPattern.test(email)) {
        if (!email.includes('@')) {
            return { valid: false, message: "Email must contain an '@' symbol." };
        }
        if (email.split('@').length > 2) {
            return { valid: false, message: "Email address cannot contain more than one '@' symbol." };
        }
        if (email.split('@')[1] && !email.split('@')[1].includes('.')) {
            return { valid: false, message: "Email domain must include a top-level domain (e.g., .com)." };
        }
        return { valid: false, message: "Please enter a valid email address." };
    }

    return { valid: true }; // Valid email
}

// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('email').value;

    // Clear previous error messages
    document.getElementById('password-error').innerText = '';
    document.getElementById('confirm-password-error').innerText = '';
    document.getElementById('email-error').innerText = '';

    let isValid = true;

    // Check email format
    const emailValidation = validateEmail(email);
    if (!emailValidation.valid) {
        document.getElementById('email-error').innerText = emailValidation.message;
        isValid = false;
    }

    // Check password strength
    if (!validatePassword(password)) {
        document.getElementById('password-error').innerText = 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.';
        isValid = false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').innerText = "Passwords don't match.";
        isValid = false;
    }

    // If valid, submit the form (you may need to add form submission logic)
    if (isValid) {
        console.log('Form submitted successfully!');
        // Here you can add your form submission logic if needed
    }
}

// Add event listener for form submission
document.querySelector('form').addEventListener('submit', validateForm);
