"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Building2, ArrowRight, Check, MapPin, Star,
  Building, Home,
  Store, Trophy, Phone, Globe, Leaf, Cpu, Quote,
  User, Bed, Sofa, Smile, Zap
} from "lucide-react";
import { ContactForm } from "./ContactForm";

export default function HomePage() {
  const heroStats = [
    { value: "2,333,520", label: "Sq. Ft. residential projects" },
    { value: "772,785", label: "Sq. Ft. farmhouse developments" },
    { value: "1,850+", label: "Satisfied residents" },
  ];

  const featureCards = [
    {
      icon: Building,
      title: "Secure Community Living",
      desc: "Fully gated developments designed with 24x7 security and practical community infrastructure.",
      href: "/services",
    },
    {
      icon: Globe,
      title: "Accessible Locations",
      desc: "Properties planned around accessible locations, natural surroundings and important regional connections.",
      href: "/projects",
    },
    {
      icon: Leaf,
      title: "Green Community Planning",
      desc: "Roadside plantations, parks, gardens and thoughtfully planned open spaces support cleaner and more harmonious living.",
      href: "/services",
    },
    {
      icon: Cpu,
      title: "Complete Infrastructure",
      desc: "Wide roads, street lighting, project electrification and essential community amenities planned for comfortable everyday living.",
      href: "/services",
    },
  ];

  return (
    <div className="w-full font-sans">

      {/* SECTION 1: Hero */}
      <section className="hero-luxury relative min-h-[100svh] w-full overflow-hidden pb-12 pt-44 md:pb-16 md:pt-44">
        <div className="hero-luxury-texture absolute inset-0 z-0" aria-hidden="true">
          <div className="hero-luxury-glow" />
          <div className="hero-luxury-rings" />
          <div className="hero-luxury-grid" />
        </div>

        <div className="hero-approval-badge absolute left-1/2 top-[6.75rem] z-20 inline-flex min-h-10 -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-[10px] border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] md:top-[7.25rem] md:text-xs">
          <span className="h-1.5 w-1.5 rounded-full" />
          Government Approved Communities
        </div>

        <div className="relative z-10 container mx-auto grid min-h-[calc(100svh-13rem)] grid-cols-1 items-center gap-14 px-4 md:px-6 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={false}
            className="text-[#F7F4EE] lg:col-span-7"
          >
            <h1 className="mb-6 max-w-5xl text-4xl font-black leading-[0.98] tracking-tight md:text-5xl lg:text-[4rem]">
              Planned Spaces.
              <span className="block text-[#F7F4EE]">Peaceful Living.</span>
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-[1.7] text-white/80 md:text-lg">
              We create exceptional living experiences across Delhi, Saharanpur and beyond through thoughtfully planned farmhouses, villas, residential plots, value homes and independent living spaces.
            </p>
            <div className="mb-9 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex h-14 items-center gap-3 rounded-[10px] border border-[#F7F4EE] bg-[#F7F4EE] px-7 text-xs font-bold uppercase tracking-widest text-[#173B20] transition-colors hover:bg-transparent hover:text-[#F7F4EE]"
              >
                Know More About Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center rounded-[10px] border border-[#F7F4EE] bg-transparent px-7 text-xs font-bold uppercase tracking-widest text-[#F7F4EE] backdrop-blur-md transition-colors hover:bg-[#F7F4EE] hover:text-[#173B20]"
              >
                Book A Site Visit
              </Link>
            </div>
            <div className="grid max-w-3xl grid-cols-1 gap-3.5 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="hero-stat-card min-h-[104px] rounded-[10px] border p-4 transition-transform duration-300 hover:-translate-y-1">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="mt-1.5 text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] opacity-70">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={false}
            className="hidden lg:col-span-5 lg:block"
          >
            <div className="relative ml-auto h-[560px] max-w-[520px]">
              <div className="absolute right-0 top-0 h-[78%] w-[82%] overflow-hidden rounded-[10px] border border-[#F7F4EE]/55 shadow-[0_30px_90px_rgba(0,0,0,0.28)]">
                <Image src="/images/about/doon-construction-team.png" alt="Doon Alliance planning team" fill sizes="40vw" className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-[68%] rounded-[10px] border border-[#173B20] bg-[#F7F4EE] p-5 text-[#173B20] shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
                <div className="relative mb-4 h-40 overflow-hidden rounded-[7px]">
                  <Image src="/images/projects/shivalik-plots.png" alt="Shivalik Estate" fill sizes="28vw" className="object-cover" />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#173B20]">Featured Estate</div>
                <div className="mt-2 text-2xl font-semibold leading-tight text-[#173B20]">Shivalik Estate</div>
                <p className="mt-2 text-sm leading-relaxed text-[#173B20]/70">Documented development in Ganeshpur with planned residential layouts.</p>
              </div>
              <div className="absolute right-6 bottom-24 rounded-[10px] border border-[#F7F4EE] bg-[#173B20] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#F7F4EE]">
                24x7 Security
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Teal Accent Strip */}
      <section className="ploy-surface py-10 w-full relative z-20">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="group flex items-center gap-5 rounded-lg border border-zinc-900/10 bg-[#ba7517] p-5 shadow-[0_18px_45px_rgba(23,52,4,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(23,52,4,0.12)] md:p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ba7517] text-zinc-900 transition-colors group-hover:bg-[#1a1a1a] group-hover:text-white">
              <Building2 className="w-7 h-7 stroke-[1.5]" />
            </div>
            <h2 className="text-xl md:text-[26px] font-bold text-[#F1EFE8] max-w-2xl leading-tight">
              Gated townships, farmhouses, villas, flats, plots, builder floors, and commercial spaces
            </h2>
          </div>
          <Button asChild variant="outline" className="text-[#F1EFE8] bg-[#763300] hover:bg-[#F1EFE8] hover:text-[#763300] transition-all rounded-none  border
           h-[54px] px-10 text-sm font-bold uppercase tracking-[0.15em] shrink-0">
            <Link href="/projects">
              EXPLORE NOW
            </Link>
          </Button>
        </div>
      </section>

      {/* SECTION 3: Split Overlapping Images */}
      <section className="ploy-surface py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[520px] w-full mt-10 md:mt-0"
            >
              {/* Main living room image */}
              <div className="absolute bottom-0 right-0 h-[86%] w-[82%] overflow-hidden shadow-2xl">
                <Image
                  src="/images/interior-living.png"
                  alt="Doon Alliance living space"
                  fill
                  sizes="(max-width: 1024px) 82vw, 42vw"
                  className="object-cover"
                />
              </div>

              {/* Overlapping bedroom image */}
              <div className="absolute left-0 top-0 z-10 h-[52%] w-[52%] overflow-hidden border-[12px] border-white shadow-xl">
                <Image
                  src="/images/interior-bedroom.png"
                  alt="Doon Alliance bedroom"
                  fill
                  sizes="(max-width: 1024px) 52vw, 26vw"
                  className="object-cover"
                />
              </div>

              {/* Teal building icon card */}
              <div className="absolute top-12 right-6 bg-[#763300] w-24 h-24 flex items-center justify-center shadow-lg z-20">
                <Building className="w-12 h-12 text-white stroke-[1.5]" />
              </div>

              {/* Supported resident statistic */}
              <div className="absolute bottom-16 left-6 bg-white border border-gray-100 shadow-xl p-6 flex items-center gap-5 z-20">
                <div className="text-5xl font-bold text-[#763300] leading-none">1,850+</div>
                <div className="text-sm font-bold leading-snug text-navy uppercase tracking-wider">Satisfied<br />Residents</div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="ploy-kicker mb-5">WHO ARE WE?</div>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-navy mb-8 leading-[1.1]">Premium living, planned with transparency</h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-lg">
                At Doon Alliance, we blend comfort, security, and luxury through sustainable real estate solutions. With over 2,333,520 square feet of residential projects and 772,785 square feet of farmhouse developments completed, we build communities people are proud to call home.
              </p>

              <ul className="space-y-5 mb-12">
                {["Government approved gated townships", "Farmhouses, villas, plots, flats and builder floors", "Trusted by 1850+ satisfied residents"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-bold text-navy text-lg">
                    <div className="w-6 h-6 rounded-full bg-[#763300] flex items-center justify-center text-white shrink-0">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild className="text-[#F1EFE8] bg-[#763300] hover:bg-[#F1EFE8] hover:text-[#763300] text-white rounded-none h-14 px-10 tracking-wider font-bold text-sm">
                <Link href="/about">
                  DISCOVER MORE
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Bottom Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 w-full mt-32 overflow-hidden rounded-lg border border-zinc-900/10 bg-white shadow-[0_18px_48px_rgba(23,52,4,0.07)]">
            {[
              { icon: Building2, label: "Apartment" },
              { icon: Home, label: "Villa" },
              { icon: Store, label: "Commercial" },
              { icon: MapPin, label: "Plots" }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group text-zinc-900 transition-colors duration-200 hover:bg-[#1a1a1a] hover:text-white ${i !== 0 ? 'border-l border-zinc-900/10' : ''}`}
              >
                <Link href="/projects" className="py-12 flex flex-col items-center justify-center gap-4">
                  <item.icon className="w-12 h-12 text-zinc-900 group-hover:text-[#ba7517] stroke-[1.5] transition-colors" />
                  <span className="font-bold text-lg">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Main Property Features */}
      <section className="py-24 bg-white">
        <div className="container flex flex-col md:flex-row mx-auto px-4 md:px-6 gap-y-6">
          <div className="w-full md:w-[40%] mb-12 ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 pr-0 lg:pr-8 flex flex-col "
            >
              <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">MAIN FEATURES</div>
              <h2 className="text-4xl lg:text-[48px] font-black text-navy mb-6 leading-tight">Our main property features</h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-lg">
                Discover uncompromised quality and thoughtful design in every detail of our properties. We blend nature with modern lifestyle perfectly.
              </p>

              <Link
                href="/services"
                className="mb-12 inline-flex h-14 w-fit items-center justify-center border-2 border-[#763300] px-10 text-xs font-black uppercase tracking-widest text-[#763300] transition-all hover:-translate-y-1 hover:bg-[#763300] hover:text-white"
              >
                READ MORE
              </Link>

              <div className="flex gap-5 items-start mb-10">
                <Trophy className="w-12 h-12 text-[#763300] shrink-0 stroke-[1.5]" />
                <div>
                  <h4 className="font-bold text-navy text-xl">Thoughtful Community Planning</h4>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">Carefully planned developments that bring together comfort, security, quality and sustainable living.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 mt-auto">
                <a href="tel:+919266040973" className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#763300]" fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">Call Experts</div>
                    <div className="font-bold text-navy text-lg mt-0.5">+91 92660 40973</div>
                  </div>
                </a>
                <Link href="/about" className="flex h-14 w-full items-center text-[#F1EFE8] bg-[#763300] hover:bg-[#F1EFE8] hover:text-[#763300] justify-center border px-8 text-xs font-black uppercase tracking-widest  transition-all hover:-translate-y-1 hover:bg-[#763300] sm:w-auto">
                  DISCOVER MORE
                </Link>
              </div>
            </motion.div>
          </div>
          <div className=" w-full md:w-[60%]">

            <div className="lg:grid-cols-2 grid grid-cols-1 ">
              {featureCards.slice(0, 2).map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex min-h-[300px] flex-col bg-white border border-gray-100 p-10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-[#2d3748] hover:border-[#2d3748] hover:shadow-2xl"
                >
                  <feature.icon className="w-8 h-8 text-[#ba7517] mb-8 stroke-[1.5]" />
                  <h3 className="text-[24px] font-black text-navy mb-5 transition-colors group-hover:text-white">{feature.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed transition-colors group-hover:text-gray-300">{feature.desc}</p>
                  <Link href={feature.href} className="mt-auto flex items-center gap-3 text-[#ba7517] font-black text-sm tracking-wider uppercase">
                    READ MORE <span className="w-10 h-10 rounded-full bg-[#ba7517] flex items-center justify-center text-white transition-transform group-hover:translate-x-1"><ArrowRight className="w-4 h-4" /></span>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="lg:grid-cols-2 grid grid-cols-1 ">
              {featureCards.slice(2).map((feature, index) => (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 2) * 0.1 }}
                  className="group flex min-h-[300px] flex-col bg-white border border-gray-100 p-10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-[#2d3748] hover:border-[#2d3748] hover:shadow-2xl"
                >
                  <feature.icon className="w-8 h-8 text-[#ba7517] mb-8 stroke-[1.5]" />
                  <h3 className="text-[24px] font-black text-navy mb-5 transition-colors group-hover:text-white">{feature.title}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed transition-colors group-hover:text-gray-300">{feature.desc}</p>
                  <Link href={feature.href} className="mt-auto flex items-center gap-3 text-[#ba7517] font-black text-sm tracking-wider uppercase">
                    READ MORE <span className="w-10 h-10 rounded-full bg-[#ba7517] flex items-center justify-center text-white transition-transform group-hover:translate-x-1"><ArrowRight className="w-4 h-4" /></span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Choose Your Dream Home */}
      <section className="ploy-surface py-24">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
          <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">RECENT PROJECT ——</div>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">Choose your Dream Home</h2>

          <div className="flex flex-wrap justify-center gap-8 border-b border-gray-200 mb-14 w-full max-w-2xl">
            {['All[3]', 'PLOT', 'FLAT'].map((tab, i) => (
              <Link
                key={tab}
                href="/projects"
                className={`pb-4 px-2 text-sm font-bold uppercase tracking-widest border-b-2 transition-colors ${i === 0 ? 'border-[#763300] text-[#763300]' : 'border-transparent text-gray-400 hover:text-navy'
                  }`}
              >
                {tab}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { img: "shivalik-plots.png", title: "Shivalik Estate", desc: "A delivered real estate development in Ganeshpur featuring multiple planned residential layouts.", type: "ESTATE" },
              { img: "dharatal-meadows.png", title: "Shakumbhari Estate", desc: "A large planned estate development presented across multiple phases with residential and farmhouse layouts.", type: "ESTATE" },
              { img: "green-valley-villas.png", title: "Backwoods Development", desc: "Part of the wider Backwoods and Shivalik Estate development shown within the project master plans.", type: "MASTER PLAN" }
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
                <div className="project-card-overlay absolute inset-0" />

                <div className="project-card-content absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-8 pb-8 pt-16 text-center">
                  <div className="project-card-label mb-5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                    {c.type}
                  </div>
                  <h3 className="project-card-title mb-3 text-[26px] font-bold leading-tight">{c.title}</h3>
                  <p className="project-card-description mb-8 max-w-[270px] text-sm leading-relaxed">{c.desc}</p>

                  <Link href="/projects" aria-label={`View ${c.title}`} className="project-card-button flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-105">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
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
              <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">ABOUT COMPANY</div>
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-navy mb-8 leading-[1.1]">What they&apos;re talking about us?</h2>
              <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                Hear how we&apos;ve helped them find the right space with confidence and care. Our clients&apos; satisfaction is our greatest reward.
              </p>
              <Button asChild className="text-[#F1EFE8] bg-[#763300] hover:bg-[#F1EFE8] hover:text-[#763300] border rounded-none h-[52px] px-10 tracking-[0.15em] font-bold text-xs uppercase">
                <Link href="/contact">
                  ALL TESTIMONIALS
                </Link>
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
              <div className="border-[3px] border-[#763300] bg-white p-10 md:p-14 relative shadow-2xl">
                <Quote className="absolute top-10 right-10 w-24 h-24 text-gray-100" fill="currentColor" />

                <p className="text-2xl md:text-[28px] font-semibold text-navy leading-snug mb-12 relative z-10 italic">
                  &ldquo;Very smooth experience from site visit to registration. The team is honest and professional. Doon Alliance has been the best investment for my family&apos;s future.&rdquo;
                </p>

                <div className="flex items-center gap-5 relative z-10 mb-2">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 overflow-hidden">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="font-bold text-navy text-xl">Amit Sharma</div>
                    <div className="text-xs text-[#763300] font-bold uppercase tracking-widest mt-1">Udaipur</div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-[#763300] h-2.5" />
                <div className="absolute -bottom-5 right-10 bg-[#763300] text-white px-5 py-2.5 flex gap-1 shadow-lg">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </div>

            </motion.div>
          </div>
          {/* YouTube Video Testimonial Card */}
          <div className="border-[3px] border-zinc-800 bg-white shadow-2xl overflow-hidden aspect-video relative group max-w-6xl mx-auto mt-8">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Pu2WhSbXIzg"
              title="Doon Alliance Customer Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* SECTION 6B: Project Glimpses */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">PROJECT GLIMPSES</div>
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-navy mb-6">Doon Alliance Lifestyle</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Demo visuals from our local assets show the kind of green, comfortable, and secure spaces we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "/images/about/nature-focus.png", title: "Green community planning" },
              { img: "/images/interior-living.png", title: "Comfort-first homes" },
              { img: "/images/projects/shivalik-plots.png", title: "Approved residential plots" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative h-[360px] overflow-hidden bg-gray-100 shadow-lg group"
              >
                <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173404]/80 to-transparent" />
                <h3 className="absolute bottom-8 left-8 right-8 text-xl font-bold text-white">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Dark Building Background */}
      <section className="relative py-32 bg-[#2C2C2A] overflow-hidden w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Building Dark"
            fill
            sizes="100vw"
            className="object-cover mix-blend-luminosity opacity-20"
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/80" />
        </div>

        {/* Decorative Teal brush/shape would go here, simulated with gradient */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#763300]/20 to-transparent -skew-x-12 -translate-x-32" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">OUR VISION</div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-white mb-10 leading-[1.1]">Sustainable, secure, and harmonious living spaces</h2>
            <Button asChild className="vision-cta h-[52px] px-8 text-xs font-bold uppercase tracking-[0.15em]">
              <Link href="/projects">
                Explore now <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:gap-x-8 md:gap-y-12"
          >
            {[
              { icon: Building2, text: "Gated Townships" },
              { icon: Bed, text: "Value Homes" },
              { icon: MapPin, text: "Residential Plots" },
              { icon: Sofa, text: "Commercial Spaces" }
            ].map((item, i) => (
              <div key={i} className="group flex min-w-0 items-center gap-4 md:gap-5">
                <div className="vision-icon-tile flex h-16 w-16 shrink-0 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                  <item.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <span className="vision-item-text min-w-0 text-lg font-bold leading-tight md:max-w-[150px] md:text-xl">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: Stats with Bg Images */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        {[
          { num: "2,333,520", label: "Residential Projects (Sq. Ft.)", bg: "stats-bg-1.png", icon: Building2 },
          { num: "1,850+", label: "Satisfied Residents", bg: "stats-bg-3.png", icon: Smile },
          { num: "772,785", label: "Farmhouse Developments (Sq. Ft.)", bg: "stats-bg-2.png", icon: Home },
          { num: "24x7", label: "Security In Gated Communities", bg: "stats-bg-4.png", icon: Zap },
        ].map((stat, i) => (
          <div key={i} className="stats-card group relative flex h-72 flex-col items-center justify-center overflow-hidden p-8 text-center md:h-[380px]">
            <Image
              src={`/images/${stat.bg}`}
              alt={stat.label}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="stats-card-overlay absolute inset-0" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="stats-icon-tile mb-7 flex h-16 w-16 items-center justify-center">
                <stat.icon className="h-7 w-7 stroke-[1.6]" />
              </div>
              <div className="stats-number mb-5 text-[48px] font-semibold leading-none tracking-tight lg:text-[54px]">{stat.num}</div>
              <div className="stats-label px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em]">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* SECTION 9: Services Grid */}
      <section className="py-24 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14 text-center md:mb-16">
            <div className="mb-5 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#173B20]">
              <span className="h-px w-10 bg-[#173B20]/50" />
              What we&apos;re offering
              <span className="h-px w-10 bg-[#173B20]/50" />
            </div>
            <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-[1.08] text-[#173B20] md:text-5xl lg:text-[56px]">We&apos;re giving all the best services to you</h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#173B20]/65 md:text-base">
              From thoughtfully planned plots to complete communities, every offering is shaped around quality, comfort and lasting value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Residential Plots",
                img: "projects/shivalik-plots.png",
                icon: MapPin,
                desc: "Thoughtfully planned residential plots within gated developments featuring wide roads, green spaces and essential community infrastructure.",
              },
              {
                title: "Farmhouse Developments",
                img: "projects/dharatal-meadows.png",
                icon: Home,
                desc: "Spacious farmhouse developments planned around greenery, privacy, comfort and peaceful living.",
              },
              {
                title: "Flats & Apartments",
                img: "projects/valley-view-retreat.png",
                icon: Building2,
                desc: "Quality living spaces designed to offer comfort, security and long-term value for residents.",
              },
              {
                title: "Township Development",
                img: "projects/green-valley-villas.png",
                icon: Building,
                desc: "Gated township developments planned with roads, lighting, plantations, parks and practical community amenities.",
              }
            ].map((srv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group flex min-h-[500px] cursor-pointer flex-col overflow-hidden rounded-[10px] border border-[#173B20]/25 bg-[#F7F4EE] shadow-[0_14px_36px_rgba(23,59,32,0.08)] transition-[border-color,box-shadow] duration-300 hover:border-[#173B20] hover:shadow-[0_20px_45px_rgba(23,59,32,0.14)]"
              >
                <div className="relative h-[235px] overflow-hidden">
                  <Image src={`/images/${srv.img}`} alt={srv.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-1000 group-hover:scale-[1.06]" />
                  <div className="absolute inset-0 bg-[#173B20]/5 transition-colors duration-300 group-hover:bg-transparent" />
                  <span className="absolute right-5 top-5 text-[11px] font-bold tracking-[0.24em] text-white/80">0{i + 1}</span>
                  <div className="service-icon-tile absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                    <srv.icon className="h-6 w-6 stroke-[1.7]" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-7 pb-7 pt-7">
                  <h3 className="mb-4 font-serif text-[25px] font-semibold leading-tight text-[#173404]">{srv.title}</h3>
                  <p className="mb-8 text-sm leading-7 text-[#4d5547]">
                    {srv.desc}
                  </p>
                  <Link href="/services" className="mt-auto flex w-fit items-center gap-3 border-b border-[#ba7517]/50 pb-1 text-xs font-bold uppercase tracking-[0.18em] text-[#763300] transition-colors hover:border-[#763300]">
                    Explore service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">GET TO KNOW US ——</div>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-navy mb-10 leading-[1.1]">Thoughtfully planned living for comfort and long-term value</h2>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="bg-white border border-gray-100 shadow-md px-6 py-4 rounded-full flex items-center gap-4 font-bold text-navy text-sm w-fit">
                <div className="w-6 h-6 rounded-full bg-[#763300]/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#763300] stroke-[3]" />
                </div>
                Comfort, security and quality
              </div>
              <div className="bg-white border border-gray-100 shadow-md px-6 py-4 rounded-full flex items-center gap-4 font-bold text-navy text-sm w-fit">
                <div className="w-6 h-6 rounded-full bg-[#763300]/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#763300] stroke-[3]" />
                </div>
                Sustainable community planning
              </div>
            </div>

            <div className="flex items-center gap-6 pt-10 border-t border-gray-100">
              <div className="w-[72px] h-[72px] rounded-full bg-[#763300] flex items-center justify-center text-white shrink-0 shadow-xl shadow-[#763300]/30">
                <Leaf className="w-8 h-8 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="text-[22px] font-bold text-navy">Green Community Planning</h4>
                <p className="text-gray-500 mt-2 text-lg">Parks, gardens and open spaces</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="regional-presence relative flex h-[400px] items-center justify-center overflow-hidden rounded-[10px] border"
          >
            <div className="regional-presence-ring regional-presence-ring-outer" aria-hidden="true" />
            <div className="regional-presence-ring regional-presence-ring-inner" aria-hidden="true" />
            <div className="relative z-10 flex flex-col items-center px-6 text-center">
              <div className="regional-presence-icon mb-5 flex h-14 w-14 items-center justify-center">
                <MapPin className="h-6 w-6 stroke-[1.8]" />
              </div>
              <div className="regional-presence-kicker mb-3 text-[10px] font-bold uppercase tracking-[0.24em]">Growing communities across North India</div>
              <div className="regional-presence-number text-[88px] font-semibold leading-none tracking-tight md:text-[118px]">1,850+</div>
              <div className="regional-presence-label mt-4 px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em]">Satisfied Residents</div>
              <div className="regional-presence-locations mt-5 text-xs font-semibold uppercase tracking-[0.16em]">Delhi <span>·</span> Saharanpur <span>·</span> Dehradun Region</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 11: Contact (Get in Touch) */}
      <section className="ploy-surface py-0 relative overflow-hidden">
        {/* Subtle Diamond background shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-white rotate-45 -z-10 shadow-2xl" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            <div className="lg:col-span-7 py-24">
              <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">CONTACT US ——</div>
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
