const parent = document.querySelector('.parent');

// Loop through children
for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}
const div=document.createElement("div")
div.className='main'
// setAttribute() it will ovverride the beofre one


//to add 
//textContent:it will give value which is present in the attribute doesnt matter its visible or not
//innerHTML: it will give the inner html also
//innerText:it will display the text which is visible

function addLanguage(langname){
    const li=document.createElement('li');
    li.innerHTML=`${langname}`
    document.querySelector(".language").appendChild(li)

}
addLanguage('python');
//it is more optimised   it will not traverse the whole dom
function addOptiLange(langname){
    const li=document.createElement('li')
    li.appendChild(document.createTextNode(langname))
    document.querySelector(".language").appendChild(li)

}

addOptiLange('khvdkhv')

//edit
const sl=document.querySelector("li:nth-child(2)")
//sl.innerHTML='mojo'
const newli=document.createElement('li')
newli.textContent='mojo'
sl.replaceWith(newli)

//remove
const lastlang=document.querySelector('li:last-child')
lastlang.remove()

//event lsitener has 3 parameters event like cliked,hover function and true/false,, false: event bubbling(it will first do the event which is neareer to the operation ) and true:event capturing (vice versa of false)



// async code
/* javascript is synchronous and single threaded language

blocking code vs non blocking code
block execution read file async
blocking code: block the flow of python read file synchronous
non blocking code: does not block  and  read file async
 */

