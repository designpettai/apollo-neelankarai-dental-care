import nodemailer from 'nodemailer';

export async function POST(req) {
  const { firstName, lastName, email, appointmentDate, timeSlot, reasonForVisit } = await req.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS,
    },
  });


  const confirmationTemplate = (firstName, appointmentDate, timeSlot) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          body {
              margin: 0;
              padding: 0;
              background-color: #f9fafb; /* Light gray */
              font-family: Arial, sans-serif;
          }
          .container {
              max-width: 600px;
              margin: auto;
              background: #ffffff; /* White background */
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }
      </style>
  </head>
  <body>
      <div class="container mx-auto my-4 p-6">
          <div class="bg-indigo-600 text-white text-center rounded-t-lg p-4">
              <h1 class="text-2xl font-bold">Your Appointment Confirmation</h1>
          </div>
          <div class="p-6 text-gray-700">
              <p class="mb-4">Hi ${firstName},</p>
              <p class="mb-4">Thanks for booking an appointment! Your appointment has been successfully scheduled for:</p>
              <ul class="list-disc list-inside mb-4">
                  <li><strong>Date:</strong> ${appointmentDate}</li>
                  <li><strong>Time:</strong> ${timeSlot}</li>
              </ul>
              <p class="mb-4">If you have any questions or need to reschedule, feel free to reach out to us.</p>
              <a href="#" class="inline-block bg-indigo-600 text-white rounded py-2 px-4 mt-4 hover:bg-indigo-700 transition">Manage Appointment</a>
          </div>
          <div class="text-center text-gray-500 text-sm p-4">
              <p>&copy; 2024 Appointment System. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
  `;

  const appointmentRequestMailOptions = {
    from: `"Appointment System" <${process.env.EMAIL_USER}>`, // Sender address
    to: `"Appointment System" <${process.env.EMAIL_USER}>`, // Internal notification
    subject: 'New Appointment Request',
    text: `You have a new appointment request from ${firstName} ${lastName}.\n\n` +
      `Email: ${email}\n` +
      `Appointment Date: ${appointmentDate}\n` +
      `Time Slot: ${timeSlot}\n` +
      `Reason for Visit: ${reasonForVisit}`,
  };

  const confirmationMailOptions = {
    from: `"Appointment System" <${process.env.EMAIL_USER}>`, 
    to: email,
    subject: 'Appointment Confirmation',
    html: confirmationTemplate(firstName, appointmentDate, timeSlot),
  };

  try {

    await transporter.sendMail(appointmentRequestMailOptions);
    await transporter.sendMail(confirmationMailOptions);
    
    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}
