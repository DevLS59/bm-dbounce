import './styles/main.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import barba from '@barba/core';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({


    "(min-width : 768px)" : function() {
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

        gsap.from('.clip1', {
            scrollTrigger : {
                markers : true,
                trigger : '#video',
                start : 'top top',
                scrub : 3,
                pin : '#video'
            },
            x :'-100%',
            opacity : 0
        }),
        gsap.from('.clip3', {
            scrollTrigger : {
                markers : true,
                trigger : '#video',
                start : 'top top',
                scrub : 3,
                // pin : '#video'
            },
            x :'100%',
            opacity : 0
        })
       

        
    }
})
      









