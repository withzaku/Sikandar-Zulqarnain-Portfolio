"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { DNAScrambleText } from "@/components/ui/DNAScrambleText";

export default function Experience() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const experiences = [
        {
            // TODO: Replace with your actual start dates if different
            period: "Jul 2024 – Present",
            role: "Bioinformatics & Genomic Data Analyst",
            company: "Genomics & Informatics Lab",
            description: "Handling large biological datasets, data preprocessing, and executing computational bioinformatics pipelines for active research projects.",
            highlights: [
                "Worked with paired-end sequencing data.",
                "Performed sequence alignment and processed data into BAM format.",
                "Assisted in transcriptomics and other omics-related computational analysis.",
                "Executed bioinformatics pipelines for research projects."
            ]
        },
        {
            // TODO: Replace with your actual start dates if different
            period: "Jul 2024 – Present",
            role: "AI & Automation Developer",
            company: "Genomics & Informatics Lab",
            description: "Developing intelligent systems and automation scripts to support biological data analysis and reduce manual research workload.",
            highlights: [
                "Developed AI-based tools to support biological data analysis.",
                "Built automation scripts to reduce manual research workload.",
                "Designed computational workflows to improve efficiency and accuracy.",
                "Worked on intelligent systems for data interpretation and reporting."
            ]
        },
        {
            // TODO: Replace with your actual start dates if different
            period: "Jul 2024 – Present",
            role: "Web Developer & Digital Manager",
            company: "Genomics & Informatics Lab",
            description: "Managing the lab's digital presence, infrastructure, and developing modern web interfaces for research dissemination.",
            highlights: [
                "Contributed to the development and management of the lab's website.",
                "Worked with React, Next.js, and Tailwind CSS for modern web interfaces.",
                "Managed domain and hosting-related technical setup."
            ]
        },
        {
            // TODO: Replace with your actual start dates if different
            period: "Jun 2023 – Jun 2024",
            role: "Database & Data Handler",
            company: "Genomics & Informatics Lab",
            description: "Designing and maintaining structured databases for employee scheduling and complex research project data management.",
            highlights: [
                "Designed and managed employee/project databases using MS Access.",
                "Organized and maintained structured research and project data.",
                "Worked with Excel for handling large biological datasets."
            ]
        },
        {
            // TODO: Replace with your actual start dates if different
            period: "Jun 2023 – Jun 2024",
            role: "Bioinformatics Intern",
            company: "Genomics & Informatics Lab",
            description: "Gained practical exposure to real research workflows and computational biology tools in a professional lab environment.",
            highlights: [
                "Completed formal internship in the computational lab environment.",
                "Gained practical exposure to real research workflows.",
                "Learned to operate standard computational biology tools."
            ]
        }
    ];

    return (
        <section id="experience" ref={containerRef} className="py-16 md:py-24 relative w-full border-t border-white/5 bg-gradient-to-b from-transparent to-primary/5">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <DNAScrambleText text="Professional Journey" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-4 font-heading uppercase text-foreground" />
                </motion.div>

                <div className="relative pl-8 md:pl-0">
                    {/* Vertical timeline line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-primary"
                        ></motion.div>
                    </div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Timeline Node */}
                                <div className="absolute left-[-32px] md:left-1/2 w-4 h-4 rounded-none bg-background border-2 border-primary md:-translate-x-1/2 z-10">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                        className="absolute inset-[2px] bg-primary"
                                    ></motion.div>
                                </div>

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full md:w-5/12 ml-6 md:ml-0 mt-4 md:mt-0"
                                >
                                    <div className="bg-card p-8 rounded-none border border-border hover:border-primary transition-colors group">
                                        <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase mb-1 block">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-1 transition-colors font-heading uppercase text-foreground">{exp.role}</h3>
                                        <h4 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-widest">{exp.company}</h4>
                                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {exp.highlights.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm font-mono text-muted-foreground/80 leading-relaxed">
                                                    <span className="text-primary font-bold mt-1">&gt;</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
