import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container relative z-10">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block rounded-xl bg-white p-3">
              <Image src="/images/logo.png" alt="Doon Alliance" width={56} height={56} className="h-14 w-auto" />
            </Link>
            <p className="footer-copy text-sm leading-relaxed">
              Doon Alliance creates premium townships, farmhouses, villas, plots, builder floors, and commercial spaces with transparent service and sustainable planning.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h2 className="footer-title">Explore</h2>
            <ul className="space-y-3 text-sm">
              {[['Home','/'],['About us','/about'],['Projects','/projects'],['Services','/services'],['Contact','/contact']].map(([label, href]) => <li key={href}><Link href={href} className="footer-link-new">{label}<ArrowUpRight size={14} /></Link></li>)}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h2 className="footer-title">Start a conversation</h2>
            <ul className="footer-contact space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ba7517] shrink-0 mt-1" />
                <span>2nd Floor, GS Tower, Canal Road, Opposite to Superia Apartments, Jakhan, Dehradun 248001</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#ba7517] shrink-0" />
                <span className="flex flex-col gap-1">
                  <a href="tel:+911354148552">+91 135 414 8552</a>
                  <a href="tel:+919266040973">+91 92660 40973</a>
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
        <div className="footer-legal flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row">
          <p>Copyright &copy; {new Date().getFullYear()} Dharatal Greens All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <a href="https://ai.arevei.com" target="_blank" rel="noreferrer" className="footer-powered">Powered by <span>ai.arevei.com</span></a>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-conditions">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
