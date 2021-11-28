//Examine the document object
console.dir(document);
// console.log(document.domain)
// console.log(document.url)
// console.log(document.title)
// document.title= 123; we can change the title of the web page
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)
console.log(document.all)
console.log(document.all[10])


//Selectors
 console.log(document.getElementById('header-title'))
var headTag = document.getElementsByTagName('h1')
// headTag.innerText = "Blue"
// console.log(headTag)

// document.all[4].textContent="Hello"

var headerTitle = document.getElementById('header-title')
console.log(headerTitle.textContent)

// // headerTitle.innerText = "This coming from inner text"
// headerTitle.innerHTML = `<h3>Hello</h3>`
// headerTitle.style.color="purple"
var header = document.getElementById('main')
header.style.borderBottom ="solid 3px red"

var items = document.getElementsByClassName('list-group-item')
console.log(items)
items[1].innerText ="second list"
items[1].style.fontWeight = "bold"
items[1].style.backgroundColor = "yellow"

//what if you want to give background color all of list items

// items.style.backgroundColor = "yellow" //this dont gonna work bcz we are getting HTMLCollection and that is an array

for(var i=0; i<=items.length; i++)
{
    // items[i].style.backgroundColor = "yellow"
}

var li = document.getElementsByTagName('li')
console.log(li)
li[1].innerText ="second list item"
li[1].style.backgroundColor = "yellow"

//what if you want to give background color all of list items

// items.style.backgroundColor = "yellow" //this dont gonna work bcz we are getting HTMLCollection and that is an array

// for(var j=0; j<=items.length; j++)
// {
//     li[j].style.color = "purple";
// }

//QUERYSELECTOR

var header = document.querySelector('#header-title')
console.log(header.textContent)

var input = document.querySelector('input')

input.value = "Hello world" //its going to select very first

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND"

var item = document.querySelector('.list-group-item');
item.style.color ="red";// its going to take first one only

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = "blue"

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = "green"

//QUERYSELECTORALL

var titles = document.querySelectorAll('.title')
console.log(titles)//it will give NodeList which is similar to HTMLCollection and on Nodelist we can run only array methods.

//applying css in alternate list item
var odd =  document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')
// for (var i=0;i<=odd.length; i++)
// {
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }

//TRAVERSING  THE DOM
// 1. parentNode & parentElement(both are almost same) property
var itemList = document.querySelector('#items')
//parentNode property
console.log(itemList.parentNode)//it will give you the parentNode/tag/element of tag having id items

console.log(itemList.parentNode.parentNode)
console.log(itemList.parentElement.parentElement)
console.log(itemList.parentNode.parentElement)

//2.ChildNodes

console.log(itemList.childNodes)//you will get li and text node. Text node is basicaally for line break between 2 li tag
console.log(itemList.children)//it will ignore line break
console.log(itemList.children[1])

//3.FirstChild(not useful)

console.log(itemList.firstChild)//its going to consider line break and will give you text node. Its type of useless

//4. FirstChildElement(use this one)

console.log(itemList.firstElementChild)//it will give you li

//similarly lastElement

console.log(itemList.lastElementChild)

//5.nextElementSibling - it will give you the next sibling of an element.
//6.previousElementSibling - it will give you previous sibling

//CREATE ELEMENT
var newDiv = document.createElement('div');
console.log(newDiv)//it will append new div in the DOM
//Add class
newDiv.className = "div-class";

//Add div
newDiv.id = "div-id"

newDiv.setAttribute('title','div-attribute')
console.log(newDiv)

//create textNode 
var newDivText = document.createTextNode("Div content");

//Add text to new div
newDiv.appendChild(newDivText)
console.log(newDiv)// How to insert it into DOM

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv,h1)


//DOM EVENTS
//first way
// var button = document.getElementById('button').addEventListener('click',buttonClick)
 

// function buttonClick(e)
// {
//     // console.log('button clicked')

//     // document.getElementById('header-title').textContent="Title Changed"
//     // document.querySelector('li').style.backgroundColor='orange'
//     console.log(e)
//     console.log(e.target)//you will get the targetted element
//     console.log(e.target.id)// if you want fetch id of targetted element
//     console.log(e.target.className)//it will give you all the classes of target element as string
//     var output = document.getElementById('output')
//     output.innerHTML = '<h3>'+e.target.id+'</h3>'
//     console.log(e.type)// it will give you the type of event

//     console.log(e.clientX)//it will give you the mouse position in x-axis from window.
//     console.log(e.clientY)//it will give you the mouse position in y-axis from window.

//     console.log(e.offsetX)//it will give you the mouse position in x-axis from the element you are inside off.

// }

var button = document.getElementById('button')
var box = document.getElementById('box')

var itemInput = document.querySelector('input[type="text"]')
var form  = document.querySelector('form')
var select = document.querySelector('select')

// itemInput.addEventListener('keydown',runEvent)
// itemInput.addEventListener('keyup',runEvent)
// itemInput.addEventListener('keypress',runEvent)
itemInput.addEventListener('focus',runEvent)
itemInput.addEventListener('blur',runEvent)

itemInput.addEventListener('cut',runEvent)
itemInput.addEventListener('paste',runEvent)

// button.addEventListener('click',runEvent)
// button.addEventListener('dblclick',runEvent)
// button.addEventListener('mousedown',runEvent)
// button.addEventListener('mouseup',runEvent)

