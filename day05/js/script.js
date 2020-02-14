let display = document.getElementById('display'),
    button = document.querySelector('button'),
    clickArea = document.getElementsByClassName('scs'),
    offset,
    target,
    go,
    clock,
    interval;


console.log(clickArea);

function start() {
    button.style.display = 'none';
    setTimeout(function() {
        offset = Date.now();
        display.innerHTML = ''
        document.body.style.backgroundColor = '#EE4444';
        // setTimeout(1000);
        // window.onclick = reflex;
        window.addEventListener('click', reflex);
        go = true;

        target = (Math.random() * 5) + 5;
        console.log(target);
        console.log(offset + target);
        interval = setInterval(update, 100);
    }, 2000);
}

function update() {
    clock = Date.now() - offset;
    // display.innerHTML = clock / 1000;
    if (clock / 1000 > target && document.body.style.backgroundColor != 'green') {
        document.body.style.backgroundColor = 'green'
        display.innerHTML = "Go!";
    }
    return clock / 1000;
}

function clicktest() {
    clicktests++;
    console.log(clicktests);
}


function reflex() {
    if (go) {
        button.style.display = 'inline';

        clearInterval(interval);
        console.log(update());
        console.log(target);
        if (update() > target) {
            display.innerHTML = ((clock / 1000 - target) * 1000).toFixed(0) + "ms";
        } else {
            display.innerHTML = "Failed";
        }
        go = false;
    }

}