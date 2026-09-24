# Pooja Guttal: portfolio

A one-page site built as a swipeable deck: Hello → Work → Projects → Research → Community → Connect.
Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Files

```
pooja-portfolio/
├── index.html        all content: titles, links, sections
├── css/styles.css    colours, fonts, layout, highlighter
├── js/main.js        deck navigation: arrows, keys, swipe, dots, scroll hint
└── assets/
    ├── favicon.svg
    ├── profile.jpg   landing-page photo
    └── logos/        company, community and contact logos
```

## Run it locally

1. Open the folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` → **Open with Live Server**.

You can also double-click `index.html` to open it in a browser.

## Before you publish

- **Resume:** the Connect section links to your resume on Google Drive. To change it, edit that link in `index.html`.
- **Links:** every paper and project link is in `index.html`. Search for `href=` to check them.

## Editing

- **Add a project, paper, or anything else:** copy one `<li>…</li>` block inside that section's list in `index.html`, then change the title, the small label (`item-meta`) and the link.
- **Items without a link** (Work, Community) use `<li class="item">` with no `<a>`.
- **Add a whole new section:** copy a `<section class="card">…</section>` block and give it a new `id`. Add a matching nav link: `<a href="#yourid" data-go="yourid">Name</a>`. The dots and arrows update automatically.
- **Colours:** change the variables at the top of `css/styles.css`. `--hl` is the highlighter yellow. There is a separate dark-mode block right below it.

## How it behaves

- **Desktop:** one card in the centre, with the next card peeking in from the right. Navigation is in the top bar.
- **Tablet and phone:** the top bar becomes progress dots, and each section fills the screen. Swipe left or right to move.
- **Keyboard:** ← and → move between sections. Home and End jump to the first and last.
- **Direct links:** `yoursite.com/#projects` opens straight on Projects.
- **Dark mode:** follows the visitor's system setting.
- **No JavaScript:** everything shows as one normal scrolling page.

## Deploy to Netlify (replaces your current site)

1. Go to app.netlify.com → your existing site (guttalpooja) → **Deploys**.
2. Drag the whole `pooja-portfolio` folder onto the deploy area.
3. The same address, guttalpooja.netlify.app, now shows the new site.
