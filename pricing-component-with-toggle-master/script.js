"use strict";

const circle = document.querySelector(".checkbox-box label");
const checkbox = document.getElementById("checkbox");
const amountsEl = document.querySelectorAll(".pricing-card_amount .amount");
const pricing = {
  basic: {
    monthly: 19.99,
    anually: 199.99,
  },
  professional: {
    monthly: 24.99,
    anually: 249.99,
  },
  master: {
    monthly: 39.99,
    anually: 399.99,
  },
};

// console.log(circle, checkbox, amountsEl);
circle.addEventListener("click", () => {
  if (!checkbox.checked) {
    amountsEl.forEach((amountEl) => {
      amountEl.textContent =
        pricing[
          amountEl.closest(".pricing-card_amount").dataset.pricing
        ].monthly;
    });
  } else {
    amountsEl.forEach((amountEl) => {
      amountEl.textContent =
        pricing[
          amountEl.closest(".pricing-card_amount").dataset.pricing
        ].anually;
    });
  }
});
