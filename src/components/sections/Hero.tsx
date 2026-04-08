"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Preload } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Dna, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollVelocityText } from "@/components/ui/ScrollVelocityText";

// Lazy load 3D component with ssr: false for Edge performance
const DNAHelix = dynamic(() => import("@/components/3d/DNAHelix"), {
    ssr: false,
    loading: () => null
});

const typingContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
};

const typingChar = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

export default function Hero() {
    const introText = "Building intelligent systems for biology and data.".split(" ");

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Marquee */}
            <div className="absolute inset-0 z-0 flex flex-col justify-center opacity-5 pointer-events-none mt-20">
                <ScrollVelocityText baseVelocity={-2}>EXPERT WEB DESIGNER</ScrollVelocityText>
                <ScrollVelocityText baseVelocity={2}>BIOINFORMATICS ENGINEER</ScrollVelocityText>
            </div>

            <div className="container mx-auto px-6 md:px-12 flex items-center relative z-10 w-full h-full">

                {/* Right 3D Canvas — hidden on mobile to save perf, visible on sm+ */}
                <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 right-[-10%] w-[120%] lg:w-[65%] lg:right-0 h-[400px] md:h-[600px] lg:h-[900px] z-0 pointer-events-none opacity-50 lg:opacity-90">
                    <Suspense fallback={null}>
                        <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ antialias: false, powerPreference: "high-performance" }}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} intensity={1} color="#4f46e5" />
                            <pointLight position={[-10, -10, -10]} intensity={1} color="#9333ea" />
                            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                                <DNAHelix />
                            </Float>
                            <Environment preset="city" />
                            <Preload all />
                        </Canvas>
                    </Suspense>
                </div>

                {/* Foreground Text Content — NO max-w constraint so name never clips */}
                <div className="flex flex-col items-start gap-4 md:gap-6 w-full relative z-40">

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-6"
                    >
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Always Available to help you
                    </motion.div>

                    {/* Name — exact original font sizes restored, w-fit so it never clips */}
                    <div className="flex flex-col gap-0.5 text-[8.5vw] xs:text-[9.5vw] leading-[1.1] sm:text-[4rem] md:text-6xl lg:text-[5rem] xl:text-[6rem] font-black tracking-tighter md:leading-[0.85] text-foreground font-heading uppercase relative w-fit mr-auto py-2">

                        {/* Circular Orbit — desktop only */}
                        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-[130%] md:w-[125%] aspect-square pointer-events-none z-[-1] opacity-30 md:opacity-70">
                            <motion.div
                                className="w-full h-full border-2 border-dashed border-primary/30 rounded-[50%]"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            >
                                {/* DNA Icon Satellite */}
                                <motion.div
                                    className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center justify-center bg-background rounded-full p-2 border border-primary/50 shadow-[0_0_20px_var(--primary)] text-primary"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                >
                                    <Dna size={32} />
                                </motion.div>

                                {/* Terminal Icon Satellite */}
                                <motion.div
                                    className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center bg-background rounded-full p-2 border border-primary/50 shadow-[0_0_20px_var(--primary)] text-primary"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                >
                                    <Terminal size={32} />
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Text Container */}
                        <div className="relative z-10 w-full bg-background/0 backdrop-blur-[2px] p-2 rounded-lg">
                            <div className="overflow-hidden py-2 -my-2">
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                    style={{ display: "inline-block" }}
                                >
                                    Sikandar
                                </motion.div>
                            </div>
                            <div className="overflow-hidden py-2 -my-2 pb-4">
                                <motion.div
                                    initial={{ y: "100%" }}
                                    animate={{ y: "0%" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                                    className="text-primary"
                                >
                                    Zulqarnain
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Role Subtitle */}
                    <div className="overflow-hidden mt-2">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: "0%" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-mono font-medium tracking-tight normal-case"
                        >
                            &gt; Expert Web Designer<br />
                            &gt; Bioinformatics Engineer
                        </motion.div>
                    </div>

                    {/* Intro Text */}
                    <motion.div
                        variants={typingContainer}
                        initial="hidden"
                        animate="visible"
                        className="text-lg md:text-xl text-muted-foreground max-w-xl flex flex-wrap gap-x-1 font-sans mt-4"
                    >
                        {introText.map((word, index) => (
                            <motion.span key={index} variants={typingChar}>
                                {word}{" "}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* CTA Buttons — stacks on mobile (flex-col), row on sm+ */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-6 md:mt-10"
                    >
                        <Button asChild size="lg" className="rounded-none gap-2 text-md group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 border-0 w-full sm:w-auto h-12 md:h-11">
                            <a href="#projects">
                                <span className="relative z-10 flex items-center justify-center gap-2 font-heading font-bold uppercase tracking-widest w-full">
                                    Explore Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-none gap-2 text-md hover:bg-primary/10 hover:text-primary border-2 border-border hover:border-primary transition-colors text-foreground w-full sm:w-auto h-12 md:h-11">
                            <a href="#contact" className="font-heading font-bold uppercase tracking-widest flex items-center justify-center w-full">Initialize Contact</a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-none gap-2 text-md hover:bg-primary/10 hover:text-primary border-2 border-border hover:border-primary transition-colors text-foreground w-full sm:w-auto h-12 md:h-11">
                            <a href="/cv.pdf" download className="font-heading font-bold uppercase tracking-widest flex items-center justify-center gap-2 w-full">
                                <Download size={16} /> Download CV
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
