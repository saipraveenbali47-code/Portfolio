import "./style.css";
import {
  certifications,
  codingProfiles,
  focus,
  highlights,
  opportunities,
  profile,
  projects,
  services,
  skills,
  stats,
} from "./data";
import type { Project } from "./types";

const BASE = import.meta.env.BASE_URL;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

/* --------------------------------------------------------------------------
   COMPONENT RENDER FUNCTIONS
-------------------------------------------------------------------------- */

function renderHeader(): string {
  const linksHtml = navLinks
    .map((link) => `<li><a href="#${link.id}" data-nav-target="${link.id}">${link.label}</a></li>`)
    .join("");

  return `
    <header class="site-header" id="header">
      <div class="header-upper">
        <div class="container header-upper-inner">
          <div class="header-quote">
            <i class="ri-double-quotes-l header-quote-icon"></i>
            <span>${profile.headerQuote}</span>
          </div>
          <div class="header-status-pill">
            <span class="pulse-dot"></span>
            <span>Open to Software Engineering Roles</span>
          </div>
        </div>
      </div>
      <div class="container navbar-main">
        <a href="#hero" class="logo-link" aria-label="${profile.name} Portfolio">
          <div class="logo-badge">${profile.initials}</div>
          <span class="logo-name">${profile.shortName}</span>
        </a>

        <ul class="nav-links" id="nav-links" role="navigation" aria-label="Main Navigation">
          ${linksHtml}
        </ul>

        <div class="header-actions">
          <a class="theme-btn theme-btn-two btn-small" href="${BASE}assets/resume.pdf" target="_blank" rel="noopener noreferrer">
            <span>Resume</span>
            <i class="ri-arrow-right-up-line"></i>
          </a>
          <button class="nav-toggle-btn" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
            <i class="ri-menu-4-line"></i>
          </button>
        </div>
      </div>
    </header>
  `;
}

