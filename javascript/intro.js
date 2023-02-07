function difficulty() {
    const levels = document.getElementById("levels");
    const start= document.getElementById("start");
    if (levels.style.display === "none"||start.style.display==="block") 
    {
        levels.style.display = "block";
        start.style.display = "none";
    } else 
    {
        levels.style.display = "none";
    }
}

