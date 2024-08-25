"use strict";
// --------- Literal Types
let myName;
let userName;
userName = "Any";
// ----------- functions
const logMsg = (message) => {
    console.log(message);
};
const add = (a, b) => {
    return a + b;
};
console.log(userName);
logMsg("Hello TypeScript");
console.log(add(4, 5));
const subtract = (c, d) => {
    return c - d;
};
const multiply = (c, d) => {
    return c * d;
};
console.log(multiply(8, 4));
