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
    <main className="bg-[#f8fbfa] font-sans text-[#0f1f2e]">
      <section className="relative overflow-hidden bg-[#08131f] px-4 pb-20 pt-36 text-white md:px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(75,191,184,0.24),transparent_26rem)]" />
        <div className="container relative mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em]">
            <Gavel className="h-4 w-4 text-[#4BBFB8]" />
            Website Terms
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="text-5xl font-black leading-tight md:text-7xl">Terms & Conditions</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/72">
                Welcome to Doon Alliance. By using our website and services, you agree to abide by the following terms and conditions.
              </p>
            </div>
            <div className="rounded-lg border border-white/12 bg-white/10 p-6 backdrop-blur-md lg:col-span-4">
              <Scale className="mb-4 h-10 w-10 text-[#4BBFB8]" />
              <p className="text-sm leading-relaxed text-white/72">
                Please read these terms carefully before using the website or submitting an enquiry.
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
              <h2 className="text-2xl font-black">Terms Summary</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                These terms cover site usage, listing accuracy, intellectual property, responsibilities, liability and governing law.
              </p>
              <Link href="/privacy-policy" className="mt-8 inline-flex h-12 items-center rounded-full bg-[#0f1f2e] px-6 text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:-translate-y-1 hover:bg-[#4BBFB8]">
                Privacy Policy
              </Link>
            </div>
          </aside>

          <div className="grid grid-cols-1 gap-5 lg:col-span-8">
            {sections.map((section, index) => (
              <article key={section.title} className="group rounded-lg border border-[#0f1f2e]/10 bg-white p-7 shadow-[0_18px_48px_rgba(15,31,46,0.06)] transition-all hover:-translate-y-1 hover:border-[#0f1f2e]">
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4BBFB8]/12 text-sm font-black text-[#0f1f2e] group-hover:bg-[#0f1f2e] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-black">{section.title}</h3>
                </div>
                <p className="leading-relaxed text-zinc-600">{section.body}</p>
              </article>
            ))}

            <div className="rounded-lg bg-[#0f1f2e] p-7 text-white">
              <Mail className="mb-4 h-9 w-9 text-[#4BBFB8]" />
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
