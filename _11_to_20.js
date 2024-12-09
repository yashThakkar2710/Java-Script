// premitive(stack) and non-premitive(refresh)(heap)

let first = "yash";
let two = first;

two = "new yash";

// console.log(first); //yash
// console.log(two); //new yash

let userOne = {
  email: "yash@xyzgamial.com",
  password: 123,
};

let userTwo = userOne;

let userThree = userOne;

userTwo.email = "new@123";
userThree.password = "new123";

// console.log(userOne); //"new@123"
// console.log(userTwo); // "new@123"
// console.log(userThree); // "new@123"

// in stack memory the copy is passed so when we change the value it will not changed in other place it is only chnaged in given place
// in heap memory refrensh is passes so when we change the value it will changed on all given refrensh

const name = "Yash";

const surname = "Thakkar";

const fullname = `My FullName is ${name} ${surname}`;

// console.log(fullname);

// console.log(name.toUpperCase());
// console.log(name.length);
// console.log(name.charAt(2));
// console.log(name.indexOf('s'));

const newStr = "yash-th";

// console.log(newStr.length);
// console.log(newStr.substring(0,4));
// console.log(newStr.slice(-7,3));
// console.log(newStr.charAt(4));

const anotherStr = "    yash    ";
// console.log(anotherStr);
// console.log(anotherStr.trim());

const newName = "yash th";

// console.log(newName.replace('y','Y'));
// console.log(newName);
// console.log(newName.includes('yash'))

const student = "Thakkar-Yash-J";
const student1 = "Thakkar Yash J";

const newStudent = student.split("-");
const newStudent1 = student.split(" ");
// console.log(newStudent1); // [ 'Thakkar-Yash-J' ]
// console.log(newStudent); // [ 'Thakkar', 'Yash', 'J' ]
// console.log(typeof newStudent); // object

// --------------Number---------

const score = 100;
// console.log(score);

const balance = new Number(500);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // 500.00
// console.log(balance.toFixed(3));  // 500.000

const anotherNumber = 123.638;

// console.log(anotherNumber.toPrecision(4)); // 123.6
// console.log(anotherNumber.toPrecision(5)); // 123.64
// console.log(anotherNumber.toPrecision(3)); // 124
// console.log(anotherNumber.toPrecision(2)); // 1.2e+2

const money = 1000000;

// console.log(money.toLocaleString()); // 1,000,000
// console.log(money.toLocaleString('en-IN')); //10,00,000

// -------------Maths---------

// console.log(Math.abs(-4))  //4
// console.log(Math.abs(4))//4
// console.log(Math.round(4.8))//5
// console.log(Math.round(4.2))//4
// console.log(Math.ceil(4.2))//5
// console.log(Math.floor(4.9))//4

// console.log(Math.min(4,9,10,15))//4
// console.log(Math.max(4,3,2,1,0,-2))//4

// console.log(Math.random())
// console.log(Math.random()*10)
// console.log(Math.round(Math.random()*10))

const min = 10;
const max = 20;

// console.log(Math.floor(Math.random()*(max-min +1))+min)

// ------------Date--------

const myDate = new Date();

// console.log(myDate.toString());Tue Jun 25 2024 12:04:30 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString());6/25/2024, 12:04:30 PM
// console.log(myDate.toLocaleDateString());6/25/2024
// console.log(myDate.toDateString());Tue Jun 25 2024
// console.log(myDate.toJSON());2024-06-25T06:34:30.457Z
// console.log(myDate.toISOString());2024-06-25T06:34:30.457Z

// console.log(typeof myDate);  //object

// let myCreatedDate = new Date(2024,0,23)
// console.log(myCreatedDate.toDateString())  // Tue Jan 23 2024

let myCreatedDate = new Date(2024, 0, 23, 5, 50);
// console.log(myCreatedDate.toLocaleString())  // 1/23/2024, 5:50:00 AM

// console.log(Math.floor(Date.now()/1000)) // to convert into seconds

let today = new Date();
// console.log(today.toLocaleString()) //6/25/2024, 12:15:53 PM

// console.log(`today's date is  ${today.getDate()} and month is ${today.getMonth()+1} and day is ${today.getDay()}`)

// --------------------------array----------------------------

const myArr = [1, 2, 3, 4, 5, 6];
const Heros = ["saktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[0]) //1
// console.log(myArr2)

// myArr.push(7)
// console.log(myArr)

// myArr.pop()
// console.log(myArr)

// myArr.unshift(-1);
// console.log(myArr); //[-1, 1, 2, 3,4, 5, 6]

// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();

// console.log(myArr); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(newArr); // 1,2,3,4,5,6
// console.log(typeof newArr); // string

//join method change array into the string

//slice and spice

const number = [1, 2, 3, 4, 5];

// console.log(number.slice(0,3)); //1,2,3
// console.log(number.splice(0,3));//1,2,3

// console.log("orignal",number)//orignal [ 1, 2, 3, 4, 5 ]
// console.log(number.slice(1,3)); //2,3
// console.log("after slice",number) //after slice [ 1, 2, 3, 4, 5 ]
// console.log(number.splice(1,3)); //2,3,4
// console.log("after splice",number)//after splice [ 1, 5 ]

//slice method does not change origanl array
//slice method will not include index number mentiond at second potion
//splice method will change origanal array
//splice method second number will show number of elemnts to taken from first index

// ----------------array(2)------------

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

// console.log(Array.isArray("yash")) //false
// console.log(Array.from("yash")); // [ 'y', 'a', 's', 'h' ]
// console.log(Array.from({ name: "yash" })); // interesting gives empty array we should metion key and values

const myname = "yash";
const myNameInArray = Array.from(myname);
// console.log(myNameInArray) //[ 'y', 'a', 's', 'h' ]

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]

let name1 = "yash";
let surname1 = "thakkar";

// console.log(Array.of(name1,surname1)) //[ 'yash', 'thakkar' ]
//from will change string in to the array
//of will make array of different elemnts

//---------------------------objects------------------------------

// singleton
// Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Yash",
  "full name": "Yash Thakkar",
  [mySym]: "key1",
  age: 20,
  location: "ahemdabad",
  email: "yash@123gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["tuesday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "yash@ok.com";
// Object.freeze(JsUser)
JsUser.email = "yash@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

const instaUser = {};

instaUser.userName = "yash_thakkar_2710";
instaUser.id = "123";
instaUser.isLoggedIn = false;

// console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(instaUser.hasOwnProperty("isLoggedIn"));

// keys values and enteries will return an array
const anotherUser = {
  name: "yash",
  fullName: {
    userFullName: {
      firstName: "yash",
      lastName: "thakkar",
    },
  },
};

// console.log(anotherUser.fullName.userFullName.lastName)

const obj1 = {
  a: "1",
  b: "2",
};

const obj2 = {
  c: "3",
  d: "4",
};
const obj3 = {
  e: "5",
  f: "6",
};

// const mainobj = Object.assign({},obj1,obj2,obj3)

// console.log(mainobj)

const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4)

const users = [
  {
    id: 1,
    email: "yash@gmail.com",
  },
  {
    id: 2,
    email: "ok@gmail.com",
  },
  {
    id: 3,
    email: "xyz@gmail.com",
  },
];

// console.log(users[1].email)

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
// console.log(instructor);

// ---------------------fuction----------------------------

function sayMyName() {
  console.log("Y");
  console.log("a");
  console.log("s");
  console.log("h");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "yash") {
  if (!username) {
    console.log("Please enter a username to login");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("")); //undefined
console.log(loginUserMessage("Yash"));
console.log(loginUserMessage());
