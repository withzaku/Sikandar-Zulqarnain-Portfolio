"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

// Lazy load the background to keep initial paint fast
const BackgroundParticles = dynamic(() => import("@/components/ui/BackgroundParticles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <BackgroundParticles />
      <div className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>

      {/*
        SEO CONTENT BLOCK — sr-only: visible to search engines, invisible to users.
        Real semantic HTML describing real services — not keyword stuffing.
      */}
      <section aria-label="Services and Skills overview" className="sr-only">
        <h1>Sikandar Zulqarnain — Web Developer, Bioinformatics Engineer &amp; AI Automation Specialist in Lahore, Pakistan</h1>

        <article>
          <h2>Hire a Web Developer in Lahore, Pakistan</h2>
          <p>
            Sikandar Zulqarnain is a professional freelance web developer based in Lahore, Pakistan, available for projects worldwide.
            He builds fast, responsive, SEO-optimized websites using Next.js, React, and Tailwind CSS.
            Whether you need a portfolio site, a business website, a lab research platform, or a custom web app,
            Sikandar delivers production-ready, modern digital products. Contact him to hire a web developer in Pakistan.
          </p>
          <h3>Web Development Services</h3>
          <ul>
            <li>Custom website design and development using Next.js and React</li>
            <li>Responsive web design for mobile, tablet, and desktop</li>
            <li>Full-stack web application development with REST APIs</li>
            <li>Portfolio website development for professionals and researchers</li>
            <li>Lab and research institute website development (e.g. genomatics.net)</li>
            <li>UI/UX design using Tailwind CSS and Framer Motion animations</li>
            <li>Vercel deployment and domain configuration</li>
            <li>Database integration with PostgreSQL and Firebase</li>
          </ul>
        </article>

        <article>
          <h2>Bioinformatics Engineer &amp; Genomics Pipeline Developer</h2>
          <p>
            Sikandar Zulqarnain is a Bioinformatics Engineer with 2+ years of hands-on experience at the Genomics and Informatics Lab (GIL).
            He develops automated NGS data analysis pipelines, processes paired-end sequencing data,
            performs sequence alignments to BAM format, and executes comprehensive genomics and transcriptomics workflows.
            Available as a freelance bioinformatics consultant for research institutions worldwide.
          </p>
          <h3>Bioinformatics &amp; Genomics Services</h3>
          <ul>
            <li>NGS data analysis pipelines: WGS, WES, RNA-Seq</li>
            <li>Variant calling workflows using GATK, BWA, STAR</li>
            <li>Paired-end sequencing data processing and BAM file generation</li>
            <li>Transcriptomics and omics data analysis</li>
            <li>Molecular dynamics (MD) simulation automation tools</li>
            <li>Automated genomics reporting pipelines in Python</li>
            <li>Sanger sequencing variant analysis tools</li>
          </ul>
        </article>

        <article>
          <h2>Python Automation &amp; Linux / Bash Scripting Expert</h2>
          <p>
            Sikandar Zulqarnain builds robust Python scripts, Linux automation tools, and Bash pipelines for
            data processing, file management, task scheduling, and research workflow automation.
            He works in Linux server environments and delivers CLI tools, cron job automation,
            data extraction scripts, and batch processing systems.
          </p>
          <h3>Automation &amp; Linux Scripting Services</h3>
          <ul>
            <li>Python automation scripts for data processing and bioinformatics research</li>
            <li>Bash / Linux shell scripting for server and pipeline automation</li>
            <li>Custom CLI tools for genomics and research workflows</li>
            <li>Web scraping and automated data extraction tools</li>
            <li>Cron jobs and scheduled task automation</li>
            <li>Batch file processing and ETL pipeline scripts</li>
          </ul>
        </article>

        <article>
          <h2>AI Tool Development &amp; Data Science</h2>
          <p>
            Sikandar Zulqarnain builds AI-based tools for biological data interpretation and research automation.
            He develops machine learning models for genomics data, data visualization systems, and intelligent
            automation that reduces manual research workload.
          </p>
          <h3>AI &amp; Data Science Services</h3>
          <ul>
            <li>Machine learning models for genomics and biology data</li>
            <li>AI-based biological data interpretation tools</li>
            <li>Large dataset analysis and processing (50+ TB processed)</li>
            <li>Data visualization and analytics dashboard development</li>
            <li>Excel and MS Access data management solutions</li>
          </ul>
        </article>

        <article>
          <h2>Contact Sikandar Zulqarnain — Hire a Freelance Developer from Lahore, Pakistan</h2>
          <p>
            Available for freelance web development, bioinformatics engineering, Python/Linux automation,
            and AI tool development. Based in Lahore, Pakistan — working worldwide.
            Email: sikandarzulqarnain.gil@gmail.com. WhatsApp: +92 340 8156101.
          </p>
        </article>
      </section>
    </>
  );
}
