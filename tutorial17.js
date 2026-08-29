//rest & spread

function sum(...numbers){
    return numbers.reduce((total,num)=>total+num,0)
}
//console.log(sum(1,2,3,4,5,6,7))


const arr1=[1,2,3]
const arr2=[4,5,6]

const arr=[...arr1,...arr2]
console.log(arr1)
console.log(arr2)
console.log(arr)


const user={
    name:"Rishi Raj"
}
const details={
    age:30,
    city:"Kolkata"
}

const person={...user,...details}
console.log(user)
console.log(details)
console.log(person)
