import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
            {/* Large 404 */}
            <div className="text-[20vw] md:text-[15rem] font-black tracking-tighter font-heading text-transparent leading-none select-none"
                style={{ WebkitTextStroke: "2px var(--primary)" }}
            >
                404
            </div>

            <p className="text-xl md:text-2xl font-mono text-muted-foreground mb-10 -mt-4">
                This page doesn&apos;t exist.
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-none bg-primary text-primary-foreground font-heading font-bold uppercase tracking-widest text-sm hover:bg-primary/80 transition-colors"
            >
                <ArrowLeft size={16} /> Back to Home
            </Link>
        </div>
    );
}
