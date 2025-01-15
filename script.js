"use strict"
const cardBox = document.querySelector(".card-box")
const tagBox = document.querySelector(".tag-box")
const header = document.querySelector(".header")
const sentinal = document.querySelector(".sentinal")

let tagsArr = []

const challenges = [
  {
    name: "3-column-preview-card-component",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/3-column-preview-card-component/",
    id: 1,
    tags: ["html", "css"],
  },
  {
    name: "advice-generator-app",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/advice-generator-app",
    id: 2,
    tags: ["html", "css", "javascript"],
  },
  {
    name: "age-calculator-app",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/age-calculator-app",
    id: 3,
    tags: ["html", "css", "javascript", "gsap"],
  },
  {
    name: "article-preview-component",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/article-preview-component",
    id: 4,
    tags: ["html", "css"],
  },
  {
    name: "ecommerce-product-page",
    level: "Intermediate",
    link: "https://ecommerce-product-page-main-5r4q.onrender.com/",
    id: 5,
    tags: ["reactjs", "tailwindcss"],
  },
  {
    name: "four-card-feature-section",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/four-card-feature-section",
    id: 6,
    tags: ["html", "css"],
  },
  {
    name: "fylo-data-storage-component",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/fylo-data-storage-component/",
    id: 7,
    tags: ["html", "css"],
  },
  {
    name: "fylo-landing-page-with-two-columns",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/fylo-landing-page-with-two-columns/",
    id: 8,
    tags: ["html", "css"],
  },
  {
    name: "huddle-landing-page-with-curved-sections",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/huddle-landing-page-with-curved-sections",
    id: 9,
    tags: ["html", "css"],
  },
  {
    name: "interactive-card-details-form",
    level: "Junior",
    link: "https://interactive-card-details-form-main-re.netlify.app/",
    id: 10,
    tags: ["reactjs", "tailwindcss"],
  },
  {
    name: "loopstudios--landing-page",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/loopstudios--landing-page/",
    id: 11,
    tags: ["html", "css", "javascript"],
  },
  {
    name: "nft-preview-card-component",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/nft-preview-card-component",
    id: 12,
    tags: ["html", "css"],
  },
  {
    name: "pricing-component-with-toggle",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/pricing-component-with-toggle",
    id: 14,
    tags: ["html", "css", "javascript"],
  },
  {
    name: "profile-card-component",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/profile-card-component",
    id: 15,
    tags: ["html", "css"],
  },
  {
    name: "results-summary-component",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/results-summary-component/",
    id: 16,
    tags: ["html", "css"],
  },
  {
    name: "single-price-grid-component",
    level: "Newbie",
    link: "https://yup03.github.io/Front-End-mentor/single-price-grid-component/",
    id: 17,
    tags: ["html", "css"],
  },
  {
    name: "social-media-dashboard-with-theme-switcher",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/social-media-dashboard-with-theme-switcher/",
    id: 18,
    tags: ["html", "css", "javascript"],
  },
  {
    name: "static-job-listings",
    level: "Intermediate",
    link: "https://static-job-listings.onrender.com/",
    id: 19,
    tags: ["reactjs", "tailwindcss"],
  },
  {
    name: "sunnyside-agency-landing-page",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/sunnyside-agency-landing-page/",
    id: 20,
    tags: ["html", "css", "javascript"],
  },
  {
    name: "testimonials-grid-section",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/testimonials-grid-section/",
    id: 21,
    tags: ["html", "css", "javascript"],
  },
  {
    name: "time-tracking-dashboard",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/time-tracking-dashboard",
    id: 22,
    tags: ["html", "css", "javascript"],
  },
  {
    name: "tip-calculator-app",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/tip-calculator-app",
    id: 23,
    tags: ["html", "css", "javascript"],
  },
  {
    name: "todo-app",
    level: "Intermediate",
    link: "https://todo-app-main-re.netlify.app/",
    id: 24,
    tags: ["reactjs", "tailwindcss"],
  },
  {
    name: "news-homepage",
    level: "Junior",
    link: "https://yup03.github.io/Front-End-mentor/news-homepage",
    id: 25,
    tags: ["html", "css", "javascript"],
  },
  {
    name: "newsletter-sign-up-with-success-message",
    level: "Junior",
    link: "https://newsletter-sign-up-re.netlify.app/",
    id: 26,
    tags: ["html", "css", "javascript"],
  },
  {
    name: "room-homepage",
    level: "Intermediate",
    link: "https://yup03.github.io/Front-End-mentor/room-homepage/",
    id: 27,
    tags: ["html", "css", "javascript"],
  },
  {
    name: "rest-countries-api-with-color-theme-switcher",
    level: "Advanced",
    link: "https://countries-with-color-theme-switcher-next.vercel.app/",
    id: 28,
    tags: ["nextjs", "reactjs", "daisyui"],
  },
  {
    name: "multi-step-form",
    level: "Advanced",
    link: "https://multi-step-form-h4ro.onrender.com/",
    id: 29,
    tags: ["reactjs", "tailwindcss", "framer-motion"],
  },
  {
    name: "product-list-with-cart",
    level: "Junior",
    link: "https://product-list-with-cart-3oti.onrender.com/",
    id: 30,
    tags: ["reactjs", "tailwindcss"],
  },
]

