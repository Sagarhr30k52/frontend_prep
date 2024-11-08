console.log("stack and heap");

// value type variable are stored in stack (ram) number, str, boolen
let a = 10;
let str = "aaaaaaswdsc";
let flag = true;


// refrence type variable -> hard disk(heap)
// arrays , functions
let arr = [1,2,3,4];

function fn(){
    console.log("hii sagar");
}

// value change
// let a = 20; -> not running giveing a error
a = 20;
// let str = "hii"; -> same error
str = "hiii";
console.log(a, str);

let arr2 =[30,40,50];
arr = arr2;
console.log("arr1 = ", arr, "arr2 = " , arr2);
// value of arr change as the refrence of whole was stored in arr2 is copied to arr


const varName = 20;
// varName = 10; -> gives a error as const value ccant be changed

const varStr ="hello sagar g";
// varStr = "heelo only"; ->error

const varArr = [1,2,3,4];
const varArr2 = [10,20,30,40];

// varArr = varArr2; gives error cant change the value of a const var

// all the function of a arr even works when the var is constant
varArr.push(5);
console.log(varArr);