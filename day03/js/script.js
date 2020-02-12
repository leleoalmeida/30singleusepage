let canvas = document.querySelector('canvas');
let button = document.querySelector('button')

canvas.width = window.innerWidth - 2;
canvas.height = 300;

let c = canvas.getContext('2d');

let dropdown = document.querySelector('select');
console.log(dropdown.value)
let go = false;
let v1 = 1;
let v2 = 2;
let radius = 10;
let p1, p2;
p1 = p2 = 50;


let racers = [{ name: "Cheetah", color: "yellow", speed: 20 }, { name: "Sloth", color: "brown", speed: 4 }, { name: "House cat", color: "white", speed: 23 }, { name: "Usain Bolt", color: "black", speed: 40 }, { name: "Gandhi", color: "brown", speed: 12 }];

function reset() {
    p2 = p1 = 50;

}

function updateRacer() {
    if (go) {
        if (p1 < window.innerWidth - 50 && p2 < window.innerWidth - 50) {
            p1 += v1;
            p2 += v2;
        }
        c.beginPath();
        c.arc(p1, canvas.height / 4, radius, 0, Math.PI * 2, false);
        c.fillStyle = "yellow";
        c.fill();
        c.closePath;

        c.beginPath();
        c.fillStyle = 'blue';
        c.arc(p2, canvas.height / 4 * 3, radius, 0, Math.PI * 2, false);
        c.fill();
        c.stroke();
        c.closePath;
    }

    console.log(p1);
    console.log(p2)
    racers.forEach(element => {
        if (element.name === dropdown.value) {
            c.beginPath();
            c.arc(p1, canvas.height / 4, radius, 0, Math.PI * 2, false);
            v1 = element.speed
            c.fillStyle = element.color;
            c.fill();
            c.closePath;

            c.beginPath();
            c.fillStyle = 'blue';
            c.arc(p2, canvas.height / 4 * 3, radius, 0, Math.PI * 2, false);
            c.fill();
            c.stroke();
            c.closePath;

        }
    });
    c.fillText("100m dash", canvas.width / 2, canvas.height)
}


function update() {

}

button.addEventListener('click', function() {

    go = true;
});


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    updateRacer();


}

animate();