//Initial
display(challenges)

function display(arr) {
  const cardBoxContent = arr
    .map(
      chal =>
        `<div  class="card" >
      <div class="card-img">
        <img
          src=./${chal.name}/design/${"desktop-preview"}.jpg
          alt=""
        />
      </div>
      <div class="card-content">
        <a href=${chal.link} class="challenge-name" target="_blank">
          ${chal.name
            .replace("main", "")
            .toLocaleUpperCase()
            .split("-")
            .join(" ")}
        </a>

        <div class="btn-box" >
        ${[...chal.tags, chal.level]
          .map(
            tag =>
              `<button class="btn-tag" data-tag=${tag} onclick="addTag(this)">${tag}</button>`
          )
          .join("")}</div>
      </div>
    </div>`
    )
    .join("")

  cardBox.innerHTML = cardBoxContent
}

function displayTags() {
  const tagBoxContent = tagsArr
    .map(
      tag =>
        `<li class="tag"><span>${tag}</span><button class="btn-del" onclick="deleteTag(this)">&times;</button></li>`
    )
    .join("")

  tagBox.innerHTML = tagBoxContent

  tagsArr.length === 0
    ? (tagBox.style.opacity = "0")
    : (tagBox.style.opacity = "1")
}

function displayFilteredChallenges() {
  displayTags()

  const filteredChallenges = challenges.filter(chal => {
    return tagsArr.every(
      filt => chal.level === filt || chal.tags.some(tool => tool === filt)
    )
  })

  display(filteredChallenges)
}

function addTag(target) {
  target.classList.add("highlight")
  tagsArr = [...new Set([...tagsArr, target.textContent])]

  /////////////////Highlight tag-buttons//////////////////////
  const btnElsWithTheSameTag = target
    .closest(".card-box")
    .querySelectorAll(`.btn-tag[data-tag=${target.textContent}]`)

  btnElsWithTheSameTag.forEach(btn => {
    btn.classList.add("highlight")
    // console.log(btn)
  })

  // console.log(btnElsWithTheSameTag)

  displayFilteredChallenges()
}

function deleteTag(target) {
  const idx = tagsArr.indexOf(
    target.closest(".tag").querySelector("span").textContent
  )

  tagsArr.splice(idx, 1)

  displayFilteredChallenges()
}

const obsOptions = {
  root: null,
  threshold: 0,
}
function obsCallback(entries) {
  const [entry] = entries
  // console.log(entry)

  if (!entry.isIntersecting) tagBox.classList.add("sticky")
  else tagBox.classList.remove("sticky")
}

const headerObserver = new IntersectionObserver(obsCallback, obsOptions)

headerObserver.observe(sentinal)

// console.log(Object.groupBy(challenges, ({ level }) => level))
