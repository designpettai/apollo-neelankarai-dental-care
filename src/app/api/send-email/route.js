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
        <title>Appointment Confirmation</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
            <!-- Header -->
            <div style="background-color: #4f46e5; color: white; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; padding: 16px;">
                <h1 style="font-size: 24px; font-weight: bold;">Your Appointment Confirmation</h1>
            </div>

            <div style="padding: 24px; color: #4a5568;">
                <p style="margin-bottom: 16px;">Hi ${firstName},</p>
                <p style="margin-bottom: 16px;">Thanks for booking an appointment! Your appointment has been successfully scheduled for:</p>
                <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 16px;">
                    <li><strong>Date:</strong> ${appointmentDate}</li>
                    <li><strong>Time:</strong> ${timeSlot}</li>
                </ul>
                <p style="margin-bottom: 16px;">If you have any questions or need to reschedule, feel free to reach out to us.</p>
            </div>
            <div style="padding: 24px; background-color: #f8fafc; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                <div style="text-align: center; margin-bottom: 16px;">
                    <div style="margin-bottom: 16px;">
                        <img src="logo.png" alt="Logo" style="height: 50px; width: auto;">
                    </div>
                    <p style="font-weight: bold; font-size: 16px; margin-bottom: 16px;">Contact us</p>
                    <div style="display: flex; justify-content: center; gap: 12px;">
                        <!-- Contact Buttons -->
                        <button onclick="window.location.href = 'tel:+919360901090'" aria-label="Phone" style="padding: 12px; background-color: #1e40af; color: white; border-radius: 50%; cursor: pointer; border: none; transition: background-color 0.3s;">
                            <i class="fa fa-phone-alt" style="font-size: 20px;"></i>
                        </button>
                        <button onclick="window.open('https://wa.me/919360901090', '_blank')" aria-label="WhatsApp" style="padding: 12px; background-color: #10b981; color: white; border-radius: 50%; cursor: pointer; border: none; transition: background-color 0.3s;">
                            <i class="fa fa-whatsapp" style="font-size: 20px;"></i>
                        </button>
                        <button onclick="window.location.href = 'mailto:apollodentalpadur@gmail.com'" aria-label="Email" style="padding: 12px; background-color: #3b82f6; color: white; border-radius: 50%; cursor: pointer; border: none; transition: background-color 0.3s;">
                            <i class="fa fa-envelope" style="font-size: 20px;"></i>
                        </button>
                        <button onclick="window.open('https://www.instagram.com/apollodentalomr/?hl=en', '_blank')" aria-label="Instagram" style="padding: 12px; background-color: #ec4899; color: white; border-radius: 50%; cursor: pointer; border: none; transition: background-color 0.3s;">
                            <i class="fa fa-instagram" style="font-size: 20px;"></i>
                        </button>
                    </div>
                </div>

                <div style="text-align: center; margin-bottom: 16px;">
                    <h2 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Location</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="200" style="border-radius: 8px; border: none;" loading="lazy" title="Apollo Dental Clinic Location"></iframe>
                </div>
            </div>
            <div style="text-align: center; color: #6b7280; font-size: 14px; padding: 16px;">
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
    text: `You have a new appointment request from ${firstName}.\n\n` +
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
