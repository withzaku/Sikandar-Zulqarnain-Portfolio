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

// === CANONICAL URL ===
const SITE_URL = "https://sikandar-zulqarnain-portfolio.vercel.app";

// === EXTREME SEO METADATA ===
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // Primary title — keyword-rich, under 60 chars
  title: {
    default: "Sikandar Zulqarnain | Web Developer, Bioinformatics Engineer & AI Automation — Lahore, Pakistan",
    template: "%s | Sikandar Zulqarnain",
  },

  // Meta description — 155 chars, includes top buyer keywords
  description:
    "Hire Sikandar Zulqarnain — Expert Web Developer, Bioinformatics Engineer & AI Automation Specialist in Lahore, Pakistan. I build Next.js websites, genomics pipelines, Python automation scripts, Linux tools, and data analysis systems. Available for freelance projects worldwide.",

  // Long-tail keyword coverage for every service
  keywords: [
    // Web Dev
    "web developer Pakistan",
    "hire web developer Lahore",
    "Next.js developer Pakistan",
    "React developer for hire",
    "freelance web developer Lahore",
    "website development Pakistan",
    "full stack developer Pakistan",
    "portfolio website developer",
    "custom website design Pakistan",
    "Tailwind CSS developer",
    // Bioinformatics
    "bioinformatics engineer Pakistan",
    "genomics pipeline developer",
    "NGS data analysis",
    "RNA-Seq analysis expert",
    "variant calling pipeline",
    "WGS WES bioinformatics",
    "BAM file processing",
    "paired-end sequencing analysis",
    "transcriptomics bioinformatics",
    "computational biology Pakistan",
    // AI & Automation
    "AI automation developer",
    "Python automation scripts",
    "Linux bash scripting expert",
    "bioinformatics automation tools",
    "molecular dynamics automation",
    "data pipeline automation",
    "machine learning developer Pakistan",
    "AI tools for biology",
    // Data Science
    "data analyst Pakistan",
    "data scientist Lahore",
    "genomic data analysis",
    "large dataset processing",
    "data visualization developer",
    // Tools & Freelance
    "freelance bioinformatics consultant",
    "genomics software developer",
    "custom tool development",
    "Linux scripting freelancer",
    "C++ developer Pakistan",
    "hire programmer Lahore",
    "Sikandar Zulqarnain",
    "Genomics Informatics Lab developer",
    "genomatics.net developer",
  ],

  // Google Search Console verification
  verification: {
    google: "BCaGI_n10mMF2g0e4aN9UZxQ0oTOM252W2KF9RDl2FM",
  },

  // Canonical URL
  alternates: {
    canonical: SITE_URL,
  },

  // Author
  authors: [{ name: "Sikandar Zulqarnain", url: SITE_URL }],
  creator: "Sikandar Zulqarnain",
  publisher: "Sikandar Zulqarnain",

  // Robots — full index, follow all links
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph — for Facebook, WhatsApp, LinkedIn shares
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Sikandar Zulqarnain Portfolio",
    title: "Sikandar Zulqarnain | Web Developer & Bioinformatics Engineer — Hire Me",
    description:
      "Expert Web Developer, Bioinformatics Engineer & AI Automation Specialist. Hire me for Next.js websites, genomics pipelines, Python automation, Linux scripting & data science. Based in Lahore, Pakistan. Available worldwide.",
    images: [
      {
        url: `/profile.png`,
        width: 1200,
        height: 630,
        alt: "Sikandar Zulqarnain — Web Developer, Bioinformatics Engineer & AI Automation Specialist from Lahore, Pakistan",
        type: "image/png",
      },
    ],
  },

  // Twitter Card — for Twitter/X shares
  twitter: {
    card: "summary_large_image",
    site: "@sikandarzulq",
    creator: "@sikandarzulq",
    title: "Sikandar Zulqarnain | Web Dev + Bioinformatics + AI Automation",
    description:
      "Hire Sikandar — Next.js websites, genomics pipelines, Python/Linux automation & AI tools. Lahore, Pakistan. Freelance worldwide.",
    images: [`${SITE_URL}/profile.png`],
  },

  // Favicon / Icons
  icons: {
    icon: [
      { url: "/profile.png", type: "image/png" },
    ],
    apple: "/profile.png",
    shortcut: "/profile.png",
  },

  // Verification — add these when you get them
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
  //   yandex: "YOUR_YANDEX_TOKEN",
  // },

  // App manifest metadata
  applicationName: "Sikandar Zulqarnain Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
};

