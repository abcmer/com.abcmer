const EXPERIENCES = [
  {
    company: 'McKinsey & Company',
    role: 'Senior Engineer I (Jul 2022) → Senior Engineer II (Jan 2025)',
    date: 'Jul 2022 — Present',
    bullets: [
      {
        label: 'GenAI Product & Technology',
        text: 'Technical lead of 10-person team developing GenAI web application revolutionalizing internal performance reviews of a 40k employee, multi-national consulting firm. Scaled and delivered AI driven features such as multi-language call transcriptions, diligence interview synthesis, evidence/quote finder, and AI safety guardrails to 2.5k McKinsey firm partners. Integrating AI in all steps of the SDLC using the latest tools available (Figma Make, Jira MCP, Github Co-Pilot, Cursor, Claude Code, StageHand).',
      },
      {
        label: 'Cloud By McKinsey',
        text: 'Built a framework for cloud (AWS/Azure) application infrastructure and CI/CD pipelines, eliminating boilerplate for networking, DNS, logging, monitoring, secrets management, auto-scaling, data backups, etc. Reduced time to production while minimizing misconfiguration risks, enhancing efficiency and reliability for client delivery teams.',
      },
    ],
  },
  {
    company: 'Capital One',
    role: 'Senior Software Engineer',
    date: 'Oct 2021 — Jul 2022',
    bullets: [
      {
        label: 'Card Tech Rewards',
        text: "Led development and deployment of Menard's private card rewards redemption portal, meeting critical year-end deadline. Led team in planning and execution of two resiliency testing events, validating the failover capabilities of multiple microservices to an alternate AWS region within established RTO/RPO parameters.",
      },
    ],
  },
  {
    company: 'PricewaterhouseCoopers',
    role: 'Data Analyst (Jul 2013) → Software Engineer (Jul 2016) → Senior Software Engineer (Jul 2019)',
    date: 'Jul 2013 — Oct 2021',
    bullets: [
      {
        label: 'Emerging Technology Lab',
        text: 'Led development of interactive demo catalog, consisting of 25+ emerging tech prototypes showcasing the work of the lab in areas of AI/ML, Blockchain, AR/VR, 3D printing, Robotics. Designed, developed and deployed virtual-coffee pairing service for 150+ users during Covid. Led integration of Venmo/PayPal for Streetwise, a Chicago non-profit company, streamlining mobile donation process.',
      },
      {
        label: 'Assurance Innovation Team',
        text: 'Built core components of a big-data platform enabling ingestion, transformation, and analysis of billions of financial records for Fortune 500 audit clients.',
      },
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="timeline">
      {EXPERIENCES.map((exp, i) => (
        <div
          key={exp.company}
          className="timeline-item"
          data-reveal
          data-delay={String(i + 1)}
        >
          <div className="timeline-dot" />

          <div className="timeline-header">
            <div className="timeline-meta">
              <div className="timeline-meta-left">
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-role">{exp.role}</div>
              </div>
              <div className="timeline-meta-right">
                <div className="timeline-date">{exp.date}</div>
              </div>
            </div>
          </div>

          <ul className="timeline-bullets">
            {exp.bullets.map((bullet) => (
              <li key={bullet.label}>
                <strong>{bullet.label}:</strong> {bullet.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
