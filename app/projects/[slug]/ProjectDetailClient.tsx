"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Fence,
  Lamp,
  Leaf,
  MapPin,
  Navigation,
  Ruler,
  ShieldCheck,
  Trees,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Project, projectOrigin } from "@/lib/projects";

const amenityIcons = {
  "Entrance Gate": Fence,
  Electrification: Zap,
  Park: Trees,
  "Street Light": Lamp,
  "Road Side Plantation": Leaf,
  "Cemented Road": Navigation,
  "24*7 SECURITY": ShieldCheck,
  "Open Gym": Dumbbell,
  "Meditation Area": Leaf,
};

const landmarkQueries: Record<string, string> = {
  "Rajaji National Park": "Mohand Forest Range, Chillawali Rajaji National Park, Chillawali Range Shakumbhari Rd, Mohand Range, Uttarakhand 247662",
  "Doon Group Of Colleges": "Doon Group of Colleges, Saharanpur, Uttar Pradesh, India",
  Dehradun: "Dehradun, Uttarakhand, India",
  Haridwar: "Haridwar, Uttarakhand, India",
  Roorkee: "Roorkee, Uttarakhand, India",
  Rishikesh: "Rishikesh, Uttarakhand, India",
  Mussoorie: "Mussoorie, Uttarakhand, India",
  Delhi: "Delhi, India",
};

function directionsMapUrl(destination: string) {
  const origin = encodeURIComponent(`${projectOrigin}, India`);
  const selectedDestination = encodeURIComponent(landmarkQueries[destination] ?? `${destination}, India`);
  return `https://www.google.com/maps?output=embed&saddr=${origin}&daddr=${selectedDestination}`;
}

