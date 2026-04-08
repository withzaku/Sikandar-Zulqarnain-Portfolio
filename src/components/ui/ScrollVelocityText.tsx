"use client";

import { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
    children: React.ReactNode;
    baseVelocity: number;
    className?: string;
}

export function ScrollVelocityText({ children, baseVelocity = 100, className = "" }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    const [skewValue, setSkewValue] = useState(0);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // Change direction based on scroll velocity direction
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        // Add dynamic skew based on scroll velocity
        setSkewValue(velocityFactor.get() * 5); // Skew multiplier

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={`overflow-hidden m-0 whitespace-nowrap flex flex-nowrap ${className}`}>
            <motion.div
                className="font-heading font-black uppercase text-[10vw] flex whitespace-nowrap flex-nowrap items-center text-transparent"
                style={{ x, WebkitTextStroke: "2px rgba(255, 255, 255, 0.05)" }}
                animate={{ skewX: skewValue }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <span className="block mr-8">{children}</span>
                <span className="block mr-8">{children}</span>
                <span className="block mr-8">{children}</span>
                <span className="block mr-8">{children}</span>
            </motion.div>
        </div>
    );
}
