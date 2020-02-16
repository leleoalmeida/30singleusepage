//RESOURCES
//SCROL MAGIC - https://scrollmagic.io/

//DEV ED
//https://www.youtube.com/watch?v=fR0tHI0nFYk

gsap.registerPlugin(MotionPathPlugin);

const flightPath = {
    curviness: .6,
    autoRotate: true,
    path: [
        { x: 200, y: -20 },
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
    gsap.to(".paper-plane", {
        duration: 1,
        motionPath: flightPath,
        ease: Power1.easeInOut
    })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
        triggerElement: '.animation',
        duration: 1000,
        triggerHook: 0
    })
    .setTween(tween)
    .setPin(".animation")
    .addTo(controller);