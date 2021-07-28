//Variable a is not initiallized hence value is undefined 
// hence type of a will be undefined 
let a;
console.log(a);
console.log(typeof a);


let pattern = /xyz/;
let value = 'This is just a test';
let result = value.match(pattern);


// result is expecting a value but it will depend on the evaluation expression, hence it can be null
console.log(result);

// null is not '' "" 

//ideally type of null should be null bt it is a bug in JS which will not be fixed 
console.log(typeof result);

//bug will not b fixed because null is already in use widely to compare to objects
if (result === null)
{
    console.log('No match was found');
}