"use strict";
// --------------- Literal Types
// we can provide that only values that we will declare or annoate
let myName;
myName = "ganesh";
let userName;
// we cannot assign any other values that we have not declared. If any other values we want to assign then this will give an error.
userName = "Kartik";
// console.log("User name is:", userName);
// --------------- Functions
// create a arrow function
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg(`Return value is :- ${add(22, 5)}`);
// logMsg(add(14, 15));
const subtract = function (c, d) {
    return c - d;
};
const multiply = (c, d) => {
    return c * d;
};
// logMsg(multiply(9, 5));
// ---- function with optional parameters
const addAll = (a, b, c) => {
    if (typeof c == "undefined") {
        return a + b;
    }
    return a + b + c;
};
// logMsg(addAll(12, 14, 16));
// logMsg(addAll(14, 16));
// ---- function with default parameters
const sumAll = (a = 5, b, c = 10) => {
    return a + b + c;
};
// logMsg(sumAll(12, 15));
// logMsg(sumAll(undefined, 15));
// output ===>  5 + 15 + 10 = 30
// ---- function with rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, current) => prev + current);
};
logMsg(total(10, 20, 30, 50));
// ---- never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string") {
        return " This is string";
    }
    if (isNumber(value)) {
        return " This is number";
    }
    return createError("Something Went wrong. Please enter a number or string.");
};
logMsg(numberOrString(24));
logMsg(numberOrString("hello"));
// logMsg(numberOrString([2, 4]));
