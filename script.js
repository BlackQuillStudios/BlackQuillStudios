document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    const emailData = {
        name,
        email,
        message
    };

    fetch('http://localhost:3000/send-email', {
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
