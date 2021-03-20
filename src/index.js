import './styles/main.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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