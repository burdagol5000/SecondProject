var start=document.getElementById("startingButton");
start.addEventListener("click", difficulty());

function difficulty() 
{
    const LEVELS = document.getElementById("levels");
    const START= document.getElementById("start");
 
    if (LEVELS.style.display === "none") 
    {
        LEVELS.style.display = "block";
        START.style.display = "none";
        
    } else 
    {
        LEVELS.style.display = "none";
    }
}
