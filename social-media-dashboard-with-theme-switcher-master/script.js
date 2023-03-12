"use strict";

const btnTheme = document.querySelector("#check"),
  root = document.documentElement,
  circle = document.querySelector(".btn-theme label"),
  counters = document.querySelectorAll("span[data-target]");
console.log(counters);

counters.forEach((counter) => {
  gsap.to(counter, {
    innerText: counter.dataset.target,
    duration: 2,
    snap: {
      innerText: 1,
    },
  });
});

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
