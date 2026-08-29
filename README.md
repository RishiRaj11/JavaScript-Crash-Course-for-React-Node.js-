# JavaScript-Crash-Course-for-React-Node.js-
## **PART-1:** JavaScript Fundamentals
## Tutorial-1:JavaScript Introduction
### 1. what is javascript?
JavaScript is a high-level, dynamically typed programming language used to make applications interactive and dynamic.

Originally, JavaScript was mainly used inside web browsers, but today it can run almost anywhere using different runtimes.

MDN Doc (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)

## 2. Why JavaScript?
JavaScript is important because it is one of the core technologies of modern web development.

HTML Defines the structure.
`<h1>Hello</h1>`

CSS Defines the appearance.
`
h1 {
  color: red;
}
`

Javascript Adds behavior.

`
document.querySelector("h1").onclick = () => {
  alert("Hello JavaScript!");
};
`

*Note:* Without JavaScript, most modern web applications would be static.

Javascript used for both Frontend & Backend

* React.js → JavaScript

* Node.js  → JavaScript

* Express  → JavaScript

* Next.js  → JavaScript


What can JavaScript build?
* Interactive websites
* React applications
* Node.js backend APIs
* Real-time applications
* Mobile applications
* Desktop applications
* Serverless applications
* Automation scripts

## 3. JavaScript vs Java

This is a very common beginner confusion.

JavaScript and Java are completely different programming languages.


## 4. JavaScript Engine

A JavaScript engine is a program that understands and executes JavaScript code.

Different environments use different JavaScript engines.
Think of JavaScript as a language you speak.

The JavaScript engine is the translator/interpreter system that allows the computer environment to execute that language.
```
JavaScript
    │
    ├── Browser
    │     ├── Chrome
    │     ├── Firefox
    │     └── Safari
    │
    └── Node.js
          └── Server-side JavaScript
```        

## 5. V8 Engine

V8 is Google's open-source JavaScript engine.

It is written primarily in C++ and is used by:

* Google Chrome
* Node.js
* Chromium-based applications

The important thing for React and Node.js learners is:

Chrome and Node.js both use V8.

## Tutorial-2: Variables & Data Types
### Variables
* Variables = Data Containers
* JavaScript variables are containers for data.
* Variables are identified with names called identifiers.
* JavaScript variables can be declared in 4 ways:
  
* Modern JavaScript
  
```
1. Using let
let x = 5;
let y = 6;
let z = x + y;
2. Using const
const x = 5;
const y = 6;
const z = x + y;
```

* Older JavaScript
  
```
1. Using var (Not Recommended)
var x = 5;
var y = 6;
var z = x + y;
Automatically (Not Recommended)
x = 5;
y = 6;
z = x + y;
```

### Data Types
> A JavaScript variable can hold 8 types of data.

> 7 Primitive Data Types and 1 Object Data Type.

> The Object data type can hold many different object types.
<img width="489" height="406" alt="image" src="https://github.com/user-attachments/assets/a2f41ea6-64c9-4725-a1d2-b71abaf8c5bd" />

**Type	Description**

*  **Number**	A number representing a numeric value
* **Bigint**	A number representing a large integer
* **String**	A text of characters enclosed in quotes
* **Boolean**	A data type representing true or false
* **Undefined**	A variable with no assigned value
* **Null**	A value representing object absence
* **Symbol**	A unique primitive identifier
* **Object**	A collection of key-value pairs of data

```
// Number
let length = 16;
let weight = 7.5;

// BigInt
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
// Strings
let color = "Yellow";
let lastName = "Johnson";

// Boolean
let x = true;
let y = false;

// Undefined
let x;
let y;

// Null
let x = null;
let y = null;

// Symbol
const x = Symbol();
const y = Symbol();

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array Object
const cars = ["Saab", "Volvo", "BMW"];

// Date Object
const date = new Date("2022-03-25");
```

There is a operator in javascript to check the data type **typeof**
```
typeof "hello" //string
typeof 10 //number
typeof true //boolean
typeof undefined //undefined
typeof null //Object
typeof 1234567890123456789012345n; //bigint
typeof BigInt(1234567890123456789012345) //bigint
```

**1. The rules for constructing names (identifiers) are:**

