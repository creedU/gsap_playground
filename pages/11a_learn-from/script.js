import gsap from 'gsap';

// gsap.from('.card-1', {
//     y: 60,
//     opacity: 0,
//     duration: 0.5,
//     scale: 0.95,
//     ease: 'power4.out',
//     delay: 0.2,
// });

// gsap.from('.card-2', {
//     y: 60,
//     opacity: 0,
//     duration: 0.5,
//     scale: 0.95,
//     ease: 'power4.out',
//     delay: 0.5,
// });

// gsap.from('.card-3', {
//     y: 60,
//     opacity: 0,
//     duration: 0.5,
//     scale: 0.95,
//     ease: 'power4.out',
//     delay: 0.8,
// });

const repeat = document.querySelector('.repeat');

const animation = gsap.from('.card', {
    y: 60,
    opacity: 0,
    duration: 0.5,
    scale: 0.95,
    ease: 'power4.out',
    delay: 0.2,
    stagger: 0.2,
});

repeat.addEventListener('click', () => {
    animation.restart();
});