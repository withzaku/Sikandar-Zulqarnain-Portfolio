"use client";

import Link from "next/link";
import { Github } from "lucide-react";

// TODO: Replace with your actual GitHub URL if it changes
const GITHUB_URL = "https://github.com/withzaku";

const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
];

export default function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background py-12 relative z-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Logo / Brand */}
                    <Link href="/" className="text-xl font-bold tracking-tighter text-foreground relative group shrink-0">
                        <span className="text-primary">SZ</span>ulqarnain.
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                    {/* Quick Nav Links */}
                    <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Social + Copyright */}
                    <div className="flex items-center gap-4 shrink-0">
                        <a
                            href={GITHUB_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github size={18} />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                        &copy; 2025 Sikandar Zulqarnain. All rights reserved.
                    </p>
                    <p className="text-xs font-mono text-muted-foreground/50 tracking-widest">
                        Built with Next.js &amp; deployed on Vercel.
                    </p>
                </div>
            </div>
        </footer>
    );
}
