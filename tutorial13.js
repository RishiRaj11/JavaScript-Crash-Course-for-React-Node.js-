/**
 * Tutorial 13 — JavaScript Objects Fundamentals
│
├── What is an Object?
├── Creating Objects
├── Properties
├── Dot notation
├── Bracket notation
├── Add properties
├── Update properties
├── Delete properties
├── Nested Objects
└── Object methods
 */

//1 creating Obj
const user = {
  name: "Rishi",
  age: 30,

  isActive:true,
  address:{
    city: "Kolkata",
    state:"Wb"
  },
  skills:["Js","React","Node","Express","SQL","AWS","AZURE","Python"],
  greet:function(){
    console.log("Hello")
  }
};
// user.state="WB"
// user.age=20

// delete user.age

// const address={}
// address.vill="Simra"
// address.city="Sitamarhi"


// const user1=new Object();

// console.log(user.name,user.age)
// const pr="pr1"
// console.log(user[pr])









