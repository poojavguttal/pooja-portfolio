'use client'
import { useEffect } from 'react'
import posthog from 'posthog-js'

export default function PostHogProvider() {
  useEffect(() => {
    const key  = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com'
    if (!key) return
    posthog.init(key, {
      api_host: host,
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
    })
  }, [])

  return null
}
