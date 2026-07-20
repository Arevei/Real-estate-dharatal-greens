"use client";

import { motion } from "framer-motion";
import { Building2, Home, Landmark, Map, Trees, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Map,
    title: "Residential Plot Development",
    desc: "Thoughtfully planned residential plots within gated developments featuring wide roads, green spaces and essential community infrastructure.",
  },
  {
    icon: Trees,
    title: "Farmhouse Development",
    desc: "Spacious farmhouse developments planned around greenery, privacy, comfort and peaceful living.",
  },
  {
    icon: Landmark,
    title: "Gated Township Planning",
    desc: "Planning gated communities with wide roads, street lighting, green spaces and essential resident amenities.",
  },
  {
    icon: Home,
    title: "Villas & Independent Living",
    desc: "Villas and independent living spaces planned with comfort, security, quality and long-term residential value in mind.",
  },
  {
    icon: Building2,
    title: "Value Homes & Flats",
    desc: "Quality living spaces designed to offer comfort, security and long-term value for residents.",
  },
  {
    icon: Zap,
    title: "Community Infrastructure",
    desc: "Roads, lighting, electrification, plantations, parks and practical amenities planned for comfortable everyday living.",
  },
];

export default function Services() {
  return (
    <div className="w-full bg-zinc-50 pb-20 font-sans">
      <section className=" relative flex h-[52vh] min-h-[420px] items-center justify-center overflow-hidden pt-20">
        <Image src="/images/projects/nilgiri-estates.png" alt="Doon Alliance services" fill priority sizes="100vw" className="object-cover opacity-55 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111c] via-[#07111c]/70 to-transparent" />
        <div className="relative z-10 max-w-4xl px-4 text-center text-white">
          <div className="ploy-kicker mb-5 border-white/15 bg-white/10 text-white">What We Build</div>
          <h1 className="mb-5 text-5xl font-bold tracking-tight md:text-7xl">Services</h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Focused real estate development offerings connected to Doon Alliance project material and community planning.
          </p>
        </div>
      </section>

      <section className="ploy-surface py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="ploy-kicker mb-5">Supported Service Areas</div>
            <h2 className="text-4xl font-bold leading-tight text-[#1e2a35] md:text-5xl">
              Real estate solutions planned around comfort, security and sustainable community living.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((srv, i) => (
              <motion.article
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="ploy-card group p-8"
              >
                <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#4BBFB8]/12 text-[#4BBFB8] transition-colors group-hover:bg-[#4BBFB8] group-hover:text-white">
                  <srv.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#1e2a35]">{srv.title}</h3>
                <p className="min-h-[96px] text-sm leading-relaxed text-zinc-500">{srv.desc}</p>
                <Link href="/contact" className="mt-8 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-[#4BBFB8] transition-colors hover:text-[#1e2a35]">
                  Discuss Requirement
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
