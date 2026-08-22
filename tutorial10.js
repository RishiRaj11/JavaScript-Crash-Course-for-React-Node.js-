//Slice

//splice





















// slice()
// slice(start)
// slice(start, end)

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// // Expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // Expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // Expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // Expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]







// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)


// const myFish = ["angel", "clown", "mandarin", "sturgeon"];
// const removed = myFish.splice(2, 0, "drum");

// console.log(myFish)
// console.log(removed )

// const myFish1 = ["angel", "clown", "drum", "sturgeon"];
// const removed1 = myFish1.splice(2, 1, "trumpet");

// console.log(myFish1)
// console.log(removed1)

// const myFish2 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
// const removed2 = myFish2.splice(3, 1);

// console.log(myFish2)
// console.log(removed2)


const myFish3 = ["angel", "clown", "trumpet", "sturgeon"];
const removed3 = myFish3.splice(0, 2, "parrot", "anemone", "blue");
console.log(myFish3)
console.log(removed3)




