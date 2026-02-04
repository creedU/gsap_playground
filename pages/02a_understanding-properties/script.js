import gsap from "gsap";

gsap.to(".box", {
    duration: 3,
    opacity: 1,
    background: '#00890b',
    borderRadius: '50%',
    scale: 1.25,
    rotation: 360,
    // y: 200,
    // x:100,
    ease: "bounce.out",
    delay: 0.5,
    repeat: -1,
    yoyo: true
})