var button = document.querySelector("input");
var audio = new Audio('./myman.mp3');


button.ontouchstart = myManBg;

button.addEventListener(ontouchstart, function() {
    document.body.style.backgroundImage = "url('./myman.jpg')";
})

button.addEventListener(ontouchstart, function() {
    document.body.style.backgroundImage = 'none';
})

function myManBg() {
    audio.play();
    document.body.style.backgroundImage = "url('./myman.jpg')";
    console.log('4231')

}

function normal() {
    document.body.style.backgroundImage = 'none';
}