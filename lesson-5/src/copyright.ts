const year = document.getElementById("year") as HTMLSpanElement;

const thisYear = new Date().getFullYear().toString();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear + ` - ${Number(thisYear) + 1}`;

console.log("this is year", thisYear, typeof thisYear);
console.log("this is year", typeof Number(thisYear));
