// This keyword in js is used to bind a variable/method

/* function first(){
    return this;
}

console.log(first() === global); */

/* This is Node's global object because that's where the first method was called */

/* function second(){
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined); */


/* let myObject = { value : 'My Object' };

global.value  = 'Global Object';

function third()
{
    //Returns depending on how we are calling this method if.e. default vs manual binding 
    return this.value;
} */

//this will be bind to global object and inturn return the value set by global.value; this is default behavoir
//console.log(third());

//Manually binding this keywrod to myObject by using new syntax below i.e. passing object as first argument
/* console.log(third.call(myObject));
console.log(third.apply(myObject)); */


/* Both the call and apply allow you to explicitly set what you want to represent this
The difference is in how additional arguments to the function are sent 
In our example no additional arguments are sent */


function fourth(){
    console.log(this.firstName + ' ' + this.lastName);
}

let customer1 = {
    firstName : 'Sourabh',
    lastName : 'Fatnani',
    print : fourth
}

let customer2 = {
    firstName : 'Kaira',
    lastName : 'Fatnani',
    print : fourth
}

customer1.print();
console.log(this.fourth());

customer2.print();
console.log(this.fourth());