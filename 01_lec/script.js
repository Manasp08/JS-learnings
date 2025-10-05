"use strict";//treat all js code as newer version

//number=>2 to power 53 
//bigint
//string=>" "
//boolean=>true/false
//null=>standard value
//undefined=>
// symbol=>unique


//object
console.log(typeof null);//object

let score="33";


let valueInNumber=Number(score)
console.log(typeof valueInNumber)

// "33"=>33
//"33abc"=>NaN
//1=>true
//""=>false
//"hitesh"=>true

/* let myDate=new Date() */
/* console.group(myDate.toString())
console.group(myDate.toDateString())
console.group(myDate.toLocaleString()) */

let timestamp=Date.now()

console.log(timestamp)
