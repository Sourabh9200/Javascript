//If else (skipping)


//Switch 
let hero = 'Superman';
switch (hero.toLowerCase()){
    case 'superman': console.log('Super Strength');break;
    case 'batman' : console.log('Knight rider');break;
    default: console.log('Default hero');
}


//Ternary operator
let a = 1, b = '1';

let result = (a == b) ? 'equal' : 'inequal';
console.log('Result : '+ result);

//inline way
//console.log('Result : '+ (a == b) ? 'equal' : 'inequal');

let resultWithDataTypeCompare = (a === b) ? 'equal' : 'inequal';
console.log('Result without coercion : '+ resultWithDataTypeCompare);

//Likewise using equal and !equal 

let resultWithDataTypeCompareUsingNot = (a !== b) ? 'not equal' : 'equal';
console.log('Result without coercion using ! : '+ resultWithDataTypeCompareUsingNot);

