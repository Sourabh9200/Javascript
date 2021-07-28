//Objective is to initialize a count variable at globle scope using module pattern
//We can return few methods to access the count variable and also modify it
//Just like getter and setters
var counter = (function () {
    // private stuff
    //We are not returning count and print, hence, it can't be accessed outside the function using counter variable
    let count = 0;

    function print(message) {
        console.log(message + '----' + count)
    }

    // return an object 
    // Outside world can access only members/functions which are returned by this IEFE
    return {
        get: function () { return count; },

        set: function (value) { count = value; },

        increment: function () {
            print('Before increment: ');
            count += 1;
            print('After increment ');
        },

        reset: function () {
            print('Before reset: ');
            count = 0;
            print('After reset ');
        }   
    }
})();

counter.increment();
counter.increment();
counter.increment();

counter.set(8);

console.log(counter.get());

counter.reset();
