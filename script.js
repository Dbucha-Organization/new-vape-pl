const ageGate = document.querySelector("#ageGate");
const confirmAgeButton = document.querySelector("#confirmAge");
const denyAgeButton = document.querySelector("#denyAge");
const ageStorageKey = "potwierdzony_wiek_18_plus";

if (localStorage.getItem(ageStorageKey) !== "tak") {
  ageGate.classList.add("is-visible");
  document.body.style.overflow = "hidden";
}

confirmAgeButton.addEventListener("click", () => {
  localStorage.setItem(ageStorageKey, "tak");
  ageGate.classList.remove("is-visible");
  document.body.style.overflow = "";
});

denyAgeButton.addEventListener("click", () => {
  window.location.href = "https://www.google.com/";
});

document.querySelectorAll(".faq-item").forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
    answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : "0";
  });
});
const footerCollapse = document.querySelector("#footerCollapse");
const footerButton = footerCollapse.querySelector(".footer-collapse-button");
const footerContent = footerCollapse.querySelector(".footer-collapse-content");

footerButton.addEventListener("click", () => {
  const isOpen = footerCollapse.classList.toggle("is-open");
  footerButton.setAttribute("aria-expanded", String(isOpen));
  footerContent.style.maxHeight = isOpen ? `${footerContent.scrollHeight}px` : "0";
});

// Mobile Sliding Navigation Menu
const navToggle = document.querySelector("#navToggle");
const navLinks = document.querySelector("#navLinks");
const navOverlay = document.querySelector("#navOverlay");

if (navToggle && navLinks && navOverlay) {
  const openMenu = () => {
    navLinks.classList.add("is-active");
    navToggle.classList.add("is-active");
    navOverlay.classList.add("is-active");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    navLinks.classList.remove("is-active");
    navToggle.classList.remove("is-active");
    navOverlay.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("is-active");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navOverlay.addEventListener("click", closeMenu);

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("is-active")) {
      closeMenu();
    }
  });
}

const currentYear = document.querySelector("#currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}