// RESOURCES:
// Chris Courses HTML5 Canvas Tutorial for Beginners
// Episodes 1 to 4 + "How to Code: Gravity"


let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

/*c.fillRect(100, 100, 300, 200);


c.beginPath();
c.moveTo(50, 300);

c.lineTo(800, 100);
c.strokeStyle = 'red'
c.stroke();


for (let i = 0; i < 100; i++) {
    c.beginPath();
    c.arc(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "blue"
    c.stroke();
}
*/

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 40;
var minRadius = 2;

var colorArray = [
    '#468966',
    '#FFF0A5',
    '#FFB03B',
    '#B64926',
    '#8E2800'
]

window.addEventListener('mousemove', function() {
    mouse.x = event.x;
    mouse.y = event.y;

    console.log(mouse)
})

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})


class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
        };
        this.update = function() {
            if (this.x + radius > innerWidth || this.x - radius < 0) {
                this.dx = -this.dx;
            }

            if (this.y + radius > innerHeight || this.y - radius < 0) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                if (this.radius < maxRadius) {

                    this.radius += 1;
                }
            } else if (this.radius > minRadius) {
                this.radius -= 1;
            }

            this.draw();
        }


    }
}

var circleArray = [];

for (let i = 0; i < 100; i++) {
    let radius = 30;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let dx = (Math.random() - 0.5) * 4;
    let y = Math.random() * (innerHeight - radius * 2) + radius;
    let dy = (Math.random() - 0.5) * 4;



    circleArray.push(new Circle(x, y, dx, dy, radius));

}





function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();

    }

}

animate();