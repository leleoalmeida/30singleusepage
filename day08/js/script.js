//RESOURCES
//SCROL MAGIC - https://scrollmagic.io/

//DEV ED
//https://www.youtube.com/watch?v=fR0tHI0nFYk

gsap.registerPlugin(MotionPathPlugin);

let phrase = "Choose wisely."

let phraseArray = phrase.split("");
console.log(phraseArray);

for (let i = 0; i < phraseArray.length; i++) {
    var letter = document.createElement('span');
    letter.className = `dot`;
    letter.innerHTML = phraseArray[i];
    if (phraseArray[i] === ' ') {
        letter.innerHTML = '&nbsp;'
    }
    var header = document.querySelector("header");
    header.appendChild(letter);

}

const flightPath = {
    curviness: .6,
    autoRotate: true,
    path: [
        { x: 200, y: 0 },
        { x: 300, y: 10 },
        { x: 500, y: 100 },
        { x: 750, y: -100 },
        { x: 350, y: -50 },
        { x: 600, y: 100 },
        { x: 800, y: 0 },
        { x: window.innerWidth, y: -150 }

    ]
}

const tween = gsap.timeline();

tween.add(
    // gsap.from(`.dot`, {
    //     opacity: 0.2

    // }),
    gsap.to(`.dot`, {
        duration: 2.5,
        ease: "elastic.out(1, 0.3)",
        motionPath: flightPath,
        opacity: 1,
        stagger: 0.01
    })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: '.animation',
        duration: 3000,
        triggerHook: 0
    })
    .setTween(tween)
    .addTo(controller);