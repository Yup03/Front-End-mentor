"use strict";

const form = document.querySelector("form");
const dayIn = document.querySelector(".day"),
  monthIn = document.querySelector(".month"),
  yearIn = document.querySelector(".year");
const dayOut = document.querySelector(".out-day__value"),
  monthOut = document.querySelector(".out-month__value"),
  yearOut = document.querySelector(".out-year__value"),
  redC = "red",
  defC = "blue";
dayOut.textContent = "--";
monthOut.textContent = "--";
yearOut.textContent = "--";
yearIn.value = "";
monthIn.value = "";
dayIn.value = "";
const tl = gsap.timeline();

dayIn.addEventListener("input", () => {
  dayOut.textContent = "--";
  monthOut.textContent = "--";
  yearOut.textContent = "--";
});
monthIn.addEventListener("input", () => {
  dayOut.textContent = "--";
  monthOut.textContent = "--";
  yearOut.textContent = "--";
});

yearIn.addEventListener("input", () => {
  dayOut.textContent = "--";
  monthOut.textContent = "--";
  yearOut.textContent = "--";
  if (new Date().getFullYear() < +yearIn.value) {
    document.querySelector(".warn.warn-year").style.opacity = "1";
    document.querySelector(".warn.warn-year").textContent =
      "Must be in the past";
  } else {
    document.querySelector(".warn.warn-year").style.opacity = "0";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    new Date().getDate()
  );
  const birth = new Date(+yearIn.value, +monthIn.value, +dayIn.value);

  const outputObj = getObjectFromDays(getPassedDays(birth, today));
  if (!dayIn.value || !monthIn.value || !yearIn.value) {
    yearIn.required = true;
    monthIn.required = true;
    dayIn.required = true;

    return;
  }

  if (
    (+monthIn.value % 2 === 0 && +monthIn.value <= 6) ||
    (+monthIn.value % 2 !== 0 && +monthIn.value > 6)
  ) {
    if (+dayIn.value > 30) {
      document.querySelector(".warn.warn-day").style.opacity = "1";
      document.querySelector(".warn.warn-day").textContent =
        "Must be a valid date";

      dayIn.required = true;
      console.log(dayIn.required);
      return;
    } else {
      document.querySelector(".warn.warn-day").style.opacity = "0";
    }
  }
  if (birth > today) {
    document.querySelector(".warn.warn-year").style.opacity = "1";
    document.querySelector(".warn.warn-year").textContent =
      "Must be in the past";

    return;
  }
  const day = +dayIn.value;
  tl.fromTo(
    ".out-value",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
  );
  console.log(day === +dayIn.value);
  dayOut.textContent = outputObj.days;
  monthOut.textContent = outputObj.months;
  yearOut.textContent = outputObj.years;
});

function getPassedDays(date1, date2) {
  return Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
}
function getObjectFromDays(numberOfDays) {
  const years = Math.floor(numberOfDays / 365);
  const months = Math.floor((numberOfDays % 365) / 30);
  const days = Math.floor((numberOfDays % 365) % 30);

  return { years, months, days };
}
