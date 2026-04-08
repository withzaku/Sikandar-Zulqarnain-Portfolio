"use client";

import { motion } from "framer-motion";
import { Database, Dna, Activity, Code2, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
    const stats = [
        { label: "Genomic Pipelines Built", value: "15+", icon: <Dna className="text-primary" size={24} /> },
        { label: "TB Data Processed", value: "50+", icon: <Database className="text-accent" size={24} /> },
        { label: "Automation Scripts", value: "100+", icon: <Activity className="text-blue-400" size={24} /> },
        { label: "Web Apps Deployed", value: "20+", icon: <Code2 className="text-purple-400" size={24} /> },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden w-full">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 max-w-7xl mx-auto">
                    {/* Left: Text Content */}
                    <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
                        <div className="flex flex-col text-[2.5rem] leading-[1] sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.5rem] font-black tracking-tighter mb-8 font-heading uppercase text-foreground md:leading-[0.9] break-words">
                            <div className="overflow-hidden">
                                <motion.div initial={{ y: "100%" }} whileInView={{ y: "0%" }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                                    Bridging
                                </motion.div>
                            </div>
                            <div className="overflow-hidden">
                                <motion.div initial={{ y: "100%" }} whileInView={{ y: "0%" }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}>
                                    <span className="text-primary italic">Biology</span>
                                </motion.div>
                            </div>
                            <div className="overflow-hidden pb-2">
                                <motion.div initial={{ y: "100%" }} whileInView={{ y: "0%" }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
                                    & Technology
                                </motion.div>
                            </div>
                        </div>
                        <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-6 font-sans">
                            <p>
                                I am <span className="text-foreground font-medium">Sikandar Zulqarnain</span>, a Computer Science student at Minhaj University Lahore, deeply interested in Data Analytics, AI, Bioinformatics, and Software Development.
                            </p>
                            <p>
                                Rather than just studying theory, I actively build real systems. At the <span className="text-primary font-medium">Genomics and Informatics Lab</span>, I focus on the computational side handling paired-end sequencing data, performing alignments to BAM format, and developing automated pipelines for complex genomic and transcriptomic analysis.
                            </p>
                            <p>
                                My vision is to build intelligent systems that automate research processes and solve real-world biological problems through scalable, research-oriented digital solutions.
                            </p>

                            {/* Objectives Section Appended Below Bio */}
                            <div className="space-y-4 pt-6 mt-6 border-t border-border">
                                <h4 className="text-2xl font-bold text-foreground font-heading tracking-tight uppercase">My Objectives</h4>
                                <p>
                                    My objective is to build a strong career in <span className="text-primary font-medium">Data Analytics, Bioinformatics, and Artificial Intelligence</span> by applying my computer science skills to solve real-world biological and data-driven problems.
                                </p>

                                <div className="py-4">
                                    <h5 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4">I aim to:</h5>
                                    <ul className="space-y-3">
                                        {[
                                            "Develop intelligent AI-based tools for bioinformatics and research automation.",
                                            "Become a skilled Data Analyst / Bioinformatics Engineer.",
                                            "Improve research efficiency through automation and computational workflows.",
                                            "Continuously enhance my programming, data analysis, and problem-solving skills.",
                                            "Contribute to innovative projects at Genomics and Informatics Lab and expand its technological capabilities.",
                                            "Work on scalable, impactful solutions that combine Computer Science and Life Sciences."
                                        ].map((goal, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                                className="flex items-start gap-3 text-base md:text-lg"
                                            >
                                                <span className="text-primary mt-1 font-mono text-sm leading-none">►</span>
                                                <span>{goal}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                <p className="text-foreground font-medium pt-2 border-t border-border">
                                    My long-term goal is to become a professional who can bridge the gap between technology and biology through smart systems, AI solutions, and <span className="text-primary">data-driven innovation</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Massive Animated Portrait */}
                    <div className="lg:col-span-5 w-full h-[350px] sm:h-[450px] lg:h-[700px] relative order-1 lg:order-2 group overflow-hidden">
                        {/* Curtain Reveal Mask */}
                        <motion.div
                            initial={{ height: "100%" }}
                            whileInView={{ height: "0%" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                            className="absolute inset-0 bg-background z-20 origin-top"
                        />
                        {/* Image Scale Effect */}
                        <motion.div
                            initial={{ scale: 1.2 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                            className="w-full h-full relative z-10"
                        >
                            <Image
                                src="/profile.png"
                                alt="Sikandar Zulqarnain"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 object-top"
                            />
                            {/* Custom Border overlay */}
                            <div className="absolute inset-0 border border-border group-hover:border-primary/50 transition-colors duration-500 pointer-events-none" />
                        </motion.div>

                        {/* Subtle decorative accent */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1 }}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 text-[10px] font-mono tracking-widest text-primary rotate-90 origin-right whitespace-nowrap hidden lg:block"
                        >
                            IMG_DEF // SIKANDAR Z.
                        </motion.div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Visual animated feature */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 border border-border bg-card"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                            <Dna size={200} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 font-heading uppercase tracking-widest"><Play className="text-primary" fill="currentColor" size={16} /> Research to Reality</h3>
                        <p className="text-muted-foreground mb-8 font-mono text-sm leading-relaxed">
                            My expertise lies in translating complex biological data into actionable insights through robust computational pipelines. Whether it's variant calling, RNA-Seq analysis, or building custom automation systems, I ensure peak performance and reproducibility.
                        </p>
                        <div className="space-y-6">
                            {[
                                { name: "NGS Workflows (WGS, WES, RNA-Seq)", progress: "95%" },
                                { name: "Full Stack DevOps (Docker, AWS, Vercel)", progress: "90%" },
                                { name: "Machine Learning / Data Science", progress: "85%" }
                            ].map((skill, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between text-xs mb-2 text-muted-foreground font-mono uppercase tracking-widest">
                                        <span>{skill.name}</span>
                                        <span className="text-primary">{skill.progress}</span>
                                    </div>
                                    <div className="w-full h-1 bg-secondary overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.progress }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1) }}
                                            className="h-full bg-primary"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                            >
                                <Card className="border-border bg-card hover:border-primary transition-colors duration-300 group rounded-none">
                                    <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                                        <div className="p-4 bg-muted group-hover:bg-primary/10 transition-colors duration-300">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div className="text-4xl font-black text-foreground font-heading">{stat.value}</div>
                                            <div className="text-xs text-primary mt-2 font-mono uppercase tracking-widest leading-tight">{stat.label}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
