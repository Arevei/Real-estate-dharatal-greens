"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "PROJECTS", path: "/projects" },
    { label: "SERVICES", path: "/services" },
    { label: "FAQ", path: "/faq" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="site-header-inner">
        <Link href="/" aria-label="Doon Alliance home" className="relative z-50 flex shrink-0 items-center gap-3">
          <Image 
            src="/images/logo.png" 
            alt="Doon Alliance" 
            width={56}
            height={56}
            className="h-12 w-auto object-contain md:h-14"
          />
          <span className="hidden border-l border-[#DED8CE] pl-3 text-[11px] font-semibold uppercase leading-tight tracking-[0.16em] text-[#6F706A] sm:block">Property with<br />purpose</span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`nav-item ${
                pathname === link.path ? "is-active" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden shrink-0 lg:flex">
          <Link href="/contact" className="button-primary h-12 px-5">Book a site visit <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#DED8CE] text-[#173B20] lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        </div>
      </header>

      {/* Kept outside the filtered header so the surface remains fully opaque. */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="fixed inset-0 z-40 flex flex-col px-6 pb-10 pt-28 lg:hidden">
          <nav className="flex flex-1 flex-col justify-center gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`border-b border-[#DED8CE] py-4 text-2xl font-medium tracking-tight ${
                pathname === link.path ? "text-[#9A4F2B]" : "text-[#173B20]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          </nav>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="button-primary w-full">Book a site visit <ArrowUpRight className="h-4 w-4" /></Link>
          <a href="tel:+919266040973" className="mt-4 text-center text-sm font-semibold text-[#173B20]">+91 92660 40973</a>
        </div>
      )}
    </>
  );
}