* Names can contain letters, digits, underscores, and dollar signs.
* Names must begin with a letter, a $ sign or an underscore (_).
* Names are case sensitive (X is different from x).
* Reserved words (JavaScript keywords) cannot be used as names.

2. Declaring JavaScript Variables
Creating a variable in JavaScript is called declaring a variable.

You declare a JavaScript variable with the let keyword or the const keyword. 
```
let carName;
```

After the declaration, the variable has no value (technically it is undefined).
To assign a value to the variable, use the equal sign:
```
carName="Volvo"
```

```
let carName = "Volvo";
```
```
const carName = "Volvo";
```

```
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
```
The two variables price1 and price2 are declared with the const keyword.

The values of price1 and price2 cannot be changed.

The variable total is declared with the let keyword.

The value of total can be changed.
```
var x = 5;
var y = 6;
var z = x + y;
```
3. Reassignment

```
let age = 25;
age = 30; // Reassignment
console.log(age); // 30

const age = 25;
age = 30; // ❌ TypeError

val age=25
age=30 Reassignment
console.log(age); // 30

```
4. Redeclaration
```
var name = "Rishi";
var name = "Raj"; // ✅ Redeclaration allowed
console.log(name); // Raj

let name = "Rishi";
let name = "Raj"; // ❌ SyntaxError

const name = "Rishi";
const name = "Raj"; // ❌ SyntaxError
```
* let    → declaration + reassignment allowed
* const  → declaration allowed, reassignment NOT allowed
* var    → declaration + reassignment allowed

5. Scope(This will discuss after completion)
Scope determines where a variable can be accessed in your code.

JavaScript has several important types of scope:
* Global Scope
* Function Scope
* Block Scope

** Global Scope **

A variable declared outside functions/blocks is generally in the global scope.
```
const name = "Rishi";

function greet() {
  console.log(name);
}

greet();
```
** Note: ** The function can access the variable because name is available from the outer/global scope.

** Function Scope **

Variables declared with var inside a function are available throughout that function.
```
function test() {
  var message = "Hello";

  console.log(message);
}

test();

console.log(message); // ❌ ReferenceError
```

** Block Scope **

let and const are block-scoped.

A block is usually represented by { }.
```
if (true) {
  let message = "Hello";
  const name = "Rishi";

  console.log(message);
  console.log(name);
}

console.log(message); // ❌ ReferenceError
console.log(name);    // ❌ ReferenceError


if (true) {
  var x = 10;
}

console.log(x); // 10
```
** Note: ** The variables only exist inside the if block if it is declare with let but if it is declare with var it is accessible outside also.
```
Declaration    → Create
Reassignment   → Change value
Redeclaration  → Create again
Scope          → Where can I access it?
```


### Tutorial 3: Operators
here are different types of JavaScript operators:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Modern operators:

**1. Arithmetic Operators**
| Operator | Name           | Example  | Result |
| -------- | -------------- | -------- | -----: |
| `+`      | Addition       | `10 + 5` |   `15` |
| `-`      | Subtraction    | `10 - 5` |    `5` |
| `*`      | Multiplication | `10 * 5` |   `50` |
| `/`      | Division       | `10 / 5` |    `2` |
| `%`      | Modulus        | `10 % 3` |    `1` |
| `**`     | Exponentiation | `2 ** 3` |    `8` |

```
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1   The % operator returns the remainder after division.
const number = 10;
console.log(number % 2 === 0); // true If the remainder is 0, the number is even.

console.log(a ** b); // 1000

let count = 10;
count++ //count = count + 1;
console.log(count); // 11

//Post Increment
let x = 10;
console.log(x++); // 10
console.log(x);   // 11

//Pre Increment
let x = 10;
console.log(++x); // 11
console.log(x);   // 11


let count = 10;
count-- //count=count-1
console.log(count); // 9

let x = 10;
console.log(x--); // 10
console.log(x);   // 9

let x = 10;
console.log(--x); // 9
console.log(x);   // 9
```

**2. Assignment Arithmetic Operators**

```
let x = 10;

x += 5;  // x = x + 5
console.log(x); // 15

x -= 3;  // x = x - 3
console.log(x); // 12

x *= 2;  // x = x * 2
console.log(x); // 24

x /= 4;  // x = x / 4
console.log(x); // 6

x %= 4;  // x = x % 4
console.log(x); // 2

x **= 3; // x = x ** 3
console.log(x); // 8
```
**3. Comparison Operators**

