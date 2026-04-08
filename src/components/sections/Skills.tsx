"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { DNAScrambleText } from "@/components/ui/DNAScrambleText";

export default function Skills() {
    const skillCategories = [
        {
            title: "Bioinformatics & Computational Work",
            skills: ["Paired-end Sequencing data", "Alignments to BAM", "Bioinformatics Pipelines", "Genomic Data Scripts", "Transcriptomics", "Omics Analysis"],
            color: "from-blue-500/20 to-blue-500/0",
            border: "border-blue-500/30"
        },
        {
            title: "AI & Automation",
            skills: ["AI-based Tools", "Automation Systems", "Large Genomic Datasets", "Biological Data Interpretation", "Web Scraping", "Data Extraction"],
            color: "from-purple-500/20 to-purple-500/0",
            border: "border-purple-500/30"
        },
        {
            title: "Web Development",
            skills: ["React", "Vite", "Next.js", "Tailwind CSS", "UI/UX Design", "Domain Management", "Hosting"],
            color: "from-primary/20 to-primary/0",
            border: "border-primary/30"
        },
        {
            title: "Programming Core & Technical",
            skills: ["C++ Programming", "OOP", "Data Structures & Algorithms", "Assembly (x86 basics)", "MS Access", "Excel Data Handling"],
            color: "from-emerald-500/20 to-emerald-500/0",
            border: "border-emerald-500/30"
        }
    ];

    return (
        <section id="skills" className="py-16 md:py-24 relative overflow-hidden w-full">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <DNAScrambleText text="Technical Arsenal" className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter mb-6 font-heading uppercase text-foreground" />
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A diverse toolkit enabling the rapid development of intelligent biological systems, complex data analysis engines, and cutting-edge web platforms.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-5 md:gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-card border border-border p-5 md:p-8 relative group hover:border-primary transition-colors duration-300"
                        >
                            <h3 className="text-2xl font-black mb-8 tracking-tighter uppercase font-heading text-foreground">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, i) => (
                                    <Badge
                                        key={i}
                                        variant="outline"
                                        className="bg-background border-border font-mono text-xs uppercase tracking-widest text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary px-3 py-2 rounded-none transition-all duration-300"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
