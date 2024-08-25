"use strict";
const stringArr2 = ["one", "two", "three"];
const guitars2 = ["Strat", "Les Paul", true];
let test2 = [];
test2.push("my", 1, true, 2.5);
// console.log(test2);
// ------To create an empty string array.
let myStringArr = [];
myStringArr.push("Hello TypeScript");
// console.log(myStringArr);
// --------------- assigning the value of an array.
stringArr2[0] = "five";
stringArr2.push("myNum");
// console.log(stringArr2);
guitars2[0] = "Myguitar";
guitars2.push("banjo", true);
// console.log(guitars2);
const mixedData2 = ["EVH", true, 2145];
// -------------Tuple
// ---In Tuple we will have to define same number of elements in same order that we will declare.
const myNewTuple = ["hello", 222, true];
myNewTuple[0] = "Hello TypeScript";
console.log(myNewTuple);
// -------- Object
let myObj2 = [];
myObj2 = myStringArr;
console.log(myObj2);
myObj2 = {};
//  To create an object
const exampleObject = {
    prop1: "Ganesh",
    prop2: true,
    prop3: 3,
};
exampleObject.prop1 = "Mahesh";
let evh2 = {
    name: "Mahesh",
    active: true,
    albums: ["POP", 2],
};
let jp2 = {
    active: true,
    albums: ["POP", 2],
};
// console.log(evh2);
const myFunction = (params) => {
    if (params.name) {
        return params.name.toUpperCase();
    }
    return "Hello TypeScript !";
};
// function call
console.log(myFunction(evh2));
console.log(myFunction(jp2));
var Grade2;
(function (Grade2) {
    Grade2[Grade2["A"] = 0] = "A";
    Grade2[Grade2["B"] = 1] = "B";
    Grade2[Grade2["C"] = 2] = "C";
    Grade2[Grade2["D"] = 3] = "D";
})(Grade2 || (Grade2 = {}));
console.log(Grade2);
console.log(Grade2.A);
console.log(Grade2.B);
// console.log(Grade2.0);
