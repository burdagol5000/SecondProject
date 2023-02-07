
let word='';
let randomWords='';
let correct = [];
let words=null;


//function to generate a random word from the array
function random() {
    word = randomWords[Math.floor(Math.random() * randomWords.length)];
}

//function to generate the buttons to be used to play the game
function button() 
{
    let buttons = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>   
        `<button id='` + letter + `'onClick="guess('` + letter + `')"> ` + letter + `</button> `).join(''); 
    document.getElementById('letters').innerHTML = buttons;
}
//function to check if the pushed/clicked button is on the random word that was chosen
function guess(chosen) 
{
    correct.indexOf(chosen) === -1 ? correct.push(chosen) : null;
    document.getElementById(chosen).setAttribute('disabled', true);
    if (word.indexOf(chosen) >= 0) 
    {
    //if clicked letter is on the random word problem() function will be ran again to update the shown and hidden letters on h3 problem
      problem();
      guessedword();
    } 
    else if (word.indexOf(chosen) === -1) 
    {
    //else if the clicked button/letter is not on the random word, deduct the number of chances,execute chances() function and zerochances() function
    chance--;
    updateChance();
    zerochances()
    }
}
//function that will generate the spaces where letters will appear if successfully guessed
function problem() 
{
    words = word.split('').map(letter => (correct.indexOf(letter) >= 0 ? letter : " _ ")).join('');
    document.getElementById('problem').innerHTML = words;
}
//function that will update the span chance on how many chances left
function updateChance() 
{
    document.getElementById('chances').innerHTML = chance;
}

//function that will check if chance reaches 0, then player loses the game
function zerochances() 
{
    if (chance === 0) { 
    document.getElementById('bombs').src = 'assets/images/nuke.jpg';
    document.getElementById('letters').innerHTML = '<a href="index.html">Back</a>';
    }
}

//function that will check if player has guessed the word correctly
function guessedword() 
{
    if (words === word) {
    document.getElementById('bombs').src = 'assets/images/gjob2.jpg';
    document.getElementById('letters').innerHTML = '<a href="index.html">Back</a>';
    }
}
random(); 
button();
problem();  

    

