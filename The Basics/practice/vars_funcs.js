//HOISTING IN JAVASCRIPT

//invoking functions before defining them
getName();
console.log(x)
console.log(getName)

var x=7;

function getName()
{
    console.log("Hello JavaScript");
}


//when we invoke functions after defining them
getName();
console.log(x);