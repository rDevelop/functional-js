const data = require('./data/data.js');
const friends = data.friends;

var R = require('ramda');


/*
 Higher-order function
 map, greet
 closure
 Partial Application
*/

/********   CURRYING AND PARTIAL APPLICATION NEEDED TO BE FUNCTIONAL PROGRAMMER *********/


//------ Currying  (function that takes a parameters and using within functions)
function greet(greeting) { //}, name) {
    //return `${greeting} ${name}`;
    return function(name) {
        return `${greeting} ${name}`;
    };
};
console.log(greet('hi')('rob'));

function greet3(greeting) { //}, name) {
    return function(name) {
        return function(when) {
            return `${greeting} ${name} ${when}`;
        };
    };
};

console.log(greet3('hi')('rob')('today'));
console.log("\n");


// Currying and Partial Application
const friendGreetings = friends.map(greet("Good Morning"));
const afternoonGreet = greet('Good Afternoon');
const greetNate = afternoonGreet('Nate');

console.log(friendGreetings);

// Currying             |     Partial Application
// Coding Function      |     Using Function
// No data              |     Using Data

// partial: allows for partial application
//function add(x, y){
//    return x + y;
//}
const add = (x, y) => x + y;
//const add3 = R.partial(add, 2, 3);
console.log(add(2,3));

//Currying parameter order
/// __ They matter
console.log(greet('rob')('hi'));

