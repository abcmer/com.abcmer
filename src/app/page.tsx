import ExperienceTimeline from "@/components/ExperienceTimeline";
import AnimationInit from "@/components/AnimationInit";

const skillCategories = [
  {
    label: "GenAI",
    skills: ["OpenAI", "Claude Code", "Cursor", "Co-Pilot", "RAG", "LangChain", "Bedrock"],
  },
  { label: "Languages", skills: ["Python", "JavaScript", "Java", "Go"] },
  { label: "Cloud", skills: ["AWS", "Azure", "GCP", "Terraform"] },
  { label: "Frontend", skills: ["ReactJS", "NextJS", "D3.js"] },
  { label: "Backend", skills: ["REST", "GraphQL", "Microservices"] },
  { label: "CI/CD", skills: ["GitHub", "GitLab", "Jenkins", "Azure Pipelines"] },
  { label: "Containers", skills: ["Kubernetes", "Docker", "ECS"] },
  { label: "Database", skills: ["Postgres", "MongoDB", "MySQL", "Redis"] },
  { label: "Data", skills: ["Pandas", "NumPy", "SQL", "Spark"] },
];

const certifications = [
  { name: "Azure Fundamentals", year: "2023", icon: "☁", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1920px-Microsoft_Azure.svg.png" },
  { name: "AWS Developer Associate", year: "2022", icon: "⚡", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1920px-Amazon_Web_Services_Logo.svg.png" },
  { name: "AWS Solutions Architect Associate", year: "2022", icon: "⚡", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1920px-Amazon_Web_Services_Logo.svg.png" },
  { name: "HashiCorp Terraform Associate", year: "2022", icon: "⬡", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Terraform_Logo.svg/1920px-Terraform_Logo.svg.png" },
  { name: "FinOps Certified Practitioner", year: "2022", icon: "◈", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNGIRZjuX-Wc-IIui2msy2fVBXgpX0n-U4A&s" },
  { name: "Kubernetes Developer", year: "2021", icon: "⎈", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1920px-Kubernetes_logo_without_workmark.svg.png" },
];

export default function Home() {
  return (
    <>
      <AnimationInit />

      {/* ── HERO ── */}
      <section className="hero" id="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              "url('/static/halfdome/cloudsrest_sunrise_yosemity_sept_2017.jpg')",
          }}
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1 className="hero-name" data-reveal>
            Adam
            <br />
            <em>Siemer</em>
          </h1>
          <p className="hero-subtitle" data-reveal data-delay="1">
            Senior AI Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Tech Lead&nbsp;&nbsp;·&nbsp;&nbsp;Chicago
          </p>
          <div className="hero-scroll" data-reveal data-delay="2">
            <div className="hero-scroll-line" />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-copy" data-reveal>
            <p>
              I build at the rare intersection of technical depth and business fluency —
              two business degrees, twelve years of engineering — leading AI teams,
              shipping at scale, and turning emerging technology into real, lasting impact.
            </p>
            <p>
              From GenAI product development at McKinsey to cloud resiliency at Capital One
              and emerging tech prototypes at PwC, I&apos;ve worked at the intersection
              of software engineering and strategic impact.
            </p>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="experience" id="experience">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="section-label">Experience</span>
            <h2 className="display-lg">Where I&apos;ve built.</h2>
          </div>
          <ExperienceTimeline />
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="skills" id="skills">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="section-label">Skills</span>
            <h2 className="display-lg">What I use to build it.</h2>
          </div>
          <div className="skills-grid">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.label}
                className="skill-category"
                data-reveal
                data-delay={String((i % 3) + 1)}
              >
                <div className="skill-cat-label">{cat.label}</div>
                <div className="skill-tags">
                  {cat.skills.map((s) => (
                    <span className="skill-tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="certifications" id="certifications">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="section-label">Certifications</span>
            <h2 className="display-lg">Verified expertise.</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((cert, i) => (
              <div
                key={cert.name}
                className="cert-card"
                data-reveal
                data-delay={String((i % 3) + 1)}
              >
                <div className="cert-badge">
                  {cert.imgSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={cert.imgSrc} alt={cert.name} className="cert-badge-img" />
                  ) : (
                    cert.icon
                  )}
                </div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-year">{cert.year}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section className="education" id="education">
        <div className="container">
          <div className="section-header" data-reveal>
            <span className="section-label">Education</span>
            <h2 className="display-lg">Where it started.</h2>
          </div>
          <div className="education-grid">
            {[
              { year: "2013", degree: "M.S. Information Systems" },
              { year: "2012", degree: "B.S. Finance" },
            ].map((item, i) => (
              <div className="education-card" key={item.degree} data-reveal data-delay={String(i + 1)}>
                <div className="education-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Indiana_University_seal.svg/1920px-Indiana_University_seal.svg.png"
                    alt="Indiana University seal"
                    className="education-logo-img"
                  />
                </div>
                <div className="education-info">
                  <div className="education-school">Indiana University</div>
                  <div className="education-sub">Kelley School of Business</div>
                  <div className="education-degree">
                    <span className="degree-year">{item.year}</span>
                    <span className="degree-name">{item.degree}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-left" data-reveal>
              <div className="contact-links">
                <a href="mailto:absiemer22@gmail.com" className="contact-link">
                  absiemer22@gmail.com
                  <span className="contact-link-arrow">→</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/adam-siemer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  LinkedIn
                  <span className="contact-link-arrow">→</span>
                </a>
                <a
                  href="https://s3.amazonaws.com/com.abcmer.media/resume/SiemerAdam_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Download Resume
                  <span className="contact-link-arrow">→</span>
                </a>
              </div>
            </div>
            <div className="contact-right" data-reveal data-delay="2">
              <div className="copyright">© 2026 Adam Siemer</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
