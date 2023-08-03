"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const comedyContent = document.querySelector(".comedy-content");
const bodyBgColor = document.querySelector(".body-bg-color");

//BTN COLOR
const btnColorOne = document.querySelector(".color-one");
const btnColorTwo = document.querySelector(".color-two");
const btnColorThree = document.querySelector(".color-three");
const btnColorFour = document.querySelector(".color-four");

//set default color to body
bodyBgColor.classList.add("color-three");

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data.joke;
}
async function displayJoke() {
  const joke = await fetchJoke();
  comedyContent.textContent = joke;
}
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  displayJoke();
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const removeAllColor = function () {
  bodyBgColor.classList.add("color-one");
  bodyBgColor.classList.remove("color-two");
  bodyBgColor.classList.remove("color-three");
  bodyBgColor.classList.remove("color-four");
};

const setBgToColorOne = function () {
  removeAllColor();
  bodyBgColor.classList.add("color-one");
};
const setBgToColorTwo = function () {
  removeAllColor();
  bodyBgColor.classList.add("color-two");
};

const setBgToColorThree = function () {
  console.log("color three");
  removeAllColor();
  bodyBgColor.classList.add("color-three");
};
const setBgToColorFour = function () {
  removeAllColor();
  bodyBgColor.classList.add("color-four");
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
btnColorOne.addEventListener("click", setBgToColorOne);
btnColorTwo.addEventListener("click", setBgToColorTwo);
btnColorThree.addEventListener("click", setBgToColorThree);

btnColorFour.addEventListener("click", setBgToColorFour);
