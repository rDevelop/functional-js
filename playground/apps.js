const R = require('ramda');

/* Apps
Present Data in a Meaningful way
 */

// Simple Take
// Data & Transformations
// Using functions

//  function ------> key to functional programming

// pure function                  --  creates & returns based on parameters and has no side effects
  // 1. Have input parameters
  // 2. No stateful values
  // 3. return based on inpu
  // 4. no side effect  ( database change., file , interface change)

/* Not easy to write pure functions */



function add(x, y) {
    return x + y;
}
const add2 = (x, y) => x + y;


// impure function (procedure)  ( breaks any pure function rule
let counter = 0;
function increment() {  // procedure more than function
    counter++;
}


/*
Functional Programming - tightly controlling state and illiminating as much as possible
Testing is easy resusable composable
*/


function calculateFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

function calculateCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const celsiusToFahrenheit = n =>  (n * 9/5 + 32);
const celsiusToKelvin = n => n + 273.15;
const fahrenheitToCelsius = n =>  (n - 32) * 5/9;
const fahrenheitToKelvin = n => (n + 459.67) * 5/9;
const kelvinToFahrenheit = n => n * 9/5 - 459.67;
const kelvinToCelsius = n => n - 273.15;


console.log(celsiusToFahrenheit(20));
console.log(celsiusToKelvin(20));
console.log(fahrenheitToCelsius(68))
console.log(calculateCelsius(68));
console.log(fahrenheitToKelvin(60));
console.log(kelvinToFahrenheit(300));
console.log(kelvinToCelsius(300));
