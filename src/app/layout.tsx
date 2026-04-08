import type { Metadata } from "next";
import '@fontsource/syne/400.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/600.css';
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Sikandar Zulqarnain | Web Designer & Bioinformatics Engineer",
  description: "Portfolio of Sikandar Zulqarnain — building intelligent systems for biology and data.",
  keywords: ["Bioinformatics Engineer", "Data Scientist", "Full Stack Developer", "Genomics", "Web Designer", "Lahore"],
  openGraph: {
    title: "Sikandar Zulqarnain | Web Designer & Bioinformatics Engineer",
    description: "Portfolio of Sikandar Zulqarnain — building intelligent systems for biology and data.",
    // TODO: Add a 1200x630px og-image.png to /public/ for social previews
    url: "https://sikandar-zulqarnain-portfolio.vercel.app",
    siteName: "Sikandar Zulqarnain Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sikandar Zulqarnain - Bioinformatics Engineer & Web Designer",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sikandar Zulqarnain | Web Designer & Bioinformatics Engineer",
    description: "Portfolio of Sikandar Zulqarnain — building intelligent systems for biology and data.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/profile.png",
    apple: "/profile.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Person",
  name: "Sikandar Zulqarnain",
  url: "https://sikandar-zulqarnain.vercel.app",
  jobTitle: "Bioinformatics Engineer, Data Scientist, Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "Genomics & Informatics Lab"
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK"
  },
  sameAs: [
    "https://www.linkedin.com/in/sikandar-zulqarnain",
    "https://github.com/sikandar-zulqarnain"
  ]
};

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`antialiased overflow-x-hidden selection:bg-primary/30 selection:text-primary font-sans`}
        style={{ "--font-heading": "'Syne', sans-serif", "--font-mono": "'Space Grotesk', monospace", "--font-sans": "'Outfit', sans-serif" } as React.CSSProperties}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <CustomCursor />
          <Navbar />
          <SmoothScroll>
            <main className="min-h-screen relative z-10">{children}</main>
          </SmoothScroll>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
