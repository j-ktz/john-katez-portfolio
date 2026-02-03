(function () {
  const SITE_VERSION = "67";
  window.SITE_VERSION = SITE_VERSION;

  const ticker = document.querySelector('.ticker');
  const track = document.querySelector('.ticker__track');



  // ROTATING STAT TILES v50 (sequential, calm)
  const statsWrap = document.querySelector('[data-rotating-stats]');
  if (statsWrap) {
    const slots = Array.from(statsWrap.querySelectorAll('.flip-stat'));
    const ROTATE = [["Content Center", "Center of Excellence leadership"], ["Governance system", "Approvals + escalation paths"], ["Executive storytelling", "Thought leadership activation"], ["10K+ interactions", "Single LinkedIn post"], ["37.5% engagement", "LinkedIn engagement rate"], ["67K+ views", "YouTube campaign highlight"], ["Award submissions", "Webby / Anthem / MarCom"], ["Ops playbooks", "Toolkits + offboarding workflows"], ["Performance reporting", "Dashboards + insights"], ["Platform-native", "Repurposing + optimization"], ["Editorial planning", "Calendars + briefs"], ["Enablement & training", "Newsrooms + Lunch & Learns"]];
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const intervalMs = prefersReduced ? 9000 : 5200; // slower, calmer
    let cursor = 0;      // global item pointer
    let activeSlot = 0;  // which tile flips next

    function setFace(el, whichSel, item) {
      const face = el.querySelector(whichSel);
      if (!face) return;
      const b = face.querySelector('b');
      const s = face.querySelector('span');
      if (b) b.textContent = item[0];
      if (s) s.textContent = item[1];
    }

    // Prime tiles with first 4 items
    slots.forEach((el, i) => {
      const item = ROTATE[(cursor + i) % ROTATE.length];
      const next = ROTATE[(cursor + i + 4) % ROTATE.length];
      setFace(el, '.flip-front', item);
      setFace(el, '.flip-back', next);
    });
    cursor = (cursor + 4) % ROTATE.length;

    if (!prefersReduced) {
      setInterval(() => {
        if (document.documentElement.dataset.modalOpen) return;
        const el = slots[activeSlot];
        if (!el) return;

        el.classList.add('is-flipped');
        setTimeout(() => {
          // when flip completes, move back item to front and advance back
          const frontItem = ROTATE[cursor % ROTATE.length];
          const backItem  = ROTATE[(cursor + 4) % ROTATE.length];
          setFace(el, '.flip-front', frontItem);
          setFace(el, '.flip-back', backItem);
          el.classList.remove('is-flipped');
          cursor = (cursor + 1) % ROTATE.length;
          activeSlot = (activeSlot + 1) % slots.length;
        }, 720);
      }, intervalMs);
    }
  }


  const HIGHLIGHTS = [
  {
    "title": "Approval guardrails + escalation",
    "detail": "Built approval guardrails and escalation paths so teams could move fast without risking brand or compliance.",
    "href": "ah-ccoe-ortho.html"
  },
  {
    "title": "Feel Whole brand campaign",
    "detail": "Led brand platform storytelling tied to the Feel Whole campaign and story-led programming.",
    "href": "ah-feel-whole.html"
  },
  {
    "title": "Coronavirus Resource Hub",
    "detail": "Built a centralized public resource hub with clear pathways for updates and FAQs.",
    "href": "ah-coronavirus-resource-hub.html"
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
    "title": "Blog of the Year recognition",
    "detail": "Swaay.Health 2025 awards: AdventHealth Blog recognized as Blog or Publication of the Year.",
    "href": "ah-blog-of-the-year.html"
  },
  {
    "title": "Record LinkedIn engagement highlight",
    "detail": "Drove record LinkedIn engagement with posts reaching ~37.5% engagement rate and 10K+ interactions (highlight).",
    "href": "index.html#highlights"
  },
  {
    "title": "67K+ YouTube views highlight",
    "detail": "Helped scale patient experience storytelling with videos exceeding 67K views on YouTube (highlight).",
    "href": "creative-gallery.html"
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

      const btn = document.createElement("button");
      btn.className = "ticker__btn";
      btn.setAttribute("data-highlight", "");
      btn.setAttribute("data-title", h.title);
      btn.setAttribute("data-detail", h.detail);
      if (h.href) btn.setAttribute("data-href", h.href);

      btn.innerHTML = '<span class="ticker__dot"></span><span>' + h.title + '</span><svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d="M12 4 10.6 5.4 16.2 11H4v2h12.2l-5.6 5.6L12 20l8-8z"/></svg>';
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

  let userPaused = false;

  const modal = document.querySelector('[data-modal]');
  const modalTitle = document.querySelector('[data-modal-title]');
  const modalBody = document.querySelector('[data-modal-body]');
  const modalLink = document.querySelector('[data-modal-link]');
  const closeBtns = document.querySelectorAll('[data-modal-close]');

  function setPaused(paused, source = "system") {
    if (!ticker) return;
    if (source === "user") userPaused = paused;
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
      setPaused(!paused, "user");
    });
  }

  if (ticker) {
    ticker.addEventListener('mouseenter', () => { if (!userPaused) setPaused(true); });
    ticker.addEventListener('mouseleave', () => { if (!userPaused) setPaused(false); });
  }

  function openModal(title, detail, href) {
    if (!modal) return;
    document.documentElement.dataset.modalOpen = "true";
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
    delete document.documentElement.dataset.modalOpen;
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setPaused(userPaused, "system");
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


/* === Creative Gallery (public-only) === */
(function(){
  function qs(sel, el=document){ return el.querySelector(sel); }
  function qsa(sel, el=document){ return Array.from(el.querySelectorAll(sel)); }

  function el(tag, cls, attrs){
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (attrs) Object.entries(attrs).forEach(([k,v]) => n.setAttribute(k,v));
    return n;
  }

  function formatViews(n){
    if (!n && n !== 0) return "";
    const num = Number(n);
    if (Number.isNaN(num)) return "";
    if (num >= 1e6) return (Math.round(num/1e5)/10) + "M";
    if (num >= 1e3) return Math.round(num/1e3) + "K";
    return String(num);
  }

  function buildCard({title, eyebrow, desc, meta, href, thumb, tag, kind}){
    const a = el("a", "gcard", {href: href || "#", target: href ? "_blank" : "_self", rel: href ? "noopener noreferrer" : ""});
    a.dataset.kind = kind || "";
    const media = el("div", "gcard__media");
    if (thumb){
      const img = el("img", "gcard__img", {src: thumb, alt: ""});
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      media.classList.add("gcard__media--icon");
      media.innerHTML = `<span aria-hidden="true">↗</span>`;
    }
    const body = el("div", "gcard__body");
    if (eyebrow){
      const k = el("div", "gcard__eyebrow");
      k.textContent = eyebrow;
      body.appendChild(k);
    }
    const h = el("div", "gcard__title");
    h.textContent = title || "";
    body.appendChild(h);

    if (desc){
      const p = el("div", "gcard__desc");
      p.textContent = desc;
      body.appendChild(p);
    }
    if (meta){
      const m = el("div", "gcard__meta");
      m.textContent = meta;
      body.appendChild(m);
    }
    if (tag){
      const pill = el("div", "pill");
      pill.textContent = tag;
      body.appendChild(pill);
    }
    a.appendChild(media);
    a.appendChild(body);
    return a;
  }

  function buildLibraryCard({title, description, url, thumb, tag, type}){
    const isExternal = /^https?:\/\//i.test(url || "");
    const a = el("a", "library-card", {href: url || "#", target: isExternal ? "_blank" : "_self", rel: isExternal ? "noopener noreferrer" : ""});
    const media = el("div", "library-card__media");
    if (thumb){
      const img = el("img", "library-card__img", {src: thumb, alt: ""});
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      media.classList.add("library-card__media--icon");
      media.innerHTML = `<span aria-hidden="true">★</span>`;
    }

    const body = el("div", "library-card__body");
    const titleEl = el("div", "library-card__title");
    titleEl.textContent = title || "";
    body.appendChild(titleEl);

    if (description){
      const desc = el("div", "library-card__desc");
      desc.textContent = description;
      body.appendChild(desc);
    }

    const meta = el("div", "library-card__meta");
    const bits = [];
    if (type) bits.push(type.toUpperCase());
    if (tag) bits.push(tag);
    meta.textContent = bits.join(" • ");
    body.appendChild(meta);

    a.appendChild(media);
    a.appendChild(body);
    return a;
  }

  function resolveSocialThumb(platform){
    const key = (platform || "").toLowerCase();
    if (key.includes("youtube")) return "assets/images/social/thumb-youtube.svg";
    if (key.includes("linkedin")) return "assets/images/social/thumb-linkedin.svg";
    if (key.includes("instagram")) return "assets/images/social/thumb-instagram.svg";
    if (key === "x" || key.includes("twitter")) return "assets/images/social/thumb-x.svg";
    return "assets/images/social/thumb-generic.svg";
  }

  function buildSocialCard({title, description, url, thumb, platform, tag}){
    const isExternal = /^https?:\/\//i.test(url || "");
    const a = el("a", "social-card", {href: url || "#", target: isExternal ? "_blank" : "_self", rel: isExternal ? "noopener noreferrer" : ""});
    const media = el("div", "social-card__media");
    const resolvedThumb = thumb || resolveSocialThumb(platform);
    const img = el("img", "social-card__img", {src: resolvedThumb, alt: ""});
    img.loading = "lazy";
    media.appendChild(img);

    const body = el("div", "social-card__body");
    const titleEl = el("div", "social-card__title");
    titleEl.textContent = title || "";
    body.appendChild(titleEl);

    if (description){
      const desc = el("div", "social-card__desc");
      desc.textContent = description;
      body.appendChild(desc);
    }

    const meta = el("div", "social-card__meta");
    const bits = [];
    if (platform) bits.push(platform);
    if (tag) bits.push(tag);
    meta.textContent = bits.join(" • ");
    body.appendChild(meta);

    a.appendChild(media);
    a.appendChild(body);
    return a;
  }

  function openVideoModal(video){
    const modal = qs("#videoModal");
    const wrap = qs("#videoFrameWrap");
    const meta = qs("#videoMeta");
    if (!modal || !wrap || !meta) return;

    wrap.innerHTML = "";
    meta.innerHTML = "";

    const iframe = el("iframe", "video-embed", {
      src: `https://www.youtube-nocookie.com/embed/${video.video_id}?autoplay=1&rel=0`,
      title: video.title || "YouTube video",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      allowfullscreen: ""
    });
    wrap.appendChild(iframe);

    const h = el("div", "modal__title");
    h.textContent = video.title || "";
    const sub = el("div", "modal__sub");
    const bits = [];
    if (video.platform) bits.push(video.platform);
    if (video.date) bits.push(video.date);
    if (video.views) bits.push(`${formatViews(video.views)} views`);
    else if (video.statLabel) bits.push(video.statLabel);
    if (video.tag) bits.push(video.tag);
    sub.textContent = bits.join(" • ");

    const links = el("div", "modal__links");
    const open = el("a", "btn btn--ghost btn--sm", {href: video.url || `https://www.youtube.com/watch?v=${video.video_id}`, target:"_blank", rel:"noopener noreferrer"});
    open.textContent = "Open on YouTube";
    links.appendChild(open);

    meta.appendChild(h);
    meta.appendChild(sub);
    meta.appendChild(links);

    document.documentElement.dataset.modalOpen = "true";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeModal(){
    const modal = qs("#videoModal");
    const wrap = qs("#videoFrameWrap");
    if (!modal) return;
    if (wrap) wrap.innerHTML = "";
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    delete document.documentElement.dataset.modalOpen;
  }

  function initCreativeGallery(){
    const host = document.body && document.body.hasAttribute("data-creative-gallery");
    if (!host) return;

    const videoGrid = qs("#videoGrid");
    const proofGrid = qs("#proofGrid");
    const socialGrid = qs("#socialGrid");
    const libraryGrid = qs("#libraryGrid");
    const socialHighlightsGrid = qs("#socialHighlights");
    const socialTilesGrid = qs("#socialTiles");

    const search = qs("#gallerySearch");
    const clear = qs("#galleryClear");
    const chips = qsa(".chip");

    const state = { filter:"all", q:"" , videos:[], links:[], library:[], socialHighlights:[], socialTiles:[]};

    function render(){
      if (!videoGrid || !proofGrid || !socialGrid) return;
      const q = state.q.trim().toLowerCase();

      const passQ = (obj) => {
        if (!q) return true;
        const blob = [
          obj.title, obj.description, obj.platform, obj.tag, obj.type, obj.source, obj.label
        ].filter(Boolean).join(" ").toLowerCase();
        return blob.includes(q);
      };

      const passFilter = (obj) => {
        if (state.filter === "all") return true;
        if (state.filter === "video") return obj.__kind === "video" || obj.type === "video";
        if (state.filter === "social") return obj.__kind === "social" || obj.type === "social";
        if (["award","press","campaign","case","resource"].includes(state.filter)) return obj.type === state.filter;
        return true;
      };

      // Videos
      videoGrid.innerHTML = "";
      const vids = state.videos
        .map(v => ({...v, __kind:"video"}))
        .filter(v => passFilter(v) && passQ(v))
        .slice(0, 12);

      vids.forEach(v => {
        const videoId = v.video_id || v.id || v.videoId || "";
        const thumb = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : (v.thumb || "");
        const viewsLabel = v.views ? `${formatViews(v.views)} views` : (v.statLabel || "");
        const meta = [v.platform, v.date, viewsLabel].filter(Boolean).join(" • ");
        const c = buildCard({
          title: v.title,
          eyebrow: v.platform ? `${v.platform} • ${v.tag || "Video"}` : "Video",
          desc: v.description || "",
          meta,
          href: v.url || "#",
          thumb,
          tag: v.tag || "",
          kind: "video"
        });
        c.addEventListener("click", (e)=>{
          if ((v.embedType || "").toLowerCase() === "youtube" && videoId) {
            e.preventDefault();
            openVideoModal({ ...v, video_id: videoId });
          }
        });
        videoGrid.appendChild(c);
      });

      // Proof
      proofGrid.innerHTML = "";
      const proof = state.links
        .map(l => ({...l, __kind:"proof"}))
        .filter(l => ["award","press","campaign","blog","resource"].includes(l.type || ""))
        .filter(l => passFilter(l) && passQ(l))
        .slice(0, 18);

      proof.forEach(l => {
        const eyebrow = (l.type || "Link").toUpperCase();
        const meta = [l.source, l.year ? String(l.year) : ""].filter(Boolean).join(" • ");
        const c = buildCard({
          title: l.title,
          eyebrow,
          desc: l.description || "",
          meta,
          href: l.url,
          thumb: l.thumb || "",
          tag: l.type || ""
        });
        proofGrid.appendChild(c);
      });

      // Library
      if (libraryGrid) {
        libraryGrid.innerHTML = "";
        const library = state.library
          .map(l => ({...l, __kind:"library"}))
          .filter(l => passFilter(l) && passQ(l))
          .slice(0, 18);

        library.forEach(l => {
          const a = buildLibraryCard(l);
          libraryGrid.appendChild(a);
        });
      }

      // Social highlights
      if (socialHighlightsGrid) {
        socialHighlightsGrid.innerHTML = "";
        const highlights = state.socialHighlights
          .map(s => ({...s, type: s.type || "social", __kind:"socialHighlight"}))
          .filter(s => passFilter(s) && passQ(s))
          .slice(0, 12);

        highlights.forEach(h => {
          const c = buildSocialCard(h);
          socialHighlightsGrid.appendChild(c);
        });
      }

      // Social proof tiles
      if (socialTilesGrid) {
        socialTilesGrid.innerHTML = "";
        const tiles = state.socialTiles
          .map(s => ({...s, type: s.type || "social", __kind:"socialTile"}))
          .filter(s => passFilter(s) && passQ(s))
          .slice(0, 8);

        tiles.forEach(t => {
          const c = buildSocialCard(t);
          c.classList.add("social-card--tile");
          socialTilesGrid.appendChild(c);
        });
      }

      // Social
      socialGrid.innerHTML = "";
      const social = state.links
        .map(l => ({...l, __kind:"social"}))
        .filter(l => l.type === "social")
        .filter(l => passFilter(l) && passQ(l))
        .slice(0, 12);

      social.forEach(l => {
        const meta = l.label || l.source || "";
        const c = buildCard({
          title: l.title,
          eyebrow: "SOCIAL",
          desc: l.description || "",
          meta,
          href: l.url,
          thumb: l.thumb || "",
          tag: l.platform || "Social"
        });
        socialGrid.appendChild(c);
      });
    }

    function setFilter(v){
      state.filter = v;
      chips.forEach(c => c.classList.toggle("is-active", c.dataset.filter === v));
      render();
    }

    if (chips.length){
      chips.forEach(c => c.addEventListener("click", ()=> setFilter(c.dataset.filter || "all")));
    }

    if (search){
      search.addEventListener("input", ()=> { state.q = search.value || ""; render(); });
    }
    if (clear && search){
      clear.addEventListener("click", ()=> { search.value=""; state.q=""; render(); search.focus(); });
    }

    // Modal close
    qsa("[data-modal-close]").forEach(btn => btn.addEventListener("click", closeModal));
    document.addEventListener("keydown", (e)=>{ if (e.key === "Escape") closeModal(); });

    fetch(`assets/data/creative.json?build=${SITE_VERSION}`, {cache:"no-store"})
      .then(r => r.json())
      .then(data => {
        state.videos = Array.isArray(data.videos) ? data.videos : [];
        state.links = Array.isArray(data.links) ? data.links : [];
        state.library = Array.isArray(data.library) ? data.library : [];
        state.socialHighlights = Array.isArray(data.socialHighlights) ? data.socialHighlights : [];
        state.socialTiles = Array.isArray(data.socialTiles) ? data.socialTiles : [];
        render();
      })
      .catch(()=>{ /* no-op */ });
  }

  document.addEventListener("DOMContentLoaded", initCreativeGallery);
})();


  // v53: ticker modal safari-safe (no scroll lock, no heavy effects)
  (function(){
    const modal = document.getElementById('highlightModal');
    if(!modal) return;
    const titleEl = modal.querySelector('[data-title]');
    const bodyEl = modal.querySelector('[data-body]');
    const closeModal = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden','true');
      document.documentElement.classList.remove('modal-open');
    };
    const openModal = (item) => {
      const t = item.getAttribute('data-title') || item.textContent.trim();
      const d = item.getAttribute('data-detail') || item.getAttribute('data-description') || '';
      if(titleEl) titleEl.textContent = t;
      if(bodyEl) bodyEl.textContent = d;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden','false');
      // Intentionally no scroll locking on Safari.
    };
    document.addEventListener('click', (e)=>{
      const btn = e.target.closest('.ticker-item, .ticker-chip');
      if(btn && btn.closest('.ticker')) { e.preventDefault(); openModal(btn); return; }
      if(e.target === modal || e.target.closest('[data-close]')) { closeModal(); return; }
    });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape' && modal.classList.contains('open')) closeModal(); });
  })();
