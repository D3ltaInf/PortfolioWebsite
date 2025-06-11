// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // --- In a real application, you would do the following here: ---
    // 1. Validate input (e.g., using a library like Zod)
    // 2. Sanitize input to prevent injection attacks
    // 3. Save to a database (e.g., SQL database via Prisma/Knex)
    // 4. Send an email (e.g., using Nodemailer, SendGrid, Resend)
    // 5. Handle any errors during these steps

    console.log('Received contact form submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // For this example, we just simulate success.
    // In a real scenario, you'd respond based on the outcome of database/email operations.
    return NextResponse.json({ success: true, message: 'Message received successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json({ success: false, message: 'Something went wrong.' }, { status: 500 });
  }
}