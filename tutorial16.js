/**
 * 1. Finding & Checking
indexOf()
lastIndexOf()
includes()
startsWith()
endsWith()

2. Extracting Parts of a String
slice()
substring()
Difference between slice() and substring()

3. Changing String Case
toUpperCase()
toLowerCase()

4. Removing Extra Spaces
trim()
trimStart()
trimEnd()

5. Replacing Content
replace()
replaceAll()

6. Splitting & Joining
split()
How split() converts a String into an Array

 */




// console.log(text.indexOf("javascript"))
// console.log(text.lastIndexOf("javascript"))
// console.log(text.includes("javascript"))
// console.log(text.includes("xyz"))
// console.log(text.startsWith("javascript"))
// console.log(text.endsWith("poweful"))


let skill=" javasCript "
// console.log(skill.slice(0,4))
// console.log(skill.slice(4))

// console.log(skill.substring(-4))
// console.log(skill.slice(-4))

// console.log(skill.toLowerCase())
// console.log(skill.toUpperCase())
// console.log(skill.trim())
// console.log(skill.trimStart())
// console.log(skill.trimEnd())


let text="javascript,is,awesome,javascript,is,avascript poweful"
// console.log(text.replace("javascript","React"))
// console.log(text.replaceAll("javascript","React"))

const arr=text.split(" ")
const arr1=text.split(",")
console.log(arr.length)
console.log(arr1.length)





