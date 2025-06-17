`use strict`;

function padString(str, length, padChar, padLeft = false) {

    if (typeof str !== `string`) {
        return `error: first argument must be a string`;
    }

    if (typeof length !== `number` || isNaN(length)) {
        return `error: second argument must be a number`;
    }

    if (typeof padChar !== `string` || padChar.length !== 1) {
        return `error: third argument must be a single character string`;
    }

   if (typeof padLeft !== `boolean`) {
        return `error: fourth argument must be a boolean`;
    }

   if (str.length >= length) {
        return str.substring(0, length);
    }

    const paddingLength = length - str.length;
    const padding = padChar.repeat(paddingLength);

   return padLeft ? padding + str : str + padding;
}

console.log(padString(`hello`, 8, `*`));
console.log(padString(`hello`, 6, `*`, true));
console.log(padString(`hello`, 2));
console.log(padString(`hello`, 8));
console.log(padString(123, 8, `*`));
console.log(padString(`hello`, `eight`, `*`));