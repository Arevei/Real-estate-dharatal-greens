import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-[#2C2C2A] text-white pt-20 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white p-3 rounded-lg">
              <Image src="/images/logo.png" alt="Doon Alliance" width={48} height={48} className="h-12 w-auto" />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Doon Alliance creates premium townships, farmhouses, villas, plots, builder floors, and commercial spaces with transparent service and sustainable planning.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-4 inline-block">Explore Links</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-[#ba7517] transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#ba7517]" /> Home</Link></li>
              <li><Link href="/about" className="hover:text-[#ba7517] transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#ba7517]" /> About Us</Link></li>
              <li><Link href="/projects" className="hover:text-[#ba7517] transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#ba7517]" /> Projects</Link></li>
              <li><Link href="/services" className="hover:text-[#ba7517] transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#ba7517]" /> Services</Link></li>
              <li><Link href="/contact" className="hover:text-[#ba7517] transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-[#ba7517]" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-4 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ba7517] shrink-0 mt-1" />
                <span>2nd Floor, GS Tower, Canal Road, Opposite to Superia Apartments, Jakhan, Dehradun 248001</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#ba7517] shrink-0" />
                <span className="flex flex-col gap-1">
                  <a href="tel:+911354148552" className="hover:text-[#ba7517] transition-colors">+91 135 414 8552</a>
                  <a href="tel:+919266040973" className="hover:text-[#ba7517] transition-colors">+91 92660 40973</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#ba7517] shrink-0" />
                <span>info@doonalliance.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4 removed per request */}

          {/* Bottom Bar */}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 w-full">
          <p>Copyright &copy; {new Date().getFullYear()} Dharatal Greens All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
