"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Building2, ArrowRight, Check, MapPin, Star,
  ChevronLeft, ChevronRight, Building, Home,
  Store, Trophy, Phone, Globe, Leaf, Cpu, Quote,
  User, Bed, Sofa, Smile, Zap
} from "lucide-react";
import { ContactForm } from "./ContactForm";

export default function HomePage() {
  return (
    <div className="w-full font-sans">

      {/* SECTION 1: Hero */}
      <section className="relative h-[100dvh] w-full flex items-end overflow-hidden pt-24 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Hero background"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6 text-white w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="text-sm md:text-base font-light tracking-[0.2em] mb-4">LIVE SMART. LIVE STYLISH</div>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[1.05] tracking-tight">
              SMART LIVING WITH <br />
              SERVICES <span className="font-serif italic text-[#4BBFB8] font-normal lowercase tracking-normal text-4xl md:text-6xl lg:text-[5.5rem]">5 stars</span>
            </h1>
          </motion.div>
        </div>

        {/* Carousel Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors z-20">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors z-20">
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 items-center">
          <div className="w-3.5 h-3.5 rounded-full border-[2px] border-white bg-transparent" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white/80 transition-colors cursor-pointer" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white/80 transition-colors cursor-pointer" />
        </div>
      </section>

      {/* SECTION 2: Teal Accent Strip */}
      <section className="bg-[#8bb8b6] py-8 w-full relative z-20">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-5">
            <Building2 className="w-12 h-12 text-white stroke-[1.5]" />
            <h2 className="text-2xl md:text-[28px] font-bold text-white max-w-xl leading-tight">
              Beautiful spaces in the best places
            </h2>
          </div>
          <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#8bb8b6] h-[52px] px-10 text-sm font-bold uppercase tracking-[0.15em] rounded-none shrink-0 bg-transparent">
            EXPLORE NOW
          </Button>
        </div>
      </section>

      {/* SECTION 3: Split Overlapping Images */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[650px] w-full mt-10 md:mt-0"
            >
              {/* Main living room image */}
              <Image
                src="/images/interior-living.png"
                alt="Living Room"
                fill
                // sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover shadow-2xl" />

              {/* Overlapping bedroom image */}
              <Image
                src="/images/interior-bedroom.png"
                alt="Bedroom"
                fill
                // sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover border-[12px] border-white shadow-xl z-10"
              />

              {/* Teal building icon card */}
              <div className="absolute top-12 right-6 bg-[#4BBFB8] w-24 h-24 flex items-center justify-center shadow-lg z-20">
                <Building className="w-12 h-12 text-white stroke-[1.5]" />
              </div>

              {/* 5 Years experience card */}
              <div className="absolute bottom-16 left-6 bg-white border border-gray-100 shadow-xl p-6 flex items-center gap-5 z-20">
                <div className="text-6xl font-bold text-[#4BBFB8] leading-none">5</div>
                <div className="text-sm font-bold leading-snug text-navy uppercase tracking-wider">Years of<br />experience</div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-4 flex items-center gap-3">
                THE BUILDING OVERVIEW <span className="w-8 h-[2px] bg-[#4BBFB8]"></span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-navy mb-8 leading-[1.1]">Luxury-Inspired City Living</h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-lg">
                We believe that true luxury is not just about opulent structures, but the environment they inhabit. Our developments are carefully curated to provide the perfect balance of modern comfort and natural tranquility.
              </p>

              <ul className="space-y-5 mb-12">
                {["Luxury living experience", "Building the future cities", "Winning architecture project"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-bold text-navy text-lg">
                    <div className="w-6 h-6 rounded-full bg-[#4BBFB8] flex items-center justify-center text-white shrink-0">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button className="bg-navy hover:bg-navy/90 text-white rounded-none h-14 px-10 tracking-wider font-bold text-sm">
                DISCOVER MORE
              </Button>
            </motion.div>
          </div>

          {/* Bottom Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 w-full mt-32 border border-gray-100 bg-gray-50/50 overflow-hidden">
            {[
              { icon: Building2, label: "Apartment" },
              { icon: Home, label: "Villa" },
              { icon: Store, label: "Commercial" },
              { icon: MapPin, label: "Plots" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, backgroundColor: "#4BBFB8", color: "#ffffff" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`py-12 flex flex-col items-center justify-center gap-4 group cursor-pointer text-navy transition-colors duration-200 ${i !== 0 ? 'border-l border-gray-100' : ''}`}
              >
                <item.icon className="w-12 h-12 group-hover:text-white text-[#4BBFB8] stroke-[1.5] transition-colors" />
                <span className="font-bold text-lg">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Main Property Features (3-Col) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* Column 1 (Left ~35%) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 pr-0 lg:pr-8 flex flex-col"
            >
              <div className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-4">MAIN FEATURES ——</div>
              <h2 className="text-4xl lg:text-[44px] font-bold text-navy mb-6 leading-tight">Our main property features</h2>
              <p className="text-gray-500 mb-10 leading-relaxed">
                Discover uncompromised quality and thoughtful design in every detail of our properties. We blend nature with modern lifestyle perfectly.
              </p>

              <Button variant="outline" className="border-2 border-[#4BBFB8] text-[#4BBFB8] rounded-none hover:bg-[#4BBFB8] hover:text-white h-14 px-10 font-bold tracking-widest text-xs w-fit mb-12">
                READ MORE
              </Button>

              <div className="flex gap-5 items-start mb-10">
                <Trophy className="w-12 h-12 text-[#4BBFB8] shrink-0 stroke-[1.5]" />
                <div>
                  <h4 className="font-bold text-navy text-xl">Winning Architecture</h4>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">Recognized nationally for integrating sustainable concepts with modern luxury.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 mt-auto">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#4BBFB8]" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Call Experts</div>
                    <div className="font-bold text-navy text-lg mt-0.5">+91-XXXXXXXXXX</div>
                  </div>
                </div>
                <Button className="bg-navy text-white rounded-none h-14 px-8 font-bold text-xs tracking-widest hover:bg-navy/90 w-full sm:w-auto">
                  DISCOVER MORE
                </Button>
              </div>
            </motion.div>

            {/* Column 2 (Center ~32%) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-4 flex flex-col gap-6"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#2d3748] p-10 flex-1 flex flex-col justify-center shadow-lg group transition-all"
              >
                <Building className="w-12 h-12 text-[#4BBFB8] mb-6 stroke-[1.5]" />
                <h3 className="text-[22px] font-bold text-white mb-4">Smart living</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">Integrated home automation and intelligent design for a seamless lifestyle.</p>
                <Link href="#" className="flex items-center gap-3 text-white font-bold text-sm tracking-wider uppercase mt-auto">
                  READ MORE <div className="w-8 h-8 rounded-full bg-[#4BBFB8] flex items-center justify-center text-white transition-transform group-hover:translate-x-1"><ArrowRight className="w-4 h-4" /></div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#2d3748] p-10 flex-1 flex flex-col justify-center shadow-lg group transition-all"
              >
                <Globe className="w-12 h-12 text-[#4BBFB8] mb-6 stroke-[1.5]" />
                <h3 className="text-[22px] font-bold text-white mb-4">Attractive location</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">Situated in prime areas with easy access to city centers and natural escapes.</p>
                <Link href="#" className="flex items-center gap-3 text-white font-bold text-sm tracking-wider uppercase mt-auto">
                  READ MORE <div className="w-8 h-8 rounded-full bg-[#4BBFB8] flex items-center justify-center text-white transition-transform group-hover:translate-x-1"><ArrowRight className="w-4 h-4" /></div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Column 3 (Right ~32%) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 flex flex-col gap-6"
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-gray-100 shadow-xl p-10 flex-1 flex flex-col justify-center group transition-all"
              >
                <Leaf className="w-12 h-12 text-[#4BBFB8] mb-6 stroke-[1.5]" />
                <h3 className="text-[22px] font-bold text-navy mb-4">Eco construction</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">Sustainable materials and energy-efficient building methodologies.</p>
                <Link href="#" className="flex items-center gap-2 text-[#4BBFB8] font-bold text-sm tracking-wider uppercase mt-auto">
                  READ MORE <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-gray-100 shadow-xl p-10 flex-1 flex flex-col justify-center group transition-all"
              >
                <Cpu className="w-12 h-12 text-[#4BBFB8] mb-6 stroke-[1.5]" />
                <h3 className="text-[22px] font-bold text-navy mb-4">Modern technology</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">State-of-the-art facilities designed for tomorrow's living needs.</p>
                <Link href="#" className="flex items-center gap-2 text-[#4BBFB8] font-bold text-sm tracking-wider uppercase mt-auto">
                  READ MORE <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5: Choose Your Dream Home */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-4">RECENT PROJECT ——</div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">Choose your Dream Home</h2>

          <div className="flex flex-wrap justify-center gap-8 border-b border-gray-200 mb-14 w-full max-w-2xl">
            {['All[3]', 'PLOT', 'FLAT'].map((tab, i) => (
              <button
                key={tab}
                className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest border-b-2 transition-colors ${i === 0 ? 'border-[#4BBFB8] text-[#4BBFB8]' : 'border-transparent text-gray-400 hover:text-navy'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { img: "dharatal-meadows.png", title: "Dharatal Meadows", desc: "Premium plots with world class amenities", type: "PLOT" },
              { img: "green-valley-villas.png", title: "Green Valley Villas", desc: "Luxury 4 BHK villas in gated community", type: "FLAT" },
              { img: "shivalik-plots.png", title: "Shivalik Estates", desc: "Scenic view residential plots", type: "PLOT" }
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative h-[550px] group overflow-hidden bg-navy transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Background Image */}
                <Image
                  src={`/images/projects/${c.img}`}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f2e] via-[#0f1f2e]/40 to-transparent opacity-90" />

                <div className="absolute bottom-10 left-0 right-0 px-8 flex flex-col items-center text-center z-10">
                  <div className="bg-[#4BBFB8] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-1.5 px-4 mb-5">
                    {c.type}
                  </div>
                  <h3 className="text-[26px] font-bold text-white mb-3 leading-tight">{c.title}</h3>
                  <p className="text-gray-300 text-sm mb-8 leading-relaxed max-w-[250px]">{c.desc}</p>

                  <button className="w-12 h-12 rounded-full border-2 border-[#4BBFB8] flex items-center justify-center text-[#4BBFB8] group-hover:bg-[#4BBFB8] group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Testimonials Split */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-4">ABOUT COMPANY ——</div>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-navy mb-8 leading-[1.1]">What they're talking about us?</h2>
              <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                Hear how we've helped them find the right space with confidence and care. Our clients' satisfaction is our greatest reward.
              </p>
              <Button className="bg-[#4BBFB8] hover:bg-[#4BBFB8]/90 text-white rounded-none h-[52px] px-10 tracking-[0.15em] font-bold text-xs uppercase">
                ALL TESTIMONIALS
              </Button>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col gap-8 relative"
            >
              {/* Written Testimonial Card */}
              <div className="border-[3px] border-[#4BBFB8] bg-white p-10 md:p-14 relative shadow-2xl">
                <Quote className="absolute top-10 right-10 w-24 h-24 text-gray-100" fill="currentColor" />

                <p className="text-2xl md:text-[28px] font-semibold text-navy leading-snug mb-12 relative z-10 italic">
                  "Very smooth experience from site visit to registration. The team is honest and professional. Dharatal Greens has been the best investment for my family's future."
                </p>

                <div className="flex items-center gap-5 relative z-10 mb-2">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 overflow-hidden">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-bold text-navy text-xl">Amit Sharma</div>
                    <div className="text-xs text-[#4BBFB8] font-bold uppercase tracking-widest mt-1">Udaipur</div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-[#4BBFB8] h-2.5" />
                <div className="absolute -bottom-5 right-10 bg-[#4BBFB8] text-white px-5 py-2.5 flex gap-1 shadow-lg">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>

              {/* YouTube Video Testimonial Card */}
              <div className="border-[3px] border-[#1e2a35] bg-white shadow-2xl overflow-hidden aspect-video relative group">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/Pu2WhSbXIzg"
                  title="Dharatal Greens Customer Review"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Dark Building Background */}
      <section className="relative py-32 bg-[#1e2a35] overflow-hidden w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Building Dark"
            fill
            sizes="100vw"
            className="object-cover mix-blend-luminosity opacity-20"
          />
          <div className="absolute inset-0 bg-[#0f1f2e]/80" />
        </div>

        {/* Decorative Teal brush/shape would go here, simulated with gradient */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#4BBFB8]/20 to-transparent -skew-x-12 -translate-x-32" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-4">GET TO KNOW US ——</div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white mb-10 leading-[1.1]">Modern & luxury living complexes</h2>
            <Button className="bg-[#4BBFB8] hover:bg-[#4BBFB8]/90 text-white rounded-none h-[52px] px-10 tracking-[0.15em] font-bold text-xs uppercase">
              EXPLORE NOW
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-x-8 gap-y-12"
          >
            {[
              { icon: Building2, text: "Luxury Living" },
              { icon: Bed, text: "Amenities Buildings" },
              { icon: MapPin, text: "Center downtown" },
              { icon: Sofa, text: "Contemporary Lifestyle" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-[#4BBFB8] group-hover:text-[#4BBFB8] transition-colors shrink-0 bg-white/5">
                  <item.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <span className="text-white font-bold text-lg md:text-xl leading-tight max-w-[150px]">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: Stats with Bg Images */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {[
          { num: "5.2M+", label: "Residential Completed (Sq. Ft.)", bg: "stats-bg-1.png", icon: Building2, highlight: false },
          { num: "1.5M+", label: "Farmhouse Completed (Sq. Ft.)", bg: "stats-bg-2.png", icon: Home, highlight: true },
          { num: "2,500+", label: "Happy Residents", bg: "stats-bg-3.png", icon: Smile, highlight: false },
          { num: "20+", label: "Projects Delivered", bg: "stats-bg-4.png", icon: Zap, highlight: false },
        ].map((stat, i) => (
          <div key={i} className="relative h-72 md:h-[380px] flex flex-col items-center justify-center text-white text-center p-8 overflow-hidden group">
            <Image
              src={`/images/${stat.bg}`}
              alt={stat.label}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className={`absolute inset-0 ${stat.highlight ? 'bg-navy/80' : 'bg-black/70'}`} />

            <div className="relative z-10 flex flex-col items-center">
              <stat.icon className="w-12 h-12 mb-6 text-white/80 stroke-[1.5]" />
              <div className="text-[56px] font-bold mb-4 leading-none tracking-tight">{stat.num}</div>

              <div className="relative inline-block mt-2">
                {stat.highlight && (
                  <div className="absolute inset-0 bg-[#4BBFB8] -z-10 -skew-x-12 scale-x-125 scale-y-150" />
                )}
                <div className={`font-bold uppercase tracking-[0.2em] text-xs px-2 ${stat.highlight ? 'text-white' : 'text-gray-300'}`}>
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 9: Services Grid */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-4">WHAT WE'RE OFFERING ——</div>
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-navy max-w-3xl mx-auto leading-[1.1]">We're giving all the best services to you</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Plot for Sale", img: "projects/shivalik-plots.png", isDark: false },
              { title: "Land for Sale", img: "projects/dharatal-meadows.png", isDark: false },
              { title: "Flats & Apartments", img: "projects/valley-view-retreat.png", isDark: false },
              { title: "Property Documentation Work", img: "projects/green-valley-villas.png", isDark: true }
            ].map((srv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={srv.isDark ?
                  "bg-[#1e2a35] shadow-xl p-10 pt-16 flex flex-col justify-end group cursor-pointer transition-all duration-300" :
                  "bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                }
              >
                {!srv.isDark && (
                  <div className="relative h-[220px]">
                    <Image src={`/images/${srv.img}`} alt={srv.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" />
                    <div className="absolute -bottom-6 left-8 w-14 h-14 bg-[#4BBFB8] flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform">
                      <Building className="w-6 h-6 text-white stroke-[1.5]" />
                    </div>
                  </div>
                )}

                <div className={srv.isDark ? "relative z-10" : "p-8 pt-12"}>
                  <h3 className={`text-[22px] font-bold mb-4 leading-snug ${srv.isDark ? 'text-white' : 'text-navy'}`}>{srv.title}</h3>
                  <p className={`text-sm mb-8 leading-relaxed ${srv.isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    Providing premium quality {srv.title.toLowerCase()} with complete amenities, transparency, and legal assurance.
                  </p>
                  <Link href="#" className={`text-sm font-bold tracking-widest uppercase transition-colors flex items-center gap-2 w-fit ${srv.isDark ? 'text-[#4BBFB8] hover:text-white' : 'text-navy hover:text-[#4BBFB8]'}`}>
                    READ MORE <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: Outstanding Way of Luxury Life */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-4">GET TO KNOW US ——</div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-navy mb-10 leading-[1.1]">An outstanding way of luxury life</h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="bg-white border border-gray-100 shadow-md px-6 py-4 rounded-full flex items-center gap-4 font-bold text-navy text-sm w-fit">
                <div className="w-6 h-6 rounded-full bg-[#4BBFB8]/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#4BBFB8] stroke-[3]" />
                </div>
                Total comfort and pleasure
              </div>
              <div className="bg-white border border-gray-100 shadow-md px-6 py-4 rounded-full flex items-center gap-4 font-bold text-navy text-sm w-fit">
                <div className="w-6 h-6 rounded-full bg-[#4BBFB8]/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#4BBFB8] stroke-[3]" />
                </div>
                Peaceful, calm luxury living
              </div>
            </div>

            <div className="flex items-center gap-6 pt-10 border-t border-gray-100">
              <div className="w-[72px] h-[72px] rounded-full bg-[#4BBFB8] flex items-center justify-center text-white shrink-0 shadow-xl shadow-[#4BBFB8]/30">
                <Leaf className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-[22px] font-bold text-navy">Eco construction</h4>
                <p className="text-gray-500 mt-2 text-lg">Green living, modern design</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center h-[400px]"
          >
            <Image src="/images/world-map.png" alt="Map" fill sizes="(max-width: 768px) 100vw, 50vw" className="opacity-40 mix-blend-multiply" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className="text-[140px] font-bold text-[#4BBFB8] leading-none drop-shadow-2xl">20+</div>
              <div className="text-[22px] font-bold text-navy uppercase tracking-[0.2em] bg-white/90 backdrop-blur-sm px-8 py-3 shadow-xl -mt-6">Project complete</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 11: Contact (Get in Touch) */}
      <section className="py-0 bg-gray-50 relative overflow-hidden">
        {/* Subtle Diamond background shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-white rotate-45 -z-10 shadow-2xl" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-7 py-24">
              <div className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-4">CONTACT US ——</div>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-navy mb-12">Get in touch!</h2>

              <ContactForm />
            </div>

            <div className="lg:col-span-5 hidden lg:flex h-full min-h-[800px] items-end justify-center relative">
              <Image
                src="/images/agent.png"
                alt="Real Estate Agent"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