function renderHero(): string {
  return `
    <section class="hero-section" id="hero" aria-label="Introduction">
      <div class="container hero-grid">
        <div class="hero-copy reveal-fade-left">
          <div class="hero-subhead reveal">Software Engineer & Full Stack Developer</div>
          <h1 class="hero-title reveal-heading">
            <span class="title-word">I AM</span> <span class="title-word highlight-name">${profile.name}</span>
          </h1>
          <div class="hero-typing-box reveal" aria-live="polite">
            <span class="typing-prefix">Specialized in</span>
            <span class="typed-text" id="typed-target">${profile.roles[0]}</span>
            <span class="caret" aria-hidden="true"></span>
          </div>
          <p class="hero-desc reveal">${profile.intro}</p>
          
          <div class="hero-cta-group reveal">
            <a href="#projects" class="theme-btn theme-btn-two">
              <span>Explore Projects</span>
              <i class="ri-arrow-right-line"></i>
            </a>
            <a href="#contact" class="theme-btn">
              <span>Get In Touch</span>
              <i class="ri-mail-send-line"></i>
            </a>
            <a href="${BASE}assets/resume.pdf" class="theme-btn" target="_blank" rel="noopener noreferrer">
              <span>View Resume</span>
              <i class="ri-file-download-line"></i>
            </a>
          </div>

          <div class="hero-social-list reveal">
            <a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="GitHub Profile" title="GitHub">
              <i class="ri-github-fill"></i>
            </a>
            <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="LinkedIn Profile" title="LinkedIn">
              <i class="ri-linkedin-fill"></i>
            </a>
            <a href="${codingProfiles[0].url}" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="LeetCode Profile" title="LeetCode">
              <i class="ri-code-box-line"></i>
            </a>
            <a href="mailto:${profile.email}" class="social-circle-btn" aria-label="Email Sai Praveen" title="Email">
              <i class="ri-mail-line"></i>
            </a>
          </div>
        </div>

        <!-- PROMINENT PHOTO PORTRAIT DISPLAY -->
        <div class="hero-card-wrap reveal-image" id="hero-card-wrap">
          <div class="hero-portrait-container" id="hero-portrait">
            <div class="portrait-photo-box" id="portrait-photo-box">
              <img
                src="${BASE}images/me.jpg"
                alt="Portrait of ${profile.name}"
                class="portrait-photo-img"
                id="portrait-img"
                onerror="
                  this.style.display='none';
                  const fallback = document.getElementById('portrait-fallback');
                  if (fallback) fallback.style.display='flex';
                "
              />
              <div class="portrait-placeholder-fallback" id="portrait-fallback" style="display: none;">
                <div class="portrait-initials-huge">${profile.initials}</div>
                <div class="portrait-instruction">
                  <i class="ri-camera-line"></i> Photo: me.jpg in public/images
                </div>
              </div>
            </div>

            <div class="portrait-meta-bar">
              <div class="portrait-meta-text">
                <h3>${profile.shortName}</h3>
                <p>MERN Stack &bull; Java DSA</p>
              </div>
              <a href="#contact" class="details-btn" aria-label="Contact Sai Praveen" title="Contact Me">
                <i class="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderStats(): string {
  const statItems = stats
    .map(
      (s, idx) => `
      <div class="stat-box stagger-item" style="--item-index: ${idx};">
        <div class="stat-number-wrap">
          <span class="count-target" data-target="${s.value}" data-decimals="${s.decimals ?? 0}">0</span>
          <span class="suffix">${s.suffix ?? ""}</span>
        </div>
        <div class="stat-label">${s.label}</div>
      </div>
    `,
    )
    .join("");

  return `
    <section class="stats-section" aria-label="Key Highlights">
      <div class="container stats-grid stagger-parent reveal">
        ${statItems}
      </div>
    </section>
  `;
}

function renderAbout(): string {
  const paragraphs = profile.about.map((p) => `<p>${p}</p>`).join("");
  
  const highlightsHtml = highlights
    .map(
      (h, idx) => `
      <div class="about-highlight-card stagger-item" style="--item-index: ${idx};">
        <i class="${h.icon}"></i>
        <h4>${h.title}</h4>
        <p>${h.text}</p>
      </div>
    `,
    )
    .join("");

  return `
    <section class="section" id="about" aria-labelledby="about-heading">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-sub-title">Engineering Mindset & Approach</div>
          <h2 class="section-title-main reveal-heading" id="about-heading"><span class="title-word">ABOUT</span> <span class="title-word title-accent">MYSELF</span></h2>
          <p class="section-description">Dedicated to crafting resilient full-stack architectures, high-performance APIs, and intuitive user experiences.</p>
        </div>

        <div class="about-full-layout">
          <div class="about-prose reveal-fade-left">
            ${paragraphs}
          </div>

          <div class="about-highlights-list stagger-parent reveal-fade-right">
            ${highlightsHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServices(): string {
  const cardsHtml = services
    .map(
      (s, idx) => `
      <div class="service-card stagger-item" style="--item-index: ${idx};">
        <div>
          <div class="service-card-head">
            <span class="service-number">${s.number}</span>
            <div class="service-icon-box">
              <i class="${s.icon}"></i>
            </div>
          </div>
          <div class="service-card-body">
            <h3>${s.title}</h3>
            <p>${s.text}</p>
          </div>
        </div>
        <div class="service-skill-chips">
          ${s.skills.map((skill) => `<span class="service-chip">${skill}</span>`).join("")}
        </div>
      </div>
    `,
    )
    .join("");

  return `
    <section class="section alt-bg" id="services" aria-labelledby="services-heading">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-sub-title">Specialization & Capabilities</div>
          <h2 class="section-title-main reveal-heading" id="services-heading"><span class="title-word">WHAT</span> <span class="title-word title-accent">I DO</span></h2>
          <p class="section-description">Delivering reliable, performant, and scalable technical solutions across frontend, backend, and data tiers.</p>
        </div>

        <div class="services-grid stagger-parent reveal">
          ${cardsHtml}
        </div>
      </div>
    </section>
  `;
}

function renderSkills(): string {
  const groupsHtml = skills
    .map(
      (g, idx) => `
      <div class="skill-category-card stagger-item" style="--item-index: ${idx};">
        <div class="skill-category-header">
          <i class="${g.icon}"></i>
          <h3>${g.group}</h3>
        </div>
        <div class="skill-badges-flow">
          ${g.items.map((item) => `<span class="skill-badge">${item}</span>`).join("")}
        </div>
      </div>
    `,
    )
    .join("");

  return `
    <section class="section" id="skills" aria-labelledby="skills-heading">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-sub-title">Technical Competencies</div>
          <h2 class="section-title-main reveal-heading" id="skills-heading"><span class="title-word">TECH</span> <span class="title-word title-accent">STACK</span></h2>
          <p class="section-description">Languages, full-stack frameworks, database engines, and industry-standard developer tooling.</p>
        </div>

        <div class="skills-container-grid stagger-parent reveal">
          ${groupsHtml}
        </div>
      </div>
    </section>
  `;
}

function renderProjects(): string {
  const projectCards = projects
    .map((p: Project, idx) => {
      const stackBadges = p.stack.map((s) => `<span class="stack-chip">${s}</span>`).join("");
      const featuresHtml = p.features
        .map((f) => `<li>${f}</li>`)
        .join("");

      return `
        <article class="project-card stagger-item" style="--item-index: ${idx};">
          <div>
            <div class="project-card-header">
              <span class="project-tag-pill">${p.tag}</span>
              <a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="details-btn" aria-label="View ${p.title} on GitHub" title="View Source on GitHub">
                <i class="ri-arrow-right-up-line"></i>
              </a>
            </div>
            <div class="project-card-body">
              <h3>${p.title}</h3>
              <p>${p.description}</p>
              <div class="project-stack-wrap">
                ${stackBadges}
              </div>
              <details class="project-details-accordion">
                <summary>
                  <span>Key Features & Architecture</span>
                  <i class="ri-arrow-down-s-line"></i>
                </summary>
                <ul class="project-features-list">
                  ${featuresHtml}
                </ul>
              </details>
            </div>
          </div>
          <div class="project-card-footer">
            <a href="${p.repo}" target="_blank" rel="noopener noreferrer" class="project-repo-link">
              <i class="ri-github-line"></i>
              <span>GitHub Repository</span>
            </a>
            <span style="font-size: 0.8rem; color: var(--secondary-text); font-family: var(--title-font); font-weight: 700;">#${p.number}</span>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <section class="section alt-bg" id="projects" aria-labelledby="projects-heading">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-sub-title">Featured Work</div>
          <h2 class="section-title-main reveal-heading" id="projects-heading"><span class="title-word">LATEST</span> <span class="title-word title-accent">PROJECTS</span></h2>
          <p class="section-description">Full-stack web applications and software systems built from architecture to deployment.</p>
        </div>

        <div class="projects-grid-layout stagger-parent reveal">
          ${projectCards}
        </div>
      </div>
    </section>
  `;
}

function renderCertifications(): string {
  const certsHtml = certifications
    .map(
      (c, idx) => `
      <div class="cert-card stagger-item" style="--item-index: ${idx};">
        <div class="cert-icon-container">
          <i class="${c.icon}"></i>
        </div>
        <div class="cert-content-box">
          <span class="cert-issuer-badge">${c.issuer}</span>
          <h3>${c.title}</h3>
          <p>${c.text}</p>
        </div>
      </div>
    `,
    )
    .join("");

  return `
    <section class="section" id="certifications" aria-labelledby="cert-heading">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-sub-title">Accreditations & Training</div>
          <h2 class="section-title-main reveal-heading" id="cert-heading"><span class="title-word">CERTIFICATIONS</span> <span class="title-word title-accent">& BADGES</span></h2>
          <p class="section-description">Formal training and verified credentials in Java programming, Data Structures, and Software Development.</p>
        </div>

        <div class="cert-grid-layout stagger-parent reveal">
          ${certsHtml}
        </div>
      </div>
    </section>
  `;
}

function renderFocusAndOpportunities(): string {
  const focusHtml = focus
    .map(
      (f, idx) => `
      <div class="focus-box stagger-item" style="--item-index: ${idx};">
        <div class="focus-box-head">
          <i class="${f.icon}"></i>
          <h4>${f.label}</h4>
        </div>
        <div class="focus-items-pills">
          ${f.items.map((i) => `<span class="focus-pill">${i}</span>`).join("")}
        </div>
      </div>
    `,
    )
    .join("");

  const oppsHtml = opportunities
    .map(
      (o, idx) => `
      <div class="opp-item stagger-item" style="--item-index: ${idx};">
        <span class="opp-title">${o.name}</span>
        <span class="opp-status ${o.status === "Actively seeking" ? "status-seeking" : "status-exploring"}">
          ${o.status}
        </span>
      </div>
    `,
    )
    .join("");

  return `
    <section class="section alt-bg" aria-labelledby="focus-heading">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-sub-title">Continuous Growth</div>
          <h2 class="section-title-main reveal-heading" id="focus-heading"><span class="title-word">CURRENT FOCUS</span> <span class="title-word title-accent">& ROLES</span></h2>
          <p class="section-description">What I am actively deepening, engineering, and pursuing right now.</p>
        </div>

        <div class="focus-grid-layout">
          <div class="focus-card-group stagger-parent reveal-fade-left">
            ${focusHtml}
          </div>

          <div class="reveal-fade-right">
            <h3 style="margin-bottom: 1.5rem; font-size: 1.4rem; color: var(--primary-text);">Open To Opportunities</h3>
            <div class="opp-list stagger-parent">
              ${oppsHtml}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderContact(): string {
  const codingBadges = codingProfiles
    .map(
      (c) => `
      <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="coding-badge-link">
        <i class="${c.icon}"></i>
        <div>
          <div style="font-size: 0.75rem; color: var(--secondary-text); text-transform: uppercase;">${c.name}</div>
          <span>${c.label}</span>
        </div>
      </a>
    `,
    )
    .join("");

  return `
    <section class="section" id="contact" aria-labelledby="contact-heading">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-sub-title">Get In Touch</div>
          <h2 class="section-title-main reveal-heading" id="contact-heading"><span class="title-word">LET'S</span> <span class="title-word title-accent">CONNECT</span></h2>
          <p class="section-description">Have a software engineering opportunity, full-stack project, or inquiry? Send a direct message below.</p>
        </div>

        <div class="contact-grid-layout">
          <div class="contact-info-panel reveal-fade-left">
            <div class="contact-direct-blocks">
              <div class="contact-block">
                <div class="contact-block-icon">
                  <i class="ri-mail-line"></i>
                </div>
                <div class="contact-block-text">
                  <dt>Direct Email</dt>
                  <dd><a href="mailto:${profile.email}">${profile.email}</a></dd>
                </div>
              </div>

              <div class="contact-block">
                <div class="contact-block-icon">
                  <i class="ri-map-pin-line"></i>
                </div>
                <div class="contact-block-text">
                  <dt>Current Location</dt>
                  <dd>${profile.location}</dd>
                </div>
              </div>

              <div class="contact-block">
                <div class="contact-block-icon">
                  <i class="ri-user-star-line"></i>
                </div>
                <div class="contact-block-text">
                  <dt>Profile Role</dt>
                  <dd>Software Engineering Student & Full Stack Dev</dd>
                </div>
              </div>
            </div>

            <div class="coding-profiles-box">
              <h4>Coding & Social Platforms</h4>
              <div class="coding-badges-grid">
                ${codingBadges}
              </div>
            </div>
          </div>

          <div class="contact-form-container reveal-fade-right">
            <form id="contact-form" novalidate>
              <div class="form-group-grid">
                <div class="form-control-wrap">
                  <label for="cf-name">Your Name</label>
                  <input type="text" id="cf-name" name="name" placeholder="e.g. Alex Smith" autocomplete="name" required />
                </div>
                <div class="form-control-wrap">
                  <label for="cf-email">Your Email</label>
                  <input type="email" id="cf-email" name="email" placeholder="e.g. alex@example.com" autocomplete="email" required />
                </div>
              </div>

              <div class="form-control-wrap">
                <label for="cf-subject">Subject</label>
                <input type="text" id="cf-subject" name="subject" placeholder="e.g. Software Engineering Opportunity" required />
              </div>

              <div class="form-control-wrap">
                <label for="cf-message">Message</label>
                <textarea id="cf-message" name="message" rows="5" placeholder="Hi Sai Praveen, I would like to discuss..." required></textarea>
              </div>

              <div class="form-submit-row">
                <button type="submit" class="theme-btn theme-btn-two">
                  <span>Send Message</span>
                  <i class="ri-send-plane-2-line"></i>
                </button>
                <div class="form-status-msg" id="form-status" role="status" aria-live="polite"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- HIRE ME CTA BANNER -->
    <section class="hire-banner-section reveal-scale" aria-label="Collaboration Offer">
      <div class="container">
        <div class="hire-prompt">Wanna work together?</div>
        <a class="hire-giant-link" href="mailto:${profile.email}?subject=${encodeURIComponent("Opportunity for Bali Sai Praveen")}">
          HIRE ME
        </a>
      </div>
    </section>
  `;
}

function renderFooter(): string {
  return `
    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-brand">${profile.name}</div>
        <div class="footer-copy">&copy; ${new Date().getFullYear()} Bali Sai Praveen. All rights reserved.</div>
        <div class="footer-links">
          <a href="${profile.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#hero">Back to Top</a>
        </div>
      </div>
    </footer>
  `;
}

/* --------------------------------------------------------------------------
   APPLICATION MOUNT
-------------------------------------------------------------------------- */

function mountApp(): void {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    ${renderHeader()}
    <main id="main">
      ${renderHero()}
      ${renderStats()}
      ${renderAbout()}
      ${renderServices()}
      ${renderSkills()}
      ${renderProjects()}
      ${renderCertifications()}
      ${renderFocusAndOpportunities()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `;
}

/* --------------------------------------------------------------------------
   INTERACTIVE BEHAVIORS & HOOKS
-------------------------------------------------------------------------- */

function initPreloader(): void {
  const loader = document.getElementById("loader");
  const root = document.documentElement;

  const triggerPageLoadAnimations = (): void => {
    document.body.classList.add("page-loaded");
    const heroReveals = document.querySelectorAll(
      "#header, #hero .reveal, #hero .reveal-heading, #hero .reveal-fade-left, #hero .reveal-fade-right, #hero .reveal-image",
    );
    heroReveals.forEach((el) => el.classList.add("is-revealed"));
  };

  if (!loader) {
    root.classList.remove("loading");
    triggerPageLoadAnimations();
    return;
  }

  const dismiss = (): void => {
    root.classList.remove("loading");
    loader.classList.add("leaving");
    triggerPageLoadAnimations();
    window.setTimeout(() => {
      loader.remove();
    }, 850);
  };

  if (prefersReducedMotion) {
    dismiss();
    return;
  }

  window.setTimeout(dismiss, 1300);
}

function initNav(): void {
  const toggleBtn = document.getElementById("nav-toggle");
  const navLinksList = document.getElementById("nav-links");
  if (!toggleBtn || !navLinksList) return;

  const toggle = (): void => {
    const isOpen = navLinksList.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  };

  toggleBtn.addEventListener("click", toggle);

  navLinksList.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinksList.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  const links = new Map<string, HTMLAnchorElement>();
  document.querySelectorAll<HTMLAnchorElement>("[data-nav-target]").forEach((a) => {
    const target = a.getAttribute("data-nav-target");
    if (target) links.set(target, a);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.removeAttribute("aria-current"));
        links.get(entry.target.id)?.setAttribute("aria-current", "true");
      });
    },
    { rootMargin: "-30% 0px -60% 0px" },
  );

  navLinks.forEach((l) => {
    const el = document.getElementById(l.id);
    if (el) observer.observe(el);
  });
}

function initTypewriter(): void {
  const target = document.getElementById("typed-target");
  if (!target || prefersReducedMotion) return;

  let roleIndex = 0;
  let charIndex = profile.roles[0].length;
  let isDeleting = true;

  const typeTick = (): void => {
    const currentRole = profile.roles[roleIndex];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    target.textContent = currentRole.slice(0, charIndex);

    let speed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      speed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % profile.roles.length;
      speed = 350;
    }

    window.setTimeout(typeTick, speed);
  };

  window.setTimeout(typeTick, 1800);
}

