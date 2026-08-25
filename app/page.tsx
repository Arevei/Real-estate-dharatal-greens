"use client"
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Building2, ArrowRight, Check, MapPin, Star,
  Building, Home, Store, Trophy, Phone, Globe, Leaf, Cpu, Quote,
  User, Bed, Sofa, Smile, Zap
} from "lucide-react";
import { ContactForm } from "./ContactForm";
import { InstagramReelsSection } from "./InstagramReelsSection";

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

  const heroRef = useRef<HTMLElement>(null);
  const blurLayerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const smoothHero = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
  });

  const bgScale = useTransform(smoothHero, [0, 0.7], [1.04, 1.12]);
  const vignetteOpacity = useTransform(smoothHero, [0, 0.38, 0.8], [0.72, 0.88, 0.62]);
  const whiteWashOpacity = useTransform(smoothHero, [0.72, 1], [0, 0.92]);
  const s1Opacity = useTransform(smoothHero, [0, 0.22, 0.45], [1, 1, 0]);
  const s1Y = useTransform(smoothHero, [0, 0.45], ["0px", "-64px"]);
  const s2Opacity = useTransform(smoothHero, [0.42, 0.66], [0, 1]);
  const s2Y = useTransform(smoothHero, [0.42, 0.66], ["56px", "0px"]);

  useMotionValueEvent(smoothHero, "change", (value) => {
    if (!blurLayerRef.current) return;

    const clear = 58 - Math.min(value, 0.72) * 34;
    const edge = 78 - Math.min(value, 0.72) * 22;
    const mask = `radial-gradient(ellipse ${clear}% ${clear * 0.82}% at 54% 52%, transparent 0%, transparent ${clear * 0.9}%, rgba(0,0,0,0.6) ${edge}%, black 100%)`;

    blurLayerRef.current.style.maskImage = mask;
    (blurLayerRef.current.style as CSSStyleDeclaration & { webkitMaskImage: string }).webkitMaskImage = mask;
  });

  useEffect(() => {
    if (!blurLayerRef.current) return;
    const mask =
      "radial-gradient(ellipse 58% 48% at 54% 52%, transparent 0%, transparent 52%, rgba(0,0,0,0.6) 78%, black 100%)";
    blurLayerRef.current.style.maskImage = mask;
    (blurLayerRef.current.style as CSSStyleDeclaration & { webkitMaskImage: string }).webkitMaskImage = mask;
  }, []);

  return (
    <div className="w-full font-sans">

      {/* SECTION 1: Hero */}
      <section ref={heroRef} className="relative min-h-[100svh] w-full overflow-hidden bg-[#08131f] pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/events/SRS%20Farm%20House/DSC06800.JPG"
            alt="SRS Farm House event"
            fill
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,19,31,0.96)_0%,rgba(8,19,31,0.82)_46%,rgba(8,19,31,0.42)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#08131f] to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto grid min-h-[calc(100svh-10rem)] grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white lg:col-span-7"
          >
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#763300]" />
              Government Approved Communities
            </div>
            <h1 className="mb-7 max-w-5xl text-4xl font-black leading-[0.98] tracking-tight md:text-5xl lg:text-[4rem]">
              Planned Spaces.
              <span className="block text-[#BA7517]">Peaceful Living.</span>
            </h1>
            <p className="mb-9 max-w-2xl text-base leading-relaxed text-white/78 md:text-xl">
              We create exceptional living experiences across Delhi, Saharanpur and beyond through thoughtfully planned farmhouses, villas, residential plots, value homes and independent living spaces.
            </p>
            <div className="mb-10 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="group inline-flex h-[58px] items-center gap-3 rounded-full bg-[#763300] px-8 text-xs font-bold uppercase tracking-widest text-white shadow-[0_18px_45px_rgba(118,51,0,0.34)] transition-all hover:-translate-y-1 hover:bg-[#763300]"
              >
                Know More About Us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-[58px] items-center rounded-full border border-white/25 bg-white/10 px-8 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white hover:text-zinc-800"
              >
                Book A Site Visit
              </Link>
            </div>
            <div className="grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/12 bg-white/10 p-4 backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-white/15">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-[11px] font-bold uppercase leading-snug tracking-[0.16em] text-white/58">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="hidden lg:col-span-5 lg:block"
          >
            <div className="relative ml-auto h-[560px] max-w-[520px]">
              <div className="absolute right-0 top-0 h-[78%] w-[82%] overflow-hidden rounded-lg border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
                <Image src="/images/events/SRS%20Farm%20House/DSC06905.JPG" alt="SRS Farm House landscape" fill sizes="40vw" className="object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-[68%] rounded-lg border border-white/12 bg-white p-5 shadow-[0_24px_70px_rgba(0,0,0,0.25)]">
                <div className="relative mb-4 h-40 overflow-hidden rounded-md">
                  <Image src="/images/Shivalik_Projects_Images/Backwoods 10/img3.jpg" alt="SRS Farm House gathering" fill sizes="28vw" className="object-cover" />
                </div>
                <div className="text-xs font-black uppercase tracking-[0.18em] text-[#763300]">Featured Estate</div>
                <div className="mt-2 text-2xl font-black leading-tight text-zinc-800">Shivalik Estate</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">Documented development in Ganeshpur with planned residential layouts.</p>
              </div>
              <div className="absolute right-6 bottom-24 rounded-full bg-[#763300] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_18px_42px_rgba(118,51,0,0.35)]">
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
                  src="/images/events/SRS%20Farm%20House/DSC06947.jpg"
                  alt="SRS Farm House gathering"
                  fill
                  sizes="(max-width: 1024px) 82vw, 42vw"
                  className="object-cover"
                />
              </div>

              {/* Overlapping bedroom image */}
              <div className="absolute left-0 top-0 z-10 h-[52%] w-[52%] overflow-hidden border-[12px] border-white shadow-xl">
                <Image
                  src="/images/events/SRS%20Farm%20House/DSC06755.jpg"
                  alt="SRS Farm House community space"
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
          <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">RECENT PROJECT</div>
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
              { img: "services/farmhouse-developments.webp", title: "Shivalik Estate", desc: "Delivered residential layouts in Ganeshpur, forming part of the Shivalik Estate.", type: "SHIVALIK ESTATE" },
              { img: "shakumbhari.webp", title: "Shakumbhari Estate", desc: "Residential plots and farmhouses at the Shakumbhari Estate in Behat, Saharanpur.", type: "SHAKUMBHARI ESTATE" },
              { img: "services/township-development.webp", title: "Backwoods Projects", desc: "Backwoods 1 to 10 are residential and farmhouse projects within the Shivalik Estate.", type: "SHIVALIK ESTATE" }
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
                  src={`/images/${c.img}`}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173404] via-[#173404]/40 to-transparent opacity-90" />

                <div className="absolute bottom-10 left-0 right-0 px-8 flex flex-col items-center text-center z-10">
                  <div className="bg-[#763300] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-1.5 px-4 mb-5">
                    {c.type}
                  </div>
                  <h3 className="text-[26px] font-bold text-white mb-3 leading-tight">{c.title}</h3>
                  <p className="text-gray-300 text-sm mb-8 leading-relaxed max-w-[250px]">{c.desc}</p>

                  <Link href="/projects" aria-label={`View ${c.title}`} className="w-12 h-12 rounded-full border-2 border-[#763300] flex items-center justify-center text-[#763300] group-hover:bg-[#763300] group-hover:text-white transition-all duration-300">
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
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-navy mb-8 leading-[1.1]">What they're talking about us?</h2>
              <p className="text-gray-500 mb-10 text-lg leading-relaxed">
                Hear how we've helped them find the right space with confidence and care. Our clients' satisfaction is our greatest reward.
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
                  "Very smooth experience from site visit to registration. The team is honest and professional. Doon Alliance has been the best investment for my family's future."
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
              { img: "/images/events/SRS%20Farm%20House/DSC06800.JPG", title: "Green community planning" },
              { img: "/images/events/June%202026%20Meet%20and%20Greet/DSC07280.JPG", title: "Community-first living" },
              { img: "/images/events/February%202026%20Meet%20and%20Greet/DSC03248.JPG", title: "Memorable community moments" },
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

      <InstagramReelsSection />

      {/* SECTION 7: Dark Building Background */}
      <section className="relative py-32 bg-[#2C2C2A] overflow-hidden w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/events/Annual%20Event%20Award%20Function%202025/1W0A2778.JPG"
            alt="Doon Alliance annual community event"
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
            <Button asChild className="text-[#F1EFE8] bg-[#ba7517] hover:bg-[#F1EFE8] hover:text-[#763300] text-white rounded-none h-[52px] px-10 tracking-[0.15em] font-bold text-xs uppercase">
              <Link href="/projects">
                EXPLORE NOW
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-x-8 gap-y-12"
          >
            {[
              { icon: Building2, text: "Gated Townships" },
              { icon: Bed, text: "Value Homes" },
              { icon: MapPin, text: "Residential Plots" },
              { icon: Sofa, text: "Commercial Spaces" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 group">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-[#763300] group-hover:text-[#763300] transition-colors shrink-0 bg-white/5">
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
          { num: "2,333,520", label: "Residential Projects (Sq. Ft.)", bg: "events/SRS%20Farm%20House/DSC06987.jpg", icon: Building2, highlight: false },
          { num: "1,850+", label: "Satisfied Residents", bg: "events/June%202026%20Meet%20and%20Greet/DSC07178.JPG", icon: Smile, highlight: true },
          { num: "772,785", label: "Farmhouse Developments (Sq. Ft.)", bg: "events/Annual%20Event%20Award%20Function%202025/1W0A2881.JPG", icon: Home, highlight: false },
          { num: "24x7", label: "Security In Gated Communities", bg: "events/February%202026%20Meet%20and%20Greet/DSC03250.JPG", icon: Zap, highlight: false },
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
                  <div className="absolute inset-0 bg-[#ba7517] -z-10 -skew-x-12 scale-x-125 scale-y-150" />
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
      <section className="ploy-surface py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="text-[#763300] font-bold tracking-[0.2em] text-xs uppercase mb-4">WHAT WE'RE OFFERING ——</div>
            <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-navy max-w-3xl mx-auto leading-[1.1]">We're giving all the best services to you</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Residential Plots",
                img: "services/residential-plots.webp",
                desc: "Thoughtfully planned residential plots within gated developments featuring wide roads, green spaces and essential community infrastructure.",
                isDark: false,
              },
              {
                title: "Farmhouse Developments",
                img: "services/farmhouse-developments.webp",
                desc: "Spacious farmhouse developments planned around greenery, privacy, comfort and peaceful living.",
                isDark: false,
              },
              {
                title: "Flats & Apartments",
                img: "services/flats-apartments.webp",
                desc: "Quality living spaces designed to offer comfort, security and long-term value for residents.",
                isDark: false,
              },
              {
                title: "Township Development",
                img: "services/township-development.webp",
                desc: "Gated township developments planned with roads, lighting, plantations, parks and practical community amenities.",
                isDark: true,
              }
            ].map((srv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group flex min-h-[470px] cursor-pointer flex-col overflow-hidden rounded-lg border border-zinc-900/10 bg-white shadow-[0_18px_48px_rgba(23,52,4,0.07)] transition-all duration-300 hover:border-zinc-900 hover:bg-[#1a1a1a] hover:shadow-[0_28px_70px_rgba(23,52,4,0.18)]"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image src={`/images/${srv.img}`} alt={srv.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173404]/35 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute  bottom-1 left-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#763300] text-white shadow-lg transition-transform group-hover:-translate-y-2 ">
                    <Building className="w-6 h-6 stroke-[1.5]" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-8 pt-12">
                  <h3 className="mb-4 text-[22px] font-black leading-snug text-zinc-900 transition-colors group-hover:text-white">{srv.title}</h3>
                  <p className="mb-8 text-sm leading-relaxed text-zinc-600 transition-colors group-hover:text-white/70">
                    {srv.desc}
                  </p>
                  <Link href="/services" className="mt-auto flex w-fit items-center gap-2 text-sm font-black uppercase tracking-widest text-[#ba7517] transition-colors group-hover:text-[#763300]">
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
            className="relative flex justify-center items-center h-[400px]"
          >
            <Image src="/images/world-map.png" alt="Map" fill sizes="(max-width: 768px) 100vw, 50vw" className="opacity-40 mix-blend-multiply" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className="text-[110px] md:text-[140px] font-bold text-[#763300] leading-none drop-shadow-2xl">1,850+</div>
              <div className="text-[18px] md:text-[22px] font-bold text-navy uppercase tracking-[0.2em] bg-white/90 backdrop-blur-sm px-8 py-3 shadow-xl -mt-6">Satisfied Residents</div>
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
                alt="Doon Alliance property advisor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
