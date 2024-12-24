import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json(); // Parse the incoming JSON payload
    const { name, email, mobileNumber, message } = body;

    if (!name || !email || !mobileNumber || !message) {
      return new Response(JSON.stringify({ message: 'All fields are required.' }), { status: 400 });
    }

    // Set up nodemailer transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.your-email-provider.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your SMTP username
        pass: process.env.SMTP_PASS, // Your SMTP password
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'your-email@example.com', // Replace with your email
      subject: 'New Contact Form Message',
      text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobileNumber}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), { status: 500 });
  }
}