// === SCHEMA.ORG STRUCTURED DATA (JSON-LD) ===
// Combined Person + ProfessionalService + WebSite + BreadcrumbList
const jsonLd = [
  // 1. Person schema — tells Google who you are
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Sikandar Zulqarnain",
    givenName: "Sikandar",
    familyName: "Zulqarnain",
    url: SITE_URL,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/profile.png`,
      width: 800,
      height: 800,
      caption: "Sikandar Zulqarnain — Web Developer & Bioinformatics Engineer",
    },
    jobTitle: [
      "Web Developer",
      "Bioinformatics Engineer",
      "AI & Automation Developer",
      "Data Scientist",
      "Full Stack Developer",
    ],
    description:
      "Sikandar Zulqarnain is a Web Developer, Bioinformatics Engineer, and AI Automation Specialist based in Lahore, Pakistan. He builds Next.js websites, genomic data pipelines, Python automation tools, Linux scripts, and AI-based research systems.",
    email: "sikandarzulqarnain.gil@gmail.com",
    telephone: "+92-340-8156101",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
      postalCode: "54000",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Minhaj University Lahore",
      Address: "Lahore, Pakistan",
    },
    worksFor: {
      "@type": "Organization",
      name: "Genomics & Informatics Lab",
      url: "https://genomatics.net",
    },
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Bioinformatics",
      "Genomics",
      "NGS Data Analysis",
      "RNA-Seq",
      "Variant Calling",
      "Python Programming",
      "Bash Scripting",
      "Linux Administration",
      "Machine Learning",
      "Data Science",
      "AI Automation",
      "C++ Programming",
      "Molecular Dynamics",
      "Docker",
      "AWS",
      "PostgreSQL",
    ],
    sameAs: [
      "https://github.com/withzaku",
      "https://genomatics.net",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Web Developer & Bioinformatics Engineer",
      occupationLocation: {
        "@type": "City",
        name: "Lahore, Pakistan",
      },
      skills: "Next.js, React, Python, Bioinformatics, NGS Pipelines, AI Automation, Linux, C++",
    },
  },

  // 2. WebSite schema — enables Google Sitelinks Search Box
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Sikandar Zulqarnain — Portfolio",
    description: "Portfolio of Sikandar Zulqarnain — Web Developer, Bioinformatics Engineer, and AI/Automation Specialist from Lahore, Pakistan.",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  },

  // 3. ProfessionalService schema — drives "hire" and "service" searches
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: "Sikandar Zulqarnain — Freelance Web Development & Bioinformatics Services",
    url: SITE_URL,
    description:
      "Professional freelance services including custom website development (Next.js, React, Tailwind), bioinformatics pipeline development (NGS, RNA-Seq, variant calling), Python & Linux automation scripting, AI tool development, and data analysis. Serving clients worldwide from Lahore, Pakistan.",
    provider: {
      "@id": `${SITE_URL}/#person`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    serviceType: [
      "Web Development",
      "Full Stack Development",
      "Bioinformatics Engineering",
      "AI Tool Development",
      "Python Automation",
      "Linux Scripting",
      "Data Analysis",
      "Genomics Pipeline Development",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Freelance Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Development",
            description: "Modern, fast, SEO-optimized websites built with Next.js, React, and Tailwind CSS. Portfolio sites, lab websites, business websites, and web apps.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bioinformatics Pipeline Development",
            description: "End-to-end NGS pipelines, RNA-Seq workflows, variant calling (GATK, BWA, STAR), BAM processing, and automated genomic data analysis tools.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Python & Linux Automation",
            description: "Custom Python scripts and Bash/Linux automation tools for data processing, file management, batch task scheduling, and research workflow automation.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Data Science Tools",
            description: "AI-based tools for biological data interpretation, machine learning models for genomics, data visualization systems, and large dataset analytics.",
          },
        },
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "sikandarzulqarnain.gil@gmail.com",
      telephone: "+92-340-8156101",
      contactType: "customer support",
      availableLanguage: ["English", "Urdu"],
    },
  },

  // 4. BreadcrumbList — helps Google understand site structure
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/#about` },
      { "@type": "ListItem", position: 3, name: "Skills", item: `${SITE_URL}/#skills` },
      { "@type": "ListItem", position: 4, name: "Projects", item: `${SITE_URL}/#projects` },
      { "@type": "ListItem", position: 5, name: "Experience", item: `${SITE_URL}/#experience` },
      { "@type": "ListItem", position: 6, name: "Contact", item: `${SITE_URL}/#contact` },
    ],
  },

  // 5. FAQ schema — answers "can he do X" queries in Google's rich results
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Sikandar Zulqarnain offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sikandar offers: custom website development (Next.js, React, Tailwind CSS), bioinformatics pipeline development (NGS, RNA-Seq, variant calling), Python/Bash Linux automation scripts, AI tool development, and data science/analysis services. Available for freelance projects worldwide.",
        },
      },
      {
        "@type": "Question",
        name: "Can Sikandar build a website for me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sikandar Zulqarnain is a full-stack web developer specializing in Next.js, React, and Tailwind CSS. He designs and develops responsive, modern websites for businesses, research labs, portfolios, and web applications. Contact him at sikandarzulqarnain.gil@gmail.com.",
        },
      },
      {
        "@type": "Question",
        name: "Does Sikandar write Linux/Bash/Python automation scripts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sikandar has 3+ years of experience writing Python, Bash, and Linux automation scripts for bioinformatics research, file processing, data pipelines, and batch task automation at the Genomics & Informatics Lab.",
        },
      },
      {
        "@type": "Question",
        name: "Is Sikandar Zulqarnain available for freelance work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Sikandar is available for freelance web development, bioinformatics engineering, and Python/Linux automation projects worldwide. Reach him via the contact form on his portfolio or email sikandarzulqarnain.gil@gmail.com.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Sikandar Zulqarnain based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sikandar is based in Lahore, Punjab, Pakistan. He works with clients globally and is available for remote projects.",
        },
      },
    ],
  },
];

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* Preconnect to critical origins for performance (affects Core Web Vitals / ranking) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Geographic meta tags */}
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Lahore, Pakistan" />
        <meta name="geo.position" content="31.5204;74.3587" />
        <meta name="ICBM" content="31.5204, 74.3587" />
        {/* Language */}
        <meta httpEquiv="content-language" content="en" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#00ff66" />
        <meta name="msapplication-TileColor" content="#000000" />
      </head>
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
          {/* All JSON-LD schemas injected together */}
          {jsonLd.map((schema, i) => (
            <script
              key={i}
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
          ))}
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
