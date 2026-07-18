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
      <section className="relative flex min-h-[420px] items-center justify-center pt-24 text-center text-white">
        <Image
          src="/images/hero-bg.png"
          alt="Doon Alliance homes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1e2a35]/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#4BBFB8]">
            Know More About Us
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Doon Alliance</h1>
          <div className="mt-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-300">
            <Link href="/" className="transition-colors hover:text-[#4BBFB8]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#4BBFB8]">About Us</span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[360px] overflow-hidden shadow-xl md:min-h-[500px]"
          >
            <Image
              src="/images/about/doon-construction-team.png"
              alt="Doon Alliance construction planning team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 bg-[#1e2a35] p-5 text-white shadow-xl">
              <div className="text-4xl font-bold text-[#4BBFB8]">1850+</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-300">
                Satisfied Residents
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4BBFB8]">
              <span className="h-[2px] w-8 bg-[#4BBFB8]" /> Who Are We?
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1e2a35] md:text-5xl">
              Creating exceptional living experiences with comfort, security, and luxury.
            </h2>
            <p className="mb-5 text-base leading-relaxed text-zinc-600">
              At <strong className="text-[#1e2a35]">Doon Alliance</strong>, we are dedicated to creating exceptional living experiences that blend comfort, security, and luxury. Operating across Delhi, Saharanpur, and beyond, we specialize in premium real estate solutions, including farmhouses, villas, residential plots, value homes, and independent living spaces.
            </p>
            <p className="mb-8 text-base leading-relaxed text-zinc-600">
              Our approach is rooted in transparency, efficiency, and sustainability, ensuring our clients receive tailored solutions that meet their aspirations. With over <strong className="text-[#1e2a35]">2,333,520 square feet</strong> residential projects and <strong className="text-[#1e2a35]">772,785 square feet</strong> farmhouse developments completed, we have built a strong reputation for delivering quality and value. Our mission is to go beyond construction. We craft vibrant communities that people are proud to call home.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-[52px] items-center gap-2 bg-[#4BBFB8] px-8 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#3aada6]"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#1e2a35] py-14 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-3 md:px-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="mb-2 text-4xl font-bold text-[#4BBFB8]">{stat.num}</div>
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-300">{stat.label}</div>
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
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4BBFB8]">
              <span className="h-[2px] w-8 bg-[#4BBFB8]" /> Our Vision
            </p>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1e2a35] md:text-5xl">
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
            className="relative min-h-[360px] overflow-hidden shadow-xl md:min-h-[500px]"
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
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4BBFB8]">
              Project Highlights
            </p>
            <h2 className="text-3xl font-bold text-[#1e2a35] md:text-[44px]">Amenities Built For Community Living</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 4) * 0.05 }}
                className="flex min-h-[76px] items-center gap-4 border border-gray-100 bg-gray-50 px-5 py-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#4BBFB8]/10 text-[#4BBFB8]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
                <span className="text-sm font-semibold leading-snug text-[#1e2a35]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1e2a35] py-20 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4BBFB8]">
              Build And Construct
            </p>
            <h2 className="text-3xl font-bold md:text-[44px]">Spaces Doon Alliance Develops</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="border border-white/10 bg-white/5 p-7">
                <service.icon className="mb-5 h-9 w-9 text-[#4BBFB8]" />
                <h3 className="text-lg font-bold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4BBFB8] py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 text-center md:flex-row md:px-6 md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">Looking for a home, retreat, or investment?</h3>
            <p className="mt-2 text-sm text-white/85">Doon Alliance is here to make your vision a reality.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-[52px] items-center gap-2 bg-[#1e2a35] px-8 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#15202b]"
          >
            Get In Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
