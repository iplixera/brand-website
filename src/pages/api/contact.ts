import type { NextApiRequest, NextApiResponse } from 'next';

type ContactData = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type ResponseData = {
  success: boolean;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, company, service, message } = req.body as ContactData;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
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

    // In a real application, you would send an email or store the data in a database
    // For now, we'll just simulate a successful submission
    console.log('Contact form submission:', { name, email, company, service, message });

    // Simulate a delay to mimic an API call
    setTimeout(() => {
      res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message. We will get back to you soon!' 
      });
    }, 1000);
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'An error occurred while processing your request' 
    });
  }
} 