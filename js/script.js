`use strict`;
//specifies the username
let nameUser = `John Doe`;
console.log(typeof nameUser);

//determines the age of the user
let ageUser=20;
console.log(typeof ageUser);

//shows whether the user is verified
let isVerified = true;
console.log(typeof  isVerified);

//indicates the date of user registration
const dateOfRegistration = `2025-06-02`;
console.log(typeof dateOfRegistration);

//user card number
const cardNumber = 4149_0000_0000_0000n;
console.log(typeof cardNumber);

// user promo code
let promoCode = null;
console.log(typeof promoCode);

// nickname or alternate username
let nameReserve = `Summer`;
console.log(typeof nameReserve);

//amount of bonuses
let amountOfBonuses = 100;
console.log(typeof amountOfBonuses);

console.log(`User ${nameUser} , age ${ageUser} years old, nickname ${nameReserve}.`);
console.log(`Registered: ${dateOfRegistration} , verified :${isVerified}.`);
console.log(`Promo code: ${promoCode} , card number: ${cardNumber}, has ${amountOfBonuses} bonuses.`);



