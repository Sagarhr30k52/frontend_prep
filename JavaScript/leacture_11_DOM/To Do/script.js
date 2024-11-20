// select everthing required
const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".list");

// 2. user intaraction
const inputHandler = function(){
    // click -> value get
    const newTask = input.value;
    if(newTask.length == 0) return;

    /*******add task*******/
    // element crate
    const taskElem = createTask(newTask);

    // append
    taskList.appendChild(taskElem);
    // clear the input
    input.value = "";
    const deleteBtn = taskElem.children[1]; // 2 if permanent is working
    
    deleteBtn.addEventListener("click", function (){
        taskElem.remove();
    })

        // const pButton = taskElem.children[0];
        // pButton.addEventListener("click", function(){
        //     if(pButton.innerText == "Permanent"){
        //     deleteBtn.style.visibility = "hidden";
        //     pButton.textContent = "undo permanent";
        // }
        // else{
        //     deleteBtn.style.visibility = "visible";
        //     pButton.textContent = "Permanent";
        // }
        
        // })
}

function createTask(newTask){
    const div = document.createElement("div");
    const li = document.createElement("li");
    const button = document.createElement("button");
    const pButton = document.createElement("button");
    pButton.textContent = "Permanent";
    button.innerText = "Delete";
    li.textContent = newTask;

    // div.appendChild(pButton);
    div.appendChild(li);
    div.appendChild(button);
    return div;


}

button.addEventListener("click", inputHandler);

const secondBtn = document.querySelector(".second");

secondBtn.addEventListener("click", function () {
    const name = prompt("What is your name");
    console.log("name", name);
})