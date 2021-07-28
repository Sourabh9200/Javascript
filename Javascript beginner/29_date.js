let today = new Date();

let dabbu = new Date('September 1, 1990 08:01:23');

console.log(today - dabbu); // will give time in milliseconds

//get parts 

console.log(today.getFullYear());
console.log(dabbu.getUTCDate()); // day of month 