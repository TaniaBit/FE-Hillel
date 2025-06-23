// The arithmetic mean is more devoid of numbers

function averageOfNumbers(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === `number` && !isNaN(arr[i])) {
            sum += arr[i];
            count++;
        }
    }

    if (count === 0) {
        return `The array has no numeric elements`;
    }
    return sum / count;
}

console.log(`1 The arithmetic mean is more devoid of numbers`);
const mixedArray = [1, `hello`, 3, null, 7, true];
console.log(averageOfNumbers(mixedArray));


// 2 function doMath

function doMath(x, znak, y) {
    switch (znak) {
        case `+`:
            return x + y;
        case `-`:
            return x - y;
        case `*`:
            return x * y;
        case `/`:
            return y !== 0 ? x / y : `Division by zero!`;
        case `%`:
            return x % y;
        case `^`:
            return Math.pow(x, y);
        default:
            return `Invisible operator.`;
    }
}

console.log(`2 function doMath`);
console.log(doMath(5, '*', 3));

// 3 Reservation of the two-world massif

function create2DArray() {
    const rows = parseInt(prompt(`Enter the number of rows (main array):`));
    const cols = parseInt(prompt(`Enter the number of columns (internal array):`));
    const result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            result[i][j] = prompt(`Enter a value for the element [${i}][${j}]:`);
        }
    }

    return result;
}

console.log(`3 Reservation of the two-world massif`);
const array2D = create2DArray();
console.log(array2D);


// 4 View of the set symbols in a row

function removeChars(str, charsToRemove) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (!charsToRemove.includes(str[i])) {
            result += str[i];
        }
    }

    return result;
}

console.log(`4 View of the set symbols in a row`);
console.log(removeChars(` hello world`, [`l`, `d`])); 


