"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Real form submission logic using Resend API
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                const error = await response.json();
                console.error("Submission failed:", error);
                alert("Failed to send message. Please check the console for details.");
            }
        } catch (err) {
            console.error("Submission error:", err);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative w-full overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">

                {/* Left Side: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-5/12"
                >
                    <h2 className="text-[3.5rem] leading-[1] sm:text-5xl md:text-7xl font-black tracking-tighter mb-6 font-heading uppercase text-foreground">
                        Let's Create The <span className="text-primary italic">Future</span>
                    </h2>
                    <p className="text-lg text-muted-foreground mb-12">
                        Whether you need scalable genomic pipelines, deep-learning data analysis, or a robust full-stack application, I'm ready to build it.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-none bg-card flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                                <Mail className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                            </div>
                            <div>
                                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Email</div>
                                <a href="mailto:sikandarzulqarnain.gil@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">sikandarzulqarnain.gil@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-none bg-card flex items-center justify-center border border-border group-hover:border-primary transition-colors">
                                <MessageSquare className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                            </div>
                            <div>
                                <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">WhatsApp</div>
                                <a href="https://wa.me/923408156101" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-primary transition-colors">+92 340 8156101</a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Glassmorphism Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-7/12"
                >
                    <div className="bg-card p-8 md:p-12 rounded-none border border-border relative overflow-hidden">
                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex flex-col items-center justify-center py-16 text-center"
                                >
                                    <CheckCircle2 size={64} className="text-emerald-500 mb-4" />
                                    <h3 className="text-2xl font-black mb-2 font-heading uppercase text-foreground">Message Sent!</h3>
                                    <p className="text-muted-foreground">I'll get back to you within 24 hours.</p>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Name</label>
                                            <Input id="name" name="name" placeholder="John Doe" required className="bg-background rounded-none border-border focus-visible:ring-primary focus-visible:border-primary" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Email</label>
                                            <Input id="email" name="email" type="email" placeholder="john@company.com" required className="bg-background rounded-none border-border focus-visible:ring-primary focus-visible:border-primary" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Subject</label>
                                        <Input id="subject" name="subject" placeholder="Project Inquiry" required className="bg-background rounded-none border-border focus-visible:ring-primary focus-visible:border-primary" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Message</label>
                                        <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required className="bg-background rounded-none border-border focus-visible:ring-primary focus-visible:border-primary resize-none" />
                                    </div>
                                    <Button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full bg-primary text-primary-foreground hover:bg-primary border-2 border-primary gap-2 h-14 text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-none hover:bg-transparent hover:text-primary"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2"><div className="w-4 h-4 rounded-full border-t-2 border-white animate-spin"></div> Sending...</span>
                                        ) : (
                                            <span className="flex items-center gap-2">Send Message <Send size={18} /></span>
                                        )}
                                    </Button>
                                </>
                            )}
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
