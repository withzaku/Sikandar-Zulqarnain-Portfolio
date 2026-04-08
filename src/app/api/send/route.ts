import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'All fields are required.' },
                { status: 400 }
            );
        }

        // Create transporter using Gmail SMTP with App Password
        // TODO: Add GMAIL_USER and GMAIL_APP_PASSWORD to your .env.local and Vercel environment variables
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: 'gbzakuyt@gmail.com',
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            html: `
                <div style="font-family: monospace; max-width: 600px; margin: 0 auto; padding: 24px; background: #000; color: #fff; border: 1px solid #0a3320;">
                    <h2 style="color: #00ff66; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 24px;">
                        New Contact Form Submission
                    </h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 8px 0; color: #a3ccb6; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; width: 100px;">Name</td>
                            <td style="padding: 8px 0; color: #fff;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #a3ccb6; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td>
                            <td style="padding: 8px 0; color: #00ff66;"><a href="mailto:${email}" style="color: #00ff66;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #a3ccb6; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Subject</td>
                            <td style="padding: 8px 0; color: #fff;">${subject}</td>
                        </tr>
                    </table>
                    <hr style="border: none; border-top: 1px solid #0a3320; margin: 20px 0;" />
                    <p style="color: #a3ccb6; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Message</p>
                    <p style="color: #fff; line-height: 1.8; white-space: pre-wrap;">${message}</p>
                    <hr style="border: none; border-top: 1px solid #0a3320; margin: 20px 0;" />
                    <p style="color: #0a3320; font-size: 11px;">Sent from sikandar-zulqarnain-portfolio.vercel.app</p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('[Contact API Error]:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}
