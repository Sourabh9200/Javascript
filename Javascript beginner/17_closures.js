//Whenever we return a function from a function, all the values passed by outer function will be accessible by inner function

function sayHello(name) {
    return function () {
        console.log('Howdy ' + name);
    }
}

let greet = sayHello('Dabbu');
greet();