Comparison operators are used to compare two values.

Comparison operators always return true or false.
| Operator | Meaning          | Example     | Result  | Comments |
| -------- | ---------------- | ----------- | ------- | -------- |
| `==`     | Equal            | `5 == "5"`  | `true`  |          |
| `===`    | Strict equal     | `5 === "5"` | `false` |          |
| `!=`     | Not equal        | `5 != 10`   | `true`  |.         |
| `!==`    | Strict not equal | `5 !== "5"` | `true`  |          |
| `>`      | Greater than     | `10 > 5`    | `true`  |.         |  
| `<`      | Less than        | `5 < 10`    | `true`  |.         |  
| `>=`     | Greater/equal    | `10 >= 10`  | `true`  |.         | 
| `<=`     | Less/equal       | `5 <= 10`   | `true`  |.         |


**4. JavaScript Logical Operators

Logical operators are used to combine multiple conditions or work with Boolean values.

JavaScript has three main logical operators:
```
&&  → AND
||  → OR
!   → NOT
```


```
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

console.log(!true);  // false
console.log(!false); // true

```

**5. Modern Operator**
1. ?? — Nullish Coalescing Operator

```
const username = null;
const result = username ?? "Guest";
console.log(result); // Guest

const username = undefined;
console.log(username ?? "Guest"); // Guest

const username = "Rishi";
console.log(username ?? "Guest"); // Rishi

```
2. ?. — Optional Chaining Operator
  ``` 
const user = {};
console.log(user.profile.name); //TypeError

const user = {};
console.log(user.profile?.name); //undefined

const user = {
  profile: {
    address: {
      city: "Mumbai"
    }
  }
};
console.log(user.profile?.address?.city); //Mumbai

```

### Tutorial-4:  Conditions & Loops
Conditions allow JavaScript to make decisions based on whether something is true or false.

Loops are used when you want to execute the same block of code repeatedly.

* if
* else
* else if
* Nested conditions
* Ternary operator
* switch
* for loop
* while loop
* do...while
* break
* continue
* for...of
* for...in

**1. if**

Syntax

```
if (condition) {
  //  block of code to be executed if the condition is true
}
```

```
const isRaining = true;

if (isRaining) {
  console.log("Take an umbrella");
}

const age = 20;

if (age >= 18) {
  console.log("You are an adult");
}
```
**2. if...else**

Syntax

```
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
```

```
const age = 16;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
```

**3. else if**

Syntax

```
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

```
```
const marks = 75;

if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}


const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
} else {
  console.log("You cannot drive");
}

const isLoggedIn = true;
const isAdmin = true;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome Admin");
  }
}
```
**4. Ternary Operator**

The ternary operator is a short way of writing a simple if...else.

>condition ? valueIfTrue : valueIfFalse
```
const age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}


const age = 20;
const result = age >= 18 ? "Adult" : "Minor";
console.log(result);

```

**5. switch**

switch is useful when you need to compare one value against multiple possible values.

Syntax
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

```
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;

  case "Friday":
    console.log("Almost weekend");
    break;

  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Normal day");
}

```

**6. for Loop**

Loops are used when you want to execute the same block of code repeatedly.

```
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);


for (let i = 1; i <= 5; i++) {
  console.log(i);
}

```
**Syntax**
```

for (initialization; condition; increment){
// code
}

```
Array Example
```
const fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```
**7. while Loop**
```
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```
**Note:** Make sure the condition eventually becomes false.

```
while (true) {
  console.log("Hello");
}
```
**Note:**This creates an infinite loop.


**8. do...while**

do...while executes the code at least once, even if the condition is false.

```
let i = 10;

do {
  console.log(i);
  i++;
} while (i < 5);
```


**9. break**

break immediately stops the loop.

```
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

**10. continue**

continue skips the current iteration and moves to the next one.

```
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

**11. for...of**

for...of is used to iterate over values of an iterable such as an array or string.

```
const fruits = ["Apple", "Banana", "Mango"];

for (const fruit of fruits) {
  console.log(fruit);
}


for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const name = "Rishi";
for (const char of name) {
  console.log(char);
}

```

**12. for...in**

for...in is generally used to iterate over object keys.

