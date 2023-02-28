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

const clocksArr = [{   
    img: './img/elit_clock.png',
    name: 'Elit clock',
    cost: '250$'
},
{
    img: './img/gold_clock.png',
    name: 'Gold clock',
    cost: '300$'    
},
{
    img: './img/hi_tech_clock.png',
    name: 'Hi-Tech clok',
    cost: '150$'    
},
{
    img: './img/coffee_clock.png',
    name: 'Coffee clock',
    cost: '75$'    
},
{
    img: './img/old_clock.png',
    name: 'Old clock',
    cost: '500$'    
},
{
    img: './img/smart_clock.png',
    name: 'Smart clock',
    cost: '50$'    
}]

const clocks = document.getElementById('clocks-list')

function getHtmlFromClock (clock) {
    return `<li class="clock_conteiner"><img src="${clock.img}" alt="${clock.name}"><p class="name_clock">${clock.name}</p><p class="price_clock">Price: ${clock.cost}</p></li>`;
}
let html = '';

for (let i = 0; i < clocksArr.length; i++) {
    html += getHtmlFromClock (clocksArr[i]);
}

clocks.innerHTML = html;
