'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const comedyContent = document.querySelector('.comedy-content');

async function fetchJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    return data.joke;
}
async function displayJoke() {
const joke = await fetchJoke();
comedyContent.textContent = joke;
}
const openModal = function (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    displayJoke();

};
const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);



