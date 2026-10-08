import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const skills = [
  ['Domain expertise', 'Add your industries, methods and strengths', '✦'],
  ['Product & delivery', 'Planning · collaboration · execution', '◇'],
  ['Automation', 'Add tools and workflows you use', '↻'],
  ['APIs & integration', 'Add platforms, protocols or services', '{}'],
  ['Data & platforms', 'Add databases, cloud or analytics tools', '▤'],
  ['Emerging technology', 'Add AI, research or specialist capabilities', '✧'],
];

const skillExperience = {
  'Domain expertise': 'Describe a relevant example, your role, and the result.',
  'Product & delivery': 'Describe how you plan work, coordinate people, and deliver outcomes.',
  Automation: 'Describe an automation workflow and the problem it solved.',
  'APIs & integration': 'Describe an integration or API project and your contribution.',
  'Data & platforms': 'Describe how you used data or platforms to support a decision or result.',
  'Emerging technology': 'Describe a recent tool or approach and how you applied it.',
};

const projects = [
  {
    number: '01',
    title: 'Project or initiative name',
    tag: 'Project category',
    description: 'Summarize the challenge, your contribution, the approach, and the outcome. Replace this sample with your own project details.',
    metrics: [
      { value: 'XX+', label: 'Add a measurable result' },
      { value: 'XX%', label: 'Add a second result' },
      { value: 'X to Y', label: 'Describe the improvement' },
    ],
  },
  {
    number: '02',
    title: 'Process improvement',
    tag: 'Operations',
    description: 'Describe a process you improved, who it helped, and how you measured the change.',
    metrics: [
      { value: 'XX+', label: 'People or items reached' },
      { value: 'XX%', label: 'Time or quality change' },
      { value: 'X to Y', label: 'Before and after' },
    ],
  },
  {
    number: '03',
    title: 'Technical delivery',
    tag: 'Technology',
    description: 'Describe a technical project, the decisions you made, and its impact.',
    metrics: [
      { value: 'XX+', label: 'Add a measurable result' },
      { value: 'XX%', label: 'Add a second result' },
      { value: 'X to Y', label: 'Describe the improvement' },
    ],
  },
];

const experience = [
  {
    period: '20XX - Present',
    role: 'Your current role',
    company: 'Organization name · City',
    bullets: [
      'Describe a responsibility or achievement.',
      'Describe a project, method, or tool you used.',
      'Describe the outcome or value of your work.',
    ],
  },
  {
    period: '20XX - 20XX',
    role: 'Previous role',
    company: 'Previous organization · City',
    bullets: [
      'Describe a responsibility or achievement.',
      'Describe a project, method, or tool you used.',
      'Describe the outcome or value of your work.',
    ],
  },
];

