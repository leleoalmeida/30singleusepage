let display = document.getElementById('display');
let counter = display.innerHTML = 0;



document.addEventListener('contextmenu', e => {
    e.preventDefault();
    console.log('right');
    counter--;
    display.innerHTML = counter;

})

document.addEventListener("click", e => {
    counter++;
    display.innerHTML = counter;
})

function reset() {
    counter = -1;
}