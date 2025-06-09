`use strict`;

// Display the numbers from 10 to 20 on a single line separated by commas on the page

console.log(`#1 numbers from 10 to 20`);

let result =  ``;
for (let i = 10; i <= 20; i++) {
    result += i + ((i !== 20) ? `, ` : ``);
}
console.log(result);

// Display the squares of numbers from 10 to 20

console.log(`#2 squares of numbers from 10 to 20`);

for (let i = 10; i <= 20; i++) {
    squarOfNumber = i * i;
    console.log(squarOfNumber);
}

// Display the multiplication table for 7

console.log(`#3 multiplication table for 7`);

let y = 1;
while (y <= 7) {
    console.log(`7 × ${y} = ${7 * y}`);
    y++;
}

// Find the sum of all integers from 1 to 15

console.log(`#4 sum of all integers from 1 to 15`);

let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i ;
}
console.log(sum);

// Find the product of all integers from 15 to 35

console.log(`#5 product of all integers from 15 to 35`);

let product = 1n;
for (let i = 15n; i <= 35n; i++) {
    product *= i ;
}
console.log(product);

// Find the arithmetic mean of all integers from 1 to 500

console.log(`#6 arithmetic mean of all integers from 1 to 500`);

let sumNumber = 0;
let counter = 0;
for (let i = 1; i <= 500; i++) {
    sumNumber += i ;
    counter++;
}
let average = sumNumber / counter;
console.log(average);

// Print the sum of only even numbers in the range from 30 to 80

console.log(`#7 sum of only even numbers in the range from 30 to 80`);

let sumEven = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log(sumEven);

// Output all numbers in the range from 100 to 200 that are multiples of 3

console.log(`#8 all numbers in the range from 100 to 200 are multiples of 3`);

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Given a natural number. Find and print all its divisors
// Determine the number of its even divisors
// Find the sum of its even divisors

console.log(`#8,9 and 10 divisors of a natural number, even divisors, and the sum of its even divisors`);

let naturalNumber = Number(prompt(`Enter a natural number:`));
if (isNaN(naturalNumber) || naturalNumber <= 0) {
    console.log(`Please enter a valid natural number.`);
} else {
    let divisors = ``;
    let evenCount = 0;
    let evenSum = 0;
    for (let i = 1; i <= naturalNumber; i++) {
        if (naturalNumber % i === 0) {
            divisors += i + ` `;
            if (i % 2 === 0) {
                evenCount++;
                evenSum += i;
            }
        }
    }
    console.log(`All divisors of a number ${naturalNumber}: ${divisors}`);
    console.log(`Number of even divisors: ${evenCount}`);
    console.log(`Sum of even divisors: ${evenSum}`);
}

// Print the complete multiplication table from 1 to 10

console.log(`#11 multiplication table from 1 to 10`);

for (let i = 1; i <= 10; i++) {
    for (let y = 1; y <= 10; y++) {
        console.log(`${i} * ${y} = ${i * y}`);
    }
}


