'use strict';

const modalOpen = document.getElementById('modal-open');
const modalClose = document.getElementById('modal-close');
const modal = document.getElementById('modal_callback');
const form_1 = document.getElementById('callback_form')
const name_1 = document.getElementById('name_inp')
const email_1 = document.getElementById('email_inp')
const tel_1 = document.getElementById('tel_inp')
const form_callback = document.getElementById('form_call')
const h2_form_callback = document.getElementById('h2_form_call')

function openModal() {    
    modal.classList.add('opened');
}

function closeModal() {
    modal.classList.remove('opened');
}

modalClose.onclick = closeModal;

modalOpen.addEventListener('click', openModal);
document.addEventListener('click', function(event){    
    if (event.target !== modal && event.target !== modalOpen && event.target !== form_1 && event.target !== name_1 && event.target !== email_1 && event.target !== tel_1 && event.target !== form_call && event.target !== h2_form_callback){
        closeModal()
    }
})