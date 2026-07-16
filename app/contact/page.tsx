"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { ContactForm } from "../ContactForm";

export default function Contact() {
  return (
    <div className="w-full font-sans pb-20 bg-white">
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/projects/shivalik-plots.png" alt="Contact" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">CONTACT US</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold tracking-wider uppercase text-zinc-300">
            <Link href="/" className="hover:text-accent transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-accent">CONTACT</span>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white shadow-xl p-10 md:p-14">
            <div className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-3 flex items-center gap-2">
              WRITE A MESSAGE <span className="w-8 h-[2px] bg-[#4BBFB8]" />
            </div>
            <h2 className="text-4xl md:text-[44px] font-bold text-[#1e2a35] mb-10 leading-tight">
              Feel free to write
            </h2>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Map — Full Width */}
      <section className="w-full">
        <iframe
          title="Doon Alliance Location"
          width="100%"
          height="420"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=520&height=400&hl=en&q=GS%20Tower%20Canal%20Road%20Jakhan%20Dehradun%20248001&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          style={{ display: "block", border: 0 }}
          allowFullScreen
        />
      </section>

     
       {/* Get In Touch Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Overlapping Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[420px]"
            >
              {/* Main image */}
              <img
                src={`/images/about/team-vision.png`}
                alt="Team"
                className="absolute right-0 bottom-0 w-[80%] h-[90%] object-cover shadow-xl"
              />
              {/* Overlapping second image */}
              <img
                src={`/images/about/nature-focus.png`}
                alt="Office"
                className="absolute left-0 top-0 w-[55%] h-[55%] object-cover border-[10px] border-white shadow-lg z-10"
              />

              {/* Teal square overlay */}
              <div className="absolute bottom-[14%] right-[2%] w-[22%] h-[28%] border-[3px] border-[#4BBFB8] z-20" />

              {/* 5 Years card */}
              <div className="absolute bottom-4 left-2 bg-[#1e2a35] text-white px-6 py-5 z-30 shadow-xl">
                <div className="text-5xl font-bold leading-none">5</div>
                <div className="text-xs font-bold uppercase tracking-wider mt-1 leading-snug text-gray-300">
                  Years of<br />experience
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-[#4BBFB8] font-bold tracking-[0.2em] text-xs uppercase mb-3 flex items-center gap-2">
                CONTACT WITH US <span className="w-8 h-[2px] bg-[#4BBFB8]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e2a35] mb-4 leading-tight">
                Get in touch now
              </h2>
              <p className="text-gray-500 mb-10 text-base">
                we're here to help you find the perfect property!
              </p>

              <div className="space-y-7">
                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border border-gray-200 rounded-sm flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-[#4BBFB8]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Write email</div>
                    <a
                      href="mailto:info@doonalliance.com"
                      className="text-base font-bold text-[#1e2a35] hover:text-[#4BBFB8] transition-colors"
                    >
                      info@doonalliance.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border border-gray-200 rounded-sm flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#4BBFB8]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Call expert</div>
                    <a
                      href="tel:+919266040973"
                      className="text-base font-bold text-[#1e2a35] hover:text-[#4BBFB8] transition-colors"
                    >
                      +91 135 414 8552, +91 92660 40973
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border border-gray-200 rounded-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#4BBFB8]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Visit office</div>
                    <p className="text-base font-bold text-[#1e2a35] leading-relaxed">
                      2nd Floor, GS Tower, Canal Road, Opposite to Superia Apartments, Jakhan, Dehradun 248001
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

