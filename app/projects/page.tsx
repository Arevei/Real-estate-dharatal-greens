"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Shivalik Estate",
    group: "Estate",
    loc: "Ganeshpur",
    img: "shivalik-plots.png",
    desc: "A delivered project in Ganeshpur covering a documented project area of 150 hectares.",
  },
  {
    title: "Shakumbhari Estate",
    group: "Estate",
    loc: "Shakumbhari region",
    img: "dharatal-meadows.png",
    desc: "A planned estate development presented across multiple phases with residential plots, farmhouse areas, internal roads and green community spaces.",
  },
  ...Array.from({ length: 10 }, (_, index) => ({
    title: `Backwoods ${index + 1}`,
    group: "Backwoods",
    loc: "Wider Backwoods development area",
    img: [
      "green-valley-villas.png",
      "valley-view-retreat.png",
      "aravalli-greens.png",
      "nilgiri-estates.png",
      "shivalik-plots.png",
    ][index % 5],
    desc: `Part of the wider Backwoods and Shivalik Estate development shown within the project master plans.`,
  })),
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredProjects = activeTab === "All" ? projects : projects.filter((p) => p.group === activeTab);

  return (
    <div className="w-full bg-zinc-50 pb-20 font-sans">
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.png" alt="Contact Doon Alliance" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#2C2C2A]/80" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">PROJECTS</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-300">
            <Link href="/" className="transition-colors hover:text-accent">HOME</Link>
            <span>/</span>
            <span className="text-[#ba7517]">PROJECTS</span>
          </div>
        </div>
      </section>

      <section className="ploy-surface py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {["All", "Estate", "Backwoods"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab
                  ? "bg-[#763300] text-white shadow-lg"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-[#763300] hover:text-zinc-800"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((prop, i) => (
                <motion.article
                  layout
                  key={prop.title}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, delay: i * 0.02 }}
                  whileHover={{ y: -8 }}
                  className="ploy-card group overflow-hidden"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={`/images/projects/${prop.img}`}
                      alt={prop.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#173404]/82 to-transparent" />
                    <div className="absolute bottom-5 left-5 rounded-full bg-[#763300] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                      {prop.group}
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="mb-3 text-2xl font-bold text-zinc-800 transition-colors group-hover:text-[#ba7517]">
                      {prop.title}
                    </h3>
                    <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-zinc-500">{prop.desc}</p>
                    <div className="mb-6 flex items-center gap-2 border-t border-zinc-100  text-sm font-semibold text-zinc-500">
                      <MapPin className="h-4 w-4 shrink-0 text-[#763300]" />
                      {prop.loc}
                    </div>
                    <Link
                      href="/contact"
                      className="text-[#F1EFE8] bg-[#763300] hover:bg-[#F1EFE8] hover:text-[#763300] flex h-12 w-full items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider border"
                    >
                      Inquire Now <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
