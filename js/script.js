`use strict`;

function generateKey(length, characters) {
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }

    return result;
}

let lengthUser = +(prompt('Enter the length of the string'));
let charactersUser = prompt('Enter any characters');

const key = generateKey(lengthUser, charactersUser);
console.log(key);
alert(key);