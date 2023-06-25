var bg = document.querySelector("body");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var random = document.querySelector("#random");



function bgGen() {
    bg.style.background = 
    "linear-gradient(to right, " 
    + color1.value + ", " 
    + color2.value + ")";

    css.innerHTML = bg.style.background + ";";
}


function Random() {
    var rnd1 = Math.floor(Math.random() * 899999 + 100000);
    var rnd2 = Math.floor(Math.random() * 899999 + 100000);
    var color1Random = "#" + rnd1;
    var color2Random = "#" + rnd2;
    bg.style.background =
    "linear-gradient(to right, "
    + color1Random + ", " 
    + color2Random + ")";
    color1.value = color1Random;
    color2.value = color2Random;
    css.innerHTML = bg.style.background + ";";


}

bgGen()

random.addEventListener("click", Random)

color1.addEventListener("input", bgGen)

color2.addEventListener("input", bgGen)

