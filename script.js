document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Simulate sending an email
    formMessage.textContent = 'Thank you for your message, ' + name + '! We will get back to you at ' + email + ' soon.';

    // Prepare data to send to the backend
    const emailData = {
        to: 'blackquillstudios2023@gmail.com',
        subject: 'Contact Form Submission',
        body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    // Replace with actual email sending logic (e.g., using a backend service)
    console.log('Email data:', emailData);

    // Clear the form
    document.getElementById('contactForm').reset();
});
