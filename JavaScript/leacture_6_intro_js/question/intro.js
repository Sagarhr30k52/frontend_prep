// console.log("hello");
// console.log("intro to js");

let a;
console.log("1. Initial value of a:", a);  // What will this print? --> undifine

a = 15;
let b = a / 2;
console.log("2. Value of b after dividing a by 2:", b);  // What will this print? -->7.5

b = b - 4.5;
console.log("3. Value of b after subtracting 4.5:", b);  // What will this print? --> 3

let c = b * 2;
console.log("4. Value of c after multiplying b by 2:", c);  // What will this print? --> 6

let d = c / 3;
console.log("5. Value of d after dividing c by 3:", d);  // What will this print? -->2

let e = undefined;
console.log("6. Initial value of e:", e);  // What will this print? --> undifine

e = e + 5;
console.log("7. Value of e after adding 5:", e);  // What will this print? --> NaN (undifine + something is = NaN)