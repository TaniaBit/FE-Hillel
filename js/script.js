`use strict`;

// Output numbers from 20 to 30 through a gap, using a step of 0.5

console.log(`#1 numbers from 20 to 30, using a step of 0.5`);

let result = "";
for (let i = 20; i <= 30; i += 0.5) {
    result += i + " ";
}
console.log(result);



// Output data with the calculation of the cost of 10, 20, 30... 100 dollars.

console.log(`#2 Output data with the calculation of the cost of 10, 20, 30... 100 dollars.`);

const exchangeRate = 27;
for (let i = 10; i <= 100; i += 10) {
    let hryvnias = i * exchangeRate;
    console.log(`${i} USD = ${hryvnias} UAH`);
}


//Given an integer. Print all integers from 1 to 100 whose square does not exceed the number N

console.log(`#3 Print all integers from 1 to 100 whose square does not exceed the number N`);

let numberN = +(prompt(`Enter a integer number`));

for (let i = 1; i <= 100; i++) {
    if (isNaN(numberN) || numberN <= 0) {
        alert(`Please enter a valid integer number.`);
        break;
    } else  if (i * i <= numberN) {
        console.log(i);
    } else {
        break;
    }
}


// checking a number for prime

console.log(`#4 checking a number for prime`);

let numberPrime = +(prompt('Enter a number to check for simplicity:'));

let isPrime = true;
if (isNaN(numberPrime) || numberPrime <= 1) {
    isPrime = false;
} else if (numberPrime === 2 || numberPrime === 3) {
    isPrime = true;
} else if (numberPrime % 2 === 0 || numberPrime % 3 === 0) {
    isPrime = false;
} else {
    for (let i = 5; i * i <= numberPrime; i += 6) {
        if (numberPrime % i === 0 || numberPrime % (i + 2) === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(`${numberPrime} is a prime number.`);
    alert(numberPrime + ' is a prime number.');
} else {
    console.log(`${numberPrime} is not a prime number.`);
    alert(numberPrime + ' is not a prime number.');
}


// Determine whether this number can be obtained by raising the number 3 to a certain power

console.log(`#5 Is it possible to obtain a number by raising the number 3 to a certain power?`);

let numberCheck = +(prompt('Enter a number to check for power of 3:'));
let isPowerOf3 = false;
if (!isNaN(numberCheck) && numberCheck > 0) {
    let current = 1;
    while (current <= numberCheck) {
        if (current === numberCheck) {
            isPowerOf3 = true;
            break;
        }
        current *= 3;
    }
}
if (isPowerOf3) {
    console.log(`${numberCheck} can be obtained as 3 to some power.`);
    alert(numberCheck + ' can be obtained as 3 to some power.');
} else {
    console.log(`${numberCheck} it is NOT possible to get 3 to some power.`);
    alert(numberCheck + ' it is NOT possible to get 3 to some power.');
}