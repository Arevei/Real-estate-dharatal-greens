"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
const faqs = [
    {
        q: "What is Dharatal Greens?",
        a: "Dharatal Greens Pvt Ltd is a trusted real estate company committed to delivering premium residential and commercial properties. We specialize in land development, plotted townships, and real estate investment solutions, ensuring high-quality infrastructure and sustainable growth. With a focus on customer satisfaction, transparency, and innovation, Dharatal Greens helps you find the perfect property that aligns with your vision and investment goals. Visit the official website to explore projects, amenities, and ownership opportunities: dharatalgreens.com",
    },
    {
        q: "What types of properties Dharatal Greens offer?",
        a: "Dharatal Greens offers farmhouses, villas, independent homes, residential plots, and investment opportunities tailored to modern living.",
    },
    {
        q: "How many projects Dharatal Greens have been completed?",
        a: "Dharatal Greens has successfully delivered over 2,333,520 square feet of residential projects and 772,785 square feet of farmhouse developments, ensuring quality and transparency in all our offerings.",
    },
    {
        q: "Why should I invest in Dharatal Greens?",
        a: "Dharatal Greens is a promising investment destination due to its prime location along the Delhi–Dehradun Economic Corridor, surrounded by nature and bordering Rajaji National Park. With over 800 plots delivered, strong infrastructure (RCC roads, gated entry, street lighting), and lifestyle amenities (gym, yoga centre, commercial zone), it offers both livability and future value.",
    },
    {
        q: "Is financing available for property purchases?",
        a: "Yes, Dharatal Greens offers easy and flexible financing options to make property ownership more accessible. You can choose from convenient EMI plans of 3, 6, or 9 months. Additionally, there's an option to pay a lump sum amount if that suits your preferences. This allows buyers to invest in premium farmhouses, villas, or residential plots without financial strain.",
    },
    {
        q: "What makes Dharatal Greens different from other real estate developers?",
        a: "Our commitment to eco-friendly development, transparency, and community-building sets us apart. We focus on affordability without compromising quality.",
    },
    {
        q: "Can I visit a Dharatal Greens project before purchasing?",
        a: "Absolutely! We encourage potential buyers to visit our properties to experience the quality and environment firsthand.",
    },
    {
        q: "Do Dharatal Greens offer customization options for homes?",
        a: "Yes, Dharatal Greens provides customization opportunities for certain property types, allowing buyers to personalize their living spaces.",
    },
    {
        q: "How can I contact Dharatal Greens for inquiries?",
        a: "You can reach out through our website or visit the Contact page for detailed contact information. You can also call us directly at +91-XXXXXXXXXX or email info@dharatalgreens.com.",
    },
    {
        q: "Are Dharatal Greens properties environmentally friendly?",
        a: "Yes, Dharatal Greens promotes environmentally friendly living through its lush landscaping, proximity to the 850 km² Rajaji National Park, and a focus on pollution-free surroundings. The project features green zones, roadside plantations, and sustainable infrastructure like wide RCC roads and proper sewage systems. Overall, it offers a cleaner, greener environment tailored to an eco-conscious lifestyle.",
    },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border-b border-gray-100 last:border-none"
        >
            <button
                className="w-full flex items-center justify-between py-5 text-left gap-6 group"
                onClick={() => setOpen(!open)}
            >
                <span
                    className={`text-base font-bold leading-snug transition-colors ${open
                        ? "text-[#4BBFB8]"
                        : "text-[#1e2a35] group-hover:text-[#4BBFB8]"
                        }`}
                >
                    {q}
                </span>
                <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open
                        ? "bg-[#4BBFB8] text-white"
                        : "bg-gray-100 text-gray-400 group-hover:bg-[#4BBFB8]/10 group-hover:text-[#4BBFB8]"
                        }`}
                >
                    {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-500 text-[15px] leading-relaxed pb-6 pr-14">
                            {a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    return (
        <div className="w-full font-sans bg-white">
            {/* Hero Banner */}
            <section className="relative h-[42vh] min-h-[280px] flex items-center justify-center pt-[72px]">
                <div className="absolute inset-0">
                    <img
                        src={`/images/hero-bg.png`}
                        className="w-full h-full object-cover"
                        alt="FAQ"
                    />
                    <div className="absolute inset-0 bg-black/65" />
                </div>
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-3">FAQ</h1>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                        <Link href="/" className="hover:text-[#4BBFB8] transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-white">FAQ</span>
                    </div>
                </div>
            </section>

            {/* FAQ List */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-14">
                        <div className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-3">
                            GOT QUESTIONS? ——
                        </div>
                        <h2 className="text-4xl md:text-[44px] font-bold text-[#1e2a35]">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="bg-white border border-gray-100 shadow-sm px-6 md:px-10 py-4">
                        {faqs.map((item, i) => (
                            <FaqItem key={i} q={item.q} a={item.a} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Strip */}
            <section className="bg-[#1e2a35] py-14">
                <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Still have questions?
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Our team is ready to help you find the perfect property.
                        </p>
                    </div>
                    <div className="flex gap-4 flex-wrap justify-center">
                        <a
                            href="tel:+91-XXXXXXXXXX"
                            className="bg-[#4BBFB8] hover:bg-[#3aada6] text-white font-bold uppercase tracking-wider text-xs px-8 h-[52px] flex items-center transition-colors"
                        >
                            Call +91-XXXXXXXXXX
                        </a>
                        <Link
                            href="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-[#1e2a35] font-bold uppercase tracking-wider text-xs px-8 h-[52px] flex items-center transition-all"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
