"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { DNAScrambleText } from "@/components/ui/DNAScrambleText";

const projects = [
    {
        title: "Genomatics.net",
        description: "The official web platform for the Genomics and Informatics Lab, designed, developed, and hosted independently to centralize lab resources and tools.",
        tags: ["React", "Next.js", "Tailwind CSS", "Hosting"],
        slug: "genomatics-net",
    },
    {
        title: "MD Simulation Automation",
        description: "Developed automated bioinformatics pipelines tailored for Molecular Dynamics (MD) simulations, drastically reducing manual processing overhead.",
        tags: ["Python", "Bash", "Bioinformatics", "Automation"],
        slug: "md-simulation-automation",
    },
    {
        title: "Genomics Pipeline Suite",
        description: "Automated variant calling and RNA-Seq analysis engine capable of processing terabytes of NGS data securely.",
        tags: ["Python", "Docker", "AWS Workflow", "Bash"],
        slug: "genomics-pipeline",
    },
    {
        title: "GIL Employee Management",
        description: "Custom HR and resource management platform built specifically for the Genomics & Informatics Lab.",
        tags: ["React", "Express", "PostgreSQL", "Tailwind"],
        slug: "gil-employee-management",
    }
];

function ProjectCard({ project, index }: { project: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group w-full h-full bg-card border border-border p-5 md:p-8 cursor-pointer flex flex-col justify-between overflow-hidden hover:border-primary transition-colors duration-300 relative"
        >
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity">
                0{index + 1}
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors font-heading">{project.title}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3 font-mono text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-xs px-2 py-1 bg-muted border border-border text-muted-foreground font-mono uppercase tracking-widest">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="relative z-10 flex items-center justify-between mt-auto pt-6 border-t border-border">
                <Link href={`/work/${project.slug}`} className="inline-flex items-center text-xs font-mono font-bold uppercase tracking-widest text-primary hover:text-white transition-colors gap-2">
                    Read Case Study <ArrowRight size={16} />
                </Link>
                <div className="flex gap-4 text-muted-foreground">
                    <Github size={18} className="hover:text-white transition-colors" />
                    <ExternalLink size={18} className="hover:text-white transition-colors" />
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="py-16 md:py-24 relative w-full overflow-visible">
            <div className="container mx-auto px-4 sm:px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <div className="flex flex-col text-5xl md:text-7xl font-black tracking-tighter mb-4 font-heading uppercase text-foreground">
                        <div className="overflow-hidden">
                            <DNAScrambleText text="Featured Work" className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 font-heading uppercase text-foreground" />
                        </div>
                    </div>
                    <p className="text-lg text-muted-foreground font-mono text-sm uppercase tracking-widest">
                        A curated selection of robust architectures, automations, and data platforms.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-5 md:gap-8 lg:gap-12">
                    {projects.map((project, idx) => (
                        <ProjectCard key={project.slug} project={project} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
