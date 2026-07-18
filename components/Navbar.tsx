"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search, Phone, Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "PROJECT", path: "/projects" },
    { label: "SERVICES", path: "/services" },
    { label: "FAQ", path: "/faq" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#1e2a35] shadow-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50 shrink-0">
          <Image 
            src="/images/logo.png" 
            alt="Doon Alliance" 
            width={64}
            height={64}
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-xs font-bold tracking-[0.15em] uppercase transition-colors hover:text-[#4BBFB8] ${
                pathname === link.path ? "text-[#4BBFB8]" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-8 shrink-0">
          <Link href="/projects" aria-label="Search projects" className="text-white hover:text-[#4BBFB8] transition-colors">
            <Search size={22} />
          </Link>
          <a href="tel:+919266040973" className="flex items-center gap-4 border-l border-white/20 pl-8">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#4BBFB8]">
              <Phone size={20} fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-white/70 tracking-wider">Call experts</span>
              <span className="text-base font-bold text-white tracking-wide">+91 92660 40973</span>
            </div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-[#1e2a35] z-40 flex flex-col items-center justify-center gap-8 pt-20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-bold tracking-widest ${
                  pathname === link.path ? "text-[#4BBFB8]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+919266040973" className="mt-8 flex flex-col items-center gap-2">
              <div className="text-xs font-medium text-white/70 tracking-wider">Call experts</div>
              <div className="text-lg font-bold text-[#4BBFB8] tracking-wide">+91 92660 40973</div>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