export function ProjectDetailClient({ project }: { project: Project }) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedLandmark, setSelectedLandmark] = useState(project.landmarks[0]);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const currentImage = project.images[activeImage];
  const mapUrl = useMemo(() => directionsMapUrl(selectedLandmark), [selectedLandmark]);
  const shortDescription =
    project.description.length > 230 ? `${project.description.slice(0, 230).trim()}...` : project.description;

  const showPrevious = () => {
    setActiveImage((current) => (current === 0 ? project.images.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveImage((current) => (current === project.images.length - 1 ? 0 : current + 1));
  };

  return (
    <div className="w-full bg-white font-sans text-zinc-900">
      <section className="relative overflow-hidden bg-[#102805] pt-32 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,19,31,0.98)_0%,rgba(23,52,4,0.94)_54%,rgba(118,51,0,0.56)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
        <div className="container relative z-10 mx-auto px-4 pb-14 md:px-6">
          <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                {project.projectName} / {project.category}
              </div>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">{project.title}</h1>
            </div>
            <div className="max-w-xl rounded-lg border border-white/12 bg-white/8 p-5 text-sm font-semibold leading-relaxed text-white/72 backdrop-blur-md">
              Premium plotted development in Ganeshpur near Rajaji National Park with clear project details, gallery, amenities, and route mapping.
            </div>
          </div>
        </div>
      </section>

      <section className="ploy-surface py-16">
        <div className="container mx-auto grid gap-10 px-4 md:px-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-lg border border-zinc-900/10 bg-zinc-100 shadow-[0_28px_90px_rgba(23,52,4,0.14)]">
              <div className="relative aspect-[4/3] min-h-[340px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage.src}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.28 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentImage.src}
                      alt={currentImage.alt}
                      fill
                      priority={activeImage === 0}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/68 to-transparent p-5">
                  <div className="inline-flex rounded-full bg-white/90 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#763300]">
                    {currentImage.isMasterPlan ? "Master Plan" : "Gallery"}
                  </div>
                </div>
                <button
                  onClick={showPrevious}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg transition-all hover:bg-[#763300] hover:text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={showNext}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-zinc-900 shadow-lg transition-all hover:bg-[#763300] hover:text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3 md:grid-cols-6">
              {project.images.map((item, index) => (
                <button
                  key={item.src}
                  onClick={() => setActiveImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-md border transition-all duration-300 ${
                    activeImage === index
                      ? "border-[#763300] shadow-[0_10px_30px_rgba(118,51,0,0.18)] ring-2 ring-[#763300]/20"
                      : "border-zinc-200 opacity-75 hover:-translate-y-1 hover:opacity-100"
                  }`}
                  aria-label={`Show image ${index + 1}`}
                >
                  <Image src={item.src} alt={item.alt} fill sizes="120px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-lg border border-zinc-900/10 bg-white p-6 shadow-[0_22px_70px_rgba(23,52,4,0.1)] md:p-8">
              <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#763300]">Project Details</div>
              <h2 className="mt-3 text-3xl font-black text-[#173404]">{project.category}</h2>
              <p className="mt-5 text-sm leading-relaxed text-zinc-600">
                {showFullDescription ? project.description : shortDescription}
              </p>
              {project.description.length > 230 && (
                <button
                  onClick={() => setShowFullDescription((value) => !value)}
                  className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-[#763300] hover:text-[#173404]"
                >
                  {showFullDescription ? "Show less" : "Read more"}
                </button>
              )}

              <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { label: "Plot Area", value: project.plotArea, icon: Ruler },
                  { label: "Location", value: "Ganeshpur, Saharanpur", icon: MapPin },
                  { label: "Amenities", value: `${project.amenities.length} essentials`, icon: ShieldCheck },
                ].map((item) => (
                  <div key={item.label} className="group flex items-center gap-4 rounded-lg border border-zinc-100 bg-zinc-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#763300]/30 hover:bg-white hover:shadow-lg">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#763300]/10 text-[#763300] transition-colors group-hover:bg-[#763300] group-hover:text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">{item.label}</div>
                      <div className="mt-1 text-sm font-black text-zinc-900">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <Link
                  href="/contact"
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#763300] px-5 text-xs font-black uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Inquire <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+919266040973"
                  className="flex h-12 items-center justify-center rounded-full border border-zinc-200 px-5 text-xs font-black uppercase tracking-wider text-[#173404] transition-all hover:-translate-y-0.5 hover:border-[#763300] hover:text-[#763300]"
                >
                  Call Now
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#763300]">Modern Living</div>
              <h2 className="mt-4 text-3xl font-black leading-tight text-[#173404] md:text-5xl">Trusted essentials for everyday comfort</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-500 md:text-base">
              Planned infrastructure, security, and open spaces support a complete living environment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.amenities.map((amenity, index) => {
              const Icon = amenityIcons[amenity as keyof typeof amenityIcons] ?? Check;
              return (
                <motion.div
                  key={amenity}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group flex min-h-28 items-center gap-4 rounded-lg border border-zinc-100 bg-white p-5 shadow-[0_10px_30px_rgba(23,52,4,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#763300]/30 hover:bg-[#173404] hover:shadow-[0_24px_60px_rgba(23,52,4,0.16)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#763300]/10 text-[#763300] transition-colors group-hover:bg-white/10 group-hover:text-[#ba7517]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-black text-zinc-900 transition-colors group-hover:text-white">{amenity}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ploy-surface py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-[#763300]">Strategic Location</div>
            <h2 className="mt-4 text-3xl font-black leading-tight text-[#173404] md:text-5xl">Click a nearby landmark to view the route</h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-500">
              The map updates from the project location in Ganeshpur near Rajaji National Park to whichever strategic location you select.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {project.landmarks.map((landmark) => (
                  <button
                    key={landmark}
                    onClick={() => setSelectedLandmark(landmark)}
                    className={`flex items-center justify-between rounded-lg border p-4 text-left transition-all duration-300 ${
                      selectedLandmark === landmark
                        ? "border-[#763300] bg-[#763300] text-white shadow-lg shadow-[#763300]/20"
                        : "border-zinc-200 bg-white text-zinc-700 hover:-translate-y-1 hover:border-[#763300]/40 hover:text-[#763300] hover:shadow-lg"
                    }`}
                  >
                    <span className="text-sm font-black">{landmark}</span>
                    <Navigation className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-lg border border-zinc-900/10 bg-white shadow-[0_24px_70px_rgba(23,52,4,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 p-5">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">Route</div>
                    <div className="mt-1 text-sm font-black text-[#173404]">Project location to {selectedLandmark}</div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(`${projectOrigin}, India`)}&destination=${encodeURIComponent(landmarkQueries[selectedLandmark] ?? `${selectedLandmark}, India`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-zinc-100 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#763300] transition-colors hover:bg-[#763300] hover:text-white"
                  >
                    Open map
                  </a>
                </div>
                <iframe
                  key={mapUrl}
                  src={mapUrl}
                  title={`Route from ${projectOrigin} to ${selectedLandmark}`}
                  className="h-[460px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
