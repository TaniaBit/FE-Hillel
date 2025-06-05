`use strict`;

let userName = prompt(`What is your name?`);

let ageInput = prompt(`How old are you?`);
let ageUser = Number(ageInput);

let isAgreed = confirm(`Do you agree to participate?`);

let userId = 12345678901234567890n;

let bonusCode = null;

let secondName;

alert(`Hi ${userName}. You age: ${ageUser}. Consent to participate: ${isAgreed}`);
console.log("Name:", userName, typeof userName);
console.log("Age:", ageUser, typeof ageUser);
console.log("Consent:", isAgreed, typeof isAgreed);
console.log("Registration number:", userId, typeof userId);
console.log("Promo code:", bonusCode, typeof bonusCode);
console.log("Nick name:", secondName, typeof secondName);


