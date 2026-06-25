'use client'
import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'


const decorative = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    className: 'absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.1, x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    className: 'absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]',
    delay: 0.25, x: -80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    className: 'absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]',
    delay: 0.15, x: 80,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    className: 'absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]',
    delay: 0.3, x: 80,
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative 3D images */}
      {decorative.map((img, i) => (
        <FadeIn key={i} delay={img.delay} x={img.x} y={0} duration={0.9} className={img.className} style={{ pointerEvents: 'none' }}>
          <img src={img.src} alt="" style={{ width: '100%' }} />
        </FadeIn>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16 text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-10 sm:gap-12">
          <AnimatedText
            text="With over 2.5 years of experience in software engineering, I have worked on full-stack development, building scalable applications and end-to-end software solutions. My experience spans frontend and backend development, cloud technologies, and system design, enabling me to create reliable and user-focused products. Alongside software engineering, I am passionate about Artificial Intelligence and the development of intelligent systems. I work with Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), AI agents, and modern AI workflows, while exploring how these technologies can be made more reliable and aligned with human needs."
            className="font-medium leading-relaxed max-w-[820px]"
            style={{ color: '#D7E2EA', fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <FadeIn delay={0.3} y={20}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white transition-opacity duration-200 hover:opacity-90"
              style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)', boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset', outline: '2px solid white', outlineOffset: '-3px', textDecoration: 'none' }}
            >
              View Resume
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
