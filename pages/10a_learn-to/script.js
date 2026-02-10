import gsap from "gsap";

const showToastLoop = () => {
    gsap.to(".toast", {
        y : -120,
        opacity: 1,
        duration: 0.5,
        scale: 1,
        ease: "power2.out",
        onComplete: () => {
            gsap.to(".toast", {
                y : 0,
                opacity: 0,
                duration: 0.5,
                scale: 0.95,
                ease: "power2.in",
                delay: 1,
                onComplete:() => {
                    setTimeout(showToastLoop, 2500);
                }
            })
        }
    })
}

showToastLoop();