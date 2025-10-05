// Select elements
const input = document.querySelector(".in");
const button = document.querySelector(".btn");
const list = document.querySelector(".list");

//add task
button.addEventListener("click",()=>{
    const task=input.value.trim();

    if(task===""){
        alert("enetr valid task");
    }

    //add list
    const li=document.createElement("li")
    li.innerText=task;

    //if completed
    li.addEventListener("click",()=>{
        li.style.textDecoration=li.style.textDecoration=== "line-through"?"none":"line-through"
    })

    //delete button
    const dltbtn=document.createElement("button")
    dltbtn.textContent="X";
    dltbtn.addEventListener("click",()=>{
        list.removeChild(li);
    })

    li.appendChild(dltbtn);
    list.appendChild(li);


    input.value="";

})
