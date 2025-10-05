const start=document.querySelector(".start")
const stop=document.querySelector(".stop")


//genertae a random color

const change= ()=>{
    const hex="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}

let Interval;
const startChangingColor=function(){
   if(!Interval){
      Interval= setInterval(changeBgcolor,1000);
   }
   function changeBgcolor(){
     document.body.style.backgroundColor=change();
   }
}
const stopChangingColor=function(){
    clearInterval(Interval)
    Interval=null;
}


start.addEventListener("click",startChangingColor)
stop.addEventListener("click",stopChangingColor)