```
const user = {
  name: "Rishi",
  age: 25,
  city: "Mumbai"
};

for (const key in user) {
  console.log(key);
}


for (const key in user) {
  console.log(user[key]);
}

const fruits = ["Apple", "Banana"];

for (const index in fruits) {
  console.log(index);
}
```





```
CONDITIONS

if          → One condition
else        → Otherwise
else if     → Multiple conditions
ternary     → Short if/else
switch      → Multiple fixed values


LOOPS

for         → Known/repeated iterations
while       → Repeat while condition is true
do...while  → Execute at least once
for...of    → Iterate values
for...in    → Iterate keys


CONTROL

break       → Stop loop
continue    → Skip current iteration

```

### Tutorial-5:Functions
* Functions are Code Blocks
* Functions are reusable code blocks designed to perform a particular task.

* Functions are executed when they are called or invoked.

* Functions are fundamental in all programming languages.

* **Why Use Functions?**

* Reuse code (write once, run many times)

* Organize code into smaller parts

* Make code easier to read and maintain

JavaScript Function Syntax

```
function name( p1, p2, ... ) {
  // code to be executed
}
```

Functions are defined with the function keyword:

* followed by the function name
* followed by parentheses ( )
* followed by brackets { }
  
The function name follows the naming rules for variables.

Optional parameters are listed inside parentheses: ( p1, p2, ... )

Code to be executed is listed inside curly brackets: { }

Functions can return an optional value back to the caller.


* **Parameters** - some values are sent to the function
* **Arguments** - some values are received by the function
* **Function Code** - some work is done inside the function
* **Return Output** - some value is returned from the function

```
function sayHello() {
  return "Hello World";
}

let message = sayHello();


function add(a, b) {
  return a + b;
}

let sum1 = add(5, 5);
let sum2 = add(50, 50);
```

**What is a Function Expression?**
```
// Standard Function
function multiply(a, b) {
  return a * b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
};

let z = multiply(4, 3);
```
After a function expression has been stored in a variable, the variable can be used as a function

### Anonymous Functions

Function expressions are commonly used to create anonymous functions.

The function below is actually function without a name.

```
// Function Expression
const multiply = function(a, b) {
  return a * b;
};
```

* Functions stored in variables do not need names.

* The variable name is used to call the function.

** *function expressions can also be a named:**

>const add = function add(a, b) {return a + b;};

* Function expression is stored in a variable, it can be used like a value.
* This is useful when passing functions to other functions (callbacks).

* A function expression can be assigned to a variable, passed as an argument to another function, or returned from a function.

  >Interview Question: Difference between Function Declarations vs Function Expression
  >const multiply = function(a, b) {return a * b}

### JavaScript Arrow Functions

Arrow Functions allow a shorter syntax for function expressions.

You can skip the function keyword, the return keyword, and the curly brackets:

>const multiply = function(a, b) {return a * b}

>const multiply = (a, b) => a * b;

If a function has only one parameter, you can omit the parentheses:

* If the function has only one statement that returns a value:
  
>const square = x => x * x;

```
const add = (a, b) => {
  return a + b;
};
```
**Default Parameters**

```
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet("Rishi");
greet();
```

**Callback Function**

A callback is a function passed to another function as an argument.

```
function greet(name) {
  console.log(`Hello ${name}`);
}

function processUser(callback) {
  callback("Rishi");
}

processUser(greet);
```
* Callback with Anonymous Function

```
//example
```

**Higher-Order Function**

A function that:

accepts another function as an argument, or

returns another function

is called a higher-order function.

```
function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (a, b) => a + b;

console.log(calculate(10, 20, add));
```

### tutorial 6: Practice 

 * Write a function that takes two numbers and returns their sum
 ```
 function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(10, 20));
 ```
 * Write a function that determines whether a number is positive, negative, or zero.
   
```
   function checkNumber(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
console.log(checkNumber(-10));
console.log(checkNumber(10));
console.log(checkNumber(0));
```

 * Write a function that checks whether a number is even or odd.
```
   function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(7));
console.log(checkEvenOdd(10));
```
 * Write a function that returns the larger of two numbers.
```
function findLargest(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(findLargest(25, 40));
```
 * Write a function that returns the sum of numbers from 1 to N.
