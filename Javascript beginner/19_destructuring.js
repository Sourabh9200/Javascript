// Destructuring is a process of picking up values from one data structure to another 

let a, b, c, d, e;

let names = ['Dabbu', 'Sona', 'Kaira', 'Ankita', 'Sourabh'];

/* [a,b,c,e,d] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); */

/* let others;

[a,b, ...others] = names;

console.log(a);
console.log(b);
console.log(others); */

let year,model; 

({year, model} = {
    make : 'bmw',
    model : '745li',
    year : 2012,
    value : 30000
});

console.log(year);
console.log(model);

