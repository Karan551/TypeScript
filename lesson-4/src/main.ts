// Type alias
type stringOrNumber = string | Number;

type stringOrNumberArray = (string | Number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// --------- Literal Types
let myName: "Dave";

let userName: "Dave" | "John" | "Any";

userName = "Any";

// ----------- functions

const logMsg = (message: any): void => {
  console.log(message);
};

const add = (a: number, b: number): number => {
  return a + b;
};
console.log(userName);
logMsg("Hello TypeScript");

console.log(add(4, 5));

const subtract = (c: number, d: number): number => {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;
const multiply: mathFunction = (c: number, d: number) => {
  return c * d;
};

console.log(multiply(8, 4));
