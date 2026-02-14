import gsap from "gsap";

gsap.set(".gsap-box", {opacity: 0, scale: 0.5,x:-100, y:-100});

gsap.to(".gsap-box", {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    ease: "ease.out",
    duration: 0.5,
    stagger: 0.1
})