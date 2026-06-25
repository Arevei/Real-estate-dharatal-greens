import Link from "next/link";
import Image from "next/image";
import {  MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white p-3 rounded-lg">
              <Image src="/images/logo.png" alt="Dharatal Greens" width={48} height={48} className="h-12 w-auto" />
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Dharatal Greens represents the pinnacle of luxury farmhouse and villa living. We curate spaces where nature leads and luxury follows.
            </p>
            {/* <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
            </div> */}
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-4 inline-block">Explore Links</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-accent" /> Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-accent" /> About Us</Link></li>
              <li><Link href="/projects" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-accent" /> Projects</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-accent" /> Services</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors flex items-center gap-2"><ArrowRight size={14} className="text-accent" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-4 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-1" />
                <span>Dharatal Greens Pvt. Ltd. 7th Floor, Metro Station, 703 704 & 709, near Neta Ji Subhash Place, Netaji Subhash Place, Pitampura, New Delhi, Delhi, 110034, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+91-XXXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>info@dharatalgreens.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-4 inline-block">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-4">Subscribe to our newsletter to receive the latest updates and property insights.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-r-none h-12 focus-visible:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-l-none h-12 px-6">
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>Copyright &copy; {new Date().getFullYear()} Dharatal Greens. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
