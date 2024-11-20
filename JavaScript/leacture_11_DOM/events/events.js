console.log("events");

const btn = document.querySelector("button");
const box = document.querySelector(".box");

// btn.onclick = function(){
//     alert("button is clicked");
// }

// btn.addEventListener("click", function(){
//     box.style.backgroundColor = "red";
// })


const color = ["red", "green", "blue", "pink", "purple", "lightgreen"];

let i = 0;
btn.addEventListener("click", function (){
    i = i% color.length;
    box.style.backgroundColor = color[i];
    i++;
    // btn.style.visibility = "hidden"; // ---->>>will hide the button and will stop working again
});
