class Coder {
  constructor(
    public name: string,
    public music: string,
    private age: number,
    protected lang: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge() {
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
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  getLang() {
    return `I Write in ${this.lang}`;
  }
}

const ganesh = new WebDev("Mac", "Ganesh", "Flute", 18);
// console.log(ganesh.name);
// console.log(ganesh.getLang());
/* 
console.log(ganesh.age);
console.log(ganesh.lang); 
*/

// ------------------------------ Using interface / type in class

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const page = new Guitarist("Master", "Guitar");
// console.log(page.play("strums"));

// -----------------

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

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
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  get data(): string[] {
    return this.dataState;
  }

  set data(value: string[]) {
    if (
      Array.isArray(value) &&
      value.every((eachElement) => typeof eachElement === "string")
    ) {
      this.dataState = value;
    } else {
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
