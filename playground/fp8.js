// Count how many numbers there are in the following
// sentence, using functional composition

// NOTE: If you get stuck, you can get some hints from
// the following jsbin:
// https://jsbin.com/gikuwol/edit?js,console
// my solution is here: https://jsbin.com/derelav/1/edit?js,console
const R = require('ramda');
const assert = require('assert');

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

// add function composition here
const numbersInString = R.pipe(R.split(''), R.map(parseInt), R.filter(Number.isInteger), R.length);

    assert(numbersInString(sentence),7);

console.log('If you see this printed in the console, the test passed!');