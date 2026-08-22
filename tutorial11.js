//sort()
//By default, sort() converts elements to strings and sorts them in UTF-16 code unit order.


// const arr1=[1,1000,2,300,400,20,10]
// console.log(arr1)
// arr1.sort((a,b)=>b-a)
// console.log(arr1)




const str1=["Apple","Orange","abc","Banana"]
console.log(str1)
str1.sort((a,b)=>b.localeCompare(a))
console.log(str1)


