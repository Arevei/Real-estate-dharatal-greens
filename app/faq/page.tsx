"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "What is Doon Alliance?",
    a: "Doon Alliance is a trusted real estate company creating premium residential and commercial spaces across Delhi, Saharanpur and beyond. We specialize in gated townships, farmhouses, villas, flats, residential plots, builder floors, and commercial spaces.",
  },
  {
    q: "What types of properties does Doon Alliance offer?",
    a: "Doon Alliance offers farmhouses, villas, flats, residential plots, value homes, independent living spaces, builder floors, gated townships, and commercial spaces.",
  },
  {
    q: "How much development has Doon Alliance completed?",
    a: "Doon Alliance has completed over 2,333,520 square feet of residential projects and 772,785 square feet of farmhouse developments, with 1850+ satisfied residents.",
  },
  {
    q: "Why should I invest with Doon Alliance?",
    a: "Doon Alliance focuses on transparent processes, government-approved societies, gated townships, wide roads, street lighting, green planning, and practical amenities that support both lifestyle and long-term value.",
  },
  {
    q: "Is financing available for property purchases?",
    a: "Yes, Doon Alliance offers flexible payment support for eligible property purchases. The team can explain available options during your consultation or site visit.",
  },
  {
    q: "Can I visit a Doon Alliance project before purchasing?",
    a: "Absolutely. We encourage buyers to visit our properties to experience the quality, planning, and surroundings firsthand.",
  },
  {
    q: "How can I contact Doon Alliance for inquiries?",
    a: "You can reach out through the website contact form, visit the Contact page, or use the call button below.",
  },
  {
    q: "Are Doon Alliance properties environmentally friendly?",
    a: "Yes, Doon Alliance emphasizes green planning through roadside plantation, parks, gardens, and sustainable community layouts designed for cleaner, healthier living.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="faq-item border-b last:border-none"
    >
      <button className="flex w-full items-center justify-between gap-6 py-5 text-left group" onClick={() => setOpen(!open)}>
        <span className="faq-question text-base font-bold leading-snug">
          {q}
        </span>
        <span className={`faq-toggle flex h-9 w-9 shrink-0 items-center justify-center ${open ? "is-open" : ""}`}>
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="faq-answer pb-6 pr-14 text-[15px] leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <div className="w-full bg-white font-sans">
      <section className="inner-hero relative flex h-[50vh] min-h-[400px] items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.png" alt="Contact Doon Alliance" fill priority sizes="100vw" className="object-cover" />
          <div className="inner-hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="inner-hero-title mb-4 text-5xl font-bold md:text-6xl">FAQ</h1>
          <div className="inner-hero-breadcrumb flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span className="current">FAQ</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-14 text-center">
            <div className="theme-kicker mb-3 text-xs font-bold uppercase tracking-[0.2em]">Got Questions?</div>
            <h2 className="text-4xl font-bold text-zinc-800 md:text-[44px]">Frequently Asked Questions</h2>
          </div>

          <div className="theme-card px-6 py-4 md:px-10">
            {faqs.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="theme-dark-section py-14">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">Still have questions?</h3>
            <p className="theme-dark-copy text-sm">Our team is ready to help you find the perfect property.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919266040973" className="theme-brass-cta flex h-[52px] items-center px-8 text-xs font-bold uppercase tracking-wider">
              Call +91 92660 40973
            </a>
            <Link href="/contact" className="theme-outline-light-cta flex h-[52px] items-center px-8 text-xs font-bold uppercase tracking-wider">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
