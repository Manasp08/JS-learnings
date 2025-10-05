/* const tinderUser=new Object() */ //singleton object

const tinderUser={} //non singleton object
tinderUser.id="123abc";
tinderUser.name="sammy";
tinderUser.isLoggedIn=false;

/* console.log(tinderUser) */
const user={
    email:"vajv@gmail.com",
    fullName:{
        firstname:'hitesh',
        lastname:'choudhry'
    }
}
/* console.log(user.fullName) */

const obj1={1:"a",2:"b"}
const obj2={3:'a',4:'g'}

//const obj3={...obj1,...obj2}  one option most;y use this one

const obj3=Object.assign({},obj1,obj2)  //another option to concatenate
//console.log(obj3)

const course = {
    name: 'hvejvh',
    price: 'hvhj',
    teacher: "jhvk"
}

const { teacher: instructor } = course;

/* console.log(teacher) */  // <-- this is ignored by JS
/* console.log(instructor);  */   // jhvk



