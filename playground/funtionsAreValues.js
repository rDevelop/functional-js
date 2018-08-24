const PI = 3.14
const otherPI = PI;
console.log(PI, PI === otherPI);

function add(x, y) {
    return x * y;
}
const otherAdd = add;
console.log(otherAdd(1,2) ,add, add === otherAdd);

// PASSING FUNCTIONS

function otherFunction(f) {
    const PI = 3;
    console.log(f(PI));
}

otherFunction(add);
