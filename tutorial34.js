//Promises  & Promise chain in js

// const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Success")
//     },2000)
// })
// console.log(promise)

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

const response = fetch("https://jsonplaceholder.typicode.com/users");

response.then((response) => response.json()).then((data) => console.log(data)).catch(error=>console.log(error));









// function loginUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // reject("Error in code")
//             resolve({
//                 id: 1,
//                 name: "Rishi",
//             });
//         }, 1000);
//     });
// }

// function getProfile(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve({
//                 userId,
//                 email: "rishi@example.com",
//             });
//         }, 1000);
//     });
// }

// function getPosts(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(["Post 1", "Post 2"]);
//         }, 1000);
//     });
// }

//Promise Chain

// loginUser()
//     .then((user) => {
//         console.log("User:", user);
//         return getProfile(user);
//     })
//     .then((profile) => {
//         console.log("Profile:", profile);

//         return getPosts(profile.userId);
//     })
//     .then((posts) => {
//         console.log("Posts:", posts);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });
