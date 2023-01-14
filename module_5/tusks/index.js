"use strict"

//  Tusk #1
function forOneToHundryEven() { 
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) continue;
        console.log (i);
    }    
}

function forOneToHundryThree() { 
    for (let i = 0; i <= 100; i++) {
        if (i % 3 !== 0) continue;
        console.log (i);
    }    
}

// Tusk #2
function whileOneToHundryEven () {
    let i = -1;
    while (i<=100) {
        i++;
        if (i % 2 !==0) continue;        
        console.log (i);
    }
    
}

function whileOneToHundryThree () {
    let i = -1;
    while (i<=100) {
        i++;
        if (i % 3 !==0) continue;
        console.log (i);
    }
    
}

// Tusk #3

function monthyCalc () {
    const monthNum = prompt('Write month number please')
    switch (monthNum) {
        case '1':
            alert('This month is January');
                break;           
        case '2':
            alert('This month is February');
                break;           
        case '3':
            alert('This month is March');
                break;           
        case '4':
            alert('This month is April');
                break;           
        case '5':
            alert('This month is May');
                break;           
        case '6':
            alert('This month is June');
                break;           
        case '7':
            alert('This month is July');
                break;           
        case '8':
            alert('This month is August');
                break;           
        case '9':
            alert('This month is September');
                break;           
        case '10':
            alert('This month is October');
                break;           
        case '11':
            alert('This month is November');
                break;           
        case '12':
            alert('This month is December');
                break; 
    }
}

// Tusk #4
const myUser = {};

function tuskFour () {
    myUser.name = 'Ivan';
    console.log (myUser);
    myUser.surname = 'Semnenko';
    console.log (myUser);
    myUser.name = 'Jerry';
    console.log (myUser);
    delete myUser.name;
    console.log (myUser);
}

// Tusk #5 ( Треба трішки подумати, з методами не виходить)

let calculator = {
    num_1: 1,
    num_2: 2,
    
   
}




calculator.read();
alert(calculator.sum() );
alert(calculator.mul() );
alert(calculator.div() );


/* read()  запитує (prompt) два значення та зберігає їх як властивості об'єкта. 

sum()  повертає суму збережених значень.

mul()  перемножує збережені значення та повертає результат. 

div() ділить збережені значення та повертає результат. 

 function read () {
    const num_1 = prompt+ ("Write first number");
    console.log (num_1)    
}  */