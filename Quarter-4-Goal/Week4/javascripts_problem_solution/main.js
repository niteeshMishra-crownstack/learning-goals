//1. How to get first n elements in an array

let myArray = [1,4,5,"jxyz","fref",45.9, 200]
console.log(myArray.splice(0,3)) //[1,4,5]

//2. How to check if an array includes a value in js
let array1 = [100,300,400,45,90]
console.log(array1.includes(90))// true

//3.How to get the length of the js object

let myObj = 
{
    name:'joe',
    id:200
}
console.log(Object.keys(myObj).length)

//4.How to merege properties of two objects dynamically in javascript

let x = 
{
    name:'tyn',
    id:201
}

let y = 
{
    p1:'gym',
    p2:202
}

let z = {...x, ...y};
console.log(z)

//5.How to check whether a string contains a substring or not in JS

let myString = "Sai Krishna";
console.log(myString.includes('ai'))

//6.How to remove specific item from an array

let array2 = [2,4,5,67,7,56]
// array2.splice(0,1)  //[4, 5, 67, 7, 56]
console.log(array2)

array2.splice(1,2)  //[2, 67, 7, 56]
console.log(array2)

//7.How to get the current url using JS
console.log(window.location.href)

//How to insert an element in an array at specific index

let arr = [2,45,67,89,9,23]
arr.splice(3,0,1) //inserted 1 at third index

console.log(arr)

//How to replace all the occurances of a string in js

let replaceString = "TechnicalFullstack"
let replacedString = replaceString.replaceAll('e','f');
console.log(replacedString)

//How to if object is an array in js

let p  =
{
    id:90,
    rollId : []

}
console.log(Array.isArray(p))
console.log(Array.isArray(p.rollId))

//How to object and index of object based on id in an array in javascript

let objectArray = [{id:1,name:'joe'},{id:2,name:'toe'},{id:3,name:'poe'}];

console.log(objectArray.find(data=>data.id ==1));
console.log(objectArray.findIndex(data=>data.id ==3));

//How to return unique values from an array in javascript

let n = [1,3,2,1,2,3,4,5,6,7,89]
console.log(...new Set(n)) 

//How to check if property exists in an object in JS

console.log('name' in p) //here p is a object and name is property of it

//How to get the common items between 2 arrays in javascript

let a = [2,3,4,6]
let b = [2,5,3,6,7,8,9]
 console.log(a.filter(x=> b.includes(x))) //[2,3,6] -common value in both the array

//How to trim the last character of a string

let trim = "HelloWorld"

console.log(trim.slice(0,-2)) //HelloWor
console.log(trim.substring(0,trim.length-1))//HelloWorl

//Print the sum of 3 numbers entered by user

// store input numbers
// const num1 = +(prompt('Enter the first number '));
// const num2 = parseInt(prompt('Enter the second number '));
// const num3 = Number(prompt('Enter the third number '));

//parseInt() is used to convert the user input string to number the same you can do using + operator before 
//input string or simply adding type Number before input string.
//add two numbers
// const sum = num1 + num2 +num3;

// display the sum
// console.log(`The sum of ${num1} , ${num2} and ${num3} is ${sum}`);

//Write a program to swap two numbers
// Method 1 -USING TEMP VARIABLE
//take input from the users
// let c = prompt('Enter the first variable: ');
// let d = prompt('Enter the second variable: ');

//create a temporary variable
// let temp;

// //swap variables
// temp = c;
// c = d;
// d = temp;

// console.log(`The value of c after swapping: ${c}`);
// console.log(`The value of d after swapping: ${d}`);

//NOTE: You can also swap strings or other data types using this method.

// Method 2 --without using temp variable
// c = c + d;
// d = c - d;
// c = c - d;

//Method 3 -- USING DESTRUCTURING

//using destructuring assignment
// [c,d] = [d, c];

//PROGRAM TO GENERATE RANDOM NUMBER BETWEEN TWO INTEGER

 //GENERATE RANDOM INTEGER VALUE BETWEEN 1 TO 10
 //it will generate 1 inclusive and 10 exclusive 

 //FORMULA --Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber

 //want to generate the randomm integer numer between 2 number inclusive both
 
 //Formula -- Math.floor(Math.random() * (max - min + 1)) + min

 const randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(`Random value between 1 and 10 is ${randomNumber}`);

//// program to find the largest among three numbers

// const largest = Math.max(num1, num2, num3);
// console.log(largest)


// program to generate a multiplication table

// take input from the user
// const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }


// program to find the factors of an integer

// take input
// const num = prompt('Enter a positive number: ');

// console.log(`The factors of ${num} is:`);

// // looping through 1 to num
// for(let i = 1; i <= num; i++) {

//     // check if number is a factor
//     if(num % i == 0) {
//         console.log(i);
//     }
// }


// program to sort words in alphabetical order

// take input
// const string = prompt('Enter a sentence: ');

// converting to an array
// const words = string.split(' ');

// // sort the array elements
// words.sort().join();

// // display the sorted words
// console.log('The sorted words are:' +words);

//NOTE : This is because I and J of JavaScript are in uppercase. And, when we use the sort() method, uppercase 
//letters are placed before lowercase.


