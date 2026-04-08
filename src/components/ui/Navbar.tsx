"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Download, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import clsx from "clsx";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const { isMenuOpen, setMenuOpen, activeSection } = useStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/#home" },
        { name: "About", href: "/#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Projects", href: "/#projects" },
        { name: "Experience", href: "/#experience" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={clsx(
                "fixed top-0 w-full z-40 transition-all duration-300",
                scrolled ? "glass shadow-lg py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground relative group">
                    <span className="text-primary">SZ</span>ulqarnain.
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "text-sm font-medium transition-colors hover:text-primary",
                                activeSection === link.name.toLowerCase() ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Theme Toggle */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    )}

                </nav>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="text-muted-foreground transition-colors"
                        >
                            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    )}
                    <button
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        className="text-foreground"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-full left-0 w-full glass flex flex-col items-center py-8 space-y-6 shadow-xl md:hidden"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.header>
    );
}
