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
      <section className="ploy-dark relative flex h-[52vh] min-h-[420px] items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/projects/valley-view-retreat.png"
          alt="Doon Alliance projects"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111c] via-[#07111c]/70 to-transparent" />
        <div className="relative z-10 max-w-4xl px-4 text-center text-white">
          <motion.span initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="ploy-kicker mb-5 border-white/15 bg-white/10 text-white">
            Documented Project Portfolio
          </motion.span>
          <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-5 text-5xl font-bold tracking-tight md:text-7xl">
            Projects & Master Plans
          </motion.h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            A clear view of estate and Backwoods developments presented from the available project material.
          </p>
        </div>
      </section>

      <section className="ploy-surface py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {["All", "Estate", "Backwoods"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#1e2a35] text-white shadow-lg"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:border-[#4BBFB8] hover:text-[#1e2a35]"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f2e]/82 to-transparent" />
                    <div className="absolute bottom-5 left-5 rounded-full bg-[#4BBFB8] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                      {prop.group}
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="mb-3 text-2xl font-bold text-[#1e2a35] transition-colors group-hover:text-[#4BBFB8]">
                      {prop.title}
                    </h3>
                    <p className="mb-6 min-h-[84px] text-sm leading-relaxed text-zinc-500">{prop.desc}</p>
                    <div className="mb-6 flex items-center gap-2 border-t border-zinc-100 pt-5 text-sm font-semibold text-zinc-500">
                      <MapPin className="h-4 w-4 shrink-0 text-[#4BBFB8]" />
                      {prop.loc}
                    </div>
                    <Link
                      href="/contact"
                      className="ploy-button-dark flex h-12 w-full items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider"
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
