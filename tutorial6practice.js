/**
 * Write a function that takes two numbers and returns their sum
 * Write a function that determines whether a number is positive, negative, or zero.
 * Write a function that checks whether a number is even or odd.
 * Write a function that returns the larger of two numbers.
 * Write a function that returns the sum of numbers from 1 to N.
 * Write a function that returns the factorial of a number.
 */

function addNumber(a,b){
return a+b;
}
//console.log(addNumber(12,4))

function checkNumber(a){
    if(a>0){
        console.log("Positive");
    }else if(a<0){
        console.log("Negative");
    }else{
        console.log("Zero");
    }
}

//call
// checkNumber(13)
// checkNumber(-8)
// checkNumber(0)

function checkEvenOdd(a){
   if(a%2===0){
    console.log("Even")
   }else{
    console.log("Odd")
   }
}

// checkEvenOdd(12)
// checkEvenOdd(5)

function LargestNumber(a,b){
    if(a>b){
      return a;
    }else{
        return b
    }
}

// console.log(LargestNumber(1,2))
// console.log(LargestNumber(3,1))


function SumOneToN(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        //sum=sum+i;
        sum +=i;
    }
    return sum;
}

//console.log(SumOneToN(100)); //1+2+3+4

//4! =1*2*3*4

function factorial(n){
    let result=1;
    for(let i=1;i<=n;i++){
        result *=i;
    }
    return result;
}
console.log(factorial(3))//1*2*3=6
console.log(factorial(5))//1*2*3*4*5 =120
