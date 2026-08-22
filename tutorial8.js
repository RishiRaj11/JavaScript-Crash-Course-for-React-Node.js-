//loop


let fruits=["Apple","Banana","Mango"]


// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }

// for(let fruit of fruits){
//   console.log(fruit)
// }

// fruits.forEach((fruit,index)=>{
// console.log(fruit,index)
// })

// for(let index in fruits){
//   console.log(fruits[index])
// }


for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)  
}

for(let i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}