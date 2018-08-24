var R = require('ramda');
//const data = require('./data/data.js');
//const friends = data.friends;
//------ Currying  (function that takes a parameters and using within functions)
//function greet(greeting) { //}, name) {
//    return function(name) {
//        return `${greeting} ${name}`;
//    };
//};


//function greet(greeting, name) {
//    return `${greeting} ${name}`;
//}
/*
same as below
 */
// const greet = (greeting, name) => `${greeting} ${name}`;

const friends = ['Nate', 'Pete', "Lisa", "Ted"];
const greet = R.curry((greeting, name) => `${greeting} ${name}`);

console.log(greet('Hello')('Rob'));
console.log(greet('Hi', 'Rob'));

const morningGreeting = greet("Top of the morning");
console.log(morningGreeting("Rob"));

const friendsGreetings = friends.map(greet("Good Morning"));
console.log(friendsGreetings);
