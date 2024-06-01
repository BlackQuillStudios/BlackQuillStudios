const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // replace with your email
        pass: 'your-email-password'   // replace with your email password
    }
});

app.post('/send-email', (req, res) => {
    const { to, subject, body } = req.body;
    
    const mailOptions = {
        from: 'your-email@gmail.com',
        to,
        subject,
        text: body
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
