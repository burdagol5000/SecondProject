function difficulty() {
    var appear = document.getElementById("levels");
    var start= document.getElementById("start");
    if (appear.style.display === "none"||start.style.display==="block") {
        appear.style.display = "block";
        start.style.display = "none";
    } else {
        appear.style.display = "none";
    }
}