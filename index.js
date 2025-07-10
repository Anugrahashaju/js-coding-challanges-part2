import { add } from "./math.mjs";
import capitalize from './utils.js';
const sum = (a,b) => a+b;
//Basic sum
console.log(`Sum of 1 and 2 = ${sum(1,2)}`);
console.log("");
//Greeting message
const greet = name => `Hello, ${name}!`;
console.log("Greeting Alice");
console.log(greet("Alice"));
console.log("");

//Destructuring array
console.log("Destructuring the array [10,20,30,40]")
const arr = [10,20,30,40];
let [first, second] = arr;
console.log(`First 2 elements aof array are ${first},${second}`);


console.log("Adding numbers");
console.log(`${add(5,3)}`);


//concatenate arrays
let arr1 = [1,2,3];
let arr2 = [4,5,6];

console.log(arr1.concat(arr2))

//simple power function
const power = (base,exponenet=2)=>base ** exponenet
console.log(5,2);

//double numbers
const array1 = [1,2,3,4,5,6];
console.log("array is "+array1.map(num => num *2))

//even numbers filtering 
console.log("filtering the array by even numbers "+array1.filter(num=>num%2==0))

//basic dog class
class Dog{
    constructor(name,breed)
    {
        this.name =name;
        this.breed=breed;
    }
}

const dog = new Dog("Ruby","Pug");


//sum all arguments
const sumAll = (...numbers) =>numbers.reduce((sum,num)=>sum+num,0);
console.log(`${sumAll(1,2,3)}`);

//Destrucring the object with renaming
const obj = { id: 1, firstName: "John", email: "john@example.com" }
//if the first number is null then the default firstname is guest

console.log(" ");
console.log("Destructuring the object")
const {
    id: userId,
    firstName: fullName ="Guest",
    email
} = obj;
console.log(userId);
console.log(fullName);
console.log(email)

//nested destructuring
const Data = { user: { name: "Jane", address: { street: "Main St", city: "Anytown" } } }
const {
    user: {
        name,
        address:{street,city}
    }
} = Data;



console.log(name);
console.log(street);
console.log(city);

//spread operator
const object = { a: 1, b: { c: 2 } };
const copy1 = {...object};
console.log("Spead operator  ")
console.log(object.a);
copy1.a =100
console.log(copy1.a)

//promises - simulate API call
function fetchData(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id % 2 === 0) {
          resolve({ id: id, data: "Some data" });
        } else {
          reject("ID must be even");
        }
      }, 2000);
    });
  }

//Async/Await

async function getData(id) {
    try {
      const result = await fetchData(id);
      console.log("Data:", result);
    } catch (error) {
      console.log("Error:", error);
    }
  }

//Calculate total Price
const items = [
    { item: "A", price: 10 },
    { item: "B", price: 20 },
    { item: "C", price: 30 }
  ];
  
  const totalPrice = items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);
  
  console.log("Total Price:", totalPrice);


//Group By property

const values = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" },
    { type: "fruit", name: "banana" }
  ];
  
  const grouped = values.reduce((acc, current) => {
    const { type, name } = current;
    
    if (!acc[type]) {
      acc[type] = []; 
    }
  
    acc[type].push({ name }); 
  
    return acc;
  }, {}); 
  console.log(grouped);
  
//Inheritance
// Base class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      return "Some generic animal sound";
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);       
      this.breed = breed;  
    }
  
    makeSound() {
      return "Woof!";      
    }
  }

//default export and named import
//import util.js

const input = "hello world";
const output = capitalize(input);
console.log(output); 


//ternary operator
function displayStatus(isLoggedIn) {
    return isLoggedIn ? "Welcome back!" : "Please log in.";
  }

displayStatus(true);

//first user by id
const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }
  ];
  
  const user = users.find(u => u.id === 2);
  
  console.log(user); 

//Array Check
const numbers = [2, 4, 6, 8];

const anyGreaterThanFive = numbers.some(num => num > 5);


const allEven = numbers.every(num => num % 2 === 0);

console.log("Any number > 5:", anyGreaterThanFive); // true
console.log("All numbers even:", allEven);

//classes -getters and setters
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }

    get area() {
      return this.width * this.height;
    }

    set dimensions({ width, height }) {
      this.width = width;
      this.height = height;
    }
  }


  //promise.all

  function fetchData(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id % 2 === 0) {
          resolve({ id, data: "Some data" });
        } else {
          reject(`ID must be even: ${id}`);
        }
      }, 2000);
    });
  }

  async function fetchAllData() {
    try {
      const results = await Promise.all([
        fetchData(1),
        fetchData(2),
        fetchData(3)
      ]);
      console.log("All data:", results);
    } catch (error) {
      console.log("Error:", error);
    }
  }
  
  fetchAllData();

  
  //promise.race
  async function getFastestResponse() {
    try {
      const result = await Promise.race([
        fetchData(1),
        fetchData(2),
        fetchData(3)
      ]);
      console.log("Fastest result:", result);
    } catch (error) {
      console.log("Fastest error:", error);
    }
  }
  
  getFastestResponse();
  


  //generate functions


function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const gen = idGenerator();

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

//modules mix of names nad default exports
  
import add, { PI, subtract } from './utils.js';

console.log("Add:", add(5, 3));         
console.log("Subtract:", subtract(5, 3)); 
console.log("PI:", PI);

//destructuring function parameters

function displayUserInfo({ name, age, city = "Unknown" }) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
  }

  displayUserInfo({ name: "Alice", age: 25, city: "New York" });
displayUserInfo({ name: "Bob", age: 30 });


//symbol-unique id
function createUniqueId() {
    return Symbol();
  }

  const id1 = createUniqueId();
  const id2 = createUniqueId();
  
  console.log(id1);              // Symbol()
  console.log(id2);              // Symbol()
  console.log(id1 === id2);      // false

  
  
  
  




