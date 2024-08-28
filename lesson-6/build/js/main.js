"use strict";
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello ${this.name} and Your Age : ${this.age}`;
    }
}
/*
private variable ===> This type of variable are only access with in that class where that is created and they are not accessible from outside the class and derived or subclass also.

protected variable ===> This type of variable are access with that class and their derived class or subclasses also but not access from outside the class.

*/
// create an object
const Dave = new Coder("Dave", "Rock", 42);
// console.log("this is user", Dave.name);
// console.log("this is user", Dave.music);
// console.log(Dave.age);
// console.log(Dave.lang);
// console.log("this is user", Dave.getAge());
// -------------Inheritance----------
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I Write in ${this.lang}`;
    }
}
const ganesh = new WebDev("Mac", "Ganesh", "Flute", 18);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarist("Master", "Guitar");
// console.log(page.play("strums"));
// -----------------
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Mahesh = new Peeps("Mahesh");
const Steve = new Peeps("Steve");
/*
 console.log(John.id);
console.log(Steve.id);
console.log("Mahesh id ", Mahesh.id);

console.log("Total objects are created", Peeps.count);
 */
// ------------------------- get and setter with class and objects
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((eachElement) => typeof eachElement === "string")) {
            this.dataState = value;
        }
        else {
            throw new Error("Please pass an array of strings.");
        }
    }
}
// create an object
const myBands = new Bands();
console.log(myBands.data);
myBands.data = ["IronMan", "Hulk", "SpiderMan"];
console.log(myBands.data);
myBands.data = [...myBands.data, "Captain America", "Nagraj"];
console.log(myBands.data);
//myBands.data = ["ShaktiMan", 69878698]; //must be string of array
