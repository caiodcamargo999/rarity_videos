import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { aspirations, name, email, whatsapp, locale } = body;

    // Validate required fields
    if (!aspirations || !name || !email || !whatsapp) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service
    // For now, we'll log the data and simulate success
    
    const emailData = {
      to: "businesscarolinadeabreu@gmail.com",
      subject: `Travel & Wellness Consultation Request - ${name}`,
      body: `
New consultation request from ${name}

Aspirations:
${aspirations}

Contact Information:
- Name: ${name}
- Email: ${email}
- WhatsApp: ${whatsapp}

Language: ${locale}

Timestamp: ${new Date().toISOString()}
      `,
    };

    console.log('Email data to be sent:', emailData);

    // TODO: Integrate with email service (SendGrid, EmailJS, etc.)
    // TODO: Create Google Sheets entry
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      data: {
        name,
        email,
        whatsapp,
        aspirations,
        locale,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
