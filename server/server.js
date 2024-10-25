

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const validator = require('email-validator'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, appointmentDate, timeSlot, reasonForVisit } = req.body;

  if (!validator.validate(email)) {
    return res.status(400).send('Invalid email address');
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.RECIPIENT_EMAIL, 
    subject: 'New Appointment Booking',
    text: `You have a new appointment booking from ${firstName} ${lastName}.\n\n` +
          `Email: ${email}\n` +
          `Appointment Date: ${appointmentDate}\n` +
          `Time Slot: ${timeSlot}\n` +
          `Reason for Visit: ${reasonForVisit}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error.message);
    res.status(500).send('Error sending email');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

