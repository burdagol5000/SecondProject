function difficulty() {
    const levels = document.getElementById("levels");
    const start= document.getElementById("start");
 
    if (levels.style.display === "none") 
    {
        levels.style.display = "block";
        start.style.display = "none";
        
    } else 
    {
        levels.style.display = "none";
    }
}
var normalWords=["ELEPHANT","ZEBRA","CANADA","EUROPE","ASIA","AMERICA","BLUE","BLACK","VIOLET","PANDA"]
var hardWords=["FILTER","EUPHORIA","COLLAGEN"," MAGNESIUM","PHILIPPINES","DEMENTIA","RAGNAROK","ANDROMEDA","ESSENTIAL","GASTROENTERITIS"]

function level(level) 
{
    const gameboard=document.getElementById("gameboard");
    const levels= document.getElementById("levels");
    if (gameboard.style.display === "none") 
    {
        gameboard.style.display = "block";
        levels.style.display = "none";
        
    } else
    {
        gameboard.style.display = "none";
    }
    let chosenDifficulty = level;

    if (chosenDifficulty === 0)
    {
        randomWords=normalWords;
        chance=8;
    }
    else if (chosenDifficulty === 1)
    {
        randomWords=hardWords;
        chance=5;
    }
    
}