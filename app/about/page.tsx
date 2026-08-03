"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Home, Landmark, MapPin, Trees } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { num: "2,333,520", label: "Square feet residential projects" },
  { num: "772,785", label: "Square feet farmhouse developments" },
  { num: "1,850+", label: "Satisfied residents" },
];

const highlights = [
  "24x7 Security",
  "Government Approved Society",
  "Fully Gated Township",
  "Street Lights on Every Road",
  "Roadside Plantation",
  "Approved Residential Plots",
  "Beautiful Parks & Gardens",
  "25 ft, 30 ft & 35 ft Wide Roads",
  "Kids' Play Area",
  "Complete Project Electrification",
  "Primary School within the Township",
  "Health Center for Residents",
];

const services = [
  { icon: Trees, title: "Gated Townships" },
  { icon: Landmark, title: "Farmhouses" },
  { icon: Home, title: "Villas, Flats & Builder Floors" },
  { icon: MapPin, title: "Plots & Commercial Spaces" },
];

export default function About() {
  return (
    <div className="w-full overflow-x-hidden bg-white font-sans">
      <section className="inner-hero relative flex min-h-[420px] items-center justify-center pt-24 text-center">
        <Image
          src="/images/hero-bg.png"
          alt="Doon Alliance homes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="inner-hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <p className="inner-hero-kicker mb-4 text-xs font-bold uppercase tracking-[0.24em]">
            Know More About Us
          </p>
          <h1 className="inner-hero-title text-4xl font-bold tracking-tight md:text-6xl">Doon Alliance</h1>
          <div className="inner-hero-breadcrumb mt-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <Link href="/">
              Home
            </Link>
            <span>/</span>
            <span className="current">About Us</span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[360px] overflow-hidden rounded-[10px] shadow-xl md:min-h-[500px]"
          >
            <Image
              src="/images/about/doon-construction-team.png"
              alt="Doon Alliance construction planning team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="about-resident-badge absolute bottom-5 left-5 p-5 shadow-xl">
              <div className="number text-4xl font-bold">1850+</div>
              <div className="label mt-1 text-xs font-bold uppercase tracking-wider">
                Satisfied Residents
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="theme-kicker mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="h-px w-8" /> Who Are We?
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-zinc-800 md:text-5xl">
              Creating exceptional living experiences with comfort, security, and luxury.
            </h2>
            <p className="mb-5 text-base leading-relaxed text-zinc-600">
              At <strong className="text-zinc-800">Doon Alliance</strong>, we are dedicated to creating exceptional living experiences that blend comfort, security, and luxury. Operating across Delhi, Saharanpur, and beyond, we specialize in premium real estate solutions, including farmhouses, villas, residential plots, value homes, and independent living spaces.
            </p>
            <p className="mb-8 text-base leading-relaxed text-zinc-600">
              Our approach is rooted in transparency, efficiency, and sustainability, ensuring our clients receive tailored solutions that meet their aspirations. With over <strong className="text-zinc-800">2,333,520 square feet</strong> residential projects and <strong className="text-zinc-800">772,785 square feet</strong> farmhouse developments completed, we have built a strong reputation for delivering quality and value. Our mission is to go beyond construction. We craft vibrant communities that people are proud to call home.
            </p>
            <Link
              href="/contact"
              className="theme-primary-cta inline-flex h-[52px] items-center gap-2 px-8 text-xs font-bold uppercase tracking-widest"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="about-stats py-14">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-3 md:px-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="number mb-2 text-4xl font-bold">{stat.num}</div>
              <div className="label text-xs font-bold uppercase tracking-[0.18em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="theme-kicker mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
              <span className="h-px w-8" /> Our Vision
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-zinc-800 md:text-5xl">
              Redefining modern living with sustainable, high-quality real estate.
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              At Doon Alliance, our vision is simple yet profound: to redefine modern living with
              sustainable, high-quality real estate solutions. We strive to create secure and harmonious
              spaces that cater to diverse lifestyle needs, offering affordable luxury without compromise.
              Our commitment to innovation and excellence drives us to develop properties that not only
              provide value but also foster lasting happiness for generations to come. Whether you are
              looking for a peaceful retreat, an investment opportunity, or a dream home, Doon Alliance
              is here to make your vision a reality.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[360px] overflow-hidden rounded-[10px] shadow-xl md:min-h-[500px]"
          >
            <Image
              src="/images/about/doon-vision-target.png"
              alt="Doon Alliance vision and planning"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="theme-kicker mb-3 text-xs font-bold uppercase tracking-[0.2em]">
              Project Highlights
            </p>
            <h2 className="text-3xl font-bold text-zinc-800 md:text-[44px]">Amenities Built For Community Living</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.05 }}
                className="theme-card flex min-h-[76px] items-center gap-4 px-5 py-4"
              >
                <span className="theme-icon-tile flex h-10 w-10 shrink-0 items-center justify-center">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
                <span className="text-sm font-semibold leading-snug text-zinc-800">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-dark-section py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="theme-dark-kicker mb-3 text-xs font-bold uppercase tracking-[0.2em]">
              Build And Construct
            </p>
            <h2 className="text-3xl font-bold md:text-[44px]">Spaces Doon Alliance Develops</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="theme-dark-card p-7">
                <div className="theme-icon-tile mb-5 flex h-14 w-14 items-center justify-center"><service.icon className="h-7 w-7" /></div>
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-brass-section py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Looking for a home, retreat, or investment?</h3>
            <p className="mt-2 text-sm text-white/85">Doon Alliance is here to make your vision a reality.</p>
          </div>
          <Link
            href="/contact"
            className="theme-dark-cta inline-flex h-[52px] items-center gap-2 px-8 text-xs font-bold uppercase tracking-widest"
          >
            Get In Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
