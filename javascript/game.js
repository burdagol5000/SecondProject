// words to be chosen randomly
var normal=["elephant","zebra","canada","europe","asia","america","blue","black","violet","panda"]
// variables to store the word chosen and the mistakes guessed and the correct guess limiter
var word='';
let limit = 10;
let mistakes = 0;
let correct = [];
wordstatus=null;
//function to generate a random word from the array
function random() {
    word = normal[Math.floor(Math.random() * normal.length)];
}
//function to generate the buttons to be used to play the game
function Buttons() {
    let buttons = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
        `
        <button id='` + letter + `'onClick="Guess('` + letter + `')">
        ` + letter + `
        </button>
        `).join('');
    document.getElementById('letters').innerHTML = buttons;
}

function problem() {
    wordStatus = word.split('').map(letter => (correct.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('problem').innerHTML = wordStatus;
}

function Guess(chosenLetter) {
    correct.indexOf(chosenLetter) === -1 ? correct.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
  
    if (answer.indexOf(chosenLetter) >= 0) {
      guessedWord();
    } else if (answer.indexOf(chosenLetter) === -1) {
      mistakes++;
      updateMistakes();
    }
  }

random();
Buttons();
problem();