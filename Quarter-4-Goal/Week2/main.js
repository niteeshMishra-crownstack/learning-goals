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


//ITERATORS IN JAVASCRIPT

let numbers = [1,2,3]

let itFn = numbers[Symbol.iterator]();

console.log(itFn.next())//{value :1,done:false}
console.log(itFn.next())//{value :2,done:false}
console.log(itFn.next())//{value :3,done:false}
console.log(itFn.next())//{value :undefined,done:true}

for(let value of numbers)
{
  console.log(value)
}

//ECMA-6 -EUROPEAN COMPUTER MANUFACTURING ASSOCIATION
//1.VAR VS LET

var q=10
if(true)
{
  var q = 20// you are just uopdating value of q
  console.log(q)//20
}
  console.log(q)//20
  
let s=10
if(true)
{
  let s = 20
  console.log(s)//20
}
  console.log(s)//10


  //2.Default Parameter - We can pass default value as well as function as default parameter

  function someValue()
  {
    return 100;
  }
  function add(a,b=10,c=someValue())
    {
      return a+b+c;
    }

    console.log(add(10))//if you dont pass it will take default value
    console.log(add(50,30,20))// if you will pass default value be ignored

  //3. TEMPLATE LITERALS/ STRING TEMPLATE LITERALS
 //-supports next line
 //- we can add function as well 
  let quote = "Either you run the code or code runs you"
   function fullName()
   {
     return "Niteesh Mishra"
   }
  let user = "peter"

  console.log("Either you run the code or code runs you ::"+user +"you" +fullName())
  console.log(`Either you run the code or code runs you 
              ${user} you ${fullName()}`)


  //4. CLASS & Inheritance

   class Category
   {
      drayFruits()
      {
        return "Almond is a dry fruit"
      }

      pomeFruits()
      {
        return "Apple is pomre fruits"
      }
      
   }
  class fruits extends Category
  {
    fruitOne = "orange"

    constructor()//its get called as soon as you create the instance of class
    {
      super()//to call the parent class constructor we use super keyword
      console.log("constructor called" + " "+ this.fruitOne)    
    }

    getFruits()
    {
      return "apple";
    }
  }

  let f1 = new fruits() //as soon as you create an instance of a class constructor gets called automatically,
  console.log(f1.getFruits())
  console.log(f1.pomeFruits())

  //CONSTRUCTOR CHAINING

   class University{

    constructor()
    {
      console.log("constructor from university")
    }

  }
  class College extends University
  {
     constructor()
    {
      super()
      console.log("constructor from college")
    }
  }

  class Department extends College
  {
   constructor()
    { 
      super()
      console.log("constructor from departmrnt")
    }
  }

  let myObj = new Department();
  console.log(myObj)

  

  //5.DESTRUCTURING: Destructuring assignment syntax is a JS expression that makes it possible to unpack values from arrays, 
  //or properties from objects, into distinct variable

  const bioData =  
  {
    personName:"Nitesh",
    personage:27,
    deg:"BE",
    hobbies: 
    {
      first:'playing',
      second:'coding'
    }
  }
//Before des
  console.log(`my name is ${bioData.personName}`)

  let {personName:pn,personage,deg,hobbies} = bioData //destructuring

  console.log(`my name is ${pn} my age is ${personage} and my highest degree is ${deg} . I love ${hobbies.second}`)

  //Destructuring in Array

  const myProLang = [ 'js','php','ruby','java','c','python']

  //es 5
  // var lang1 = myProLang[0]
  // var lang2 = myProLang[1]
  // var lang3 = myProLang[2]

//  console.log("My fvrt programming language is" + lang3)

  //es6
  let [lang1,lang2,lang3,lang4,lang5,lang6] = myProLang
  console.log(`My fvrt programming is ${lang3}`)

  //print only first and last element of array
  let [first,,,,,last] =myProLang
  console.log(`${first} ${last}`)

 



  




