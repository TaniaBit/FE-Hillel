`use strict`;

// Write a function greetUser that takes one parameter — the username

function greetUser(name) {
    return `Hello, ` + name + `!`;
}


let userName = prompt(`Enter your name:`);
alert(greetUser(userName));