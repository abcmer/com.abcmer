import ExperienceTimeline from "@/components/ExperienceTimeline";
import AnimationInit from "@/components/AnimationInit";
import ScrollProgress from "@/components/ScrollProgress";

type Skill = { name: string; logo?: string; whiteBg?: boolean; circleCrop?: boolean; cropLeft?: boolean; circleClip?: boolean };

const skillCategories: { label: string; skills: Skill[] }[] = [
  {
    label: "GenAI",
    skills: [
      { name: "OpenAI", logo: "/static/logos/skills/openai.png" },
      { name: "Claude Code", logo: "/static/logos/skills/anthropic.png", whiteBg: true },
      { name: "Cursor", logo: "/static/logos/skills/cursor.png", whiteBg: true },
      { name: "Co-Pilot", logo: "https://img.icons8.com/fluent/1200/github-copilot.jpg", whiteBg: true },
      { name: "LangChain", logo: "/static/logos/skills/langchain.png", whiteBg: true },
    ],
  },
  {
    label: "Languages",
    skills: [
      { name: "Python", logo: "/static/logos/python.png", circleCrop: true },
      { name: "JavaScript", logo: "/static/logos/javascript.jpeg", circleClip: true },
      { name: "Java", logo: "https://icon2.cleanpng.com/20180404/hgq/avbgi11vf.webp", circleCrop: true },

    ],
  },
  {
    label: "Cloud",
    skills: [
      { name: "AWS", logo: "/static/logos/skills/aws.svg" },
      { name: "Azure", logo: "/static/logos/skills/azure.svg" },
      { name: "GCP", logo: "https://brandlogos.net/wp-content/uploads/2022/07/google_cloud-logo_brandlogos.net_qxnsy-512x512.png" },
      { name: "Terraform", logo: "https://img.icons8.com/color/1200/terraform.jpg", circleCrop: true },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "ReactJS", logo: "/static/logos/react.png", circleCrop: true },
      { name: "NextJS", logo: "https://avatars.githubusercontent.com/u/126103961?s=200&v=4", circleCrop: true },
      { name: "D3.js", logo: "https://i0.wp.com/ahex.co/wp-content/uploads/2022/06/d3.png?fit=400%2C400&ssl=1", circleCrop: true },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "REST", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU3XQkdl_6eg7k72OlY3JcGjaIAu0Vfa6Gdw&s", circleCrop: true },
      { name: "GraphQL", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeefbmS16N_Nw0jZSh3aIfVJg7Pz9CLqcnCA&s", circleCrop: true },

      { name: "NextJS", logo: "https://avatars.githubusercontent.com/u/126103961?s=200&v=4", circleCrop: true },
    ],
  },
  {
    label: "CI/CD",
    skills: [
      { name: "GitHub", logo: "/static/logos/github.png", circleCrop: true },
      { name: "GitLab", logo: "/static/logos/skills/gitlab.svg" },
      { name: "Jenkins", logo: "https://1000logos.net/wp-content/uploads/2024/09/Jenkins-Emblem.png", circleCrop: true },
      { name: "Azure Pipelines", logo: "https://devblogs.microsoft.com/visualstudio/wp-content/uploads/sites/4/2018/12/vsonline_215.png", circleCrop: true },
    ],
  },
  {
    label: "Containers",
    skills: [
      { name: "Kubernetes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/3840px-Kubernetes_logo_without_workmark.svg.png", circleCrop: true },
      { name: "Docker", logo: "/static/logos/docker.png" },
      { name: "ECS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZvaaVIplwx8vguSp3dxhc7TVjgFwIqR-kA&s", circleCrop: true },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "Postgres", logo: "/static/logos/postgres.png", circleCrop: true },
      { name: "MongoDB", logo: "/static/logos/mongo.png", circleCrop: true },
      { name: "MySQL", logo: "/static/logos/mysql.png", circleCrop: true },
      { name: "Redis", logo: "/static/logos/skills/redis.png", circleCrop: true },
    ],
  },
  {
    label: "Data",
    skills: [
      { name: "Pandas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/500px-Pandas_logo.svg.png", cropLeft: true, whiteBg: true },
      { name: "NumPy", logo: "https://raw.githubusercontent.com/numpy/numpy/main/branding/logo/logomark/numpylogoicon.svg" },
      { name: "SQL", logo: "https://www.clipartmax.com/png/middle/275-2753287_sql-is-a-query-language-used-to-communicate-with-databases-sql-language.png", cropLeft: true, circleCrop: true },
      { name: "Spark", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYjJum800-sDfZz-8yznUui_7lUYzeoFOcg&s", circleCrop: true },
    ],
  },
];

const certifications = [
  { name: "Azure Fundamentals", year: "2023", icon: "☁", imgSrc: "/static/logos/skills/azure.svg" },
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
            Senior AI Product Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Tech Lead&nbsp;&nbsp;·&nbsp;&nbsp;Chicago
          </p>
          <ScrollProgress />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-copy" data-reveal>
            <p>
              I&apos;m a full-stack AI product engineer with a business background, holding finance and information systems degrees from Indiana University&apos;s Kelley School of Business and 13 years building software at PwC, Capital One, and McKinsey. Most recently I led a team of 10 building an AI-powered performance evaluation platform used by McKinsey&apos;s senior partners.
            </p>
            <p>
              My business background, combined with early years in the food industry as a server and pizza delivery driver, gives me a natural focus on the customer and the business value of what I build. It makes me a more effective technical leader, one who can translate between what the business needs, what users want, and what engineering can deliver.
            </p>
            <p>
              Outside of work I&apos;m a husband and father of three. We love family car camping trips in the summer to regional state parks, and look forward to vistiting more National Parks when the kids get a little older. I exercise my competitive drive through basketball and running, and my creative side playing keyboard with local musicians at open mic nights around Oak Park, IL.
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
                    <span
                      className="skill-tag"
                      key={s.name}
                      data-tooltip={s.name}
                      tabIndex={0}
                    >
                      {s.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={s.logo} alt={s.name} className={`skill-tag-logo${s.whiteBg ? " skill-tag-logo--white-bg" : ""}${s.circleCrop ? " skill-tag-logo--circle-crop" : ""}${s.cropLeft ? " skill-tag-logo--crop-left" : ""}${s.circleClip ? " skill-tag-logo--circle-clip" : ""}`} />
                      ) : (
                        <svg className="skill-tag-placeholder" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <text x="20" y="18" textAnchor="middle" fontFamily="monospace" fontSize="14" fill="currentColor">&lt;/&gt;</text>
                        </svg>
                      )}
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
                    src="https://theshopindy.com/cdn/shop/files/iu_logo_sticker_grande.png?v=1726596666"
                    alt="Indiana University logo"
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
                  href="https://drive.google.com/file/d/1YYjBHRUmOd6hnl23_AdcCBHgLyH73mLu/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Resume
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
