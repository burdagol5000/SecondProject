// words to be chosen randomly
var normal=["ELEPHANT","ZEBRA","CANADA","EUROPE","ASIA","AMERICA","BLUE","BLACK","VIOLET","PANDA"]
// variables to store the word chosen and the mistakes guessed and the correct guess limiter
var word='';
let chance = 5;
let correct = [];
words=null;
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
    words = word.split('').map(letter => (correct.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('problem').innerHTML = words;
}

function Guess(chosen) {
    correct.indexOf(chosen) === -1 ? correct.push(chosen) : null;
    document.getElementById(chosen).setAttribute('disabled', true);
  
    if (word.indexOf(chosen) >= 0) {
      problem();
    } else if (word.indexOf(chosen) === -1) {
      chance--;
      chances();
      zerochances()
    }
  }

  function chances() {
    document.getElementById('chances').innerHTML = chance;
  }
  function zerochances() {
    if (chance === 0) { 
        document.getElementById('bombs').src = 'assets/nuke.jpg';
      document.getElementById('letters').innerHTML = '<a href="index.html">Back</a>';
      
    }
  }
  
random();
Buttons();
problem();