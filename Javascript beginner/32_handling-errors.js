/* let a = 7 * undefined / 'panama';
console.log(a);

function beforeTryCatch() {
    let obj = undefined;
    console.log(obj.a);
    console.log('You\'ll never see this line.. ');
}

//beforeTryCatch();

function afterTryCatch() {
    try {
        let obj = undefined;
        console.log(obj.a);
        console.log('You\'ll never see this line.. ');

    } catch (error) {
        console.log('Exception caught - ' + error.message);
    }
    finally {
        console.log('Finally block always executes');
    }
}

afterTryCatch();

 */

function performCalculation(obj) {
    if (!obj.hasOwnProperty('b')) {
        throw new Error('Object missing property');
    }
    //continue with the calculation
    return 6;
}

function performHigherLevelOperation() {
    let obj; let value = 0;
    try {
        value = performCalculation(obj);
    }
    catch (error) {
        console.log('Exception caught -' + error.message);
    }

    if (value === 0) {
        // contingency
        //retry logic
    }
}

performHigherLevelOperation();
