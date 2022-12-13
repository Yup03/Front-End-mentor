//IMPLEMENTING SMOOTH SCROLLING

const navEl = document.querySelectorAll(".nav");
const mobileBtnEl = document.querySelector(".btn-mobile");
const headerEl = document.querySelector(".header");

navEl.forEach((nav) => {
  nav.addEventListener("click", function (e) {
    const clicked = e.target;
    const href = clicked.getAttribute("href");

    if (href === "#" || !href) return;

    e.preventDefault();
    const sectionEl = document.querySelector(href);

    sectionEl.scrollIntoView({ behavior: "smooth" });
  });
});

mobileBtnEl.addEventListener("click", () =>
  headerEl.classList.toggle("nav-open")
);
