"use strict";

const btnNav = document.querySelector(".btn_nav"),
  nav = document.querySelector(".nav");

btnNav.addEventListener("click", () => {
  nav.classList.toggle("active");
});

