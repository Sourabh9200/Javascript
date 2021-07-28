let first = 'It is the art of an educated mind to be able to entertain a thoght without accepting it';
let second = 'Do to do not, there is no try'
let third = '4,5,6,8,3,6,9';

console.log('how are you'.toUpperCase()); // this also works

//split
console.log(third.split(','))

//slice - pull out string between start and end-1 index
console.log(second.slice(0,2));

//Substr - pull out string between starting index till the length - 1 
console.log(second.substr(0,5));

console.log(second.startsWith('Do'));

console.log(second.endsWith('try'));

console.log(second.includes('there'));

console.log('Ha! '.repeat(3));

let a = '        text     ';
console.log(a.length);
console.log(a.trim());
console.log(a.trim().length);

