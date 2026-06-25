"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, Shield, Target, Users, CheckCircle, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const stats = [
    {
      value: "2.3M+",
      label: "Sq. Ft. Residential Completed",
      desc: "Delivered premium townships & plotted layouts.",
    },
    {
      value: "772K+",
      label: "Sq. Ft. Farmhouse Projects",
      desc: "Developing luxury nature-integrated estates.",
    },
    {
      value: "1,850+",
      label: "Satisfied Residents",
      desc: "Trusted families living in happy communities.",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Uncompromising Security",
      desc: "Gated perimeters, smart access controls, and 24/7 security systems.",
    },
    {
      icon: Award,
      title: "Eco-Friendly Design",
      desc: "RCC roads, lush green plantations, and nature preservation.",
    },
    {
      icon: CheckCircle,
      title: "Absolute Transparency",
      desc: "End-to-end legal verification, clear titles, and transparent processes.",
    },
  ];

  return (
    <div className="w-full font-sans bg-white overflow-hidden pb-12">
      {/* SECTION 1: Hero Banner */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="About Us Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0f1f2e]/80 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#4BBFB8] font-bold tracking-[0.25em] text-xs md:text-sm uppercase mb-4 block"
          >
            DISCOVER OUR JOURNEY ——
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-none"
          >
            Crafting Communities <br />
            <span className="font-serif italic text-[#4BBFB8] font-normal lowercase tracking-normal">where</span> Nature Leads
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex items-center justify-center gap-2.5 text-sm font-semibold tracking-wider uppercase text-zinc-300"
          >
            <Link href="/" className="hover:text-[#4BBFB8] transition-colors">
              HOME
            </Link>
            <span className="text-zinc-500">/</span>
            <span className="text-[#4BBFB8]">ABOUT US</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Who Are We? */}
      <section className="py-24 md:py-32 relative bg-zinc-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Interactive/Animated Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6 relative h-[500px] w-full"
            >
              {/* Main Image */}
              <div className="absolute right-0 bottom-0 w-[85%] h-[85%] overflow-hidden shadow-2xl group">
                <Image
                  src="/images/about/team-vision.png"
                  alt="Our Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0f1f2e]/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Overlapping Secondary Image */}
              <div className="absolute left-0 top-0 w-[55%] h-[55%] overflow-hidden border-[10px] border-white shadow-xl z-10 group">
                <Image
                  src="/images/interior-living.png"
                  alt="Living Spaces"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Abstract decorative frame */}
              <div className="absolute bottom-[8%] right-[17%] w-[20%] h-[20%] border-[4px] border-[#4BBFB8] -z-10 animate-pulse" />
              
              {/* Floating Tag */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="absolute bottom-8 left-4 bg-[#1e2a35] text-white p-6 shadow-xl z-20 border-l-4 border-[#4BBFB8]"
              >
                <div className="text-4xl font-extrabold text-[#4BBFB8] leading-none mb-1">10+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-snug">
                  Premium townships<br />developed
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Content details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <span className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-4 flex items-center gap-2">
                WHO ARE WE? <span className="w-8 h-[2px] bg-[#4BBFB8]" />
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-[1.15]">
                Dedicated to creating exceptional living experiences
              </h2>
              <p className="text-zinc-600 mb-6 text-lg leading-relaxed">
                At <strong className="text-navy font-semibold">Dharatal Greens Pvt Ltd</strong>, we are dedicated to creating exceptional living experiences that blend comfort, security, and luxury. Operating across Delhi, Saharanpur, and beyond, we specialize in premium real estate solutions, including farmhouses, villas, residential plots, value homes, and independent living spaces.
              </p>
              <p className="text-zinc-600 mb-8 text-lg leading-relaxed">
                Our approach is rooted in transparency, efficiency, and sustainability, ensuring our clients receive tailored solutions that meet their aspirations. With over <strong className="text-navy font-semibold">2,333,520 Square feet</strong> of residential projects and <strong className="text-navy font-semibold">772,785 Square feet</strong> of farmhouse developments completed, we have built a strong reputation for delivering quality and value. Trusted by <strong className="text-[#4BBFB8] font-bold">1,850+ satisfied residents</strong>, our mission is to go beyond construction—we craft vibrant communities that people are proud to call home.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="bg-[#4BBFB8] hover:bg-[#3cacb0] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center gap-2 group"
                >
                  VIEW PROJECTS <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-[#1e2a35] hover:bg-[#1e2a35] hover:text-white text-[#1e2a35] px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  CONTACT US
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Stats Showcase */}
      <section className="bg-[#1e2a35] py-20 text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4BBFB8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b md:border-b-0 md:border-r border-white/10 last:border-0 pb-8 md:pb-0 md:pr-8 last:pr-0"
              >
                <div className="text-5xl md:text-6xl font-extrabold text-[#4BBFB8] tracking-tight shrink-0 font-serif leading-none">
                  {stat.value}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white mb-2 leading-tight uppercase tracking-wider">
                    {stat.label}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Vision & Mission */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Text & Features List */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-4 flex items-center gap-2">
                OUR VISION <span className="w-8 h-[2px] bg-[#4BBFB8]" />
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-[1.15]">
                Redefining modern living with sustainable solutions
              </h2>
              <p className="text-zinc-600 mb-10 text-lg leading-relaxed">
                At Dharatal Greens, our vision is simple yet profound: to redefine modern living with sustainable, high-quality real estate solutions. We strive to create secure and harmonious spaces that cater to diverse lifestyle needs, offering affordable luxury without compromise. Our commitment to innovation and excellence drives us to develop properties that not only provide value but also foster lasting happiness for generations to come. Whether you are looking for a peaceful retreat, an investment opportunity, or a dream home, Dharatal Greens is here to make your vision a reality.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-6 bg-zinc-50 border border-zinc-100 hover:shadow-xl hover:border-[#4BBFB8]/30 transition-all rounded-sm"
                  >
                    <div className="w-12 h-12 bg-[#4BBFB8]/10 text-[#4BBFB8] rounded-sm flex items-center justify-center mb-4">
                      <feat.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-navy text-sm uppercase tracking-wide mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">
                      {feat.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Visual Accent Banner */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative h-[550px] w-full"
            >
              <div className="absolute inset-0 shadow-2xl overflow-hidden group">
                <Image
                  src="/images/projects/valley-view-retreat.png"
                  alt="Luxury Retreat"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#1e2a35]/40 mix-blend-multiply" />
              </div>

              {/* Decorative outline block */}
              <div className="absolute -top-6 -left-6 w-[80px] h-[80px] border-t-4 border-l-4 border-[#4BBFB8] -z-10" />
              <div className="absolute -bottom-6 -right-6 w-[80px] h-[80px] border-b-4 border-r-4 border-[#4BBFB8] -z-10" />

              {/* Floating Quote/Accent */}
              <div className="absolute inset-0 flex items-center justify-center p-8 text-center text-white z-10 pointer-events-none">
                <div className="max-w-xs">
                  <div className="text-5xl font-serif text-[#4BBFB8] mb-4">“</div>
                  <p className="font-semibold text-lg italic leading-relaxed">
                    Sustainable living is not a choice, it is a legacy we build together.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
