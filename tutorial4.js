//Conditions & loops
/**
 * if
 * else
 * else if
 * Ternary operator
 * switch
 * for loop
 * while loop
 * do...while
 * break
 * continue
 * for...of
 * for...in
 */

// let age = 19;

// if (true) console.log("Rishi");

// if (age >= 18) {
//   console.log("You are in");
// } else {
//   console.log("you are under 18");
// }

// let result=age >= 18?console.log("You are in"):console.log("you are under 18");

// let number = 90;

// if (number >= 90) {
//   console.log("A+");
// } else if (number >= 80) {
//   console.log("A");
// } else if (number >= 70) {
//   console.log("B+");
// } else if (number >= 60) {
//   console.log("B");
// } else {
//   console.log("Fail");
// }

//
// const day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the week");
//     break;
//   case "Friday":
//     console.log("Almost weekend");
//     break;
//   case "Sunday":
//     console.log("Weenend");
//     break;
//   default:
//     console.log("Normal Day of the week");
// }




// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);



// for(let i=0;i<fruits.length;i++){
// console.log(fruits[i]);
// }

// let j=0;
// while(j<fruits.length){
//     console.log(fruits[j]);
//     j++;
// }

// let count=1;
// do{
// console.log(count)
// // count++;
// }while(count<=5);

// for (let i = 0; i < 5; i++) {
//     if (i === 2) {
//         continue
//     }
//     console.log(i);
//   }

const fruits=["Apple","Banana","Mango"]

for(const fruit of fruits ){
    console.log(fruit)

}

for(const index in fruits ){
    console.log(fruits[index])
}

const user={
    name:"Rishi",
    age:30,
    City:"Patna"
}

for(const key in user){
    console.log(user[key])
}

