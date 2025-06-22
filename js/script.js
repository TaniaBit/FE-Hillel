`use strict`;

function getPositiveNumbers(arr) {
    const positiveNumbers = [];

    if (arr.length === 0) {
        return "Transmission array is empty";
    }

    for (let i = 0; i < arr.length; i++) {
       if (arr[i] > 0) {
            positiveNumbers.push(arr[i]);
        }
    }

    if (positiveNumbers.length > 0) {
        return positiveNumbers;
    } else {
        return null;
    }
}


const arr = [1, 2, 3, -1, -2, -3];
console.log(getPositiveNumbers(arr));