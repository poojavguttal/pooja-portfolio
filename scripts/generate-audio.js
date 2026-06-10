// Run once to generate narration audio files:
//   node scripts/generate-audio.js
//
// Requires ELEVENLABS_API_KEY in .env.local
// Output: public/audio/segment-0.mp3 ... segment-4.mp3
// Commit those files — visitors play them for free, no API calls needed.

const fs = require('fs')
const path = require('path')

// Load .env.local
const envFile = path.join(__dirname, '..', '.env.local')
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, 'utf-8').split('\n').forEach(line => {
    const [k, ...v] = line.split('=')
    if (k?.trim()) process.env[k.trim()] = v.join('=').trim()
  })
}

const API_KEY = process.env.ELEVENLABS_API_KEY
if (!API_KEY || API_KEY === 'your_api_key_here') {
  console.error('\n❌  Add your ELEVENLABS_API_KEY to .env.local first\n')
  process.exit(1)
}

// Rachel — warm, clear narrator (free tier default voice)
// Other free options: Bella (EXAVITQu4vr4xnSDxMaL), Matilda (XrExE9yKIg1WjnnlVkGX)
const VOICE_ID = '21m00Tcm4TlvDq8ikWAM'

const segments = [
  {
    file: 'segment-0.mp3',
    text: "Hi, I'm Pooja Guttal. I'm a software engineer and AI researcher passionate about building technology that solves meaningful problems. My work sits at the intersection of artificial intelligence, software engineering, and human-centered design, where I focus on creating systems that are not only innovative but also practical, reliable, and useful in the real world.",
  },
  {
    file: 'segment-1.mp3',
    text: "What excites me most about technology is its ability to amplify human potential. Whether it's helping people make better decisions, access information more effectively, or navigate complex challenges, I believe great technology should make a tangible difference in people's lives.",
  },
  {
    file: 'segment-2.mp3',
    text: "I'm naturally curious and love exploring new ideas, asking difficult questions, and turning concepts into working solutions. I enjoy the process of learning, building, and continuously improving, especially in fast-moving fields like AI where there is always something new to discover.",
  },
  {
    file: 'segment-3.mp3',
    text: "At my core, I'm driven by impact. I want to build products, contribute to research, and collaborate with people who are working on meaningful challenges. The most rewarding part of my journey has never been the technology itself, but the opportunity to use it to create something valuable for others.",
  },
  {
    file: 'segment-4.mp3',
    text: "Thanks for visiting my portfolio. I'm excited to share my work, my research, and the ideas I'm exploring as I continue growing as an engineer and researcher.",
  },
]

const OUT_DIR = path.join(__dirname, '..', 'public', 'audio')
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

async function generate() {
  console.log(`\n🎙  Generating ${segments.length} narration segments...\n`)

  for (let i = 0; i < segments.length; i++) {
    const { file, text } = segments[i]
    process.stdout.write(`  [${i + 1}/${segments.length}] ${file} ... `)

    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.42,
          similarity_boost: 0.80,
          style: 0.45,
          use_speaker_boost: true,
        },
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error(`\n❌  ElevenLabs error: ${err}`)
      process.exit(1)
    }

    const buffer = await res.arrayBuffer()
    fs.writeFileSync(path.join(OUT_DIR, file), Buffer.from(buffer))
    console.log('✓')
  }

  console.log('\n✅  Done! All segments saved to public/audio/')
  console.log('    Commit those files and the voice works forever — no API calls needed at runtime.\n')
}

generate().catch(err => { console.error(err); process.exit(1) })
