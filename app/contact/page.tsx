"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "../ContactForm";

const phoneNumbers = [
  { label: "+91 135 414 8552", href: "tel:+911354148552" },
  { label: "+91 92660 40973", href: "tel:+919266040973" },
];

export default function Contact() {
  return (
    <div className="w-full bg-white pb-20 font-sans">
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center pt-20">
        <div className="absolute inset-0">
          <Image src="/images/projects/shivalik-plots.png" alt="Contact Doon Alliance" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">CONTACT US</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider text-zinc-300">
            <Link href="/" className="transition-colors hover:text-accent">HOME</Link>
            <span>/</span>
            <span className="text-accent">CONTACT</span>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden bg-[#1e2a35] shadow-xl"
            >
              <div className="relative aspect-[4/3] min-h-[360px]">
                <Image
                  src="/images/about/doon-construction-team.png"
                  alt="Doon Alliance project planning team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a35]/85 via-[#1e2a35]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
                  <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4BBFB8]">Doon Alliance</div>
                  <h2 className="max-w-md text-2xl font-bold leading-tight md:text-3xl">
                    Site visits, project guidance, and property support from one team.
                  </h2>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4BBFB8]">
                CONTACT WITH US <span className="h-[2px] w-8 bg-[#4BBFB8]" />
              </div>
              <h2 className="mb-4 text-4xl font-bold leading-tight text-[#1e2a35] md:text-5xl">
                Get in touch now
              </h2>
              <p className="mb-10 text-base text-gray-500">
                We're here to help you find the perfect property.
              </p>

              <div className="space-y-7">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-gray-200">
                    <Mail className="h-6 w-6 text-[#4BBFB8]" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">Write email</div>
                    <a href="mailto:info@doonalliance.com" className="text-base font-bold text-[#1e2a35] transition-colors hover:text-[#4BBFB8]">
                      info@doonalliance.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-gray-200">
                    <Phone className="h-6 w-6 text-[#4BBFB8]" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">Call expert</div>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {phoneNumbers.map((phone) => (
                        <a key={phone.href} href={phone.href} className="text-base font-bold text-[#1e2a35] transition-colors hover:text-[#4BBFB8]">
                          {phone.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-gray-200">
                    <MapPin className="h-6 w-6 text-[#4BBFB8]" />
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">Visit office</div>
                    <p className="text-base font-bold leading-relaxed text-[#1e2a35]">
                      2nd Floor, GS Tower, Canal Road, Opposite to Superia Apartments, Jakhan, Dehradun 248001
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl bg-white p-10 shadow-xl md:p-14">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#4BBFB8]">
              WRITE A MESSAGE <span className="h-[2px] w-8 bg-[#4BBFB8]" />
            </div>
            <h2 className="mb-10 text-4xl font-bold leading-tight text-[#1e2a35] md:text-[44px]">
              Feel free to write
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

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
    </div>
  );
}
