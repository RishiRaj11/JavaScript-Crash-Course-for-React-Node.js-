//map()
//filter()
//reduce()

//map
const nums = [1, 2, 3, 4, 5];


// const doubled = nums.map((num )=> {
//   return num * 2;
// });
// console.log(nums);
// console.log(doubled);


//filter
// const even=nums.filter((num)=>{
// return num%2==0
// })

// console.log(even)

//reduce

let initialValue=0

const sum=nums.reduce((acumulator,currentValue)=>{
    return acumulator*currentValue

})

console.log(sum)


















// const numbers = [1, 2, 3, 4, 5, 6];

// const result = numbers
//     .filter(num => num % 2 === 0)
//     .map(num => num * 10);

// console.log(result);
