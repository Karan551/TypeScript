const stringArr2 = ["one", "two", "three"];

const guitars2 = ["Strat", "Les Paul", true];
let test2 = [];
test2.push("my", 1, true, 2.5);

// console.log(test2);
// ------To create an empty string array.
let myStringArr: string[] = [];

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

const myNewTuple: [string, number, boolean] = ["hello", 222, true];
myNewTuple[0] = "Hello TypeScript";
console.log(myNewTuple);

// -------- Object
let myObj2: object = [];
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
// console.log(myObj2);
// console.log(exampleObject);
// console.log(typeof myObj2);

type Guitarist2 = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

// we can also to do this work with the help of interface but in interface we don't need to assign we can declare.
interface Guitarist3 {
  // we can create an optional property
  name?: string;
  active: boolean;
  albums: (string | number)[];
}

let evh2: Guitarist2 = {
  name: "Mahesh",
  active: true,
  albums: ["POP", 2],
};

let jp2: Guitarist2 = {
  active: true,
  albums: ["POP", 2],
};

// console.log(evh2);

const myFunction = (params: Guitarist2) => {
  if (params.name) {
    return params.name.toUpperCase();
  }
  return "Hello TypeScript !";
};

// function call
console.log(myFunction(evh2));
console.log(myFunction(jp2));

enum Grade2 {
  A,
  B,
  C,
  D,
}

console.log(Grade2);
console.log(Grade2.A);
console.log(Grade2.B);

// console.log(Grade2.0);
