// email-sender.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@gmail.com',
  subject: 'Test Email',
  text: 'Hello from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});