// program to reverse a string

// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// take input from the user
// const string1 = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);


// function reverseString(str) {

//     // return a new array of strings
//     const arrayStrings = str.split("");
   
//     // reverse the new created array elements
//     const reverseArray = arrayStrings.reverse();
 
//     // join all elements of the array into a string
//     const joinArray = reverseArray.join("");
    
//     // return the reversed string
//     return joinArray;
// }
 
// // take input from the user
// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);


//Program to capitalize the first letter of String

// const capitalizeFirstLetter = ((str)=>
// {
//   const capitalize =  str.charAt(0).toUpperCase() + str.slice(1);//slice will return the rest of the string and we are using + opereator to concat it with first letter
//   console.log(capitalize)
// })

// const string = prompt('Enter a string: ');
// capitalizeFirstLetter(string)


// program to count the number of vowels in a string

// const countVowel = ((str)=>
// {
//     const numberOfVowel = str.match(/[aeiou]/gi).length;
//     console.log(numberOfVowel)
// })

// The regular expression (RegEx) pattern is used with the match() method to find the number of vowels in a string.
// The pattern /[aeiou]/gi checks for all the vowels (case-insensitive) in a string. Here,
// str.match(/[aeiou]/gi); gives ["a", "a", "i", "o", "a"]
// The length property gives the number of vowels present.
// countVowel(string)


// program to clone the object
// declaring object
const person = {
    name: 'John',
    age: 21,
}

// cloning the object
const clonePerson = { ... person}

console.log(clonePerson);

// changing the value of clonePerson
clonePerson.name = 'Peter';

console.log(clonePerson.name);
console.log(person.name);


// program to count the number of keys/properties in an object

const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
};

let count = 0;

// loop through each key/value
for(let key in student) {

    // increase the count
    count++;
}

console.log(count);

// program to convert an object to a string

const person1 = {
    name: 'Jack',
    age: 27
}

const result =  JSON.stringify(person);

console.log(result);
console.log(typeof result);


// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.
//Imagine we received this text from a web server:

'{"name":"John", "age":30, "city":"New York"}'

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj.name)


//program to empty an array

// substituting new array
//  var emptyArray =    arr.splice(0, arr.length);
//  console.log(emptyArray)

// var emptyArray = arr.length = 0;
// console.log(emptyArray)

// program to merge and remove duplicate value from an array

function getUniqueAfterMerge(arr1, arr2){

    // merge two arrays
    let arr = [...arr1, ...arr2];

    // removing duplicate
    let uniqueArr = [...new Set(arr)];

    console.log(uniqueArr);
}

const arrayOne = [1, 2, 3];
const arrayTwo = [2, 3, 5]

// calling the function
getUniqueAfterMerge(array1, array2);


// program to compare two arrays

function compareArrays(arr1, arr2) {

    // compare arrays
   //The JSON.stringify() method converts an array into JSON string.
   // JSON.stringify([1, 3, 5, 8]); // "[1,3,5,8]"

    const result = JSON.stringify(arr1) == JSON.stringify(arr2)

    // if result is true
    if(result) {
        console.log('The arrays have the same elements.');
    }
    else {
        console.log('The arrays have different elements.');
    }

}

const arrayOne1 = [1, 3, 5, 8];
const arrayTwo2 = [1, 3, 5, 8];

compareArrays(arrayOne1, arrayTwo2);


// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const ar = [1, 'hello', 5, 8];

const res = getRandomItem(ar);
console.log(res);

// program to trim a string

// The split(' ') method is used to split the strings into individual array elements.
// ["", "", "", "", "", "", "Hello", "World", "", "", "", "", "", "", ""]
// The join('') method merges the array into a string.

const string1 = '      Hello World       ';

const result1 = string1.split(' ').join('');

console.log(result1);


//Search text or pattern inside a string

 var st = "Color red looks brighter than color blue.";
 
    // Case sensitive search
    var pos1 = st.search("color");
    document.write(pos1 + "<br>"); // 0utputs: 30
     
    // Case insensitive search using regexp
    var pos2 = st.search(/color/i);
    document.write(pos2); // 0utputs: 0

    var subStr1 = st.slice(5,8)
    console.log(subStr1)

    //JavaScript Join All Elements of an Array into a String

    var colors = ["Red", "Green", "Blue"];
 
    document.write(colors.join() + "<br>"); // Prints: Red,Green,Blue
    document.write(colors.join("") + "<br>"); // Prints: RedGreenBlue
    document.write(colors.join("-") + "<br>"); // Prints: Red-Green-Blue
    document.write(colors.join(", ")); // Prints: Red, Green, Blue


    function insertElement() {
		// Creating a new div element 
		var newDiv = document.createElement("div");
		 
		// Creating a text node 
		var newContent = document.createTextNode("Hi, how are you doing?");
		 
		// Adding the text node to the newly created div
		newDiv.appendChild(newContent);
		 
		// Adding the newly created element and its content into the DOM 
		var currentDiv = document.getElementById("main"); 
		document.body.appendChild(newDiv, currentDiv);
	}	
   