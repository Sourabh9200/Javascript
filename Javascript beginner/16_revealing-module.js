let counter = (function () {

    //private 

    count = 0;

    function print(message) {
        console.log(message + '----' + count);
    }

    function getCount(){ return count; }
    function setCount(value) { count = value; }

    function incrementCount() {
        print('Before increment ');
        count += 1;
        print('After increment ');
    }

    function resetCount(){
        print('Before reset ');
        count =0;
        print('After reset');
    }

// Reveals the below functions
//Clearer presentation
//however, you can accidently overwrite
//the property values 

    return {
        get : getCount,
        set : setCount,
        increment : incrementCount,
        reset : resetCount
    };
})();

counter.set(10);
counter.increment();
counter.increment();
console.log(counter.get());