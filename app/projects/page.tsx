"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin, Ruler, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/lib/projects";

const tabs = ["All", "Shivalik Estate", "Shakumbhari Estate"];

function shortLocation(location: string) {
  return location.split(",").slice(0, 2).join(",").trim();
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredProjects =
    activeTab === "All" ? projects : projects.filter((project) => project.estate === activeTab);

  return (
    <div className="w-full bg-zinc-50 pb-20 font-sans">
      <section className="relative flex min-h-[460px] items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.png" alt="Shivalik projects" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,19,31,0.92),rgba(23,52,4,0.76))]" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur-md">
            Dharatal Greens Estates
          </div>
          <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">PROJECTS</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Explore Shivalik Estate Backwoods projects and Shakumbhari Estate with detailed pages, gallery views, amenities, and location routing.
          </p>
        </div>
      </section>

      <section className="ploy-surface py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#763300] text-white shadow-lg shadow-[#763300]/20"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:border-[#763300] hover:text-zinc-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, delay: index * 0.02 }}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-lg border border-zinc-900/10 bg-white shadow-[0_18px_50px_rgba(23,52,4,0.08)] transition-all duration-300 hover:border-[#763300]/25 hover:shadow-[0_30px_80px_rgba(23,52,4,0.16)]"
                >
                  <Link href={`/projects/${project.slug}`} className="block">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={project.images[0].src}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#173404]/88 via-[#173404]/25 to-transparent" />
                      <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#763300] shadow-md">
                        {project.estate}
                      </div>
                      <div className="absolute bottom-5 left-5 right-5">
                        <h3 className="text-2xl font-black text-white">{project.title}</h3>
                        <div className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-[#ba7517]">
                          {project.category}
                        </div>
                        <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/78">
                          <MapPin className="h-4 w-4 shrink-0 text-[#ba7517]" />
                          {shortLocation(project.location)}
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="p-7">
                    <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-zinc-500">{project.description}</p>
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      <div className="rounded-md border border-zinc-100 bg-zinc-50 p-3">
                        <Ruler className="mb-2 h-4 w-4 text-[#763300]" />
                        <div className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">Plot Area</div>
                        <div className="mt-1 text-sm font-bold text-zinc-800">{project.plotArea}</div>
                      </div>
                      <div className="rounded-md border border-zinc-100 bg-zinc-50 p-3">
                        <ShieldCheck className="mb-2 h-4 w-4 text-[#763300]" />
                        <div className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">Amenities</div>
                        <div className="mt-1 text-sm font-bold text-zinc-800">{project.amenities.length} included</div>
                      </div>
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex h-12 w-full items-center justify-center gap-2 border bg-[#763300] text-xs font-bold uppercase tracking-wider text-[#F1EFE8] transition-all hover:bg-[#F1EFE8] hover:text-[#763300]"
                    >
                      View Details <ArrowRight className="h-4 w-4" />
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
