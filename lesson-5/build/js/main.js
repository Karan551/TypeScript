"use strict";
// convert less or more specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
console.log(b);
console.log(c);
// second method (but this will not work in tsx file.)
let d = "world";
let e = "world";
// --------
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
};
console.log(addOrConcat(4, 7, "concat"));
// we have to aware here ts sees no problem but string is returned here
let myVal = addOrConcat(8, 9, "concat");
let myVal2 = addOrConcat(8, 9, "add");
console.log("This is result:", myVal, typeof myVal);
console.log("This is result:", myVal2, typeof myVal2);
// -----------
// 10 as string;
10;
//  --------------------- DOM
// if we want to make an element not null then we will put !(exclamation) sign.
const img = document.querySelector("img");
const myImg = document.getElementById("myFavImg");
// this will not work in tsx file.
const nextImg = document.getElementById("myNextFavImg");
/*
img.src;
myImg.src;

nextImg.src;

*/
