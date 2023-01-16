"use strict"

// tusk #1
const randomArr = [1, 2, "Ivan", "banana", "Kiev", "Table", 3, 4];

function arrayCopy () {
    console.log(randomArr.slice());
}

// tusk #2
const arrTusk2 = ["The", 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

function arrayJoin(conditionArr) {    
    console.log(conditionArr.join(' '));
}

// tusk #3
const arrTusk3 = [NaN, 0, 33, false, -51, '', undefined, 75, null];

function removeFalsy (conditionArrF) {
   console.log(conditionArrF.filter(Boolean));    
}

// tusk #4
function getWord() {
    const arr1 = ['e', null, 'r']
    const arr2 = ['g', 'y']
    const conc = arr1.concat(arr2);        
    conc.splice (0,0, 'p', 'o');
    conc.splice (conc.length,0, 'm', 'o', 'd', 'e'); 
    // мабудь ви хотилі щоб будло 'с' замість 'm' але в завданні 'm'
    conc.splice (2,0, 'w');    
    conc.splice (6,2);
    console.log(conc);
    removeFalsy (conc);
    arrayJoin (conc);
}

// tusk #5



