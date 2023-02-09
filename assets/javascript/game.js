let level1=document.getElementById("level1");
let level2=document.getElementById("level2");
level1.addEventListener("click", function() { level(0); });
level2.addEventListener("click", function() { level(1); });
//variables declared to be used on the game
let word=null;
let randomWords='';
let correct = [];
let words=null;
let normalWords=["ELEPHANT","ZEBRA","CANADA","EUROPE","ASIA","AMERICA","BLUE","BLACK","VIOLET","PANDA"];
let hardWords=["FILTER","EUPHORIA","COLLAGEN"," MAGNESIUM","PHILIPPINES","DEMENTIA","RAGNAROK","ANDROMEDA","ESSENTIAL","GASTROENTERITIS"];
//function to generate a random word from the array
function randomWord() 
{
     word = randomWords[Math.floor(Math.random() * randomWords.length)];
}
//function to generate the buttons to be used to play the game
function buttonsGenerated() 
{
    let buttons = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>   
        `<button id='` + letter + `'onClick="buttonGuessing('` + letter + `')"> ` + letter + `</button> `).join(''); 
    document.getElementById('letters').innerHTML = buttons;
}
//function to check if the pushed/clicked button is on the random word that was chosen
function buttonGuessing(chosen)
{
    correct.indexOf(chosen) === -1 ? correct.push(chosen) : null;
    document.getElementById(chosen).setAttribute('disabled', true);
    if (word.indexOf(chosen) >= 0) 
    {
    //if clicked letter is on the random word problem() function will be ran again to update the shown and hidden letters on h3 problem
      wordChallenge();
      playerWon();
    } 
    else if (word.indexOf(chosen) === -1) 
    {
    //else if the clicked button/letter is not on the random word, deduct the number of chances,execute chances() function and zerochances() function
    chance--;
    updateChance();
    zeroChancesLeft()
    }
}
//function that will generate the spaces where letters will appear if successfully guessed
function wordChallenge() 
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
function zeroChancesLeft() 
{
    if (chance === 0) { 
    document.getElementById('bombs').src = 'assets/images/nuke.jpg';
    document.getElementById('problem').innerHTML= 'The Word is '+word;
    document.getElementById('limit').innerHTML= '<a href="index.html">RESET!</a>';
    document.getElementById('letters').innerHTML = '';
    document.getElementById('homelink').innerHTML =  '';
    }
}

//function that will check if player has guessed the word correctly
function playerWon() 
{
    if (words === word) {
    document.getElementById('bombs').src = 'assets/images/gjob2.jpg';
    document.getElementById('problem').innerHTML= 'Congratulations You won!';
    document.getElementById('limit').innerHTML= '<a href="index.html">RESET!</a>';
    document.getElementById('letters').innerHTML = '';
    document.getElementById('homelink').innerHTML =  '';
    }
}
//function that handles the chosing of difficulty, then it will sort out what group of words to be 
//randomized and start the other functions for the game to start
function level(level) 
{
    const GAMEBOARD=document.getElementById("gameboard");
    const LEVELS= document.getElementById("levels");
    const START= document.getElementById("start");
    if (GAMEBOARD.style.display === "none") 
    {
        GAMEBOARD.style.display = "block";
        LEVELS.style.display = "none";
        START.style.display = "none";
    } else
    {
        GAMEBOARD.style.display = "none";
    }
    let chosenDifficulty = level;

    if (chosenDifficulty === 0)
    {
        randomWords=normalWords;
        chance=8;
        document.getElementById('chances').innerHTML= chance;
        randomWord(); 
        buttonsGenerated();
        wordChallenge();  
    }
    else if (chosenDifficulty === 1)
    {
        randomWords=hardWords;
        chance=5;
        document.getElementById('chances').innerHTML= chance;
        randomWord(); 
        buttonsGenerated();
        wordChallenge();  
    }
}
