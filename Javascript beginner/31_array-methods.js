let names = ['Dabbu', 'Sona', 'Kaira', 'Ankita', 'Sourabh'];
let others = ['Triple H','Batista','Rock','Brock']

let lost = [3,54,6,7,26,8,33,67]
let fibonacci = [1,1,2,3,5,8,13,21,34,55]

// combine 2 or more arrays 
var combine = lost.concat(fibonacci);
//console.log(combine)

//let x = lost.map((n)=> {console.log(n*10)}); 

//console.log(fibonacci.join('~'));

//remove element from first 
console.log('Before shift '+lost);
console.log(lost.shift());
console.log('After shift '+lost);

//Add element from start
console.log('Before unShift '+lost);
lost.unshift(1,2,3,4,10);
console.log('After unShift '+lost);

// reverse index of array
console.log(names.reverse());

// sort 
console.log(names.sort());

console.log(others.indexOf('Rock'));

console.log(combine);

//last index of 1 
console.log(combine.lastIndexOf(1));
 
var filtered = combine.filter((x)=> {if (x <=15) return x;})
console.log(filtered);
console.log(filtered.every((num) => {num > 10 }));
console.log(filtered.every((num) => {num < 16 }));

console.log(filtered.some((num) => {num > 100}))



names.forEach((name) => {console.log(`Howdy  ${name}`)});