function initCounters(): void {
  const counters = document.querySelectorAll<HTMLElement>(".count-target");
  if (!counters.length) return;

  const setInstant = (el: HTMLElement): void => {
    const target = Number(el.dataset.target ?? "0");
    const decimals = Number(el.dataset.decimals ?? "0");
    el.textContent = target.toFixed(decimals);
  };

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    counters.forEach(setInstant);
    return;
  }

  const animate = (el: HTMLElement): void => {
    const target = Number(el.dataset.target ?? "0");
    const decimals = Number(el.dataset.decimals ?? "0");
    const duration = 1400;
    const startTime = performance.now();

    const frame = (now: number): void => {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (elapsed < 1) requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target as HTMLElement);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((c) => observer.observe(c));
}

function initScrollEffects(): void {
  const progressBar = document.getElementById("top-scroll-progress");
  const header = document.getElementById("header");
  const progressWrap = document.getElementById("progress-wrap");
  const progressPath = document.getElementById("progress-path") as SVGPathElement | null;

  let pathLength = 0;
  if (progressPath) {
    pathLength = progressPath.getTotalLength();
    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = `${pathLength}`;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";
  }

  const handleScroll = (): void => {
    const scroll = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progressPercent = docHeight > 0 ? (scroll / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${progressPercent}%`;
    }

    if (progressWrap && progressPath && docHeight > 0) {
      const offset = pathLength - (scroll * pathLength) / docHeight;
      progressPath.style.strokeDashoffset = `${offset}`;

      if (scroll > 180) {
        progressWrap.classList.add("active-progress");
      } else {
        progressWrap.classList.remove("active-progress");
      }
    }

    if (header) {
      if (scroll > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  if (progressWrap) {
    progressWrap.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (!prefersReducedMotion && "IntersectionObserver" in window) {
    const revealElements = document.querySelectorAll(
      ".reveal, .reveal-heading, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-image, .stagger-parent",
    );

    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    document
      .querySelectorAll(".reveal, .reveal-heading, .reveal-fade-left, .reveal-fade-right, .reveal-scale, .reveal-image, .stagger-parent")
      .forEach((el) => el.classList.add("is-revealed"));
  }
}

function initCustomCursor(): void {
  const cursorEl = document.getElementById("custom-cursor");
  const dot = cursorEl?.querySelector<HTMLElement>(".cursor-dot");
  const ring = cursorEl?.querySelector<HTMLElement>(".cursor-ring");
  if (!cursorEl || !dot || !ring || prefersReducedMotion) return;

  const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (!hasFinePointer) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isVisible = false;
  let isHovering = false;

  window.addEventListener(
    "mousemove",
    (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        cursorEl.style.opacity = "1";
      }
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    },
    { passive: true },
  );

  document.addEventListener("mouseleave", () => {
    isVisible = false;
    cursorEl.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    isVisible = true;
    cursorEl.style.opacity = "1";
  });

  const renderRing = (): void => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(renderRing);
  };
  requestAnimationFrame(renderRing);

  const interactiveSelector =
    "a, button, .theme-btn, .details-btn, .project-card, .service-card, .cert-card, .about-highlight-card, .skill-category-card, .social-circle-btn, .coding-badge-link, .focus-box, .opp-item, summary, input, textarea, .progress-wrap";

  const addHover = (): void => {
    if (!isHovering) {
      isHovering = true;
      document.body.classList.add("cursor-hover");
    }
  };

  const removeHover = (): void => {
    if (isHovering) {
      isHovering = false;
      document.body.classList.remove("cursor-hover");
    }
  };

  document.addEventListener("mouseover", (e) => {
    const target = e.target as HTMLElement | null;
    if (target && target.closest(interactiveSelector)) {
      addHover();
    } else {
      removeHover();
    }
  });
}

function initParallax(): void {
  if (prefersReducedMotion) return;

  const heroCard = document.getElementById("hero-portrait");
  if (!heroCard) return;

  let ticking = false;

  const updateParallax = (): void => {
    const scrollY = window.scrollY;
    if (scrollY <= window.innerHeight * 1.2) {
      const translateY = Math.min(14, scrollY * 0.04);
      heroCard.style.transform = `translateY(${translateY}px)`;
    }
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true },
  );
}

function initContactForm(): void {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.className = "form-status-msg";

    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = "Please fill in all required fields.";
      status.classList.add("error");
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const subject = String(formData.get("subject") ?? "");
    const message = String(formData.get("message") ?? "");

    const mailBody = `Hello Sai Praveen,\n\n${message}\n\nFrom:\n${name}\n${email}`;
    const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailHref;

    status.textContent = "Launching your email app with message prefilled...";
    status.classList.add("success");
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   APPLICATION INITIALIZATION
-------------------------------------------------------------------------- */

function start(): void {
  mountApp();
  initPreloader();
  initNav();
  initTypewriter();
  initCounters();
  initScrollEffects();
  initCustomCursor();
  initParallax();
  initContactForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
