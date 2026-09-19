//Synchronous vs Asynchronous

console.log("start")
//1sec
// for(let i=0;i<1000000;i++){
//     console.log(i)
// }

// function getUsers(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log("Error:", error);
//     });
// }

// getUsers()

setTimeout(()=>{
    console.log("Timer")
},5000)

console.log("mid")
console.log("End")
















