let stringArr = ["one", "hey", "Master"];
// create an empty array
let myArr: string[] = [];
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

let test: any[] = [];
test.push("12", "1434");
test.push(["12", "Python"]);
// console.log(test);

// ---------------Tuple

let myTuple: [string, number, boolean] = ["Ganesh", 25, true];

// console.log(typeof myTuple);
// myTuple[0] = true;
myTuple.push(23);
myTuple.push(3);
// console.log(myTuple);
// console.log(myTuple instanceof Array);

// --------- objects
let bands: string[] = [];
let myObj: object;
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
// --------------

/*
 type Guitarist = {
  name: string;
  active: boolean;
  albums?: (string | number)[];
  //   follower: [string, number];
};
 */

interface Guitarist {
  name?: string;
  active: boolean;
  albums: [string, number];
}
// if we want to make an optional property then we will have to write ? (question mark) sign

// type and interface is similar but when we used type then we will have to assign values but when we will use interface then we don't require to assign values this is only difference.

let evh: Guitarist = {
  name: "Master",
  active: true,
  albums: ["43", 22],
};
let jp: Guitarist = {
  active: true,
  albums: ["pop", 343],
};

console.log(evh);
console.log(jp);
// ---------function
const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `Hello ${guitarist.name.toLocaleUpperCase()}`;
  }
  return "Hello";
};

console.log(greetGuitarist(jp));

// ----------------------enums

enum Grade {
  U,
  A,
  B,
  D,
  E,
}

console.log(Grade);
console.log(Grade.D);

console.log(Grade[4]);
