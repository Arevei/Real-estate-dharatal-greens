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
    <main className="bg-[#f8fbfa] font-sans text-[#0f1f2e]">
      <section className="relative overflow-hidden bg-[#08131f] px-4 pb-20 pt-36 text-white md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(75,191,184,0.24),transparent_26rem)]" />
        <div className="container relative mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em]">
            <Lock className="h-4 w-4 text-[#4BBFB8]" />
            Legal Information
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl font-black leading-tight md:text-7xl">Privacy Policy</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/72">
                Doon Alliance values your privacy. This policy explains how we collect, use and protect your personal information when you interact with our website, services or contact us.
              </p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/10 p-6 backdrop-blur-md lg:col-span-4">
              <ShieldCheck className="mb-4 h-10 w-10 text-[#4BBFB8]" />
              <p className="text-sm leading-relaxed text-white/72">
                Questions about privacy or data handling can be shared with our team through the contact page.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-6">
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="sticky top-32 rounded-lg border border-[#0f1f2e]/10 bg-white p-7 shadow-[0_18px_48px_rgba(15,31,46,0.07)]">
              <FileText className="mb-5 h-10 w-10 text-[#4BBFB8]" />
              <h2 className="text-2xl font-black">Policy Summary</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                We use submitted information to respond to enquiries, improve the experience and communicate updates when consent is provided.
              </p>
              <Link href="/contact" className="mt-8 inline-flex h-12 items-center rounded-full bg-[#0f1f2e] px-6 text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-1 hover:bg-[#4BBFB8]">
                Contact Us
              </Link>
            </div>
          </aside>

          <div className="space-y-5 lg:col-span-8">
            {sections.map((section, index) => (
              <article key={section.title} className="group rounded-lg border border-[#0f1f2e]/10 bg-white p-7 shadow-[0_18px_48px_rgba(15,31,46,0.06)] transition-all hover:-translate-y-1 hover:border-[#0f1f2e]">
                <div className="mb-5 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4BBFB8]/12 text-sm font-black text-[#0f1f2e] group-hover:bg-[#0f1f2e] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-black">{section.title}</h3>
                </div>
                <ul className="space-y-3 text-zinc-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#4BBFB8]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            <div className="rounded-lg bg-[#0f1f2e] p-7 text-white">
              <Mail className="mb-4 h-9 w-9 text-[#4BBFB8]" />
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
