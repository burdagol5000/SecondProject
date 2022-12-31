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
        `<button id='` + letter + `'onClick="Guess('` + letter + `')"> ` + letter + `</button> `).join(''); 
    document.getElementById('letters').innerHTML = buttons;
}

//function that will generate the spaces where letters will appear if successfully guessed
function problem() {
    words = word.split('').map(letter => (correct.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('problem').innerHTML = words;
}
//function to check if the pushed/clicked button is on the random word that was chosen
function Guess(chosen) {
    correct.indexOf(chosen) === -1 ? correct.push(chosen) : null;
    document.getElementById(chosen).setAttribute('disabled', true);
    if (word.indexOf(chosen) >= 0) {

    //if clicked letter is on the random word problem() function will be ran again to update the shown and hidden letters on h3 problem
      problem();
      guessedword();
    } else if (word.indexOf(chosen) === -1) {

    //else if the clicked button/letter is not on the random word, deduct the number of chances,execute chances() function and zerochances() function
    chance--;
    chances();
    zerochances()
    }
}

//function that will update the span chance on how many chances left
function chances() {
    document.getElementById('chances').innerHTML = chance;
}

//function that will check if chance reaches 0, then player loses the game
function zerochances() {
    if (chance === 0) { 
    document.getElementById('bombs').src = 'assets/nuke.jpg';
    document.getElementById('letters').innerHTML = '<a href="index.html">Back</a>';
    }
}

//function that will check if player has guessed the word correctly
function guessedword() {
    if (words === word) {
    document.getElementById('bombs').src = 'assets/gjob2.jpg';
    document.getElementById('letters').innerHTML = '<a href="index.html">Back</a>';
    }
  }


random();
Buttons();
problem();