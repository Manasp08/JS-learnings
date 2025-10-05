const heading=document.querySelector(".head")

const ji=()=>{
    heading.innerHTML='hello ji';
    console.log("heading change");
}





const changeMe=setTimeout(ji,2000);

//if u r declaring function elsewhere just give the refrence not execute in the setTimeout

const button=document.querySelector(".stop")
button.addEventListener("click",()=>{
    clearTimeout(changeMe)
    console.log("stop")
})

//setInterval(function(str),1000, str)