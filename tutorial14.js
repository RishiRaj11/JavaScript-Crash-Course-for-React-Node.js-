//Object Methods & this
/**
 * this in object
 * Methods
 Object.keys()
Object.values()
Object.entries()
Object.assign()
Object.freeze()
Object.seal()
Object.hasOwn()
 */

// const user={
//     name:"Rishi Raj",
//     greet:function(){
//         console.log("Hello ",this.name)
//     }
// }

// user.greet();

//Object.keys

// const user={
//     name:"Rishi Raj",
//     age:30,
// }

// console.log(Object.keys(user))
// for(const key of  Object.keys(user)){
//     console.log(key)
// }


// //Object.values(user)
// console.log(Object.values(user))
// for(const value of  Object.values(user)){
//     console.log(value)
// }

//Object.entries()

// console.log(Object.entries(user))

// for(const [key,value] of  Object.entries(user)){
//     console.log(key,value)
// }


//Object.assign()

// const address={
//     city:"Kolkata",
//     state:"WB"
// }

// const userInfo=Object.assign({},user)

//  console.log(user)
// console.log(userInfo)


//Object.freeze()

const user={
    name:"Rishi Raj",
    age:30,
}

// console.log(user)
// Object.seal(user)
// user.age=29
// user.city="Kolkata"
// delete user.name
// console.log(user)


console.log(Object.hasOwn(user,"na"))





