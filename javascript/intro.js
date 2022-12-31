function difficulty() {
    var appear = document.getElementById("levels");
    var start = document.getElementById("start");
    if (appear.style.display === "none") {
        appear.style.display = "block"; 
    } else {
        appear.style.display = "none";
    }
}