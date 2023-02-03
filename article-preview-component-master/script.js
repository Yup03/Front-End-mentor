"use strict";
const btn = document.querySelector(".btn-share"),
  box = document.querySelector(".box");

btn.addEventListener("click", () => {
  box.classList.toggle("active");
});
window.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("btn-share") ||
    e.target.classList.contains("btn-share-img")
  )
    return;
  box.classList.remove("active");
});

const date = new Date();
