(function () {
  const ticker = document.querySelector('.ticker');
  const track = document.querySelector('.ticker__track');

  const HIGHLIGHTS = [
  {
    "title": "Enterprise social governance framework",
    "detail": "Built an enterprise social governance framework with guardrails, approvals, and escalation paths to reduce risk and improve consistency.",
    "href": "ah-ccoe-ortho.html"
  },
  {
    "title": "Editorial calendar across 6+ channels",
    "detail": "Created a repeatable editorial calendar system across 6+ channels to improve visibility, alignment, and on-time delivery.",
    "href": "ah-blog-unification.html"
  },
  {
    "title": "Content Center of Excellence (CCOE) pilot",
    "detail": "Launched a Content Center of Excellence pilot to streamline workflows, governance, and cross-functional collaboration.",
    "href": "ah-ccoe-ortho.html"
  },
  {
    "title": "Omnichannel strategy across major platforms",
    "detail": "Led organic social strategy across LinkedIn, Instagram, TikTok, X, YouTube, newsletters, and web with goals tied to awareness and conversion actions.",
    "href": "ah-whole-lives-toolkits.html"
  },
  {
    "title": "Platform-native repurposing packages",
    "detail": "Built content packages that repurposed one core story into platform-native formats to improve efficiency and audience relevance.",
    "href": "ah-blog-unification.html"
  },
  {
    "title": "Measurement + reporting frameworks",
    "detail": "Developed reporting frameworks for social and blog performance, using insights to refine targeting and content mix.",
    "href": "ah-ai-blog-evolution.html"
  },
  {
    "title": "Record LinkedIn engagement highlight",
    "detail": "Drove record LinkedIn engagement with posts reaching ~37.5% engagement rate and 10K+ interactions (highlight).",
    "href": "index.html#highlights"
  },
  {
    "title": "67K+ YouTube views highlight",
    "detail": "Helped scale patient experience storytelling with videos exceeding 67K views on YouTube (highlight).",
    "href": "adventhealth-social-gallery.html"
  },
  {
    "title": "Employee advocacy activation",
    "detail": "Activated employee advocacy and thought leadership initiatives to amplify executive and clinician voices.",
    "href": "ah-whole-lives-toolkits.html"
  },
  {
    "title": "Issue response + community playbooks",
    "detail": "Developed playbooks for brand voice, community management, and issue response to support stakeholders across teams.",
    "href": "ah-ccoe-ortho.html"
  },
  {
    "title": "Social intake + briefing process",
    "detail": "Standardized social intake and briefing process, improving throughput and reducing last-minute rework.",
    "href": "ah-ccoe-ortho.html"
  },
  {
    "title": "SEO-informed editorial priorities",
    "detail": "Partnered with web teams to strengthen discoverability and shape SEO-informed themes and editorial priorities.",
    "href": "ah-ai-blog-evolution.html"
  },
  {
    "title": "Award-winning social programs (eHealthcare)",
    "detail": "eHealthcare Leadership Awards — Best Social Media awards for AdventHealth (Platinum 2022, Silver 2024).",
    "href": "https://ehealthcareawards.com/2024-winners/best-social-media"
  },
  {
    "title": "Best Healthcare Content (eHealthcare)",
    "detail": "eHealthcare Leadership Awards — Best Healthcare Content recognition (Gold 2021).",
    "href": "https://ehealthcareawards.com/2021-winners/best-healthcare-content"
  },
  {
    "title": "Best Video Content 2:00 or Less (eHealthcare)",
    "detail": "eHealthcare Leadership Awards — Best Video Content (Platinum 2025).",
    "href": "https://ehealthcareawards.com/2025-winners/best-video-content-2-minutes-or-less"
  },
  {
    "title": "AdventHealth.com digital front door",
    "detail": "eHealthcare Leadership Awards — AdventHealth.com recognized as a digital front door for consumer health (Gold 2025).",
    "href": "https://ehealthcareawards.com/2025-winners/adventhealth-com"
  },
  {
    "title": "Telly Award-winning campaign (Every Beat)",
    "detail": "AdventHealth Redmond’s 'Every Beat' spots recognized with Silver and Gold Telly Awards (2024).",
    "href": "https://www.adventhealth.com/news/adventhealth-redmond-receives-two-telly-awards"
  },
  {
    "title": "Real-time optimization by format + audience",
    "detail": "Optimized distribution strategy by format, audience, and channel performance to maximize engagement and efficiency.",
    "href": "ah-ai-blog-evolution.html"
  },
  {
    "title": "Third-party amplification partnerships",
    "detail": "Collaborated with internal teams and external partners to extend reach through entertainment, sports, and third‑party distribution.",
    "href": "darden-uber.html"
  },
  {
    "title": "Culture moments + brand participation",
    "detail": "Planned and executed timely culture moments that boosted engagement and brand affinity (Swiftie moment case study).",
    "href": "swiftie-moment.html"
  }
];

  function buildTicker() {
    if (!track) return;
    track.innerHTML = "";
    HIGHLIGHTS.forEach((h) => {
      const item = document.createElement("div");
      item.className = "ticker__item";

      const dot = document.createElement("span");
      dot.className = "ticker__dot";
      item.appendChild(dot);

      const btn = document.createElement("button");
      btn.className = "ticker__btn";
      btn.setAttribute("data-highlight", "");
      btn.setAttribute("data-title", h.title);
      btn.setAttribute("data-detail", h.detail);
      if (h.href) btn.setAttribute("data-href", h.href);

      btn.innerHTML = '<svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d="M12 4 10.6 5.4 16.2 11H4v2h12.2l-5.6 5.6L12 20l8-8z"/></svg><span>' + h.title + '</span>';
      item.appendChild(btn);

      track.appendChild(item);
    });
  }

  function duplicateForLoop() {
    if (!ticker || !track) return;
    if (track.dataset.duplicated === "true") return;
    const items = Array.from(track.children);
    items.forEach((el) => track.appendChild(el.cloneNode(true)));
    track.dataset.duplicated = "true";
  }

  const toggleBtn = document.querySelector('[data-ticker-toggle]');
  const iconPlay = document.querySelector('[data-icon-play]');
  const iconPause = document.querySelector('[data-icon-pause]');

  const modal = document.querySelector('[data-modal]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalBody = document.querySelector('[data-modal-body]');
  const modalLink = document.querySelector('[data-modal-link]');
  const closeBtns = document.querySelectorAll('[data-modal-close]');

  function setPaused(paused) {
    if (!ticker) return;
    ticker.classList.toggle('paused', paused);
    if (toggleBtn) toggleBtn.setAttribute("aria-pressed", paused ? "true" : "false");
    if (iconPlay && iconPause) {
      iconPlay.style.display = paused ? "inline" : "none";
      iconPause.style.display = paused ? "none" : "inline";
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const paused = ticker.classList.contains('paused');
      setPaused(!paused);
    });
  }

  function openModal(title, detail, href) {
    if (!modal) return;
    setPaused(true);
    if (modalTitle) modalTitle.textContent = title || "Highlight";
    if (modalBody) modalBody.textContent = detail || "";

    if (modalLink) {
      if (href) {
        modalLink.href = href;
        modalLink.style.display = "inline-flex";
        const isExternal = /^https?:\/\//i.test(href);
        modalLink.target = isExternal ? "_blank" : "_self";
        modalLink.rel = isExternal ? "noopener" : "";
      } else {
        modalLink.style.display = "none";
      }
    }

    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const close = modal.querySelector('[data-modal-close]');
    if (close) close.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setPaused(false);
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-highlight]');
    if (btn) {
      e.preventDefault();
      openModal(
        btn.getAttribute('data-title'),
        btn.getAttribute('data-detail'),
        btn.getAttribute('data-href')
      );
    }
  });

  closeBtns.forEach(b => b.addEventListener('click', closeModal));

  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
  });

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target.matches('.modal__overlay')) closeModal();
    });
  }

  buildTicker();
  duplicateForLoop();
})();