```
   function calculateSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }

  return sum;
}

console.log(calculateSum(5));
```
 * Write a function that returns the factorial of a number.
 ```
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));

```  

### Tutorial 7: Javascript Array

* An array is a data structure used to store multiple values in a single variable.
* resizable
* array are zero indexed
```
const fruilts= ["apple","Banana"]
console.log(fruits[0])
console.log(fruits[1])
```
**1. Creating an Array**

* Array literal
>let fruits = ["Apple", "Banana", "Mango"];

* Empty array
>let numbers = [];

* Array Constructor
>let numbers = new Array(10, 20, 30);

**2. Array properties**
  * length
  >fruits.length //to find the length of an array

**3. Accessing aaray element**
```
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[fruits,length-1])// to access last elememnt
```
**4. Updating Array Elements**
```
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits)
fruits[1]="Orange";
console.log(fruits)
```

**5. Adding Elements**
```
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits)
fruits.push("Orange");//add at the end
fruits.unshift("Papaya"); //add at the beginning
console.log(fruits)
```
**6. Removing Elements**

```
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits)
fruits.pop();//remove at the end
console.log(fruits)
fruits.shift();//remove from the beginning
console.log(fruits)
```
**7. Looping Through an Array**

```
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

Note: Loops video covered in details seperatly in tutorial 4
```

**forEach()*** executes a function for every element.

```
let numbers = [10, 20, 30];

numbers.forEach((number) => {
    console.log(number);
});

numbers.forEach((number, index) => {
    console.log(index, number);
});

```
**8. Transformation method**
  * map()
    ```
    const nums=[1,2,3,4,5]
    const doubled=nums.map(num=>num*2)
    console.log(nums)
    console.log(doubled)
    ```
   * filter()
    ```
    const nums=[1,2,3,4,5]
    const even=filter(num=>num%2==0)
    console.log(nums)
    console.log(even)
    ```

**9. Aggregation methods**
   * reduce()
   ```
   const array = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
   ``` 

console.log(sumWithInitial);
// Expected output: 10 
    
**Two types of method we have in array**
 * Static method
 * Instance method


**8. Instance method**

 * Array.from()
 * Array.isArray()
 * Array.of()



## Object

An object stores data in key-value pairs.

```
const user = {
    name: "Rishi",
    age: 25,
    city: "Delhi"
};
```


**1.Creating an Object**

Object Literal

 ```
 const user = {
    name: "Rishi",
    age: 25,
    city: "Delhi"
};
```

Empty object

```
const user = {};
```

new Object()

```
const user = new Object();

user.name = "Rishi";
```

**2.Accessing Object Properties**


Dot notation

```
const user = {
    name: "Rishi",
    age: 25
};

console.log(user.name);
console.log(user.age);

```

Bracket notation

```
console.log(user["name"]);
console.log(user["age"]);
```

Adding Properties

```
const user = {
    name: "Rishi"
};

user.age = 25;
user.city = "Delhi";

console.log(user);
```
Updating Properties
```
const user = {
    name: "Rishi",
    age: 25
};

user.age = 26;

console.log(user.age);
```

Deleting Properties

```
const user = {
    name: "Rishi",
    age: 25,
    city: "Delhi"
};

delete user.city;

console.log(user);
```

Objects Can Store Different Data Types

```
const user = {
    name: "Rishi",
    age: 25,
    isActive: true,
    salary: 50000,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
        city: "Delhi",
        country: "India"
    }
};
```

Object with a Function

```
const user = {
    name: "Rishi",

    greet: function() {
        console.log("Hello");
    }
};

user.greet();
```

**3.Object Methods & this**

**this in an Object**

```
const user = {
    name: "Rishi",

    greet() {
        console.log(`Hello ${this.name}`);
    }
};

user.greet();
```

**Object.keys()**

```
const user = {
  name: "Rishi",
  age: 25,
  city: "Delhi"
};

const keys = Object.keys(user);

console.log(keys);
```

**Object.values()**

```
const user = {
  name: "Rishi",
  age: 25,
  city: "Delhi"
};

const values = Object.values(user);

console.log(values);
```

***Object.entries()**

```
const user = {
  name: "Rishi",
  age: 25,
  city: "Delhi"
};

const entries = Object.entries(user);

console.log(entries);

for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}
```

