document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".burger");
  const links = document.querySelector(".menu");
  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  document.body.appendChild(overlay);

  const closeMenu = () => {
    if (!links || !toggle) return;
    links.classList.remove("open");
    toggle.classList.remove("is-open");
    overlay.classList.remove("show");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    links.classList.add("open");
    toggle.classList.add("is-open");
    overlay.classList.add("show");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
  };

  if (toggle && links) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.addEventListener("click", () => {
      if (links.classList.contains("open")) closeMenu();
      else openMenu();
    });
    overlay.addEventListener("click", closeMenu);
    links.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1080) closeMenu();
    });
  }

  const filters = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".shot");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.dataset.filter;
      cards.forEach((card) => {
        const show = key === "all" || card.dataset.cat === key;
        card.style.display = show ? "" : "none";
      });
    });
  });

  const form = document.querySelector("#contact-form");
  const note = document.querySelector(".form-note");
  if (form && note) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      note.classList.add("show");
      form.reset();
    });
  }
});
