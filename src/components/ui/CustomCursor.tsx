"use client"

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Isolate cursor code and cleanup on unmount mapped to screen moves
        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out',
            });
        };

        const onMouseEnter = () => {
            gsap.to(cursor, { scale: 1.5, duration: 0.3 });
        };

        const onMouseLeave = () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
        };

        window.addEventListener('mousemove', onMouseMove);

        // Add magnetic hover class logic later to interactive elements
        const iteractives = document.querySelectorAll('button, a, input, textarea');
        iteractives.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            iteractives.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-6 h-6 border-2 border-primary rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block transition-transform duration-75"
        />
    );
}