```

const user = {
  name: "Rishi"
};

const details = {
  age: 25,
  city: "Delhi"
};

const result = Object.assign(user, details);

console.log(result);

//Common use: Creating a copy

const copy = Object.assign({}, user);

console.log(copy);

```

**Object.freeze()**

Prevents an object from being:

modified

adding new properties

deleting properties

```
const user = {
  name: "Rishi",
  age: 25
};

Object.freeze(user);

user.age = 30;
user.city = "Delhi";
delete user.name;

console.log(user);

```

Object.seal()

Prevents:

adding new properties

deleting existing properties

But existing properties can still be modified.

```
const user = {
  name: "Rishi",
  age: 25
};

Object.seal(user);

user.age = 30;        // Allowed
user.city = "Delhi";  // Not allowed
delete user.name;     // Not allowed

console.log(user);
```

### Strings in Javascript

What is a String?

A string is a sequence of characters used to represent text in JavaScript.

```
const name = "Rishi";
const message = "Hello World";

console.log(name);
console.log(message);

const firstName = "Rishi";
const number = "123";
const symbols = "@#$%";
const sentence = "JavaScript is awesome!";
```

Single quotes
```
const name = 'Rishi';

console.log(name);
```


Double quotes

```
const name = "Rishi";

console.log(name);
```

Template literals

```
const message = `Hello JavaScript`;

console.log(message);
```

String interpolation

```
const name = "Rishi";
const age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);
```



Multi-line strings

```
const message = `Hello Rishi
Welcome to JavaScript
Let's learn strings`;

console.log(message);

const message = "Hello Rishi\nWelcome to JavaScript\nLet's learn strings";

console.log(message);
```

String length
```
const text = "JavaScript";

console.log(text.length);
```

Accessing characters

```
const text = "JavaScript";

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
```
String indexing

JavaScript uses zero-based indexing.

J  a  v  a  S  c  r  i  p  t
0  1  2  3  4  5  6  7  8  9

```
const text = "JavaScript";

console.log(text[0]); // J
console.log(text[3]); // a
console.log(text[4]); // S
console.log(text[9]); // t
```

at() :The at() method allows you to access a character using its index.
```
const text = "JavaScript";

console.log(text.at(0)); // J
console.log(text.at(4)); // S
console.log(text.at(9)); // t


console.log(text.at(-1)); // t
console.log(text.at(-2)); // p
console.log(text.at(-3)); // i
```

charAt() :charAt() also returns a character at a specific index.

```
const text = "JavaScript";

console.log(text.charAt(0)); // J
console.log(text.charAt(4)); // S
console.log(text.charAt(9)); // t
```

```
console.log(text.at(-1));     // t
console.log(text.charAt(-1)); // ""
```

Strings are immutable
```
let text = "Hello";

text[0] = "Y";

console.log(text);
```

String concatenation

```
const firstName = "Rishi";
const lastName = "Raj";

const fullName = firstName + " " + lastName;

console.log(fullName);
```


+ operator :The + operator can perform both addition and string concatenation.

```
console.log(10 + 20);
console.log("10" + "20");
console.log("10" + 20);//1020
console.log(10 + 20 + "30"); //"3030"
console.log("10" + 20 + 30); //Once JavaScript encounters the string, the following + operations perform string concatenation.
```

**Strings Methods**

```
// 1. FINDING & CHECKING

let text = "JavaScript is awesome and JavaScript is powerful";

// indexOf()
// Returns the first index where the value is found.
// Returns -1 if the value is not found.

console.log(text.indexOf("JavaScript"));
// 0
console.log(text.indexOf("awesome"));
// 17
console.log(text.indexOf("Python"));
// -1


// lastIndexOf()
// Returns the last index where the value is found.

console.log(text.lastIndexOf("JavaScript"));
// 29

console.log(text.lastIndexOf("is"));
// 35

// includes()
// -------------------------
// Checks whether a string contains a value.
// Returns true or false.

console.log(text.includes("awesome"));
// true

console.log(text.includes("Python"));
// false


// -------------------------
// startsWith()
// -------------------------
// Checks whether a string starts with a specific value.

console.log(text.startsWith("JavaScript"));
// true

console.log(text.startsWith("Python"));
// false


// -------------------------
// endsWith()
// -------------------------
// Checks whether a string ends with a specific value.

