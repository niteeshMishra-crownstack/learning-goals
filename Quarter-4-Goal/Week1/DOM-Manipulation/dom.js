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

container.insertBefore(newDiv,h1)


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





