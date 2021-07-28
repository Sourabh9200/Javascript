let a = 'first';

function scopeTest()
{
    
    console.log(a);

    if (a != '')
    {
        console.log(a);
        let c = 'third';
    }

    let b = 'second';
}

scopeTest();
//console.log(b);
console.log(c);