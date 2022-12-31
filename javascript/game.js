// words to be chosen randomly
var normal=["elephant","zebra","canada","europe","asia","america","blue","black","violet","panda"]
// variables to store the word chosen and the mistakes guessed and the correct guess limiter
var word='';
let limit = 10;
let mistakes = 0;
let correct = [];

function random() {
    answer = normal[Math.floor(Math.random() * normal.length)];
  }