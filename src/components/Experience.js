'use client'
import FadeIn from './FadeIn'


const experiences = [
  {
    role: 'Python & AI Engineer',
    company: 'Altumatim',
    period: 'Feb 2026 – May 2026',
    location: 'Birmingham, Michigan',
    bullets: [
      'Engineered a production-grade LLM pipeline on Vertex AI (Gemini 2.5 Flash) for legal filings, enabling 10-stage classification and entity extraction, replacing manual document review at scale.',
      'Designed a structure-aware chunking algorithm for tabular documents, outperforming LangChain recursive splitter by reducing context fragmentation by 35% and achieving 8× faster processing across RAG pipelines — published on arXiv.',
      'Implemented a speaker detection and transcription pipeline for legal deposition videos, achieving 22× real-time processing and enabling speaker-specific evidence retrieval for legal investigation workflows.',
      'Built multi-source ingestion pipelines (Enterprise Slack integration + video processing), implementing data extraction and structuring workflows to power RAG pipelines and enable new features in a legal AI system.',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'UMBC',
    period: 'May 2025 – May 2026',
    location: 'Baltimore, MD',
    bullets: [
      'Processed 50,000+ records across 10 years, using Pandas, NumPy, and SQL to analyze student course-switching behavior patterns.',
      'Built ETL pipeline to clean and normalize multi-schema academic datasets, reducing data inconsistencies by 85% through validation.',
      'Designed Tableau dashboards and analytical reports to visualize enrollment trends, course transitions, and graduation outcomes, enabling data-driven insights for faculty and academic advisors.',
      'Conducted cohort-based and statistical analysis to identify course pathways correlated with 23% higher graduation rates, supporting faster data-driven advising decisions.',
      'Collaborated with stakeholders to translate analytical findings into actionable insights for retention and academic planning initiatives.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Persistent Systems',
    period: 'Aug 2022 – Aug 2024',
    location: 'Bangalore, India',
    bullets: [
      'Led development of a JavaScript (ES6+) browser automation system for the internal Learning & Development team, generating quizzes from multimedia content, reducing manual effort by 75%.',
      'Re-engineered legacy frontend into responsive React/Redux SPAs, reducing page load time by 40% and improving UI responsiveness and maintainability for an enterprise insurance portal.',
      'Developed scalable backend microservices using Spring Boot with JWT-secured REST APIs, implementing CI/CD pipelines for automated build, testing, and deployment, enabling secure data access across distributed services.',
      'Optimized SQL queries on high-traffic endpoints, reducing system downtime by 30% and improving production SaaS platform reliability, while contributing to Agile code reviews to maintain code quality and performance standards.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'L2MRail',
    period: 'Sep 2021 – Jan 2022',
    location: 'Bangalore, India',
    bullets: [
      'Built full-stack features using HTML, JavaScript, and Django for a rail wheel health monitoring system, ingesting real-time sensor data via MQTT-based pub/sub and persisting streaming data into PostgreSQL for monitoring and analysis.',
      'Optimized SQL queries, reducing latency by 50% while handling 20,000+ daily sensor events.',
      'Designed and deployed containerized services on AWS ECS, implementing service discovery and ensuring 99% uptime.',
    ],
  },
  {
    role: 'Python Intern',
    company: 'Gowri Enterprises',
    period: '2021',
    location: 'Bangalore, India',
    bullets: [
      'Developed Python automation scripts to streamline repetitive business workflows and reduce manual processing time.',
      'Performed data extraction, cleaning, and transformation using Pandas and NumPy to support internal reporting pipelines.',
      'Built lightweight data utilities and dashboards to consolidate operational metrics and assist business decision-making.',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-24"
          style={{ color: '#0C0C0C', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical timeline line */}
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px hidden sm:block"
          style={{ background: 'linear-gradient(180deg, #0C0C0C 0%, rgba(12,12,12,0.1) 100%)' }}
        />

        <div className="flex flex-col gap-12 sm:gap-14">
          {experiences.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.1} y={30}>
              <div className="flex gap-6 sm:gap-10">

                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0 mt-1.5">
                  <div
                    className="w-[15px] h-[15px] rounded-full border-2 flex-shrink-0"
                    style={{ background: '#0C0C0C', borderColor: '#0C0C0C' }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pb-2">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3
                        className="font-semibold uppercase tracking-tight leading-tight"
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: '#0C0C0C' }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        className="font-semibold mt-0.5"
                        style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)', color: '#0C0C0C', opacity: 0.65 }}
                      >
                        {exp.company}
                        <span className="font-light mx-2" style={{ opacity: 0.4 }}>·</span>
                        <span className="font-light" style={{ opacity: 0.85 }}>{exp.location}</span>
                      </p>
                    </div>
                    <span
                      className="font-light uppercase tracking-widest flex-shrink-0 mt-0.5"
                      style={{ fontSize: 'clamp(0.65rem, 1.1vw, 0.8rem)', color: '#0C0C0C', opacity: 0.75 }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-2 mt-3">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span className="flex-shrink-0 mt-[7px] w-1 h-1 rounded-full" style={{ background: '#0C0C0C', opacity: 0.35 }} />
                        <p
                          className="font-light leading-relaxed"
                          style={{ fontSize: 'clamp(0.82rem, 1.4vw, 1rem)', color: '#0C0C0C', opacity: 0.65 }}
                        >
                          {b}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
