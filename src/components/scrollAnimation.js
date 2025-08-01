import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export function useAnimateOnScroll(elementRef, options = {}) {
    let ctx;

    onMounted(() => {
        if (!elementRef.value) return;

        ctx = gsap.context(() => {
            gsap.from(elementRef.value, {
                y: 10,
                opacity: 0,
                duration: 0.8,

                scrollTrigger: {
                    trigger: elementRef.value,
                    start: 'top 90%',
                    toggleActions: 'play reverse play reverse',
                },

                ...options,
            });
        });
    });

    onUnmounted(() => {
        if (ctx) {
            ctx.revert();
        }
    });
}