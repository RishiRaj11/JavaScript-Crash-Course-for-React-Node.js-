//Static method
/**
 * Array.from()
 * Array.isArray()
 * Array.of()
 */




































//Array.from(arrayLike, mapFunction)
// Array.from(items)
// Array.from(items, mapFn)
// Array.from(items, mapFn, thisArg)

//string to array
// const str1= Array.from("foo");
// console.log(str1)


//set to array
// const set = new Set(["foo", "bar", "baz", "foo"]);
// const str2=Array.from(set);
// console.log(str2)


//map to aaray
// const map = new Map([
//     [1, 2],
//     [2, 4],
//     [4, 8],
//   ]);
// const num1=  Array.from(map);
// console.log(num1)


//Array-Like Objects
// const obj = {
//     0: "Apple",
//     1: "Banana",
//     2: "Mango",
//     length: 3
// };

// const result = Array.from(obj);

// console.log(result);









// all following calls return true
// Array.isArray([]);
// Array.isArray([1]);
// Array.isArray(new Array());
// Array.isArray(new Array("a", "b", "c", "d"));
// Array.isArray(new Array(3));
// // Little known fact: Array.prototype itself is an array:
// Array.isArray(Array.prototype);

// // all following calls return false
// Array.isArray();
// Array.isArray({});
// Array.isArray(null);
// Array.isArray(undefined);
// Array.isArray(17);
// Array.isArray("Array");
// Array.isArray(true);
// Array.isArray(false);





// Array.of()
// Array.of(element1)
// Array.of(element1, element2)
// Array.of(element1, element2, /* …, */ elementN)


// console.log(Array.of("foo", 2, "bar", true));

// console.log(Array.of());


// Array.of(7); // [7]
// Array(7); // array of 7 empty slots

// Array.of(1, 2, 3); // [1, 2, 3]
// Array(1, 2, 3); // [1, 2, 3]

// Array.of(1); // [1]
// Array.of(1, 2, 3); // [1, 2, 3]
// Array.of(undefined); // [undefined]


