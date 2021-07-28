
/*
let car = {
    make : 'bmw',
    model : '745li',
    year : 2010,
    getPrice : function (){
        // perform some calculations
        return 5000000;
    }, 
    printDescription : function(){
        console.log(this.make + ' ' + this.model);
    } 
}

car.printDescription();
console.log(car.year);

//console.log(car['year']);
//console.log(car[1]);

//Can add adhoc property to an existing object 
var anotherCar = {};
anotherCar.whatever = 'Dabbu';

console.log(anotherCar.whatever);

var a = {
    myProperty : {b : 'hi'}
};
//Method object chaining
console.log(a.myProperty.b);


var c = {
    myProperty1 : [
        {d : 'this'},
        {e : 'can'},
        {f : 'get'},
        {g : 'crazy'}
    ]
};

console.log(c.myProperty1)

*/

let carLot = [
    {year : 2017 , make : 'Toyota' , model : '4Runner'},
    {year : 2015 , make : 'BMW' , model : '528i'},
    {year : 1958 , make : 'Buick' , model : 'Skylark'}
];

console.log(carLot[0].model);

