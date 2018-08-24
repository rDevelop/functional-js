/*
function slice( apple ) {
    return "sliced apple";
}

function bake(sliced_apple){
    return "pie";
}

// compose same output as input

const makePie = compose( bake, slice);
const pie = makePie("Apple");
*/
const R = require('ramda');
const sentence = "rer er ere ere ererwerq re rwerwe rwe rwerwer ewrew gsdgs sgre egege.";
const wordList = R.split(" ", sentence);
console.log(wordList);

//const wordCount = R.length(wordList);
const wordCount = R.length(R.split(' ', sentence));
console.log(wordCount);

// function composition
// compose
const countWords = R.compose(R.length, R.split);
console.log(countWords(' ', sentence));

const countWords2 = R.compose(R.length, R.split(' '));
console.log(countWords2(sentence));

const countWords3 = R.pipe(R.split(' '), R.length);
console.log(countWords3(sentence));
