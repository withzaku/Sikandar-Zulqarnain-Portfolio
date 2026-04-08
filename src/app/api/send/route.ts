import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { name, email, subject, message } = await request.json();

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: 'sikandarzulqarnain.gil@gmail.com',
            subject: `New Contact Form: ${subject}`,
            replyTo: email,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
