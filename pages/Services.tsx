import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Building2, Landmark, Map, Gavel, Paintbrush, Shield } from "lucide-react";

export default function Services() {
  const services = [
    { icon: Building2, title: "Property Development", desc: "Creating world-class farmhouses and villas." },
    { icon: Landmark, title: "Investment Advisory", desc: "Strategic guidance on real estate investments." },
    { icon: Map, title: "Site Visits & Tours", desc: "Curated experiences to explore properties." },
    { icon: Gavel, title: "Legal Assistance", desc: "End-to-end legal support ensuring clear titles." },
    { icon: Paintbrush, title: "Interior Design", desc: "Bespoke interior design services." },
    { icon: Shield, title: "Property Management", desc: "Comprehensive maintenance services." }
  ];

  return (
    <div className="w-full font-sans pb-20 bg-zinc-50">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/projects/nilgiri-estates.png" alt="Services" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">OUR SERVICES</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase text-zinc-300">
            <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-accent">SERVICES</span>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 border border-zinc-100 hover:border-accent transition-colors group text-center"
              >
                <div className="w-20 h-20 mx-auto bg-zinc-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <srv.icon className="w-10 h-10 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{srv.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
