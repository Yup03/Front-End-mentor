"use strict";

const bill = document.getElementById("input-bill"),
  people = document.getElementById("input-people"),
  total = document.getElementById("total"),
  tipAmount = document.getElementById("tip-amount"),
  peopleText = document.querySelector(".input-people_text"),
  billText = document.querySelector(".input-bill_text"),
  btnBox = document.querySelector(".btn-box"),
  customTip = document.querySelector(".select-tip_custom"),
  resetBtn = document.querySelector(".btn-reset"),
  inputsEl = document.querySelectorAll("input");

let b, t, p;
const warning = document.createElement("p");
warning.classList.add("warning");

reset();

btnBox.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.classList.contains("btn-box")) return;
  if (isNaN(+people.value) || people.value === "") {
    warning.textContent = "Enter a number";
    peopleText.append(warning);
  } else if (+people.value === 0) {
    warning.textContent = "Can't be zero";
    people.style.border = `1px solid ${cssVar("--warning-color")}`;
    peopleText.append(warning);
  } else if (isNaN(+bill.value) || bill.value === "") {
    warning.textContent = "Enter a number";
    billText.append(warning);
  } else if (+bill.value === 0) {
    warning.textContent = "Can't be zero";
    billText.append(warning);
  } else if (clicked.classList.contains("select-tip_custom")) {
    customTip.addEventListener("keydown", (e) => {
      if (
        e.key !== "Enter" ||
        customTip.value === "" ||
        (customTip.value == 0 && +people.value === 0)
      )
        return;

      clicked
        .closest(".btn-box")
        .querySelectorAll("*")
        .forEach((el) => el.classList.remove("active"));
      clicked.classList.add("active");
      output({
        userTip: customTip.value,
        userBill: bill.value,
        userPeople: people.value,
      });
    });
  } else {
    console.log(clicked);

    clicked
      .closest(".btn-box")
      .querySelectorAll("*")
      .forEach((el) => el.classList.remove("active"));
    clicked.classList.add("active");
    output({
      userTip: clicked.textContent,
      userBill: bill.value,
      userPeople: people.value,
    });
  }
});
/* 
TODO

-Enable or disable the resetBtn 


*/

resetBtn.addEventListener("click", () => {
  reset();
});

function output({ userTip, userBill, userPeople }) {
  t = userTip;
  b = userBill;
  p = userPeople;
  tipAmount.textContent = `$${(
    (+userBill * parseFloat(userTip)) /
    100 /
    +userPeople
  ).toFixed(2)}`;
  total.textContent = `$${(
    (+userBill + (+userBill * parseFloat(userTip)) / 100) /
    +userPeople
  ).toFixed(2)}`;
  people.style.border = "none";
  warning.remove();
  resetBtn.disabled = false;
}
function reset() {
  tipAmount.textContent = "";
  total.textContent = "";
  bill.value = "";
  people.value = "";
  customTip.value = "";
  resetBtn.disabled = true;
  btnBox.querySelectorAll("*").forEach((el) => el.classList.remove("active"));
}

function cssVar(varName = "") {
  return getComputedStyle(document.documentElement).getPropertyValue(varName);
}

inputsEl.forEach((input) => {
  input.addEventListener("keydown", (e) => {
    if (
      e.code === `Numpad${e.key}` ||
      e.code === `Digit${e.key}` ||
      e.key === "Enter" ||
      e.key === "Backspace" ||
      e.key === "."
    )
      return;
    e.preventDefault();
  });
});

bill.addEventListener("input", (e) => {
  b = e.target.value;
  if (!b) {
    total.textContent = "";
    tipAmount.textContent = "";
    resetBtn.disabled = true;
  }
  if (!b || !p || !t) return;
  output({
    userTip: t,
    userBill: b,
    userPeople: p,
  });
});
people.addEventListener("input", (e) => {
  const p = e.target.value;
  if (!p) {
    total.textContent = "";
    tipAmount.textContent = "";
    resetBtn.disabled = true;
  }
  if (!b || !p || !t) return;

  output({
    userTip: t,
    userBill: b,
    userPeople: p,
  });
});