// Scroll reveal for sections/cards
(() => {
  const els = document.querySelectorAll('.card, .case-card, .stat, .press-card, .section, .tile');
  els.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
  els.forEach(el => io.observe(el));
})();



// v45: mobile nav toggle + rails + page transitions
(() => {
  const toggle = document.querySelector('[data-nav-toggle]');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('nav-open');
  });
  document.addEventListener('click', (e) => {
    if (!document.documentElement.classList.contains('nav-open')) return;
    const within = e.target.closest('.site-header');
    if (!within) document.documentElement.classList.remove('nav-open');
  });
})();

(() => {
  document.querySelectorAll('[data-rail]').forEach((rail) => {
    const wrap = rail.closest('.rail-wrap');
    const left = wrap?.querySelector('[data-rail-left]');
    const right = wrap?.querySelector('[data-rail-right]');
    const step = () => Math.max(320, Math.round(rail.clientWidth * 0.8));
    const scrollBy = (dir) => rail.scrollBy({ left: dir * step(), behavior: 'smooth' });

    left?.addEventListener('click', () => scrollBy(-1));
    right?.addEventListener('click', () => scrollBy(1));

    // show/hide buttons based on scroll position
    const update = () => {
      const max = rail.scrollWidth - rail.clientWidth - 2;
      if (left) left.style.opacity = rail.scrollLeft > 4 ? "1" : ".35";
      if (right) right.style.opacity = rail.scrollLeft < max ? "1" : ".35";
    };
    rail.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
})();

(() => {
  // graceful fade between internal pages
  document.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute('href') || '';
    const isExternal = /^https?:\/\//i.test(href) || href.startsWith('mailto:') || href.startsWith('#');
    if (isExternal) return;
    a.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;
      e.preventDefault();
      document.body.classList.add('page-transition','is-leaving');
      setTimeout(() => { window.location.href = url.href; }, 180);
    });
  });
  document.body.classList.add('page-transition');
})();
