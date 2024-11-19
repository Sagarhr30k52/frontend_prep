console.log("event loop");
let a = true;
console.log("before");
function fn(){
    a = false;
    console.log("broke");
}
setTimeout(fn, 1000);
console.log("after");
while(a){

}

// // the above code will keep the page refreshing but the while never broke 
/**
 * resion***********
 * there are stack one for funtion of javascript and another one for the function provided
 * 
 * as we call setTimeout it goes to the browser stack 
 * there is a condion that function from browser stack only go to the execution stack if its empty
 * 
 * and the while loop never let to be empty**/ 