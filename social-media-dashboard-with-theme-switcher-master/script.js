"use strict";

const btnTheme = document.querySelector("#check"),
  root = document.documentElement,
  circle = document.querySelector(".btn-theme label");

circle.style.left = "1px";

btnTheme.addEventListener("change", () => {
  if (!btnTheme.checked) {
    root.dataset.theme = "dark";
    circle.style.left = "1px";
  } else {
    root.dataset.theme = "light";
    circle.style.left = "2.5rem";
  }
});

gsap.from(".follower-box", {
  stagger: 0.1,
  scaleY: 0,
  opacity: 0,
  ease: "back",
});
