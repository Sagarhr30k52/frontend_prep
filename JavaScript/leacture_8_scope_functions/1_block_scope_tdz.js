console.log("block_scope");

// // variable scope
// let a = 10;
// console.log("console 1", a); 
// function fn() {
//     let a = 20;
//     console.log("console 2" ,a);
//     a++;
//     console.log("console 3", a);
// }
// fn();
// console.log("console 4", a);



// let -> block scoped

// what is block -> anything between two curly braces
// * function, loop , conditionls

// let a=10
// console.log(a)
// if (true) {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);


// let a = 10;
// console.log("console 1", a);
// function fn() {
//    let a = 20;
//     console.log("console 2 ", a);
//     a++;
//     console.log("console 3", a);
//     if (a) {
//         let a = 30;
//         a++;
//         console.log("console 4 ", a);
//     }
//     console.log("console 5", a);
// }
// fn();
// console.log("console 6", a);


// every let declared varaiable is dead -> temporal dead zone
// where you can't access it's value
// console.log("after",varName); -->error = cant acess var before initialization
// let varName;
// console.log("after",varName);  --> undifine
// varName=10;
// console.log(varName); -->works normally