document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    const emailData = {
        to: 'blackquillstudios2023@gmail.com',
        subject: 'Contact Form Submission',
        body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
    })
    .then(response => response.text())
    .then(data => {
        formMessage.textContent = data;
    })
    .catch(error => {
        formMessage.textContent = 'An error occurred: ' + error.message;
    });

    // Clear the form
    document.getElementById('contactForm').reset();
});
