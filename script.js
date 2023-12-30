"use strict"
const cardBox = document.querySelector(".card-box")

const challenges = [
  {
    name: "3-column-preview-card-component",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/3-column-preview-card-component/",
    id: 1,
  },
  {
    name: "advice-generator-app",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/advice-generator-app",
    id: 2,
  },
  {
    name: "age-calculator-app",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/age-calculator-app",
    id: 3,
  },
  {
    name: "article-preview-component",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/article-preview-component",
    id: 4,
  },
  {
    name: "ecommerce-product-page",
    level: "Intermediate",
    link: "https://ecommerce-product-page-main-5r4q.onrender.com/",
    id: 5,
  },
  {
    name: "four-card-feature-section",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/four-card-feature-section",
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
    link: "https://yup03.github.io/Front-End-mentor/huddle-landing-page-with-curved-sections",
    id: 9,
  },
  {
    name: "interactive-card-details-form",
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
    name: "nft-preview-card-component",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/nft-preview-card-component",
    id: 12,
  },
  {
    name: "pricing-component-with-toggle",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/pricing-component-with-toggle",
    id: 14,
  },
  {
    name: "profile-card-component",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/profile-card-component",
    id: 15,
  },
  {
    name: "results-summary-component",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/results-summary-component/",
    id: 16,
  },
  {
    name: "single-price-grid-component",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/single-price-grid-component/",
    id: 17,
  },
  {
    name: "social-media-dashboard-with-theme-switcher",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/social-media-dashboard-with-theme-switcher/",
    id: 18,
  },
  {
    name: "static-job-listings",
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
    name: "testimonials-grid-section",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/testimonials-grid-section/",
    id: 21,
  },
  {
    name: "time-tracking-dashboard",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/time-tracking-dashboard",
    id: 22,
  },
  {
    name: "tip-calculator-app",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/tip-calculator-app",
    id: 23,
  },
  {
    name: "todo-app",
    level: "Intermediate",
    link: "https://todo-app-main-re.netlify.app/",
    id: 24,
  },
  {
    name: "news-homepage",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/news-homepage",
    id: 25,
  },
  {
    name: "newsletter-sign-up-with-success-message",
    level: "Junior",
    link: "https://newsletter-sign-up-re.netlify.app/",
    id: 26,
  },
  {
    name: "room-homepage",
    level: "Intermediate",
    link: "https://yup03.github.io/Front-End-mentor/room-homepage/",
    id: 27,
  },
  {
    name: "rest-countries-api-with-color-theme-switcher",
    level: "Advanced",
    link: "https://countries-with-color-theme-switcher-next.vercel.app/",
    id: 28,
  },
]

const cardBoxContent = challenges
  .map(
    chal =>
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
  .join("")

cardBox.innerHTML = cardBoxContent
