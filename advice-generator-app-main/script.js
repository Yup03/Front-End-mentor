"use strict";

const idNumber = document.querySelector(".advice-id--number");
const adviceText = document.querySelector(".advice-text");
const btn = document.querySelector(".btn");

const renderAdvice = function (advice) {
  idNumber.textContent = advice.slip.id;
  adviceText.textContent = `"${advice.slip.advice}"`;
};

const adviceGen = function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => renderAdvice(data))
    .catch(error => console.error(error))
};
adviceGen();
btn.addEventListener("click", adviceGen);