console.log(text.endsWith("powerful"));
// true

console.log(text.endsWith("awesome"));
// false



// =====================================================
// 2. EXTRACTING PARTS OF A STRING
// =====================================================

let language = "JavaScript";


// -------------------------
// slice()
// -------------------------
// Extracts part of a string.
// Original string is not changed.

console.log(language.slice(0, 4));
// Java

console.log(language.slice(4));
// Script

console.log(language.slice(-6));
// Script

console.log(language.slice(0, -6));
// Java


// -------------------------
// substring()
// -------------------------
// Extracts characters between two indexes.
// Negative values are treated as 0.

console.log(language.substring(0, 4));
// Java

console.log(language.substring(4));
// Script

console.log(language.substring(-4));
// JavaScript


// -------------------------
// Difference between slice() and substring()
// -------------------------

let word = "JavaScript";

console.log(word.slice(-6));
// Script

console.log(word.substring(-6));
// JavaScript

/*
Important Difference:

slice()
- Supports negative indexes
- Negative index counts from the end

substring()
- Does NOT support negative indexes
- Negative values are converted to 0
*/


// Another difference

console.log(word.slice(6, 2));
// ""

console.log(word.substring(6, 2));
// "va"

/*
slice(6, 2)
=> Start index is greater than end index
=> Returns empty string

substring(6, 2)
=> Automatically swaps the indexes
=> Works like substring(2, 6)
*/



// =====================================================
// 3. CHANGING STRING CASE
// =====================================================

let name = "Rishi Raj";


// -------------------------
// toUpperCase()
// -------------------------

console.log(name.toUpperCase());
// RISHI RAJ


// -------------------------
// toLowerCase()
// -------------------------

console.log(name.toLowerCase());
// rishi raj


// Original string remains unchanged

console.log(name);
// Rishi Raj



// =====================================================
// 4. REMOVING EXTRA SPACES
// =====================================================

let userInput = "   Hello JavaScript   ";


// -------------------------
// trim()
// -------------------------
// Removes whitespace from both sides.

console.log(userInput.trim());
// "Hello JavaScript"


// -------------------------
// trimStart()
// -------------------------
// Removes whitespace from the beginning.

console.log(userInput.trimStart());
// "Hello JavaScript   "


// -------------------------
// trimEnd()
// -------------------------
// Removes whitespace from the end.

console.log(userInput.trimEnd());
// "   Hello JavaScript"



// =====================================================
// 5. REPLACING CONTENT
// =====================================================

let message = "I love JavaScript. JavaScript is easy to learn.";

 
// -------------------------
// replace()
// -------------------------
// Replaces the first matching value.

console.log(message.replace("JavaScript", "React"));
// I love React. JavaScript is easy to learn.


// -------------------------
// replaceAll()
// -------------------------
// Replaces all matching values.

console.log(message.replaceAll("JavaScript", "React"));
// I love React. React is easy to learn.


// replace() using a regular expression with /g

console.log(message.replace(/JavaScript/g, "React"));
// I love React. React is easy to learn.



// =====================================================
// 6. SPLITTING & JOINING
// =====================================================

// -------------------------
// split()
// -------------------------
// Converts a String into an Array.

let fruits = "Apple,Banana,Mango,Orange";

let fruitArray = fruits.split(",");

console.log(fruitArray);
// ["Apple", "Banana", "Mango", "Orange"]

console.log(Array.isArray(fruitArray));
// true


// -------------------------
// split() with a space
// -------------------------

let sentence = "JavaScript is easy to learn";

let words = sentence.split(" ");

console.log(words);
// ["JavaScript", "is", "easy", "to", "learn"]


// -------------------------
// split() without separator
// -------------------------

let languageName = "JavaScript";

console.log(languageName.split(""));
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]


// -------------------------
// split() with limit
// -------------------------

console.log(sentence.split(" ", 3));
// ["JavaScript", "is", "easy"]



// =====================================================
// SPLIT + JOIN
// =====================================================

// split() converts String -> Array
// join() converts Array -> String

let technologies = "JavaScript,React,Node.js";

let techArray = technologies.split(",");

console.log(techArray);
// ["JavaScript", "React", "Node.js"]

let result = techArray.join(" | ");

