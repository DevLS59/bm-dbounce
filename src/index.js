import './styles/main.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from '@barba/core';

gsap.registerPlugin(ScrollTrigger);

gsap.to('.container-miniature-gauche', {
    scrollTrigger : {
        trigger : '#main',
        start : 'top top',
        scrub : 3,
        pin : '#main'
    },
    x :'-100%'
})
gsap.to('.container-miniature-droit', {
    scrollTrigger : {
        trigger : '#main',
        start : 'top top',
        scrub : 3,
        pin : '#main'
    },
    x :'100%'
})







// barba animation 
// const wipe = document.querySelector('.overlay');

// // const TLAnim = new TimelineMax();

// function delay(n) {
//   return new Promise((done) => {
//     setTimeout(() => {
//       done();
//     }, n)
//   })
// }

// barba.init({

//   sync: true,

//   transitions: [
//     {
//       async leave(){

//         const done = this.async();

//         gsap.to(wipe, {left: '0%', ease: "power2.out", duration: 0.5});

//         await delay(1500);
//         done();

//       },
//       enter(){

//         gsap
//         .to(wipe, {left: '100%', ease:"power2.in", duration: 0.5})
//         .set(wipe, {left: '-100%'})

//       }
//     }
//   ]

// })
