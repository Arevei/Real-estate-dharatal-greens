import { FileText, Gavel, Mail, Scale } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Acceptance of Terms",
    body: "By accessing our website or engaging with services provided by Doon Alliance, you acknowledge that you have read, understood and accepted these terms in full.",
  },
  {
    title: "Services Overview",
    body: "Doon Alliance works across farmhouses, villas, residential plots, lifestyle townships, value homes and independent living spaces. Property information may change without prior notice.",
  },
  {
    title: "Property Listings & Accuracy",
    body: "While we strive to provide accurate and updated property information, Doon Alliance does not guarantee completeness or accuracy and will not be held responsible for discrepancies.",
  },
  {
    title: "Intellectual Property",
    body: "All content, including text, images, logos and design elements, belongs to Doon Alliance or its licensors and is protected by applicable copyright laws. Reuse without permission is prohibited.",
  },
  {
    title: "User Responsibilities",
    body: "Users are expected to provide truthful information and not engage in activity that could harm the website's security or integrity. Misuse may result in restricted access or legal action.",
  },
  {
    title: "Limitation of Liability",
    body: "Doon Alliance is not liable for any direct, indirect or incidental damages resulting from the use of our website or services.",
  },
  {
    title: "Modifications",
    body: "We may revise these terms at any time without notice. Continued use of the website indicates your acceptance of the updated terms.",
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Delhi.",
  },
];

export default function TermsConditions() {
  return (
    <main className="bg-[#f8fbfa] font-sans text-zinc-900">
      <section className="terms-hero relative overflow-hidden px-4 pb-20 pt-36 md:px-6">
        <div className="container relative mx-auto">
          <div className="terms-kicker mb-6 inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.18em]">
            <Gavel className="h-4 w-4" />
            Website Terms
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="terms-title text-3xl leading-tight md:text-6xl">Terms & Conditions</h1>
              <p className="terms-intro mt-6 max-w-3xl text-lg leading-relaxed">
                Welcome to Doon Alliance. By using our website and services, you agree to abide by the following terms and conditions.
              </p>
            </div>
            <div className="terms-info-card p-6 lg:col-span-4">
              <Scale className="mb-4 h-10 w-10" />
              <p className="text-sm leading-relaxed">
                Please read these terms carefully before using the website or submitting an enquiry.
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
              <h2 className="text-2xl font-black">Terms Summary</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                These terms cover site usage, listing accuracy, intellectual property, responsibilities, liability and governing law.
              </p>
              <Link href="/privacy-policy" className="legal-summary-cta mt-8 inline-flex h-12 items-center px-6 text-xs font-black uppercase tracking-[0.16em] transition-all hover:-translate-y-1">
                Privacy Policy
              </Link>
            </div>
          </aside>

          <div className="grid grid-cols-1 gap-5 lg:col-span-8">
            {sections.map((section, index) => (
              <article key={section.title} className="group rounded-lg border border-zinc-900/10 bg-white p-7 shadow-[0_18px_48px_rgba(23,52,4,0.06)] transition-all hover:-translate-y-1 hover:border-zinc-900">
                <div className="mb-4 flex items-center gap-4">
                  <span className="legal-section-number flex h-11 w-11 shrink-0 items-center justify-center text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-black">{section.title}</h3>
                </div>
                <p className="leading-relaxed text-zinc-600">{section.body}</p>
              </article>
            ))}

            <div className="rounded-lg bg-[#1a1a1a] p-7 text-white">
              <Mail className="mb-4 h-9 w-9 text-[#ba7517]" />
              <h3 className="text-2xl font-black">Need help with these terms?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                If you have questions regarding our Terms and Conditions, feel free to contact us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
