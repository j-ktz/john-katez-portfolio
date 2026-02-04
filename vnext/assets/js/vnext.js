const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const revealTargets = document.querySelectorAll("[data-reveal]");
const metricTargets = document.querySelectorAll(".metric");
const modeToggle = document.querySelector("[data-mode-toggle]");
const engine = document.querySelector(".engine");
const engineNodes = engine ? Array.from(engine.querySelectorAll(".engine-node")) : [];
const engineLines = engine ? Array.from(engine.querySelectorAll(".engine-line")) : [];
const engineLabels = engine ? Array.from(engine.querySelectorAll(".engine-label")) : [];
const engineChips = engine ? Array.from(engine.querySelectorAll(".engine-chip")) : [];
const caseToggleButtons = Array.from(document.querySelectorAll("[data-case-toggle]"));

const formatValue = (value, suffix, decimals, prefix) => {
  const fixed = decimals ? value.toFixed(decimals) : Math.round(value).toString();
  return `${prefix || ""}${fixed}${suffix || ""}`;
};

const animateMetric = (el) => {
  const target = parseFloat(el.dataset.count || "0");
  const suffix = el.dataset.suffix || "";
  const decimals = parseInt(el.dataset.decimals || "0", 10);
  const prefix = el.dataset.prefix || "";
  const valueEl = el.querySelector(".metric-value");
  if (!valueEl) return;

  if (reduceMotion) {
    valueEl.textContent = formatValue(target, suffix, decimals, prefix);
    return;
  }

  const duration = 1400;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    valueEl.textContent = formatValue(current, suffix, decimals, prefix);
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

if (revealTargets.length > 0) {
  if (reduceMotion) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  }
}

if (metricTargets.length > 0) {
  if (reduceMotion) {
    metricTargets.forEach((el) => animateMetric(el));
  } else {
    const metricObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateMetric(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    metricTargets.forEach((el) => metricObserver.observe(el));
  }
}

if (caseToggleButtons.length > 0) {
  caseToggleButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const card = button.closest(".case-card");
      if (!card) return;
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", isOpen ? "true" : "false");
      button.textContent = isOpen ? "Hide details" : "Tap for details";
    });
  });
}

const setRecruiterMode = (enabled) => {
  document.body.classList.toggle("recruiter", enabled);
  if (modeToggle) {
    modeToggle.setAttribute("aria-pressed", enabled ? "true" : "false");
    modeToggle.textContent = enabled ? "Recruiter Mode On" : "Recruiter Mode";
  }
  localStorage.setItem("recruiterMode", enabled ? "1" : "0");
};

if (modeToggle) {
  const savedMode = localStorage.getItem("recruiterMode") === "1";
  setRecruiterMode(savedMode);

  modeToggle.addEventListener("click", () => {
    const enabled = !document.body.classList.contains("recruiter");
    setRecruiterMode(enabled);
  });
}

const setActiveEngineNode = (node) => {
  engineNodes.forEach((item) => item.classList.remove("is-active"));
  engineLines.forEach((line) => line.classList.remove("is-active"));
  engineLabels.forEach((label) => label.classList.remove("is-active"));
  engineChips.forEach((chip) => chip.classList.remove("is-active"));
  if (!node) return;
  node.classList.add("is-active");
  const key = node.dataset.node;
  if (!key) return;
  engineLines.forEach((line) => {
    const from = line.dataset.from;
    const to = line.dataset.to;
    if (from === key || to === key) {
      line.classList.add("is-active");
    }
  });
  engineLabels.forEach((label) => {
    const from = label.dataset.from;
    const to = label.dataset.to;
    if (from === key || to === key) {
      label.classList.add("is-active");
    }
  });
  engineChips.forEach((chip) => {
    const from = chip.dataset.from;
    const to = chip.dataset.to;
    if (from === key || to === key) {
      chip.classList.add("is-active");
    }
  });
};

if (engine && engineNodes.length > 0) {
  let activeIndex = 0;
  let cycleId = null;
  const shouldAnimateEngine = !reduceMotion && !window.matchMedia("(max-width: 700px)").matches;
  const collapseAll = () => {
    engineNodes.forEach((node) => {
      node.classList.remove("is-expanded");
      node.setAttribute("aria-expanded", "false");
    });
  };

  const startCycle = () => {
    if (!shouldAnimateEngine || cycleId) return;
    cycleId = window.setInterval(() => {
      activeIndex = (activeIndex + 1) % engineNodes.length;
      setActiveEngineNode(engineNodes[activeIndex]);
    }, 2400);
  };

  const stopCycle = () => {
    if (cycleId) {
      window.clearInterval(cycleId);
      cycleId = null;
    }
  };

  const onMouseMove = (event) => {
    if (!engine || !shouldAnimateEngine) return;
    const rect = engine.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    engine.style.setProperty("--engine-glow-x", `${x.toFixed(1)}%`);
    engine.style.setProperty("--engine-glow-y", `${y.toFixed(1)}%`);
  };

  engine.addEventListener("mousemove", onMouseMove);
  engine.addEventListener("mouseleave", () => {
    engine.style.setProperty("--engine-glow-x", "50%");
    engine.style.setProperty("--engine-glow-y", "50%");
  });

  engineNodes.forEach((node) => {
    node.addEventListener("mouseenter", () => {
      stopCycle();
      setActiveEngineNode(node);
    });
    node.addEventListener("mouseleave", () => {
      setActiveEngineNode(null);
      startCycle();
    });
    node.addEventListener("click", (event) => {
      event.stopPropagation();
      stopCycle();
      const isExpanded = node.classList.contains("is-expanded");
      collapseAll();
      if (!isExpanded) {
        node.classList.add("is-expanded");
        node.setAttribute("aria-expanded", "true");
        setActiveEngineNode(node);
      }
    });
    node.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        node.click();
      }
    });
  });

  const updateEngineProgress = () => {
    if (!engine) return;
    if (document.body.classList.contains("recruiter") || reduceMotion) {
      engine.style.setProperty("--engine-line-opacity", "0.25");
      return;
    }
    const rect = engine.getBoundingClientRect();
    const viewHeight = window.innerHeight || document.documentElement.clientHeight;
    const progress = Math.min(Math.max((viewHeight - rect.top) / (rect.height + viewHeight), 0), 1);
    const opacity = 0.25 + progress * 0.55;
    engine.style.setProperty("--engine-line-opacity", opacity.toFixed(2));
  };

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateEngineProgress();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  document.addEventListener("click", () => {
    collapseAll();
    if (shouldAnimateEngine) {
      startCycle();
    }
  });
  updateEngineProgress();
  startCycle();
}
