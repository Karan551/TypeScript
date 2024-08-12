"use strict";
let stringArr = ["one", "hey", "Master"];
// create an empty array
let myArr = [];
stringArr.push("hello");
// console.log(stringArr);
// console.log(myArr);
myArr.push("hello");
// console.log(myArr);
// ---------------
let guitars = ["strat", 5150, "myNum"];
guitars.push(45);
// console.log(guitars);
// ----------
const mixedData = ["hello", 4545, true];
mixedData.push("js");
// console.log(mixedData);
let test = [];
test.push("12", "1434");
test.push(["12", "Python"]);
// console.log(test);
// ---------------Tuple
let myTuple = ["Ganesh", 25, true];
// console.log(typeof myTuple);
// myTuple[0] = true;
myTuple.push(23);
myTuple.push(3);
// console.log(myTuple);
// console.log(myTuple instanceof Array);
// --------- objects
let bands = [];
let myObj;
myObj = [];
// console.log(typeof myObj);
// console.log(myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Ganesh",
    prop2: true,
};
exampleObj.prop1 = "Mahesh";
// if we want to make an optional property then we will have to write ? (question mark) sign
// type and interface is similar but when we used type then we will have to assign values but when we will use interface then we don't require to assign values this is only difference.
let evh = {
    name: "Master",
    active: true,
    albums: ["43", 22],
};
let jp = {
    active: true,
    albums: ["pop", 343],
};
console.log(evh);
console.log(jp);
// ---------function
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toLocaleUpperCase()}`;
    }
    return "Hello";
};
console.log(greetGuitarist(jp));
// ----------------------enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["E"] = 4] = "E";
})(Grade || (Grade = {}));
console.log(Grade);
console.log(Grade.D);
console.log(Grade[4]);
