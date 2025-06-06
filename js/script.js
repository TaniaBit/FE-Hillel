`use strict`;

let numberOne = +(prompt(    `Enter the first number:`));
let numberTwo = +(prompt(    `Enter the second number:`));
let numberThree = +(prompt(    `Enter the third number:`));

let average = (numberOne+numberTwo+numberThree)/3;

alert(`Arithmetic mean of three numbers : ${average}`);