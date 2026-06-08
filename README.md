# Pooja Guttal — Portfolio

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Deploy to Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --build
```

## 📝 How to Customize

### Add Your Photo
- Place your photo in `/public/photo.jpg`
- In `src/components/Hero.js`, replace the placeholder div with:
```jsx
<img src="/photo.jpg" alt="Pooja Guttal" style={{ width: '280px', height: '380px', borderRadius: '16px', objectFit: 'cover' }} />
```

### Add Your Video
- In `src/components/About.js`, uncomment the YouTube or video option
- Replace `YOUR_VIDEO_ID` with your YouTube video ID

### Add Your Resume
- Place your resume PDF in `/public/resume.pdf`

### Update Content
- **Experience bullets**: `src/components/Experience.js` → look for `// REPLACE` comments
- **Project descriptions**: `src/components/Projects.js` → look for `REPLACE` text
- **About text**: `src/components/About.js` → look for `// REPLACE` comments

## 🎨 Colors
- Primary: `#e11d48` (red)
- Secondary: `#ec4899` (pink)
- Accent: `#fce7f3` (light pink)
- Background: `#fff9f9` (cream)

To change colors, update `tailwind.config.js` and the CSS variables in `src/app/globals.css`
