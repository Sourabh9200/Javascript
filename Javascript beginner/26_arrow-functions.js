/* //Simple function
let hello = function sayHello(){
    console.log('Hello');
}
hello();

//Simple arrow functions

let hi =  () => { console.log('Howdy');}
hi();

//Keyword function is removed and a fat arrow is added 
const bye = () => {console.log('Bye function');}
bye();

//We can pass the arguments in the (), that is why it is still there
let greet = (title) => { console.log(`Howdy ${title}`)};
greet('Sourabh');


//Arrow functions which returns a value
let add = (a,b) => {return a + b };
console.log(add(7,3)); */

//Advanced arrow functions use cases - Most common in real applications
let names = ['david', 'Sourabh', 'Dabbu', 'Kaira'];

//traditional approach to iterate the array
let iter = () => {
    for (i = 0; i < names.length; i++) {
        console.log('Howdy ' + names[i] + '!');
    }
};

//iter();

//With native methods of array using arrow function [Similar to functional programming in java]
//names.map((name) => {console.log(`Howdy ${name}!`)});

//We can even perform 2 or more functions inside arrow function seperated by ;
//let i = 0;
//names.map((name) => {i++; console.log(`Howdy ${name } ${i}!`)});

//returning a value from an arrow fn and map
var tranformed = names.map((name) => {return `Howdy ${name}!`});
console.log(tranformed);
