let originalCar = {
    make : 'BMW',
    model : '760i',
    year : 2020
};

//Create objects from existing object
let newCar = Object.create(originalCar);

//newCAr also has all the properties of originalCAr
console.log(newCar.make);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);

console.log(myPrototype.make);

//both have same prototypes

//add new propertyt to originalCar
originalCar.door = 4;

//door property gets copied to newCar from originalCar 
console.log(newCar.door);

//check if the properties are owned
console.log(originalCar.hasOwnProperty('door'));
console.log(newCar.hasOwnProperty('door'));

//We can define own property which will overwrite the property from the prototype
newCar.make = 'Maruti';
console.log(newCar.make);
console.log(newCar.hasOwnProperty('make'));

//Add a new propterty to newCar, it will not be referred by the original car
newCar.alloyWheels = true;
console.log(newCar.hasOwnProperty('alloyWheels'));
console.log(originalCar.hasOwnProperty('alloyWheels'));

// Try to access property which does not exist - Undefined
console.log(newCar.whatever)









