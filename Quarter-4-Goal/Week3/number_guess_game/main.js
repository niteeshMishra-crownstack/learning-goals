let number;
const generateRandomNumber = ()=>
{
  number = Math.floor(Math.random() * 6 +1)
  console.log(number)
}

const generate_number_btn_click = () =>
{
  document.querySelector('#section1').style.display='none'
  document.querySelector('#section2').style.display='none'
  document.querySelector('#section3').style.display='block'

  setTimeout(()=>
  {
  generateRandomNumber()

  document.querySelector('#input-value').value = " ";

  document.querySelector('#section1').style.display='none'
  document.querySelector('#section2').style.display='block'
  document.querySelector('#section3').style.display='none'

  },3000);
}

const check_number = ()=>
{
  let value = document.getElementById('input-value').value

  if(value == number)
  {
    alert("CONGRATS!! YOU HAVE GUESSED THE RIGHT NUMBER")
  }

  else{
    alert("oops!! Your Guess is wrong")
  }

  generate_number_btn_click()
}


//Math Object

console.log(Math.E)// value of mathmetical constant E
console.log(Math.PI)// value of mathmetical constant 
console.log(Math.abs(-5.6)) //5.6
console.log(Math.ceil(7.8)) //8
console.log(Math.floor(7.8)) //7
console.log(Math.sin(Math.PI/2)) //1
console.log(Math.min(90,67,56,43,677,12,34)) //12
console.log(Math.max(67,45,23,55,89,200)) //200
console.log(Math.random()) //will give a random number between 0.0 to 0.99
console.log(Math.pow(2,3))//8
console.log(Math.sqrt(9))//3
console.log(Math.cbrt(27))//3
console.log(Math.trunc(27.980))//27
console.log(Math.round(27.980))//28
console.log(2**3) //get 2 the power 3 without math object



function E()
{
  alert(Math.E)// value of mathmetical constant E
}
function PI()
{
  alert(Math.PI)// value of mathmetical constant PI
}

//Date object 

let today = new Date()
console.log(today)
let otherDate = new Date('09/26/2021 05:54:09')

console.log(otherDate)

console.log(otherDate.getDay())
console.log(otherDate.getFullYear())
console.log(otherDate.getHours())
console.log(otherDate.getDate())
console.log(otherDate.getMinutes())
console.log(otherDate.getMonth())
console.log(otherDate.getMilliseconds())
console.log(otherDate.getSeconds())
console.log(otherDate.getTime())


//JAVASCRIPT OBJECTS

//1.Creating object with a constructor:

function vehicle(name,maker,engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;
}
//new keyword to create an object
let car  = new vehicle('GT','BMW','1998cc');
//property accessors
console.log(car.name);
console.log(car.maker);
console.log(car['engine']);


let consumer = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

// get property values of the object:
console.log( user.name ); // John -- fetching using . operator 
console.log( user['age']); // 30  -- fetching using [] square operator

//lets add a boolean one 
user.isAdmin = true;

for (let prop in user) {
  // keys
  console.log( prop );  // name, age, isAdmin
  // values for the keys
  console.log( user[prop] ); // John, 30, true
}