function App() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [afterMetrics, setAfterMetrics] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const targets = document.querySelectorAll('.ticker, .section, .skill-card, .project-card, .timeline-item, .number-card, .contact');
    root.classList.add('motion-ready');
    targets.forEach((target) => target.classList.add('scroll-reveal'));

    const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' }) : null;
    if (observer) targets.forEach((target) => observer.observe(target));
    else targets.forEach((target) => target.classList.add('in-view'));

    let frame = 0;
    const updateScrollEffects = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        setShowBackToTop(window.scrollY > 480);
        const metricsSection = document.querySelector('.numbers');
        const viewportBottom = window.scrollY + window.innerHeight;
        setAfterMetrics(Boolean(metricsSection && viewportBottom > metricsSection.offsetTop));
        root.style.setProperty('--scroll-progress', maxScroll > 0 ? String(window.scrollY / maxScroll) : '0');
        root.style.setProperty('--hero-parallax-y', `${Math.min(window.scrollY * 0.055, 34)}px`);
      });
    };
    updateScrollEffects();
    window.addEventListener('scroll', updateScrollEffects, { passive: true });
    window.addEventListener('resize', updateScrollEffects);

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateScrollEffects);
      window.removeEventListener('resize', updateScrollEffects);
      root.classList.remove('motion-ready');
      root.style.removeProperty('--scroll-progress');
      root.style.removeProperty('--hero-parallax-y');
    };
  }, []);

  const handlePortraitMove = (event) => {
    if (event.pointerType !== 'mouse') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty('--tilt-x', `${x * 9}deg`);
    event.currentTarget.style.setProperty('--tilt-y', `${y * -9}deg`);
  };

  const resetPortraitTilt = (event) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg');
    event.currentTarget.style.setProperty('--tilt-y', '0deg');
  };

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top">YN<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open site navigation"><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">
            <a href="#about">About</a>
            <a href="#expertise">Expertise</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
        <a className="nav-cta" href="mailto:your.email@example.com">
          <span className="cta-label">Let's talk</span>
          <svg className="mail-icon" aria-hidden="true" viewBox="0 0 20 20"><rect x="2.5" y="4.5" width="15" height="11" rx="2" /><path d="m3.5 6 6.5 5 6.5-5" /></svg>
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">YOUR ROLE · YOUR SPECIALTIES</p>
            <h1>Your name.<br /><em>Your impact.</em></h1>
            <p className="hero-text">Introduce yourself, the work you do, and the people or problems you focus on.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work"><span className="button-label">Explore my work</span><span className="action-icon" aria-hidden="true">↓</span></a>
              <a className="button secondary" href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noreferrer"><span className="button-label">LinkedIn</span></a>
            </div>
          </div>
          <div className="hero-card" onPointerMove={handlePortraitMove} onPointerLeave={resetPortraitTilt}>
            <img className="hero-portrait" src="/profile-placeholder.svg" alt="Portrait placeholder for Your Name" />
            <div className="portrait-overlay"></div>
            <div className="hero-card-label">
              <span>FOCUS</span>
              <strong>Your specialties · Your craft · Your impact</strong>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Areas of expertise">
          <span>YOUR SPECIALTY</span><i>✦</i><span>YOUR INDUSTRY</span><i>✦</i>
          <span>YOUR TOOLS</span><i>✦</i><span>YOUR APPROACH</span><i>✦</i>
          <span>YOUR IMPACT</span>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 / ABOUT</div>
          <div className="about-content">
            <h2>Thoughtful work.<br /><span>Meaningful outcomes.</span></h2>
            <div>
              <p className="lead">Introduce your background, areas of focus, and the experience you bring to your work.</p>
              <p>Share your approach, strengths, and the kinds of outcomes you help create. Keep this introduction concise and personal to your work.</p>
            </div>
          </div>
        </section>

        <section id="expertise" className="section">
          <div className="section-label">02 / EXPERTISE</div>
          <div className="section-heading">
            <h2>What I work with</h2>
            <p>Highlight the capabilities and tools that are most relevant to your work.</p>
          </div>
          <div className="skill-grid">
            {skills.map(([title, detail, symbol]) => {
              const isOpen = activeSkill === title || hoveredSkill === title;
              const detailId = `skill-detail-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
              return (
              <article
                className={`skill-card${activeSkill === title ? ' is-open' : ''}`}
                key={title}
                onMouseEnter={() => setHoveredSkill(title)}
                onMouseLeave={() => setHoveredSkill((current) => current === title ? null : current)}
              >
                <span className="skill-index" aria-hidden="true">{symbol}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
                <button
                  className="skill-toggle"
                  type="button"
                  aria-controls={detailId}
                  aria-expanded={isOpen}
                  onFocus={() => setHoveredSkill(title)}
                  onBlur={(event) => {
                    if (!event.currentTarget.parentElement.contains(event.relatedTarget)) {
                      setHoveredSkill((current) => current === title ? null : current);
                    }
                  }}
                  onClick={() => setActiveSkill(activeSkill === title ? null : title)}
                >
                  <span>View experience</span>
                  <span className="skill-toggle-mark" aria-hidden="true">+</span>
                </button>
                <div className="skill-expanded" id={detailId}>
                  <p>{skillExperience[title]}</p>
                </div>
              </article>
              );
            })}
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-label">03 / WORK</div>
          <div className="section-heading">
            <h2>Selected work</h2>
            <p>Projects that show your process, strengths, and measurable impact.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>{project.tag}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="metrics">
                  {project.metrics.map(({ value, label }) => (
                    <div className="metric" key={`${value}-${label}`}>
                      <strong>{value}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="section-label">04 / EXPERIENCE</div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.period}>
                <div className="timeline-date">{item.period}</div>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section numbers">
          <div className="number-card"><strong>XX+</strong><span>Years in your field</span></div>
          <div className="number-card"><strong>XX+</strong><span>Projects or clients</span></div>
          <div className="number-card"><strong>XX%</strong><span>Improvement you delivered</span></div>
          <div className="number-card"><strong>XX</strong><span>Another meaningful result</span></div>
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Let's build something<br /><em>reliable.</em></h2>
          <p>Write a short invitation to connect about your work, services, or next opportunity.</p>
          <a className="contact-link" href="mailto:your.email@example.com"><svg className="mail-icon" aria-hidden="true" viewBox="0 0 20 20"><rect x="2.5" y="4.5" width="15" height="11" rx="2" /><path d="m3.5 6 6.5 5 6.5-5" /></svg> your.email@example.com</a>
          <div className="contact-footer">
            <span>© {new Date().getFullYear()} Your Name</span>
            <a className="footer-linkedin" href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>
      {showBackToTop && (
        <button
          className={`back-to-top${afterMetrics ? ' after-metrics' : ''}`}
          type="button"
          aria-label="Go to top"
          onClick={() => window.scrollTo({
            top: 0,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          })}
        >
          <span className="back-to-top-arrow" aria-hidden="true">↑</span>
          <span className="back-to-top-tooltip" aria-hidden="true">Go Top</span>
        </button>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);
