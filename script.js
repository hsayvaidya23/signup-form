document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const dob = document.getElementById('dob');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const dobError = document.getElementById('dobError');
    const formSuccess = document.getElementById('formSuccess');

    form.addEventListener('submit', function(event) {
        let isValid = true;
        emailError.textContent = '';
        passwordError.textContent = '';
        confirmPasswordError.textContent = '';
        dobError.textContent = '';
        formSuccess.textContent = '';

        if (!email.value.includes('@')) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (password.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            isValid = false;
        }

        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        }

        const dobPattern = /^\d{2}-\d{2}-\d{4}$/;
        if (!dobPattern.test(dob.value)) {
            dobError.textContent = 'Please enter a valid date in dd-mm-yyyy format.';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            formSuccess.textContent = 'Form submitted successfully!';
        }
    });
});
