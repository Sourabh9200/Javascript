//Syntactic sugar - Just added classes but nothing changed beneath 

//declaration 
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print() {
        console.log(`${this.make} ${this.model} ${this.year}`);
    }
}

let myCar = new Car('bmw', '750i', 2020);
myCar.print();

//Add inhertience 
class sportsCar extends Car {
    revEngine() {
        console.log('Vrooom goes the ' + this.make);
    }
}

let mySportsCar = new sportsCar('Thar', 'extreme', 2022);
mySportsCar.print();

let car1 = new sportsCar('dodge', 'viper', 2011);
car1.print();

mySportsCar.revEngine();

//not a member of myCar object
//myCar.revEngine();