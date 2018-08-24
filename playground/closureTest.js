const music = [
    { artist: 'Tupac', genre: 'Hip-Hop'},
    { artist: 'Cure', genre: 'Alternative'},
    { artist: 'Journey', genre: 'Rock'},
    { artist: 'Biggie', genre: 'Hip-Hop'},
    { artist: 'Bethoven', genre: 'Classical'},
];

const when = {
    ok: 'Sometimes I listen to it',
    bad: 'I will only if I have to listen to it',
    great: "I will jam it in my hooptie",
}

const feeling = {
    ok: "I feel ok",
    bad: "I feel like shit",
    great: "I feel awesome",
}

function taste(genre) {
    if( genre === 'Hip-Hop') {
        return 'great';
    } else if ( genre === "Alternative") {
        return 'ok';
    } else if ( genre === "Classical") {
        return 'ok';
    } else {
        return 'bad';
    }
}

function listenTo(factor) {
    return function(musician) {
        const rating = taste(musician.genre);
        const when = factor[rating];
        return `If it is ${musician.artist}, ${when}`;
    }
}

const myFeelings = music.map(listenTo(feeling));
const whenIListen = music.map(listenTo(when));
console.log(myFeelings,  whenIListen);

