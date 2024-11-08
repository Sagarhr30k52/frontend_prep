console.log("arrays");

/*****
 * array in js does not have a fix size it work as a vector of c++
 * we can add remove element from it
 */

let arr = [1,2,3,4];

// let arr2 = [];
// console.log(arr2);
// console.log(arr);

// iteration

// for(let i = 0; i<arr.length; i++){
//     console.log("index ", i, "value " ,arr[i])
// }

/***********important methods 
 * 1. add last ->push
 * 2. remove last ->pop
 * 3. add first -> unshift
 * 4. remove first -> shift 
 */

// 1.push
arr.push(15);
console.log("after push 15",arr);

// 2. pop
arr.pop();
console.log("after pop",arr);

// 3.unshift
arr.unshift(15);
console.log("adding from starting",arr);

// 4. shift ->remove ele from start
arr.shift();
console.log("after shift" ,arr);

// 5. slice() give the sliced version of an arr takes range (starting index and ending index - 1)
let slicedArr = arr.slice(1,3);
console.log("slicedArr = ", slicedArr,"complete arr", arr);

// 6. splice() remove the element (starting index to starting index + 2nd input) from orignal arr 
 
// splice(1,3) ->remove 3 element from index 1
// arr.splice(1, 3);
// console.log("splicedArr ", arr);

// 7. indexOf() return the index to input in a arr
console.log("index of 2 in arr", arr.indexOf(3));

// 8. includes() return true if a element is present in it
console.log("is 4 present in arr?" ,arr.includes(4));

// 9. join() make a string of the element of an arr
let fruits = ["apple", "orange", "mango", "banana"];
let str = fruits.join("+");
console.log("list of fruits witth + sign=", str);


// question -> create a function ssuch that
// 1. add a element named "new" to the give arr at 2nd index
// 2. remove 3rd element
// 3. join the new arr to create a string
function advancedManipulation(words){
    let firstWord = words.shift();
    words.unshift("new");
    words.unshift(firstWord);
    // remove
    words.splice(2,1);

    // join
    let str = words.join(",");

    return str;
}

let result = advancedManipulation(fruits);
console.log(result);