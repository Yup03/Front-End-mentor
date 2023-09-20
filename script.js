"use strict";
const cardBox = document.querySelector(".card-box");

const challenges = [
  {
    name: "3-column-preview-card-component-main",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/3-column-preview-card-component-main/",
    id: 1,
  },
  {
    name: "advice-generator-app-main",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/advice-generator-app-main/",
    id: 2,
  },
  {
    name: "age-calculator-app-main",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/age-calculator-app-main/",
    id: 3,
  },
  {
    name: "article-preview-component-master",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/article-preview-component-master",
    id: 4,
  },
  {
    name: "ecommerce-product-page-main",
    level: "Intermediate",
    link: "https://ecommerce-product-page-main-5r4q.onrender.com/",
    id: 5,
  },
  {
    name: "four-card-feature-section-master",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/four-card-feature-section-master",
    id: 6,
  },
  {
    name: "fylo-data-storage-component",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/fylo-data-storage-component/",
    id: 7,
  },
  {
    name: "fylo-landing-page-with-two-columns",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/fylo-landing-page-with-two-columns/",
    id: 8,
  },
  {
    name: "huddle-landing-page-with-curved-sections",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/huddle-landing-page-with-curved-sections/",
    id: 9,
  },
  {
    name: "interactive-card-details-form-main_react",
    level: "Junior",
    link: "https://interactive-card-details-form-main-re.netlify.app/",
    id: 10,
  },
  {
    name: "loopstudios--landing-page",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/loopstudios--landing-page/",
    id: 11,
  },
  {
    name: "nft-preview-card-component-main",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/nft-preview-card-component-main",
    id: 12,
  },
  {
    name: "pricing-component-with-toggle-master",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/pricing-component-with-toggle-master",
    id: 14,
  },
  {
    name: "profile-card-component-main",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/profile-card-component-main",
    id: 15,
  },
  {
    name: "results-summary-component-main",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/results-summary-component-main/",
    id: 16,
  },
  {
    name: "single-price-grid-component-master",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/single-price-grid-component-master/",
    id: 17,
  },
  {
    name: "social-media-dashboard-with-theme-switcher-master",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/social-media-dashboard-with-theme-switcher-master/",
    id: 18,
  },
  {
    name: "static-job-listings-main",
    level: "Intermediate",
    link: "https://static-job-listings.onrender.com/",
    id: 19,
  },
  {
    name: "sunnyside-agency-landing-page",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/sunnyside-agency-landing-page/",
    id: 20,
  },
  {
    name: "testimonials-grid-section-main",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/testimonials-grid-section-main/",
    id: 21,
  },
  {
    name: "time-tracking-dashboard-main",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/time-tracking-dashboard-main/",
    id: 22,
  },
  {
    name: "tip-calculator-app-main",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/tip-calculator-app-main",
    id: 23,
  },
  {
    name: "todo-app-main",
    level: "Intermediate",
    link: "https://yup03.github.io/Front-End-mentor/tip-calculator-app-main",
    id: 24,
  },
  {
    name: "news-homepage-main",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/news-homepage-main",
    id: 25,
  },
  {
    name: "newsletter-sign-up",
    level: "Intermediate",
    link: "https://newsletter-sign-up-re.netlify.app/",
    id: 26,
  },
  {
    name: "room-homepage",
    level: "Intermediate",
    link: "https://yup03.github.io/Front-End-mentor/room-homepage/",
    id: 27,
  },
];

const cardBoxContent = challenges
  .map(
    (chal) =>
      `<a href=${chal.link} class="card" target="_blank">
      <div class="card-img">
        <img
          src=./${chal.name}/design/${"desktop-preview"}.jpg
          alt=""
        />
      </div>
      <div class="card-content">
        <h6>${chal.name
          .replace("main", "")
          .toLocaleUpperCase()
          .split("-")
          .join(" ")}</h6>
      </div>
    </a>`
  )
  .join("");

cardBox.innerHTML = cardBoxContent;
