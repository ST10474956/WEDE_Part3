// Enquiry Form Validation
function validateEnquiryForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    // Name validation
    if (name === "") {
        alert("Name is required.");
        isValid = false;
    }

    // Email validation
    if (email === "" || !email.includes('@')) {
        alert("Please enter a valid email.");
        isValid = false;
    }

    // Message validation
    if (message === "") {
        alert("Message is required.");
        isValid = false;
    }

    return isValid;
}

// Attach validation to form submission
document.getElementById("enquiryForm").onsubmit = function(event) {
    if (!validateEnquiryForm()) {
        event.preventDefault(); // Prevent form submission if invalid
    }
};
