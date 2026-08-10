/**
 ## Tutorial-2: Variables & Data Types



 Variables
* Variables = Data Containers
* JavaScript variables are containers for data.
* Variables are identified with names called identifiers.
* JavaScript variables can be declared in 4 ways:

**1. The rules for constructing names (identifiers) are:**

* Names can contain letters, digits, underscores, and dollar signs.
* Names must begin with a letter, a $ sign or an underscore (_).
* Names are case sensitive (X is different from x).
* Reserved words (JavaScript keywords) cannot be used as names.
 */

// //new
// let x=5;
// const y=10;
// //old
// var p=12
// q=13
// let r;
// console.log("Hello world",x +y,q)


//Data types
//Primitive
//number,string,undefined,null,bigint boolean,symbol

//Object
//object,function,array

// // Number
// let length = 16;
// let weight = 7.5;


// console.log(typeof length)

// // BigInt
// let a = 1234567890123456789012345n;
// let b = BigInt(1234567890123456789012345)
// // Strings
// let color = "Yellow";
// let lastName = "Johnson";

// console.log(typeof color)
// // Boolean
// let c = true;
// let d = false;

// console.log(typeof c)

// // Undefined
// let e;
// let f;

// console.log(typeof e)
// // Null
// let g = null;
// let h = null;

// console.log(typeof g)
// // Symbol
// const i = Symbol();
// const j = Symbol();

// // Object
// const person = {
//     firstName:"John",
//      lastName:"Doe",
//      age:30
//     };

// //    console.log(person.firstName) 

// // Array Object
// const cars = ["Saab", "Volvo", "BMW",5,true];
// // console.log(cars[0]) 

// // Date Object
// const date = new Date("2022-03-25");













let a = 10;
let b = "10";

console.log(a + b);
console.log(a == b);
console.log(a === b);