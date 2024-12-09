function calculatePrice(...val) {
  return val;
}

// console.log(calculatePrice(200,400,600));//[ 200, 400, 600 ]

function calculatePrice(val1, val2, ...val) {
  return val;
}

// console.log(calculatePrice(200,400,600,800,1200));//[ 600, 800, 1200 ]

// const user = {
//     userName :"Yash",
//     age:21,
// }

function takeObject(anyobject) {
  console.log(`userName :${anyobject.userName} , age :${anyobject.age}`);
}

// takeObject(user) //userName :Yash , age :21
// takeObject( user = {
//     userName :"Yash",
//     age:21,
// }) //userName :Yash , age :21

const arr = [1, 2, 3, 4, 5];

function takearray(arr) {
  console.log(arr);
}

// takearray(arr) //[ 1, 2, 3, 4, 5 ]

// ----------------------Scope-----------------------------

var a = 30;
let b = 20;
const c = 10;
if (true) {
  //  b = 200;
  // console.log(a) //30
  // console.log(b); //200
  // console.log(c)//10
}
// console.log(b)//20

function one() {
  const username = "Yash";

  function two() {
    const website = "yash.com";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "yash";
  if (username === "yash") {
    const website = " yash.com";
    // console.log(username + website); //yash yash.com
  }
  // console.log(website);
}

// console.log(username);

// console.log(addone(5));

function addone(num) {
  return num + 1;
}

// addTwo(5);// this will give error

const addTwo = function (num) {
  return num + 2;
};
// addTwo(5);

const user = {
  username: "Yash",
  price: 9999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage()
user.username = "Thakkar";
// user.welcomeMessage();

// console.log(this); //{}

// function chai(){
//     let username = "Yash"
//     console.log(this.username);
// }

// chai() //undefined

// function chai(){
//     let username = "Yash"
//     console.log(username);
// }

// chai() //Yash

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// const newTwo = (num1, num2) => {
//     return num1 + num2
// }

// const newTwo = (num1, num2) =>  num1 + num2

// const newTwo = (num1, num2) => ( num1 + num2 )

const newone = (num1, num2) => ({ username: "Yash" });
// console.log(newTwo(3, 4));
// console.log(newone(3, 4));
// { username: 'Yash' }

// ------------------------Immediately Invoked Function Expressions (IIFE)---------

(function chai() {
  // named IIFE
  // console.log(`DB CONNECTED`);
})();

//in declration of two IIFE first IIFE must be closed with ; otherwise it will give error

((name) => {
  // console.log(`DB CONNECTED TWO ${name}`);
})("Yash");

// ------------------------------If Else------------------------------

// const userLoggedIn = true
const makrs = 51;

if (makrs > 50) {
  // console.log('person is passed ')
} else {
  // console.log('person is failed');
}

// if(userLoggedIn){
// console.log("User is Logged In Website");
// }

// <, >, <=, >=, ==, !=, ===, !==

const score = 200;

if (score > 180) {
  let matchWinningPossibilty = 80;
  // console.log(`the score of team is greater than ${score} and possibilty of winning is ${matchWinningPossibilty}`);
}

// if(score>180) console.log('It is Easy To Win the match ');

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  // console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  // console.log("User logged in");
}

// ---------------------------------switch case-------------------------------

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = "march";

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }

// -----------------------------------------truthy value-----------------------

const userEmail = [];

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
  // console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  // console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20;

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
