const data = require('./data/data.js');
const friends = data.friends;

function greet(greeting) { //}, name) {
    //return `${greeting} ${name}`;
    return function(name) {
        return `${greeting} ${name}`;
    };
};
console.log(greet('hi')('rob'));

const friendGreetings = friends.map(greet("Good Morning"));

console.log(friendGreetings);


// Higher-order function
// map, greet


// closure

// Currying

// Partial Application
