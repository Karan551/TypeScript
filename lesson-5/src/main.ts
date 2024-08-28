// It is string type.
type One = string;

// It is union type.
type Two = string | number;
// It is literal type.
type Three = "hello";

// convert less or more specific

let a: One = "hello";

let b = a as Two; // less specific

let c = a as Three; // more specific

console.log(b);
console.log(c);

// second method (but this will not work in tsx file.)
let d = <One>"world";

let e = <string | number>"world";

// --------

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

console.log(addOrConcat(4, 7, "concat"));

// we have to aware here ts sees no problem but string is returned here
let myVal: number = addOrConcat(8, 9, "concat") as number;
let myVal2: number = addOrConcat(8, 9, "add") as number;

console.log("This is result:", myVal, typeof myVal);
console.log("This is result:", myVal2, typeof myVal2);

// -----------
// 10 as string;
10 as unknown as string;

//  --------------------- DOM
// if we want to make an element not null then we will put !(exclamation) sign.
const img = document.querySelector("img")!;
const myImg = document.getElementById("myFavImg") as HTMLImageElement;

// this will not work in tsx file.
const nextImg = <HTMLImageElement>document.getElementById("myNextFavImg");

/* 
img.src;
myImg.src;

nextImg.src; 

*/
