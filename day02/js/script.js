var button = document.querySelector("input");

button.ontouchstart = myManBg;

button.addEventListener(ontouchstart, function() {
    document.body.style.backgroundImage = "url('./myman.jpg')";
})

button.addEventListener(ontouchstart, function() {
    document.body.style.backgroundImage = 'none';
})

function play() {


}

function myManBg() {
    document.body.style.backgroundImage = "url('./myman.jpg')";
    var audio = new Audio('./myman.mp4');
    audio.play();
    console.log('4231')

}

function normal() {
    document.body.style.backgroundImage = 'none';
}