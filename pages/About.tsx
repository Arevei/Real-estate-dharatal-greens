import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function About() {
  return (
    <div className="w-full font-sans pb-20 bg-white">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/hero-bg.png" alt="About Us" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">ABOUT US</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase text-zinc-300">
            <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-accent">ABOUT US</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[400px] w-full"
            >
              <Image src="/images/about/team-vision.png" alt="Vision" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover rounded-none shadow-xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent"></span> OUR STORY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Crafting communities where nature leads.</h2>
              <p className="text-zinc-600 mb-6 text-lg leading-relaxed">
                Dharatal Greens was born from a simple belief: the ultimate luxury is space, silence, and nature. We build escapes for those who seek to disconnect from the chaos and reconnect with the earth.
              </p>
              <p className="text-zinc-600 mb-8 text-lg leading-relaxed">
                To be India's premier developer of nature-integrated luxury real estate, creating sustainable ecosystems that enhance the quality of life while preserving the environment for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