// box.addEventListener('mouseenter',  runEvent)
// box.addEventListener('mouseleave',  runEvent)
// box.addEventListener('mouseover',  runEvent)
// box.addEventListener('mouseout',  runEvent)

select.addEventListener('change',runEvent)
form.addEventListener('submit',runEvent)

//Difference between mouse enter and mouseover: Mouse enter works for an element not for its child elenent where
//where as mouseover will work for child element as well.
//Same with mouseleave and mouse out


function runEvent(e)
{
    e.preventDefault()
    console.log(`event type:` +e.type )
    console.log(e.target.value)
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
}

//DIFFERENCE BETWEEN TARGET AND CURRENT TARGET

//target refers to the DOM element that triggers an event. Otherwise, 
//currentTarget refers to the DOM element that the event listener is listening on.
//target  is the element that triggered the event (e.g., the user clicked on)
//currenttarget is the element that the event listener is attached to.
 var items = document.getElementById('items')

 items.addEventListener('click', (e)=>
 {
     console.log(e.target)
     //out put : <li class="list-group-item>"</li>
     console.log(e.currentTarget)
     //output : <ul id="items" class="list-group"></ul>

 });


//DIFFERENCE BETWEEN QUERYSELECTOR AND QUERYSELECTORALL

/* The difference between querySelector() and querySelectorAll() is that querySelector() returns a
 single object with the first HTML element that matches the 'selectors', but querySelectorAll()
  returns an array of objects with all the HTML elements that match the 'selectors'. */ 

  //Difference between e.preventDefault() , e.stopPropogation()

 // event.preventDefault() – It stops the browsers default behaviour.
//  event.stopPropagation() – It prevents the event from propagating (or “bubbling up”) the DOM.
//The stopPropagation() method prevents propagation of the same event from being called.

//Propagation means bubbling up to parent elements or capturing down to child elements.

document.getElementById("myAnchor").addEventListener("click", function(event){
  event.preventDefault()
});


function func1(event) {
  alert("DIV 1");
  if (document.getElementById("check").checked) {
    event.stopPropagation();
  }
}

function func2() {
  alert("DIV 2");
}


//********************************************************************************************************************** */
//SCOPE, CLOSURE & HOISTING IN JAVASCRIPT

//Global Scope

//Any variable declared outside all function, independently that’s a part of global scope.

var x = "variable in global scope";
function global() {
    console.log(x); // prints "variable in global scope"
}
global();

//LOCAL SCOPE

function local() {
    var x = "variable in local scope";
    console.log(x); // prints "variable in local scope"
}
local();

//BLOCK SCOPE

function block() {
    if (true) {
        let x = "variable in block scope";
        console.log(x); // prints "variable in block scope" because in this scope, x has value "doughnut"
    }
    console.log(x); // prints "variable in global scope" because "let" keyword uses block scoping. x assumes its original value which is "variable in global scope"
}
block();


var a = 1;
function seven() {
    if (true) {
        var a = 7; //replaced var with let now it will print a=1
    }
    console.log(a);//print 7, While resolving a variable, JavaScript starts at the innermost scope and searches outwards. 
                  //So, when the console.log(a) is encountered, the compiler starts at the innermost scope and searches outwards. 
                  //In the innermost scope (the mandatory "if" block), a has a value of 7. Thus, 7 is printed on the console.

   
}

//HOISTING


//It is a process through which variable and function declarations are virtually moved to the top of your code. 
//In JavaScript will process variables declared with “var” before any other code is processed. 

function printAge() {
    age = 19;
    console.log("My age is " + age);
    var age;
}

printAge();

//Work perfectly fine, even though the declaration of the variable "age" comes after the point when the variable "age" is used.
// In variable hoisting, JavaScript will interpret the above code as follows,

// function printAge() {
//     var age; // variable declarations are moved to the top of the code due to hoisting
//     age = 19;
//     console.log("My age is " + age);
// }

//NOTE : An most important here that in Hoisting is that JavaScript only hoists declarations, not initializations. 
//If a variable is declared and initialized after using it, the value will be undefined.

console.log(num); // Returns undefined
var num;
num = 6;



//CLOSURE

//A closure is a function having access to the parent scope, even after the parent function has closed.
//Closure in action that is inner function can have access to the outer function variables as well as all the global variables.

const outerFun = (a)=>
{
    let b = 10;
    const innerFun = ()=>
    {
        let sum = a+b;
        console.log(`the sum of two no. is ${sum}`)
    }

  return  innerFun
}

 let inner = outerFun(5);
 console.dir(inner);

 inner()
 

 //FALSY VALUE IN JS

 console.log("The 7 falsy values")
0 ? console.log("truthy") : console.log("falsy") // falsy
0n ? console.log("truthy") : console.log("falsy") // falsy
null ? console.log("truthy") : console.log("falsy") // falsy
undefined ? console.log("truthy") : console.log("falsy") // falsy
false ? console.log("truthy") : console.log("falsy") // falsy
NaN ? console.log("truthy") : console.log("falsy") // falsy
"" ? console.log("truthy") : console.log("falsy") // falsy

//The values null and undefined are loosely equal to each other.
//NaN is not equal to any other value, not even itself.
//The other falsy values (0, 0n, false, and "") are all loosely equal.




