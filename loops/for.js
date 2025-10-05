/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

while(condition){

} */

//loops for arrays
//for of loop
const arr=[1,2,3,4,5]
for (const val of arr) {
   // console.log(val)
  
}

//maps
const map=new Map()
map.set('IN','India')
map.set('u','USA')
map.set('INH','Indvbhvkia')
 console.log(map)

 for (const [key,value] of map) {
    //console.log(key,value)
    
 }

 const myObj={
    js:'javascript',
    py:'python',
    cpp:'c++'

 }

 for (const key in myObj) {
    //console.log(`${key} shortcut is for ${myObj[key]}`)
 }

 const coding=['js','ruby','java']
 coding.forEach( function (item) {
    //console.log(item)
 } )

 coding.forEach( (item)=>{
    //console.log(item )
 } )

 const nums=[1,2,3,4,5,6,8,9,10]
/* 
let x=nums.filter((number)=>number>2)
console.log(x)
let y=nums.map((number)=>number+10)
console.log(y) */

const newNums=nums
              .map((number)=>number*10)
              .map((number)=>number+10)
              .filter((number)=>number>=40)
//console.log(newNums)

const newNum=nums.reduce(function(acc,curr){
    console.log(curr);
    return curr+acc;
},0)

console.log(newNum)

