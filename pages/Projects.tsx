import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    { title: "Dharatal Meadows", loc: "Uttarakhand", price: "₹45L - ₹1.2Cr", type: "Farmhouse", img: "dharatal-meadows.png" },
    { title: "Green Valley Villas", loc: "Himachal Pradesh", price: "₹85L - ₹2.5Cr", type: "Villa", img: "green-valley-villas.png" },
    { title: "Shivalik Plots", loc: "Dehradun", price: "₹15L - ₹40L", type: "Plots", img: "shivalik-plots.png" },
    { title: "Aravalli Greens", loc: "Rajasthan", price: "₹35L - ₹95L", type: "Farmhouse", img: "aravalli-greens.png" },
    { title: "Nilgiri Estates", loc: "Ooty", price: "₹1.2Cr - ₹3Cr", type: "Villa", img: "nilgiri-estates.png" },
    { title: "Valley View Retreat", loc: "Mussoorie", price: "₹65L - ₹1.8Cr", type: "Villa", img: "valley-view-retreat.png" }
  ];

  return (
    <div className="w-full font-sans pb-20 bg-zinc-50">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/projects/valley-view-retreat.png" alt="Projects" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">OUR PROJECTS</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase text-zinc-300">
            <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-accent">PROJECTS</span>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {['All', 'Farmhouse', 'Villa', 'Plots'].map((tab, i) => (
              <button key={tab} className={`px-6 py-2 text-sm font-semibold transition-colors ${i === 0 ? 'bg-accent text-white' : 'bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-100'}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image src={`/images/projects/${prop.img}`} alt={prop.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-accent text-white px-4 py-1 text-sm font-bold uppercase tracking-wider">{prop.type}</div>
                </div>
                <div className="bg-white p-6 border border-t-0 border-zinc-100 shadow-sm relative z-10 -mt-6 mx-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-navy">{prop.title}</h3>
                    <span className="text-accent font-bold text-lg">{prop.price}</span>
                  </div>
                  <p className="text-zinc-500 flex items-center gap-1.5 text-sm mb-4">
                    <MapPin className="w-4 h-4 text-accent" /> {prop.loc}
                  </p>
                  <Button variant="outline" className="w-full border-zinc-200 text-navy hover:bg-accent hover:text-white hover:border-accent rounded-none">
                    VIEW DETAILS
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
