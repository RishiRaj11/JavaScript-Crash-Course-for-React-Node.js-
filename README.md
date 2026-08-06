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
