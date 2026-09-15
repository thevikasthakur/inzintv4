import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Delivery is configured through environment variables so no credentials live in the repo:
//   RESEND_API_KEY      API key from https://resend.com (sending domain must be verified)
//   CONTACT_TO_EMAIL    inbox that receives inquiries (default hello@inzint.com)
//   CONTACT_FROM_EMAIL  verified sender, e.g. "Inzint Website <website@inzint.com>"
// Without RESEND_API_KEY the endpoint answers 503 and the form tells the visitor
// to email directly. It never pretends a message was sent.

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'hello@inzint.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Inzint Website <website@inzint.com>';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  service?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: 'invalid_request', message: 'The request body could not be read.' },
      { status: 400 }
    );
  }

  // Bots fill the hidden field; pretend success and drop it.
  if (text(payload.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = text(payload.name, 120);
  const email = text(payload.email, 200);
  const phone = text(payload.phone, 40);
  const companyName = text(payload.company, 160);
  const service = text(payload.service, 60);
  const budget = text(payload.budget, 60);
  const message = text(payload.message, 5000);

  if (name.length < 2) {
    return NextResponse.json(
      { error: 'validation', message: 'Please tell us your name.' },
      { status: 400 }
    );
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: 'validation', message: 'Please enter a valid email address so we can reply.' },
      { status: 400 }
    );
  }
  if (message.length < 10) {
    return NextResponse.json(
      { error: 'validation', message: 'Please add a few words about your project.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set; inquiry not delivered', {
      name,
      email,
      companyName,
    });
    return NextResponse.json(
      {
        error: 'not_configured',
        message: 'Form delivery is not configured. Please email us directly.',
      },
      { status: 503 }
    );
  }

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    companyName && `Company: ${companyName}`,
    service && `Service: ${service}`,
    budget && `Budget: ${budget}`,
    '',
    message,
  ].filter((line): line is string => typeof line === 'string');

  const html = `<p>${lines
    .slice(0, -2)
    .map((line) => escapeHtml(line))
    .join('<br>')}</p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Website inquiry from ${name}${companyName ? ` (${companyName})` : ''}`,
        text: lines.join('\n'),
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      console.error('[contact] email provider rejected the message', response.status, detail);
      return NextResponse.json(
        { error: 'delivery_failed', message: 'We could not send your message right now.' },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error('[contact] email provider unreachable', error);
    return NextResponse.json(
      { error: 'delivery_failed', message: 'We could not send your message right now.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
