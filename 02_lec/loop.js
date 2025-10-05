const arr=[1,2,3,4,5]

for(const val of arr){
    /* console.log(val) */
}
//i can use it in anything objects,string etc
//maps
 const map=new Map()
 map.set('IN',"India")

 //for(const [key,val] of map){
 //  console.log(key,val);
 //}

// for objects we use for in loop
const myObj={
    a:1,
    b:2,
    c:3
};

for(const key in myObj){
    console.log(myObj[key])
    console.log(key)
}

const coding=['js','hfl','dkvd','dhdv','jhvh']
coding.forEach(element => {
   // console.log(element)
});

//forEach function has parameters(items,index,arr)

const myNums=[1,2,3,4,5,6,7,8,9]
const newNums=myNums.filter((val)=>val>2);
/* console.log(newNums) */

//if we are using { then we have to use return keyword

const nNums=myNums.map((num)=>num+10)
//console.log(nNums)

const gu=myNums.map((num)=>num+10).map((num)=>num*2)
//console.log(gu)

const a = myNums.reduce( (acc,curr)=>acc+curr,0)
console.log(a)
