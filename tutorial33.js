//callback & callback hell


// function greet(){
//     console.log("Hello")
// }

// function executeFun(callback){
// callback()
// }

// // executeFun(greet)

// console.log("Start")
// setTimeout( greet,5000)











function loginUser(callback) {
    setTimeout(() => {
      callback(null, {
        id: 1,
        name: "Rishi",
      });
    }, 1000);
  }
  

  function getProfile(userId, callback) {
    setTimeout(() => {
      callback(null, {
        userId,
        email: "rishi@example.com",
      });
    }, 1000);
  }

  
  function getPosts(userId, callback) {
    setTimeout(() => {
      callback(null, ["Post 1", "Post 2"]);
    }, 1000);
  }

  
  // Callback Hell
  loginUser((error, user) => {
    if (error) {
      console.log("Login Error:", error);
      return;
    }
    console.log("User:", user);
  
    getProfile(user.id, (error, profile) => {
      if (error) {
        console.log("Profile Error:", error);
        return;
      }
  
      console.log("Profile:", profile);
  
      getPosts(user.id, (error, posts) => {
        if (error) {
          console.log("Posts Error:", error);
          return;
        }
        console.log("Posts:", posts);
      });
    });
  });
  