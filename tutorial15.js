/**
* What is a String?
* Single quotes
* Double quotes
* Template literals
* String interpolation
* Multi-line strings
* String length
* Accessing characters
* String indexing
* at()
* charAt()
* Strings are immutable
* String concatenation
* + operator

 */

let name="Rishi Raj "
console.log(name)


let name1='Rishi Raj , age 30, @gmail'

console.log(name1)

let name2=`Rishi Raj , age 30, @gmail`

console.log(name2)

let  age=30


console.log(`Hello ${name}  is your age ${age}`)


const message=`Hellow Rishi
Welcome to js course
let's learn string
`
let email="example@gmail.com"
console.log(message.length,email.length)

email[0]="m"
console.log(email)

// console.log(email[0])
// console.log(email[2])
// console.log(email[4])
// console.log(email[email.length-1])

// console.log(email.at(0))
// console.log(email.at(2))
// console.log(email.at(4))
console.log(email.at(-1))

// console.log(email.charAt(0))
// console.log(email.charAt(2))
// console.log(email.charAt(4))
console.log(email.charAt(-1))

// let x=[1,3,4]
// console.log(x)
// x[1]=6
// console.log(x)

const firstName="Rishi"
const lastName="Raj"
const fullName=firstName+ " "+lastName

console.log(fullName)

//+ operator

// console.log(10+20)
// console.log("10"+"20")
// console.log("10"+20)
// console.log(10+20+"30")
// console.log(10+"20"+"30")



































































// const firstName = "Rishi";
// const lastName = "Raj";
// const age = 25;

// const fullName = `${firstName} ${lastName}`;

// console.log(fullName);
// console.log(fullName.length);
// console.log(fullName.at(-1));

// console.log("Age: " + age);
// console.log(`Next year I will be ${age + 1}`);