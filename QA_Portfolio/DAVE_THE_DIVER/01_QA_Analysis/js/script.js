document.querySelectorAll("[data-lightbox]").forEach((button) => { const image = button.querySelector("img"); if (image) button.dataset.src = image.src; });
(() => {
  "use strict";

  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.querySelector("#primary-nav");
  const scenarioGroups = [...document.querySelectorAll(".scenario-group")];

  scenarioGroups.forEach((group, index) => {
    const storageKey = `dave-qa-scenario-group-${index}`;
    try {
      group.open = sessionStorage.getItem(storageKey) === "open";
      group.addEventListener("toggle", () => {
        sessionStorage.setItem(storageKey, group.open ? "open" : "closed");
      });
    } catch {
      // Native details interaction remains available when storage is blocked.
    }
  });

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      primaryNav.classList.toggle("is-open", !open);
    });

    primaryNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        navToggle.setAttribute("aria-expanded", "false");
        primaryNav.classList.remove("is-open");
      }
    });
  }

  document.querySelectorAll(".v2-screen img").forEach((image) => {
    image.loading = "lazy";
    image.decoding = "async";
  });

  const navLinks = [...document.querySelectorAll("#primary-nav [data-nav]")];
  const navScreens = [...document.querySelectorAll(".v2-screen[data-nav-group]")];

  if (navLinks.length && navScreens.length) {
    let ticking = false;
    const setCurrent = () => {
      const marker = window.scrollY + window.innerHeight * .34;
      let active = navScreens[0];
      navScreens.forEach((section) => {
        if (section.offsetTop <= marker) active = section;
      });
      const group = active.dataset.navGroup;
      navLinks.forEach((link) => {
        if (link.dataset.nav === group) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
      ticking = false;
    };
    const requestUpdate = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(setCurrent);
      }
    };
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    setCurrent();
  }

  const dialog = document.querySelector("#evidence-lightbox");
  const galleryButtons = [...document.querySelectorAll(".v2-screen [data-lightbox]")];

  if (dialog && galleryButtons.length) {
    const lightboxImage = dialog.querySelector("#lightbox-image");
    const caption = dialog.querySelector("#lightbox-caption");
    const counter = dialog.querySelector("#lightbox-counter");
    const closeButton = dialog.querySelector(".lightbox-close");
    const previousButton = dialog.querySelector(".lightbox-prev");
    const nextButton = dialog.querySelector(".lightbox-next");
    const lightboxNav = dialog.querySelector(".lightbox-nav");
    let activeGallery = [];
    let currentIndex = 0;
    let returnFocus = null;

    const renderItem = (index) => {
      currentIndex = (index + activeGallery.length) % activeGallery.length;
      const sourceButton = activeGallery[currentIndex];
      const thumbnail = sourceButton.querySelector("img");
      lightboxImage.src = sourceButton.dataset.src;
      lightboxImage.alt = thumbnail?.alt ? `확대 이미지: ${thumbnail.alt}` : "확대된 테스트 증거 이미지";
      caption.textContent = sourceButton.dataset.caption;
      counter.textContent = `${currentIndex + 1} / ${activeGallery.length}`;
    };

    const openLightbox = (button) => {
      const evidenceSection = button.closest(".v2-evidence");
      activeGallery = evidenceSection ? [...evidenceSection.querySelectorAll("[data-lightbox]")] : [button];
      returnFocus = button;
      lightboxNav.hidden = activeGallery.length === 1;
      renderItem(activeGallery.indexOf(button));
      dialog.showModal();
      document.body.classList.add("lightbox-open");
      closeButton.focus();
    };

    const closeLightbox = () => {
      dialog.close();
    };

    galleryButtons.forEach((button) => {
      button.addEventListener("click", () => openLightbox(button));
    });

    previousButton.addEventListener("click", () => renderItem(currentIndex - 1));
    nextButton.addEventListener("click", () => renderItem(currentIndex + 1));
    closeButton.addEventListener("click", closeLightbox);

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeLightbox();
    });

    dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (activeGallery.length > 1) renderItem(currentIndex - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        if (activeGallery.length > 1) renderItem(currentIndex + 1);
      }
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }
      if (event.key === "Tab") {
        const focusable = activeGallery.length > 1 ? [closeButton, previousButton, nextButton] : [closeButton];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    dialog.addEventListener("close", () => {
      document.body.classList.remove("lightbox-open");
      lightboxImage.removeAttribute("src");
      activeGallery = [];
      returnFocus?.focus();
    });
  }

  let openScenarioGroups = [];
  window.addEventListener("beforeprint", () => {
    const groups = [...document.querySelectorAll(".scenario-group")];
    openScenarioGroups = groups.filter((group) => group.open);
    groups.forEach((group) => { group.open = true; });
  });
  window.addEventListener("afterprint", () => {
    document.querySelectorAll(".scenario-group").forEach((group) => {
      group.open = openScenarioGroups.includes(group);
    });
  });
})();
