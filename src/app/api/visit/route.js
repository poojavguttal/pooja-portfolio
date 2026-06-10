import { NextResponse } from 'next/server'

export async function GET(req) {
  // Get visitor IP
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : null

  const isLocal = !ip || ip === '127.0.0.1' || ip === '::1'

  let city = ''
  let country = ''
  let timezone = 'UTC'
  let timeOfDay = 'day'
  let localTime = ''

  try {
    // On localhost omit IP so ipapi.co auto-detects the machine's public IP
    const geoUrl = isLocal ? 'https://ipapi.co/json/' : `https://ipapi.co/${ip}/json/`
    const geo = await fetch(geoUrl).then(r => r.json())
    city = geo.city || ''
    country = geo.country_name || ''
    timezone = geo.timezone || 'UTC'
  } catch {
    // geo failed, keep defaults
  }

  // Always calculate time of day from timezone
  try {
    const hour = parseInt(
      new Intl.DateTimeFormat('en-US', { timeZone: timezone, hour: 'numeric', hour12: false }).format(new Date())
    )
    localTime = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone, hour: 'numeric', minute: '2-digit', hour12: true,
    }).format(new Date())

    if (hour >= 5 && hour < 12) timeOfDay = 'morning'
    else if (hour >= 12 && hour < 17) timeOfDay = 'afternoon'
    else if (hour >= 17 && hour < 21) timeOfDay = 'evening'
    else timeOfDay = 'night'
  } catch {
    // keep timeOfDay as 'day'
  }

  // Notify Pooja via email (optional — only runs if RESEND_API_KEY is set)
  if (process.env.RESEND_API_KEY && !isLocal) {
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio <onboarding@resend.dev>',
        to: ['poojaguttal123@gmail.com'],
        subject: `👋 Someone from ${city} is viewing your portfolio!`,
        text: `Someone from ${city}, ${country} just visited your portfolio.\n\nTheir local time: ${localTime || 'unknown'}\n\nIP: ${ip}`,
      }),
    }).catch(() => {})
  }

  return NextResponse.json({ city, country, timezone, timeOfDay, localTime, isLocal })
}
