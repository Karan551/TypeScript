//  --------------- type alias
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type userId = stringOrNumber;

// --------------- Literal Types
// we can provide that only values that we will declare or annoate
let myName: "ganesh";
myName = "ganesh";

let userName: "Mahesh" | "Ganesh" | "Kartik";
// we cannot assign any other values that we have not declared. If any other values we want to assign then this will give an error.
userName = "Kartik";
// console.log("User name is:", userName);

// --------------- Functions
// create a arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg(`Return value is :- ${add(22, 5)}`);
// logMsg(add(14, 15));

const subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction = (a: number, b: number) => number;

const multiply: mathFunction = (c, d) => {
  return c * d;
};

// logMsg(multiply(9, 5));

// ---- function with optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c == "undefined") {
    return a + b;
  }
  return a + b + c;
};

// logMsg(addAll(12, 14, 16));
// logMsg(addAll(14, 16));

// ---- function with default parameters

const sumAll = (a: number = 5, b: number, c: number = 10) => {
  return a + b + c;
};

// logMsg(sumAll(12, 15));
// logMsg(sumAll(undefined, 15));
// output ===>  5 + 15 + 10 = 30

// ---- function with rest parameters

const total = (a: number, ...nums: number[]) => {
  return a + nums.reduce((prev, current) => prev + current);
};

logMsg(total(10, 20, 30, 50));

// ---- never type
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) {
      break;
    }
  }
};

// custom type guard
const isNumber = (value: any) => {
  return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: string | number): string => {
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
