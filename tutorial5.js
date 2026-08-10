/**
 * Function
 * why need function
 * parameters
 * argument
 * return
 * function expression
 * Anonymous function
 * Arrow function
 * callback function
 * Higher order function
 * 
 */ 



// let sum=add(1,4);
// let sum1=add(3,6)
// console.log(sum1)

// let mul=function multiply(){

// }
// let val1=sub(2,1)
// console.log(val1)

// function add(a,b){
//     return a+b;
//    }

//    let sub=function(a,b){
//     return a-b;
//    }

//    let sub1=(a,b)=>{
//     return a-b;
//    }
//    let sub2=(a,b)=>a-b;
//    let square=x=>a*x;

let x = 10;

function test() {
  let x = 20;

  if (true) {
    let x = 30;
    console.log(x);
  }

  console.log(x);
}

test();
console.log(x);


   function greet(name){
    console.log(name)
   }
   function processUser(callback){
     callback("Rishi")
   }

   processUser(greet)
