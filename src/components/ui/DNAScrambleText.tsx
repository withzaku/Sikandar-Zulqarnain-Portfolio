"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CHARS = "ATGCU";

interface DNAScrambleTextProps {
    text: string;
    className?: string;
}

export function DNAScrambleText({ text, className = "" }: DNAScrambleTextProps) {
    // Fix: initialize to real text so no AAAA placeholder is ever shown
    const [displayText, setDisplayText] = useState(text);
    const ref = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let iteration = 0;
        let interval: NodeJS.Timeout | null = null;
        const finalLength = text.length;

        interval = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        if (char === " ") return " ";
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= finalLength) {
                clearInterval(interval!);
            }

            iteration += 1 / 3; // Controls speed of decryption
        }, 30);

        return () => clearInterval(interval!);
    }, [isInView, text]);

    return (
        <motion.div ref={ref} className={className}>
            {displayText}
        </motion.div>
    );
}
