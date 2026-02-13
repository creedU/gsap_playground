import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
    gsap.fromTo(bar, {
        scaleY: 0.4
    },{
        scaleY: 1,
        duration: 0.4,
        delay: index * 0.1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
    })
});