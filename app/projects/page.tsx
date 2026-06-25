"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      title: "Shivalik Project",
      loc: "Haiderpur Hinduwala, Saharanpur",
      price: "₹15L - ₹45L",
      type: "Residential",
      img: "shivalik-plots.png",
      desc: "Premium residential land development with natural views.",
    },
    {
      title: "Shakumbhari Estate",
      loc: "Haiderpur Hinduwala, Saharanpur",
      price: "₹25L - ₹85L",
      type: "Farm House",
      img: "dharatal-meadows.png",
      desc: "Residential land and lush green farmhouse setups.",
    },
    {
      title: "Backwoods 1",
      loc: "Ganeshpur, near Rajaji National Park",
      price: "₹18L - ₹40L",
      type: "Residential",
      img: "green-valley-villas.png",
      desc: "Residential plots surrounded by Rajaji national forest aura.",
    },
    {
      title: "Backwoods 2",
      loc: "Near Rajaji National Park, Saharanpur",
      price: "₹65L - ₹1.2Cr",
      type: "Residential",
      img: "valley-view-retreat.png",
      desc: "Elegant modern bungalow setups near nature corridor.",
    },
    {
      title: "Backwoods 3",
      loc: "Near Rajaji National Park, Saharanpur",
      price: "₹45L - ₹95L",
      type: "Farm House",
      img: "aravalli-greens.png",
      desc: "Spacious estate farmhouses for calm weekend living.",
    },
    {
      title: "Backwoods 4",
      loc: "Near Rajaji National Park, Saharanpur",
      price: "₹20L - ₹45L",
      type: "Residential",
      img: "nilgiri-estates.png",
      desc: "Scenic residential plots in a gated township layout.",
    },
    {
      title: "Backwoods 5",
      loc: "Near Rajaji National Park, Saharanpur",
      price: "₹22L - ₹48L",
      type: "Residential",
      img: "shivalik-plots.png",
      desc: "Beautifully planned residential spaces with premium access.",
    },
    {
      title: "Backwoods 6",
      loc: "Near Rajaji National Park, Saharanpur",
      price: "₹24L - ₹52L",
      type: "Residential",
      img: "green-valley-villas.png",
      desc: "Nature connected premium residential plot development.",
    },
    {
      title: "Backwoods 7",
      loc: "Near Rajaji National Park, Saharanpur",
      price: "₹26L - ₹56L",
      type: "Residential",
      img: "valley-view-retreat.png",
      desc: "Premium residential plots with clear skies and forest views.",
    },
    {
      title: "Backwoods 8",
      loc: "Near Rajaji National Park, Saharanpur",
      price: "₹55L - ₹1.1Cr",
      type: "Farm House",
      img: "aravalli-greens.png",
      desc: "Exclusive mini farmhouse properties with green landscaping.",
    },
    {
      title: "Backwoods 9",
      loc: "Near Rajaji National Park, Saharanpur",
      price: "₹28L - ₹60L",
      type: "Residential",
      img: "nilgiri-estates.png",
      desc: "Sustainable residential land layouts with wide RCC roads.",
    },
    {
      title: "Backwoods 10",
      loc: "Near Rajaji National Park, Saharanpur",
      price: "₹30L - ₹65L",
      type: "Residential",
      img: "shivalik-plots.png",
      desc: "Secured plotted development with smart facilities.",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.type === activeTab);

  return (
    <div className="w-full font-sans pb-20 bg-zinc-50">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/valley-view-retreat.png"
            alt="Our Projects"
            fill
            priority
            sizes="100vw"
            className="object-cover animate-pulse-subtle"
          />
          <div className="absolute inset-0 bg-[#0f1f2e]/85" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-3 block"
          >
            OUR EXQUISITE PORTFOLIO ——
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            OUR PROJECTS
          </motion.h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase text-zinc-300">
            <Link href="/" className="hover:text-[#4BBFB8] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-[#4BBFB8]">PROJECTS</span>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["All", "Residential", "Farm House"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-none cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#4BBFB8] text-white shadow-lg"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50 hover:border-[#4BBFB8]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((prop, i) => (
                <motion.div
                  layout
                  key={prop.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden bg-white border border-zinc-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={`/images/projects/${prop.img}`}
                        alt={prop.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-[#4BBFB8] text-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-md">
                        {prop.type}
                      </div>
                    </div>
                    <div className="p-6 pb-0">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-navy group-hover:text-[#4BBFB8] transition-colors">
                          {prop.title}
                        </h3>
                        <span className="text-[#4BBFB8] font-extrabold text-lg shrink-0">
                          {prop.price}
                        </span>
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                        {prop.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-4">
                    <p className="text-zinc-400 flex items-center gap-1.5 text-xs mb-4 border-t border-zinc-50 pt-4">
                      <MapPin className="w-4 h-4 text-[#4BBFB8] shrink-0" />{" "}
                      {prop.loc}
                    </p>
                    <Link
                      href="/contact"
                      className="w-full bg-[#1e2a35] hover:bg-[#4BBFB8] text-white py-3 px-4 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                    >
                      INQUIRE NOW <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
