// RESOURCES
// https://www.youtube.com/watch?v=3b7FyIxWW94&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=5

let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');


var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 2;

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let colorArray = [
    '#D9737B',
    '#434F73',
    '#F2CEA2',
    '#F2ADA7'
];

var gravity = 1;
var friction = .7

window.addEventListener('mousemove', function() {
    mouse.x = event.x;
    mouse.y = event.y;

})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

function randomColor(color) {
    return color[Math.floor(Math.random() * colorArray.length)]
}


class Ball {
    constructor(x, y, dy, radius, color, friction) {
        this.x = x;
        this.y = y;
        this.dy = dy
        this.radius = radius;
        this.color = color;
        this.friction = friction;

        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.closePath;
        };


        this.update = function() {
            if (this.y + this.radius + this.dy > canvas.height) {
                this.dy = -this.dy * friction;
            } else {
                this.dy += gravity;
            }
            this.y += this.dy;
            this.draw();
        }


    }
}

var ball;
var ballArray = [];

window.addEventListener('click', function() {

    var radius = randomIntFromRange(5, 30);
    var x = mouse.x;

    var y = mouse.y;

    ballArray.push(new Ball(x, y, 2, radius, randomColor(colorArray), friction))

});


var circleArray = [];



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < ballArray.length; i++) {
        ballArray[i].update();

    }


}

animate();