import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, subject, message } = body;

		// Validate required fields
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: 'Name, email, and message are required' },
				{ status: 400 }
			);
		}

		// Send email using Resend
		const { data, error } = await resend.emails.send({
			from: 'KhurasanLabs <contact@updates.khurasanlabs.com>',
			to: ['sulemanahmadzai.dev@gmail.com'],
			subject: subject || `Contact Form Submission from ${name}`,
			html: `
				<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #8c45ff;">New Contact Form Submission</h2>
					<div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
						<p><strong>Name:</strong> ${name}</p>
						<p><strong>Email:</strong> ${email}</p>
						${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
					</div>
					<div style="background: #ffffff; padding: 20px; border-radius: 8px; border-left: 4px solid #8c45ff;">
						<h3 style="color: #333; margin-top: 0;">Message:</h3>
						<p style="color: #666; white-space: pre-wrap;">${message}</p>
					</div>
				</div>
			`,
			text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${subject ? `Subject: ${subject}` : ''}

Message:
${message}
			`,
		});

		if (error) {
			console.error('Resend error:', error);
			return NextResponse.json(
				{ error: 'Failed to send email' },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ success: true, message: 'Email sent successfully', id: data?.id },
			{ status: 200 }
		);
	} catch (error) {
		console.error('Contact form error:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
