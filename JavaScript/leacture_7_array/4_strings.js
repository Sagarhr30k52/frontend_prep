console.log("strings");



let text = "Hello, World!";
// length tells the length of the string
console.log("length",text.length); // Output: 13

// ********casing of letters
// console.log(text.toUpperCase()); // Output: HELLO, WORLD!
// console.log(text.toLowerCase()); // Output: hello, world!

// *******indexOf return the index of input string
// console.log(text.indexOf("W")); // Output: 7
// console.log(text.indexOf("world")); // Output: -1

// *******includes tell if the input string is thir in the string or not
// text.includes("Hello"); // Output: true
// text.includes("hello"); // Output: false

// ********substring gives the substring in range of inputs
// let subText = text.substring(0, 5);
// console.log(subText); // Output: Hello


// // there are some other funtions as well.

// // The`split()` method splits a string into an array of substrings based on a specified separator.

// let words = text.split(" ");
// console.log(words); // Output: ["Hello,", "World!"]

// let joinedStrings = words.join("_");
// console.log(joinedStrings); // Output: Hello,_World!

// ********trim() remove the unwnted extra space
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();


// let message = "HELLO WORLD";

// *********charAt() -> return the char present at that index
// let char = message.charAt(0);
// console.log(char); // Output: H

// ******charCodeAt() return the ascii value of the chat present at the input value
// let ascii = message.charCodeAt(0);
// console.log(ascii); // Output: 72

// ******replace() ->replace the first input value with second one
// let newText = text.replace("World", "JavaScript");
// console.log(newText); // Output: Hello, JavaScript!