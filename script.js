'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const comedyContent = document.querySelector('.comedy-content');

const newComedyContent = "Here is new comedy content.";

console.log(modal, btnOpenModal)

const changeComedyContent = function(newComedyContent){
    let text = comedyContent.textContent = newComedyContent;
    console.log(text);
};

const openModal = function (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    changeComedyContent(newComedyContent);
};

const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);



