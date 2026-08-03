import { FileText, Lock, Mail, ShieldCheck } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Information We Collect",
    items: [
      "Browsing and usage data such as cookies and page views.",
      "Contact details and enquiry information submitted through website forms.",
      "Property preferences or interests if shared with our team.",
    ],
  },
  {
    title: "How We Use Your Information",
    items: [
      "To respond to your inquiries and provide support.",
      "To improve our website, services and customer experience.",
      "To send updates about projects, properties or promotional content only with your consent.",
    ],
  },
  {
    title: "Data Security",
    items: [
      "We implement reasonable safeguards to protect your data.",
      "No transmission over the internet is completely secure, so we cannot guarantee absolute protection.",
    ],
  },
  {
    title: "Third-Party Services",
    items: [
      "We may use analytics tools, form integrations or social media features.",
      "These services may collect data according to their own privacy policies.",
    ],
  },
  {
    title: "Policy Updates",
    items: [
      "We may update this policy from time to time.",
      "Continued use of our website means you accept the updated policy.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#f8fbfa] font-sans text-zinc-900">
      <section className="privacy-hero relative overflow-hidden px-4 pb-20 pt-36 md:px-6">
        <div className="container relative mx-auto">
          <div className="privacy-kicker mb-6 inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.18em]">
            <Lock className="h-4 w-4" />
            Legal Information
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="privacy-title text-3xl leading-tight md:text-6xl">Privacy Policy</h1>
              <p className="privacy-intro mt-6 max-w-3xl text-lg leading-relaxed">
                Doon Alliance values your privacy. This policy explains how we collect, use and protect your personal information when you interact with our website, services or contact us.
              </p>
            </div>
            <div className="privacy-info-card p-6 lg:col-span-4">
              <ShieldCheck className="mb-4 h-10 w-10" />
              <p className="text-sm leading-relaxed">
                Questions about privacy or data handling can be shared with our team through the contact page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="sticky top-32 rounded-lg border border-zinc-900/10 bg-white p-7 shadow-[0_18px_48px_rgba(23,52,4,0.07)]">
              <FileText className="mb-5 h-10 w-10 text-[#763300]" />
              <h2 className="text-2xl font-black">Policy Summary</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                We use submitted information to respond to enquiries, improve the experience and communicate updates when consent is provided.
              </p>
              <Link href="/contact" className="legal-summary-cta mt-8 inline-flex h-12 items-center px-6 text-xs font-black uppercase tracking-[0.16em] transition-all hover:-translate-y-1">
                Contact Us
              </Link>
            </div>
          </aside>

          <div className="space-y-5 lg:col-span-8">
            {sections.map((section, index) => (
              <article key={section.title} className="group rounded-lg border border-zinc-900/10 bg-white p-7 shadow-[0_18px_48px_rgba(23,52,4,0.06)] transition-all hover:-translate-y-1 hover:border-zinc-900">
                <div className="mb-5 flex items-center gap-4">
                  <span className="legal-section-number flex h-11 w-11 shrink-0 items-center justify-center text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-black">{section.title}</h3>
                </div>
                <ul className="space-y-3 text-zinc-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#763300]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="rounded-lg bg-[#1a1a1a] p-7 text-white">
              <Mail className="mb-4 h-9 w-9 text-[#ba7517]" />
              <h3 className="text-2xl font-black">Need clarification?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                If you have questions regarding our privacy policy, feel free to contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
