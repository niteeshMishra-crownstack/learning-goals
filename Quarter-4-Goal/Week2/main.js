//In an object method, this refers to the "owner" of the method.

//In the example on the top of this page, this refers to the person object.

//The person object is the owner of the fullName method.

// Create an object:
const person = {
  firstName: "Niteesh",
  lastName: "Mishra",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();

//THIS IN EVENT HANDLER

{/* <button onclick="this.style.display='none'"> Click to Remove Me! </button> */}

//ARROW FUNCTION

// using arrow functions
let prod = (x, y) => x * y;
console.log(prod(5,9))

// 1. Arrow function with no arguments

let greet = () => console.log('Hello');
greet(); // Hello

// 2. If a function has only one argument, you can omit the parentheses.
let greetHello = x => console.log(x);
greetHello('Hello'); // Hello 

//3 .You can also dynamically create a function and use it as an expression

let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') : 
  () => console.log('Adult');

welcome(); // Baby




//ARGUMENTS BINDING

//Regular functions have arguments binding. That's why when you pass arguments to a regular function, you can access
// them using the arguments keyword.

let y = function () {
    console.log(arguments);
}
y(4,6,7); // Arguments [4, 6, 7]

//NOTE: Arrow functions do not have arguments binding.
//When you try to access an argument using the arrow function, it will give an error.

let Z = () => {
    // console.log(arguments); //will throw error
}

Z(4,6,7); 

//To solve this issue, you can use the spread syntax.

let p = (...n) => {
    console.log(n);//arguments is not defined
}

p(4,6,7); 

//NOTE: You should not use arrow functions to create methods inside objects. 

let employee = {
    name: 'rio',
    age: 28,
    sayName: () => {

        // this refers to the global .....
        //
        console.log(this.age);
    }
}

employee.sayName(); // undefined