//Set in js


const numbers=new Set();
numbers.add(1)
numbers.add(2)
numbers.add(3)
numbers.add(4)

//check
// console.log(numbers.delete(1))

// console.log(numbers)
// numbers.clear()
// console.log(numbers)


// for(const num of numbers){
//     console.log(num)
// }

// for(const key of numbers.keys()){
//     console.log(key)
// }

// for(const value of numbers.values()){
//     console.log(value)
// }

// for(const [key,value] of numbers.entries()){
//     console.log(key,value)
// }

function removeDuplicate(arr){
    return new Set(arr)
}

console.log(removeDuplicate([1,1,2,2,3,3,3,3,3,4,3]))