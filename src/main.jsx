import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { portfolio } from './portfolio.js';
import './styles.css';

const { site, person, hero, about, expertise, work, experience, metrics, contact } = portfolio;
const brandMark = person.name.trim().split(/\s+/).map((part) => part[0]).join('').slice(0, 2).toUpperCase() || 'YN';

function App() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [afterMetrics, setAfterMetrics] = useState(false);

  useEffect(() => {
    document.title = person.name + ' — ' + site.titleSuffix;
    document.querySelector('meta[name="description"]')?.setAttribute('content', site.description);

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

  const renderNavigation = () => site.navigation.map((item) => (
    <a href={item.href} key={`${item.label}-${item.href}`}>{item.label}</a>
  ));

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top">{brandMark}<span>.</span></a>
        <nav aria-label="Main navigation">{renderNavigation()}</nav>
        <details className="mobile-menu">
          <summary aria-label={site.mobileMenuLabel}><span></span><span></span></summary>
          <nav aria-label="Mobile navigation">{renderNavigation()}</nav>
        </details>
        {person.email && <a className="nav-cta" href={`mailto:${person.email}`}>
          <span className="cta-label">{site.talkButtonLabel}</span>
          <svg className="mail-icon" aria-hidden="true" viewBox="0 0 20 20"><rect x="2.5" y="4.5" width="15" height="11" rx="2" /><path d="m3.5 6 6.5 5 6.5-5" /></svg>
        </a>}
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{person.role} · {person.specialties.slice(0, 2).join(' · ')}</p>
            <h1>{person.name}.<br /><em>{hero.emphasis}</em></h1>
            <p className="hero-text">{hero.introduction}</p>
            <div className="hero-actions">
              <a className="button primary" href="#work"><span className="button-label">{hero.workButton}</span><span className="action-icon" aria-hidden="true">↓</span></a>
              {person.linkedinUrl && <a className="button secondary" href={person.linkedinUrl} target="_blank" rel="noreferrer"><span className="button-label">{hero.linkedinButton}</span></a>}
            </div>
          </div>
          <div className="hero-card" onPointerMove={handlePortraitMove} onPointerLeave={resetPortraitTilt}>
            <img className="hero-portrait" src={person.portrait.src} alt={person.portrait.alt} />
            <div className="portrait-overlay"></div>
            <div className="hero-card-label">
              <span>{hero.focusLabel}</span>
              <strong>{person.focusLine}</strong>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label={expertise.accessibleLabel}>
          {person.specialties.map((specialty, index) => (
            <React.Fragment key={`${specialty}-${index}`}>
              {index > 0 && <i aria-hidden="true">✦</i>}
              <span>{specialty}</span>
            </React.Fragment>
          ))}
        </section>

        <section id="about" className="section about">
          <div className="section-label">{about.sectionNumber} / {about.sectionLabel}</div>
          <div className="about-content">
            <h2>{about.heading[0]}<br /><span>{about.heading[1]}</span></h2>
            <div>
              <p className="lead">{about.lead}</p>
              <p>{about.body}</p>
            </div>
          </div>
        </section>

        <section id="expertise" className="section">
          <div className="section-label">{expertise.sectionNumber} / {expertise.sectionLabel}</div>
          <div className="section-heading">
            <h2>{expertise.heading}</h2>
            <p>{expertise.introduction}</p>
          </div>
          <div className="skill-grid">
            {expertise.items.map((item) => {
              const isOpen = activeSkill === item.title || hoveredSkill === item.title;
              const detailId = `skill-detail-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
              return (
                <article
                  className={`skill-card${activeSkill === item.title ? ' is-open' : ''}`}
                  key={item.title}
                  onMouseEnter={() => setHoveredSkill(item.title)}
                  onMouseLeave={() => setHoveredSkill((current) => current === item.title ? null : current)}
                >
                  <span className="skill-index" aria-hidden="true">{item.symbol}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <button
                    className="skill-toggle"
                    type="button"
                    aria-controls={detailId}
                    aria-expanded={isOpen}
                    onFocus={() => setHoveredSkill(item.title)}
                    onBlur={(event) => {
                      if (!event.currentTarget.parentElement.contains(event.relatedTarget)) {
                        setHoveredSkill((current) => current === item.title ? null : current);
                      }
                    }}
                    onClick={() => setActiveSkill(activeSkill === item.title ? null : item.title)}
                  >
                    <span>{expertise.viewExperienceLabel}</span>
                    <span className="skill-toggle-mark" aria-hidden="true">+</span>
                  </button>
                  <div className="skill-expanded" id={detailId}>
                    <p>{item.experience}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="work" className="section work">
          <div className="section-label">{work.sectionNumber} / {work.sectionLabel}</div>
          <div className="section-heading">
            <h2>{work.heading}</h2>
            <p>{work.introduction}</p>
          </div>
          <div className="project-list">
            {work.projects.map((project) => (
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
          <div className="section-label">{experience.sectionNumber} / {experience.sectionLabel}</div>
          <div className="timeline">
            {experience.entries.map((item) => (
              <article className="timeline-item" key={item.period}>
                <div className="timeline-date">{item.period}</div>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section numbers" aria-label={metrics.accessibleLabel}>
          {metrics.items.map((item) => (
            <div className="number-card" key={`${item.value}-${item.label}`}>
              <strong>{item.value}</strong><span>{item.label}</span>
            </div>
          ))}
        </section>

        <section id="contact" className="contact">
          <p className="eyebrow">{contact.sectionNumber} / {contact.sectionLabel}</p>
          <h2>{contact.heading}<br /><em>{contact.emphasis}</em></h2>
          <p>{contact.introduction}</p>
          {person.email && <a className="contact-link" href={`mailto:${person.email}`}>
            <svg className="mail-icon" aria-hidden="true" viewBox="0 0 20 20"><rect x="2.5" y="4.5" width="15" height="11" rx="2" /><path d="m3.5 6 6.5 5 6.5-5" /></svg>
            {person.email}
          </a>}
          <div className="contact-footer">
            <span>© {new Date().getFullYear()} {person.name}</span>
            {person.linkedinUrl && <a className="footer-linkedin" href={person.linkedinUrl} target="_blank" rel="noreferrer">{hero.linkedinButton}</a>}
          </div>
        </section>
      </main>
      {showBackToTop && (
        <button
          className={`back-to-top${afterMetrics ? ' after-metrics' : ''}`}
          type="button"
          aria-label={site.backToTopLabel}
          onClick={() => window.scrollTo({
            top: 0,
            behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
          })}
        >
          <span className="back-to-top-arrow" aria-hidden="true">↑</span>
          <span className="back-to-top-tooltip" aria-hidden="true">{site.backToTopText}</span>
        </button>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><App /></React.StrictMode>
);


