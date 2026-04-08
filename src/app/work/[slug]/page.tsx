import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const caseStudies: Record<string, any> = {
    "genomatics-net": {
        title: "Genomatics.net",
        subtitle: "Official platform for the Genomics and Informatics Lab.",
        description: "Designed and developed the official website for the Genomics and Informatics Lab from the ground up. The project involved creating a modern, responsive UI/UX, implementing routing for research publications and tools, and independently managing the entire domain configuration and hosting infrastructure.",
        architecture: ["Next.js", "React", "Tailwind CSS", "Vercel Hosting", "Domain Management"],
        results: ["Successfully launched official lab web presence", "Streamlined access to internal bioinformatics tools", "Automated deployment pipelines"],
        // Real URL from resume
        liveUrl: "https://genomatics.net",
        githubUrl: null, // private repository
    },
    "md-simulation-automation": {
        title: "MD Simulation Automation Tools",
        subtitle: "High-throughput bioinformatics automation engine.",
        description: "Developed a suite of automation tools specifically targeting Molecular Dynamics (MD) simulations within the lab. By wrapping complex simulation dependencies and execution parameters into streamlined Python and Bash scripts, the system eliminates manual configuration errors and accelerates experimental throughput.",
        architecture: ["Python", "Bash Scripting", "Linux Server Environments", "Computational Biology"],
        results: ["Reduced MD setup time by over 70%", "Eliminated manual configuration errors", "Enabled scalable batch processing of simulations"],
        liveUrl: null,
        githubUrl: null,
    },
    "genomics-pipeline": {
        title: "Genomics Pipeline Suite",
        subtitle: "Automated variant calling and RNA-Seq analysis engine.",
        description: "Built to process terabytes of NGS data securely and rapidly for clinical research. This suite integrates state-of-the-art aligners and variant callers into a unified, Docker-containerized architecture orchestrable via a web interface.",
        architecture: ["Python Backend", "AWS EC2/S3", "Docker Swarm", "Bash orchestrator"],
        results: ["40% reduction in processing time", "Fully automated PDF report generation", "HIPAA-compliant data encryption"],
        liveUrl: null,
        githubUrl: null,
    },
    "gil-employee-management": {
        title: "GIL Employee Management",
        subtitle: "Custom HR and resource platform for the Genomics Lab.",
        description: "A comprehensive internal tool designed to manage compute resource allocation, shift tracking for researchers, and automated payroll systems synced with lab attendance.",
        architecture: ["React 18", "Express.js", "PostgreSQL", "Tailwind CSS v4"],
        results: ["Streamlined HR operations for 50+ staff", "Real-time compute cluster usage tracking", "Zero-downtime microservices integration"],
        liveUrl: null,
        githubUrl: null,
    },
};

export function generateStaticParams() {
    return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = caseStudies[slug];

    if (!study) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-32 pb-24 relative z-10">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <Link href="/#projects" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-12">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>

                <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 font-heading uppercase text-foreground">{study.title}</h1>
                <p className="text-xl font-mono text-primary mb-8">{study.subtitle}</p>

                <div className="flex flex-wrap gap-2 mb-12">
                    {study.architecture.map((tech: string, i: number) => (
                        <Badge key={i} variant="secondary" className="bg-muted text-muted-foreground border-border font-mono text-xs uppercase tracking-widest rounded-none px-3 py-1">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="max-w-none">
                    <h2 className="text-3xl font-black mb-6 font-heading uppercase text-foreground">Project Overview</h2>
                    <p className="font-mono text-sm text-muted-foreground mb-16 leading-relaxed">
                        {study.description}
                    </p>

                    <h2 className="text-3xl font-black mb-6 font-heading uppercase text-foreground">Key Outcomes &amp; Results</h2>
                    <ul className="space-y-4 mb-16">
                        {study.results.map((res: string, idx: number) => (
                            <li key={idx} className="flex items-start gap-4 font-mono text-sm text-muted-foreground">
                                <span className="text-primary font-bold">&gt;</span>
                                <span>{res}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bug #2 fix: Buttons only render when a real URL exists */}
                {(study.liveUrl || study.githubUrl) && (
                    <div className="mt-8 pt-8 border-t border-border flex gap-4 flex-wrap">
                        {study.liveUrl && (
                            <a
                                href={study.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-4 rounded-none bg-card border border-border hover:border-primary hover:text-primary transition-all text-xs font-mono uppercase tracking-widest text-muted-foreground font-bold"
                            >
                                <ExternalLink size={18} /> Visit Live Site
                            </a>
                        )}
                        {study.githubUrl && (
                            <a
                                href={study.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-4 rounded-none bg-card border border-border hover:border-primary hover:text-primary transition-all text-xs font-mono uppercase tracking-widest text-muted-foreground font-bold"
                            >
                                <Github size={18} /> View Source
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
