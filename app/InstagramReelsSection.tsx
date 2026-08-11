"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, Video } from "lucide-react";

type Reel = {
  id: string;
  url: string;
};

const PAGE_SIZE = 3;
const PROFILE_URL = "https://www.instagram.com/doonalliance/";
const REELS: Reel[] = [
  {
    id: "DbaTmdCPJvy",
    url: "https://www.instagram.com/reel/DbaTmdCPJvy/",
  },
  {
    id: "DaLUYRGPj0j",
    url: "https://www.instagram.com/reel/DaLUYRGPj0j/",
  },
  {
    id: "DZkM-89vqTQ",
    url: "https://www.instagram.com/reel/DZkM-89vqTQ/",
  },
  {
    id: "DZg8AY1P3Zk",
    url: "https://www.instagram.com/reel/DZg8AY1P3Zk/",
  },
  {
    id: "DbVdw0jyGHe",
    url: "https://www.instagram.com/reel/DbVdw0jyGHe/",
  },
  {
    id: "DbDj6zqyQjh",
    url: "https://www.instagram.com/reel/DbDj6zqyQjh/",
  },
];

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process?: () => void;
      };
    };
  }
}

export function InstagramReelsSection() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="//www.instagram.com/embed.js"], script[src="https://www.instagram.com/embed.js"]',
    );

    if (existingScript) {
      window.instgrm?.Embeds?.process?.();
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    script.onload = () => {
      window.instgrm?.Embeds?.process?.();
    };
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    window.instgrm?.Embeds?.process?.();
  }, [page]);

  const totalPages = Math.max(1, Math.ceil(REELS.length / PAGE_SIZE));
  const visibleReels = useMemo(
    () => REELS.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [page],
  );

  const goToPrevious = () => setPage((current) => Math.max(0, current - 1));
  const goToNext = () =>
    setPage((current) => Math.min(totalPages - 1, current + 1));

  return (
    <section className="bg-[#101512] py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#ba7517]">
              <Video className="h-4 w-4" />
              Instagram Reels
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-5xl lg:text-[52px]">
              Latest site videos from Doon Alliance
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
              Watch recent project walkthroughs, updates and on-site moments directly from our Instagram reels.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={goToPrevious}
              disabled={page === 0}
              aria-label="Previous reels"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#ba7517] hover:text-[#ba7517] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="min-w-24 text-center text-xs font-bold uppercase tracking-[0.18em] text-white/55">
              {page + 1} / {totalPages}
            </div>
            <button
              type="button"
              onClick={goToNext}
              disabled={page >= totalPages - 1}
              aria-label="Next reels"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-[#ba7517] hover:text-[#ba7517] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <Link
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#763300] px-6 text-xs font-black uppercase tracking-widest text-white transition hover:-translate-y-0.5 hover:bg-[#ba7517]"
            >
              View Profile <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {visibleReels.map((reel, index) => (
            <article
              key={reel.id}
              className="flex h-[720px] flex-col overflow-hidden rounded-lg border border-white/10 bg-white shadow-[0_22px_70px_rgba(0,0,0,0.25)]"
            >
              <div className="flex h-[76px] shrink-0 items-center justify-between bg-[#f8fbfa] px-5 py-4">
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#763300]">
                    Reel {page * PAGE_SIZE + index + 1}
                  </div>
                  <div className="mt-1 text-sm font-bold text-zinc-800">
                    Instagram 
                  </div>
                </div>
                <Link
                  href={reel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open reel on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#763300] text-white transition hover:bg-[#ba7517]"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex min-h-0 flex-1 justify-center overflow-y-auto bg-white p-1">
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink={`${reel.url}?utm_source=ig_embed&utm_campaign=loading`}
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "3px",
                    boxShadow:
                      "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: 0,
                    width: "calc(100% - 2px)",
                  }}
                >
                  <div style={{ padding: "16px" }}>
                    <a
                      href={reel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: "#FFFFFF",
                        lineHeight: 0,
                        padding: 0,
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                      }}
                    >
                      View this post on Instagram
                    </a>
                  </div>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
