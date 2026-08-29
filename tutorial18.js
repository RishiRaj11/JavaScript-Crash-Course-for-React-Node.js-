//Destructring

const fruits=["Apple","Banana","Orange","Mango"]
const [first,...remaining]=fruits


// console.log(fruits[0])
// console.log(fruits[1])
// console.log(first)
//  console.log(third)
// console.log(first)
// console.log(remaining)

const user={
    name:"Rishi Raj",
    age:30,
    city:"Kolkata"
}

// const {name,age,city}=user
const {name:newName,age:newAge,city:newCity}=user
const {name,...detals}=user
