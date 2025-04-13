import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ContactData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type ApiResponse = {
  success: boolean;
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, company, service, message } = req.body as ContactData;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Missing required fields' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }

    // Check if SMTP configuration is set
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP configuration is missing');
      return res.status(500).json({ 
        success: false, 
        message: 'Email service is not configured properly',
        error: 'SMTP configuration is missing'
      });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP connection error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Failed to connect to email server',
        error: error instanceof Error ? error.message : 'Unknown SMTP error'
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Contact Form Submission: ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || 'Not provided'}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 