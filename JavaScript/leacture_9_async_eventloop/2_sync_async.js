/**
 * question 1
 * 
 * synchronous : the code that is executed line by line
 * 
 **/
console.log("before");
function fn(){
    console.log("i am fn");
} 
fn();
console.log("after");

/**
 * 
 * asynchronous code : a part of code is executed
 * fist and another a section of code is delayed and that part is executed later one
 * 
 * */
// Ques-2 
//1
console.log("Before");
setTimeout(fn, 5000);
// //2
function fn() {
    console.log("I am fn");
}
//3
console.log("After");
