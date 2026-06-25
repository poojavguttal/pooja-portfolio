import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(req) {
  const { rating, name, message } = await req.json()

  const stars = rating ? '★'.repeat(rating) + '☆'.repeat(5 - rating) : 'No rating given'

  if (process.env.RESEND_API_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Reviews <onboarding@resend.dev>',
        to: ['poojaguttal123@gmail.com'],
        subject: `${stars} New portfolio review from ${name || 'Anonymous'}`,
        text: `Rating: ${stars} (${rating}/5)\nFrom: ${name || 'Anonymous'}\n\nMessage:\n${message || '(no message)'}`,
      }),
    })
  }

  return NextResponse.json({ ok: true })
}
