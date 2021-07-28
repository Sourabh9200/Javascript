/*
//Don't declare variables in global scope
var myVariable = 'I am at the global scope';
//Same with below 
var myFunction = function()
{
    console.log('me too!');
}
*/

/*
function one(){
    return 'one';
}

let value = one;

//console.log(value);

//console.log(one())

console.log(typeof value) // return function 

// In java script, function is also a data type i.e. it can be returned just like string or int etc.

console.log(value()); // value is having reference to the function one() and can be used to invode the function one using ()

// Since function is a datatype, function can return a function 

function two()
{
    return function () {
        console.log('two');
    }
}

let myFunction  = two();
myFunction();
*/

function three(){
    return function(){
        return 'three';
    }
}


console.log(three()());
