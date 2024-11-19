console.log("hii sagar");


// //********** */ function -> function statement
function fn(a) {
    console.log("i am a fn ", a);
    return "aaaaasdad";
}

// const rVal = fn("hello");
// console.log("rVal", rVal);

// const anotherVar = fn;
// const rVal = anotherVar("something");
// console.log("rVal",rVal);
// // const rVal = fn("hello");
// console.log("anotherVar",anotherVar)
// console.log("rVal", rVal);
// anotherVar("something");

// // // function expression
// const refFunction = function (helloParam) {
//     console.log("Hello i am function");
// }

// refFunction("hello");

// // ******************function -> arrow function
const arrowFn = (helloparm) => {
    console.log("hello", helloparm);
}
arrowFn("hello");

// ***********************hii , sagar// iife -> imedatley invoke function expression
(function(a){
    console.log("hii , sagar" ,a);
})("hii");