console.log(result);
// JavaScript | React | Node.js


```



## Rest & Spread operator in javascript.

In JavaScript, the rest (...) and spread (...) operators use the same syntax (...), but they serve different purposes depending on where they're used.

***1. Rest Operator (...)***

The rest operator collects multiple elements into a single array or object.

```
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

***2. Spread Operator (...)***

The spread operator expands arrays, objects, or iterable values into individual elements.

```
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [1, 2, 3]
```

```
const user = {
  name: "Alice"
};

const details = {
  age: 28,
  city: "London"
};

const person = { ...user, ...details };

console.log(person);
// { name: "Alice", age: 28, city: "London" }
```

Memory trick:

Rest → "Rest = Receive" (collect values).

Spread → "Spread = Scatter" (expand values).


### Destructing in javascript

Destructuring is a JavaScript feature that allows you to extract values from arrays or properties from objects and store them in variables in a clean and readable way.

It was introduced in ES6 (ES2015).

There are two main types:

Array Destructuring

Object Destructuring

```
const fruits = ["Apple", "Banana", "Mango"];

const first = fruits[0];
const second = fruits[1];

console.log(first);  // Apple
console.log(second); // Banana


const fruits = ["Apple", "Banana", "Mango"];

const [first, second, third] = fruits;

console.log(first);  // Apple
console.log(second); // Banana
console.log(third);  // Mango


//Skip Values

//You can skip array elements using commas.
const numbers = [10, 20, 30, 40];

const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30
Leetcode practice problem


//Rest with Destructuring

const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]

```

**Object Destructuring**

```
const user = {
  name: "Rishi",
  age: 25,
  city: "Kolkata"
};
const name = user.name;
const age = user.age;
const city = user.city;


const { name, age, city } = user;

console.log(name); // Rishi
console.log(age);  // 25
console.log(city); // Kolkata

const user = {
  name: "Rishi",
  age: 25
};


//Rename Variables
const { name: userName, age: userAge } = user;

console.log(userName); // Rishi
console.log(userAge);  // 25


//Rest with Object Destructuring

const user = {
  name: "Rishi",
  age: 25,
  city: "Kolkata",
  role: "Developer"
};

const { name, ...details } = user;

console.log(name);
// Rishi

console.log(details);
// { age: 25, city: "Kolkata", role: "Developer" }



Destructuring in Function Parameters

function displayUser(user) {
  console.log(user.name);
  console.log(user.age);
}

function displayUser({ name, age }) {
  console.log(name);
  console.log(age);
}

displayUser({
  name: "Rishi",
  age: 25
});

```

### Map in javascript

A Map is a JavaScript collection that stores data in key-value pairs.

Unlike objects, a Map allows keys of any data type.


```
const users = new Map();

users.set("name", "Rishi");
users.set("age", 25);
console.log(users);


const user = new Map([
  ["name", "Rishi"],
  ["age", 25],
  ["role", "Developer"]
]);

```

```
const user = new Map();
//add
user.set("name","Rishi")
user.set("age",30)
user.set("role","SDE-1")
user.set("city","Kolkata")

console.log(user);

console.log(user.size);
//update
user.set("role","SDE-2")
//delete
user.delete("city","Kolkata")
//check key
console.log(user.has("name"))

console.log(user);
//clear
user.clear()
console.log(user)
```

loops

```
for (const [key, value] of user) {
  console.log(key, value);
}

for (const key of user.keys()) {
  console.log(key);
}

for (const key of user.keys()) {
  console.log(key);
}

for (const value of user.values()) {
  console.log(value);
}
for (const [key, value] of user.entries()) {
  console.log(`${key}: ${value}`);
}

user.forEach((value, key) => {
  console.log(key, value);
});

```
1. https://leetcode.com/problems/remove-element/submissions/1615568138/
2. https://leetcode.com/problems/valid-palindrome/description/
3. https://leetcode.com/problems/palindrome-number/description/
4. https://leetcode.com/problems/longest-palindromic-substring/description/
5. https://leetcode.com/problems/two-sum/description/
6. https://leetcode.com/problems/valid-parentheses/description/
7. https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1537847446/
8. https://leetcode.com/problems/longest-common-prefix/description/
9. https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
10. https://leetcode.com/problems/length-of-last-word/submissions/1493057333/

