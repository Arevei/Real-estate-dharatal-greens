"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    q: "What is Doon Alliance?",
    a: "Doon Alliance is a trusted real estate company creating premium residential and commercial spaces across Delhi, Saharanpur, Dehradun, and beyond. We specialize in gated townships, farmhouses, villas, flats, residential plots, builder floors, and commercial spaces.",
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
    a: "You can reach out through the website contact form, visit the Contact page, or call +91 135 414 8552 / +91 92660 40973.",
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
      className="border-b border-gray-100 last:border-none"
    >
      <button className="flex w-full items-center justify-between gap-6 py-5 text-left group" onClick={() => setOpen(!open)}>
        <span className={`text-base font-bold leading-snug transition-colors ${open ? "text-[#4BBFB8]" : "text-[#1e2a35] group-hover:text-[#4BBFB8]"}`}>
          {q}
        </span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${open ? "bg-[#4BBFB8] text-white" : "bg-gray-100 text-gray-400 group-hover:bg-[#4BBFB8]/10 group-hover:text-[#4BBFB8]"}`}>
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
            <p className="pb-6 pr-14 text-[15px] leading-relaxed text-gray-500">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <div className="w-full bg-white font-sans">
      <section className="relative flex h-[42vh] min-h-[280px] items-center justify-center pt-[72px]">
        <div className="absolute inset-0">
          <img src="/images/hero-bg.png" className="h-full w-full object-cover" alt="FAQ" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-3 text-5xl font-bold md:text-6xl">FAQ</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
            <Link href="/" className="transition-colors hover:text-[#4BBFB8]">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">FAQ</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-14 text-center">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4BBFB8]">Got Questions?</div>
            <h2 className="text-4xl font-bold text-[#1e2a35] md:text-[44px]">Frequently Asked Questions</h2>
          </div>

          <div className="border border-gray-100 bg-white px-6 py-4 shadow-sm md:px-10">
            {faqs.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1e2a35] py-14">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h3 className="mb-2 text-2xl font-bold text-white md:text-3xl">Still have questions?</h3>
            <p className="text-sm text-gray-400">Our team is ready to help you find the perfect property.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919266040973" className="flex h-[52px] items-center bg-[#4BBFB8] px-8 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#3aada6]">
              Call +91 92660 40973
            </a>
            <Link href="/contact" className="flex h-[52px] items-center border-2 border-white px-8 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#1e2a35]">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
