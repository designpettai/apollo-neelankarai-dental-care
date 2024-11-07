// import nodemailer from 'nodemailer';

// export async function POST(req) {
//   const { firstName, lastName, email, appointmentDate, timeSlot, reasonForVisit } = await req.json();

//   const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });


//   const confirmationTemplate = (firstName, appointmentDate, timeSlot) => `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Appointment Confirmation</title>
// </head>
// <body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: Arial, sans-serif;">
//     <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
//         <!-- Header -->
//         <div style="background-color: #4f46e5; color: white; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; padding: 16px;">
//             <h1 style="font-size: 24px; font-weight: bold;">Your Appointment Confirmation</h1>
//         </div>

//         <div style="padding: 24px; color: #4a5568;">
//             <p style="margin-bottom: 16px;">Hi ${firstName},</p>
//             <p style="margin-bottom: 16px;">Thanks for booking an appointment! Your appointment has been successfully scheduled for:</p>
//             <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 16px;">
//                 <li><strong>Date:</strong> ${appointmentDate}</li>
//                 <li><strong>Time:</strong> ${timeSlot}</li>
//             </ul>
//             <p style="margin-bottom: 16px;">If you have any questions or need to reschedule, feel free to reach out to us.</p>
//         </div>

//         <div style="padding: 24px; background-color: #f8fafc; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
//             <div style="text-align: center; margin-bottom: 16px;">
//                 <p style="font-weight: bold; font-size: 16px; margin-bottom: 16px;">Contact us</p>
//                 <p style="font-size: 16px;">Call us: <strong>+91 9360901090</strong></p>
//                 <p style="font-size: 16px;">Email: <a href="mailto:apollodentalpadur@gmail.com" style="color: #4f46e5;">apollodentalpadur@gmail.com</a></p>
//             </div>
//         </div>

//         <div style="text-align: center; color: #6b7280; font-size: 14px; padding: 16px;">
//             <p>&copy; 2024 Appointment System. All rights reserved.</p>
//         </div>
//     </div>
// </body>
// </html>
//   `;

//   const appointmentRequestMailOptions = {
//     from: `"Appointment System" <${process.env.EMAIL_USER}>`, // Sender address
//     to: `"Appointment System" <${process.env.EMAIL_USER}>`, // Internal notification
//     subject: 'New Appointment Request',
//     text: `You have a new appointment request from ${firstName}.\n\n` +
//       `Email: ${email}\n` +
//       `Appointment Date: ${appointmentDate}\n` +
//       `Time Slot: ${timeSlot}\n` +
//       `Reason for Visit: ${reasonForVisit}`,
//   };

//   const confirmationMailOptions = {
//     from: `"Appointment System" <${process.env.EMAIL_USER}>`,
//     to: email,
//     subject: 'Appointment Confirmation',
//     html: confirmationTemplate(firstName, appointmentDate, timeSlot),
//   };

//   try {

//     await transporter.sendMail(appointmentRequestMailOptions);
//     await transporter.sendMail(confirmationMailOptions);

//     return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
//   }
// }

import nodemailer from 'nodemailer';

export async function POST(req) {
  const { mobileNumber, appointmentDate, timeSlot, reasonForVisit } = await req.json();
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const appointmentRequestMailOptions = {
    from: `"Appointment System" <${process.env.EMAIL_USER}>`, // Sender address
    to: `"Appointment System" <${process.env.EMAIL_USER}>`, // Internal notification
    subject: 'New Appointment Request',
    text: `You have a new appointment request from mobile number: ${mobileNumber}.\n\n` +
      `Preferred Appointment Date: ${appointmentDate}\n` +
      `Time Slot: ${timeSlot}\n` +
      `Reason for Visit: ${reasonForVisit}`,
  };

  try {
    await transporter.sendMail(appointmentRequestMailOptions);

    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}

