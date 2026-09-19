function loginUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
   reject("Error in code")
    //   resolve({
    //     id: 1,
    //     name: "Rishi",
    //   });
    }, 1000);
  });
}

function getProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userId,
        email: "rishi@example.com",
      });
    }, 1000);
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

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

//What is
async function getResult() {
  try {
    const user = await loginUser();
    console.log(user);

    const profile = await getProfile(user.id);
    console.log(profile);

    const posts = await getPosts(profile.userId);

    console.log(posts);
  } catch (error) {
    console.log(error);
  }
}

getResult();
//   async function hello(){
//     return "hello"
//  }

// hello().then((data)=>{
//     console.log(data)
// })

// async function getResult(){
//    const result= await hello()
//    console.log(result)
// }
// getResult()

// async function test(){
//     console.log("start")
//     await new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve()
//         },2000)
//     })
//     console.log("End")
// }

// console.log("start one")
// test()
// console.log("end one")
