'use strict';

const modalOpen = document.getElementById('modal-open');
const modalClose = document.getElementById('modal-close');
const modal = document.getElementById('back-drop');


function openModal() {    
    modal.classList.add('opened');
}

function closeModal() {
    modal.classList.remove('opened');
}

modalClose.onclick = closeModal;

modalOpen.addEventListener('click', openModal);
document.addEventListener('click', function(event){
    console.log(event, event.target);
    if (event.target === modal){
        closeModal()
    }
})

