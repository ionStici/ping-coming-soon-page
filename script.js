"use strict";

const form = document.querySelector(".form");
const message = document.querySelector(".form__message");
const input = document.querySelector(".form__email-input");
const btn = document.querySelector(".btn");

const mediaQuery = window.matchMedia("(min-width: 767px)");

const checkViewport = function (viewport) {
  if (viewport.matches) {
    btn.style.top = "0";
  } else {
    btn.style.top = "3.2rem";
  }
};

window.addEventListener("resize", function (event) {
  if (event.target.innerWidth <= 767 && message.style.opacity === "1") {
    // 767
    btn.style.top = "3.2rem";
  } else if (event.target.innerWidth >= 767 && message.style.opacity === "1") {
    btn.style.top = "0";
  }
});

function checkIfEmailIsValid(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    // Valid
    return true;
  } else {
    // Invalid
    return false;
  }
}

const formController = function (e) {
  e.preventDefault();

  if (!checkIfEmailIsValid(input.value)) {
    message.style.opacity = "1";
    input.style.border = "1px solid #ff5466";
    checkViewport(mediaQuery);
  } else {
    input.value = "";
    document.querySelector(".p").textContent = "Thank you!";
    document.querySelector(".p").style.color = "#ff5466";

    btn.style.top = "0";
    message.style.opacity = "0";
    input.style.border = "1px solid #c2d3ff";
  }
};

btn.addEventListener("click", formController);
form.addEventListener("submit", formController);
