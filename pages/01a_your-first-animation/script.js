gsap.to('.card', { 
    duration: 1, 
    opacity: 1, 
    scale: 1, 
    onComplete: () => {
        gsap.to('.card',{
            duration: 0.2,
            y: -20,
            yoyo: true,
            repeat: -1,
        });
    }
});