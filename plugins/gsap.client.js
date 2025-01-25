// plugins/gsap.client.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin(() => {
    // Enregistrez les plugins GSAP globaux ici
    gsap.registerPlugin(ScrollTrigger);

    // Rendez GSAP accessible globalement dans votre application
    return {
        provide: {
            gsap,
        },
    };
});
