//Map in javascript

/**
 * const map = new Map();
 * set()
 * get()
 * has()
 * delete()
 * clear()
 * size — Number of Entries
 * 
 */

//creating 
const user = new Map();

user.set("name","Rishi Raj")
user.set("age",29)
user.set("city","Kolkata")
// console.log(user.size)
// user.set("age",30)
// console.log(user)
// user.delete("city")
// console.log(user)
// user.clear()
// console.log(user)

// for(const key of user.keys()){
//     console.log(key,user.get(key))
// }

// for(const value of user.values()){
//     console.log(value)
// }

// for(const [key,value] of user.entries()){
//     console.log(key,value)
// }


const fruits=["banana","apple","banana","orange","apple","apple","orange","orange","orange","orange"]


function countFrequency(arr){
    const map=new Map();
    //"banana"=>1
    for(const fruit of fruits){
        if(map.has(fruit)){
            map.set(fruit,map.get(fruit)+1)
        }else{
            map.set(fruit,1)
        }

    }
    return map

}

console.log(countFrequency( fruits))



