console.log("hello DOM");
// read the content from the page

// 1. select

// html is inside second child
// console.log(document.children);

// const html = document.children[0];
// console.log(html.children);
// const body = html.children[1];

// console.log("innerHTML", body.innerHTML);


/**
 * 
 * querySelector -> selector -> first matching
 * return the element 
 * const body = document.querrySelector("body");
 * console.log(body.innerHTML);
 * 
 * */ 



// const pTag = document.querySelector("p");
// console.log("contect inside p :", pTag.innerText);
// const ptagArr = document.querySelectorAll("P");
// console.log("ptag arr = ", ptagArr);
// const textData = ptagArr[1].innerText;
// console.log("2nd p data = ", textData);

// // ******class******
// const classPtag = document.querySelector(".first");
// console.log("first: ", classPtag.innerText);

// // *****id*******
const idPtag = document.querySelector("#unique");
// // read
// console.log("second = ", idPtag.innerText);

// console.log("===================================");
// const body = document.querySelector("body");
// console.log("body_innerHTML", body.innerHTML);

// console.log("==================================");
// const body = document.querySelector("body");
// console.log("body_innerText", body.innerText);
// console.log("text content", body.textContent);


// update -> property
// const idPtag = document.querySelector("#unique");
// idPtag.innerText = " i was updated";

// console.log("innerText of idptag now= ", idPtag.innerText);

// //styling->
// idPtag.style.backgroundColor = "blue";
// idPtag.style.color = "white";

// const idValue = idPtag.getAttribute("id");
// console.log("idvalue = ", idValue);

// delete
// idPtag.remove();

// creation

const liElem = document.createElement("li");
// add text, styling to li
liElem.innerText = "i am a task";

// select their parent
const ulArr = document.querySelectorAll(".list");

// append to that parent 
ulArr[1].appendChild(liElem);