let pattern = /xyz/ ;

console.log(pattern);
console.log(typeof pattern);

let value = 'This is xyz a test';

//Returns boolean 
//console.log(pattern.test(value));

//replace the string with the pattern if exists
//console.log(value.replace(pattern, 'just'));

// Returns an array with index of matched pattern along with other details like 
console.log(value.match(pattern));
