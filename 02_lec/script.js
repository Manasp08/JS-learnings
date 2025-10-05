/* //array
const heroes=['thor','iron','spider'];
const dc=['bkjbjk','kv','cvjcv']

 /* heroes.push(dc)

 console.log(heroes) */
/* const allNewheroes=[...heroes,...dc]
console.log(allNewheroes) */

//singleton
//object literals

const mySim=Symbol("key1");
const JsUser={
    name:"manas",
    [mySim]:"mykey1",
    age:22,
    location:"bbsr",
    isLoggedIn:false
}

console.log(JsUser.name)
console.log(JsUser['name'])
JsUser.greeting=function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())