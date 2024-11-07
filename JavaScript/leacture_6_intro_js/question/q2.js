console.log("hii");



/* fizz buzz
*  number -> 20
   1->20
   if number divisble by 3 -> fizz
   if number divisble by 5 -> buzz
   if number 3 & 5 both se divisble -> fizzBuzz
   other wise -> number
*  */

let target = 20;
for(let i = 1; i<= target; i++){
    if(i % 5 == 0 && i % 3 == 0){console.log("index " +i + " val = fizzBuzz");
        break;
    }
    else if(i % 5 == 0){
        console.log("index " +i  + " val = fizz");
    }
    else if(i %3 == 0){
        console.log("index " + i+ " val = buzz");
    }
    else{
        console.log("index " + i + " val = " + i);
    }
}