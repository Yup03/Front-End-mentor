"use strict";

const countriesBox = document.querySelector(".countries");
const btnTheme = document.querySelector(".btn-theme");
const rootEl = document.documentElement;
const themeText = btnTheme.querySelector(".btn-theme__text");
const themeIcon = btnTheme.querySelector(".btn-theme__icon");
const textIn = document.getElementById("text");
const selectBox = document.getElementById("select");
const form = document.querySelector("form");

function renderCountry(data) {
  const html = data
    .map((country) => {
      return `<a href="./detail.html" class="country-card">
    <div class="card__img-box">
      <img src=${country.flags?.svg} alt=${
        country.flags?.alt
      } class="card__img" />
    </div>
    <div class="card__content">
      <h6 class="country-name">${country.name?.common}</h6>
      <div class="box">
        <span class="label">Population: </span>
        <span class="value">${country?.population.toLocaleString("en-US")}
        </span>
      </div>
      <div class="box">
        <span class="label">Region: </span>
        <span class="value">${country?.region}</span>
      </div>
      <div class="box">
        <span class="label">Capital: </span>
        <span class="value">${
          country.capital ? country.capital[0] : "Null"
        }</span>
      </div>
    </div>
  </a>`;
    })
    .join("");

  countriesBox.innerHTML = html;
}

function lightMode() {
  rootEl.dataset.theme = "light";
  themeText.textContent = "Light Mode";
  themeIcon.classList.replace("fa-moon", "fa-sun");
  localStorage.setItem("theme", "light");
}
function darkMode() {
  rootEl.dataset.theme = "dark";
  themeText.textContent = "Dark Mode";
  themeIcon.classList.replace("fa-sun", "fa-moon");
  localStorage.setItem("theme", "dark");
}

const getAllCountries = async function () {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();
  renderCountry(data);
};

//Reset
getAllCountries();
selectBox.value = "";
textIn.value = "";
form.addEventListener("submit", (e) => e.preventDefault());

//THEMING
btnTheme.addEventListener("click", (e) => {
  const clicked = e.target;

  if (clicked.classList.contains("btn-theme")) return;

  if (rootEl.dataset.theme === "light") {
    darkMode();
  } else {
    lightMode();
  }
});

//Local Storage
const lastTheme = localStorage.getItem("theme");

if (lastTheme) {
  rootEl.dataset.theme = lastTheme;
  if (lastTheme === "light") {
    lightMode();
  } else {
    darkMode();
  }
}

//SEARCH
textIn.addEventListener("input", (e) => {
  (async function () {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${e.target.value}`
    );
    const data = await res.json();

    console.log(data);
    renderCountry(data);
  })();
});

//FILTERING
selectBox.addEventListener("change", (e) => {
  if (e.target.value === "") getAllCountries();

  (async function () {
    const res = await fetch(
      `https://restcountries.com/v3.1/region/${e.target.value}`
    );
    const data = await res.json();

    console.log(data);
    renderCountry(data);
  })();
});
