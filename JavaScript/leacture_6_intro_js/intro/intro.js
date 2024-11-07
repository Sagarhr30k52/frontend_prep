console.log("hii");
// in js we only have number type which include both integer and floating val 
// varaible declaration -> varname is a varibale
// that currently holds undefined
let varName;
// // default value of a variable is undefined
console.log("7",varName);
// js -> nmeric val
varName= 10;
console.log("10", varName);

varName = 10.1;
console.log("13", varName);


// *****string & char******in js we only have string no char
let newVar;
newVar = "i am a strig";
console.log("19", newVar);

// *******boolen******** 
newVar = true;
console.log("23", newVar);



//******null****** */ // null[user-defined], undefined(non-existence)[js]
newVar = null;
console.log("29", newVar);



/*****
 * how to know the current type of a value that 
 * a  variable is having
 * There only numbers
 * There only strings
 * What types of values it can have
 *  * Primitive -> 
 *      ->number , strings, booleans, null ,undefined
 *      ->bigInt, symbols
 *  * Non-primitive-> 
 *          -> functions , arrays and objects
 * ***/


// *****typeof()*******function typeof() use to find the type of data in a var

// varName=10;
// varName=false
// varName=10.1;
// varName="hello";
// console.log(5/2);
// varName='h'
console.log("55" , typeof(varName));


/***********
 * 
 * conditional -> if else and switch cases 
 * **************/

let num = 10;
if(num %2 == 0){
    console.log("65", "i am even");
}
else{
    console.log("68", "i am odd");
}

// ****switch case***** 
let day = "thru";
switch(day){
    case "tues":
        console.log("holiday");
        break;
    
    case "mon":
    case "wed":
    case "thru":
        console.log("working day");
        break;

    case "sat":
    case "sun":
        console.log("weekend");
        break;
    default:
        console.log("wrong input");
}


// *******loops********
/****
 * loops : -> while , for loop , do while, for each
 *
 * ****/

// for(let num=1;num<=10;num++){
//     console.log("number is ", num);
// }

// 


/***
 * functions -> resuable block of code create
 * ***/

console.log("hello");
function fn(){
    console.log("i am a function");
}
fn();
console.log("hello again");


// function fn(a, b) {
//     console.log("a", a);
//     console.log("b", b);
//     let d = a + b;
//     return d;
// }

// // fn("Hello ", "World");
// let result = fn(10, 20);
// console.log("result", result);


/** 
 * string : how string work
 * concatenation : appending(adding) a value to string
 */

let string1 = "i am string";
let string2 = " i am also a string";

// template sstring use to use string of multi line
let templateString = `hii!!
i am sagar sharma`;
console.log("141", templateString);

// string can be concatinate by using + sign
function greet(firstNameVar) {
    // console.log("Hi " + firstNameVar +"!")
    console.log('Hi ' + firstNameVar +'!');
    
    console.log(`Hi ${firstNameVar}!`);
    }
    
    
    let firstName = "Sagar";
    greet(firstName)