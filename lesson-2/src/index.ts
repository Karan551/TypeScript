//------------- Data Type

let myName: string = "Ganesh";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

meaningOfLife = 44;
isLoading = false;

album = 50;
album = "Hello TypeScript";
album = true;

const sum = (a: number, b: number) => {
  return a + b;
};

// ----union DataType
let postId: string | number;
postId = "Hello";

let isActive: boolean | number;

let re: RegExp = /\w+/g;

console.log(typeof postId);
console.log(typeof re);

console.log(sum(12, 15));

console.log(typeof sum);
