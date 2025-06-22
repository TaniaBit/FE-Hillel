function removeElement(array, item) {
    if (!Array.isArray(array)) {
        return "The first argument is massive";
    }

    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            result.push(array[i]);
        }
    }

    return result;
}

const originalArray = [1, 2, 3, 4, 5, 6, 7];
const newArray = removeElement(originalArray, 5);
console.log(newArray);