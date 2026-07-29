import type { Metadata } from "next";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Guardian Pest & Termite Defense",
  description:
    "How Guardian Pest & Termite Defense collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Simple header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="/logo-horizontal.png"
              alt="Guardian Pest &amp; Termite Defense"
              className="h-11 sm:h-14 w-auto object-contain"
            />
          </a>
          <a href="/" className="text-sm font-semibold text-[#16243D] hover:text-[#4E9B2D] transition-colors">
            ← Back to home
          </a>
        </div>
      </header>

      <main className="bg-white">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-xs font-bold text-[#4E9B2D] uppercase tracking-widest mb-3">Legal</div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#16243D] mb-3">Privacy Policy</h1>
          <p className="text-sm text-[#566072] mb-10">Last updated: July 17, 2026</p>

          <div className="space-y-10 text-[#566072] leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Information We Collect</h2>
              <p className="mb-3">
                <span className="font-semibold text-[#16243D]">Personal Information:</span> When you contact us or use
                our services, we may collect personal information such as your name, email address, phone number, and
                address.
              </p>
              <p>
                <span className="font-semibold text-[#16243D]">Usage Data:</span> We may also collect information about
                how you interact with our website, including your IP address, browser type, and pages visited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">How We Use Your Information</h2>
              <p className="mb-3">
                <span className="font-semibold text-[#16243D]">To Provide Services:</span> We use personal data to
                fulfill your requests for pest control services and to communicate with you about your project.
              </p>
              <p className="mb-3">
                <span className="font-semibold text-[#16243D]">To Improve Our Services:</span> Usage information helps us
                analyze trends and improve the functionality and performance of our website.
              </p>
              <p>
                <span className="font-semibold text-[#16243D]">To Protect Our Rights:</span> We may use information to
                investigate and prevent fraudulent or illegal activities.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Information Sharing</h2>
              <p className="mb-3">We do not sell, trade, or rent your personal information to third parties.</p>
              <p>
                We may share data with trusted service providers who assist us in operating our website or providing
                services to you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Data Security</h2>
              <p className="mb-3">
                We take reasonable measures to protect your personal information from unauthorized access, disclosure,
                alteration, or destruction.
              </p>
              <p>
                However, please note that no method of transmission over the internet or electronic storage is 100%
                secure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Policy Updates</h2>
              <p>
                We reserve the right to modify this policy, with changes becoming effective immediately upon posting on
                our website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href={PHONE_HREF} className="text-[#4E9B2D] font-semibold hover:underline">
                  {PHONE_DISPLAY}
                </a>{" "}
                or{" "}
                <a href="mailto:hello@guardianpestdefense.com" className="text-[#4E9B2D] font-semibold hover:underline">
                  hello@guardianpestdefense.com
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Simple footer */}
      <footer className="bg-[#0f1a2e] text-white/70 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-xs">© 2026 Guardian Pest &amp; Termite Defense. All rights reserved.</p>
          <p className="text-xs text-white/50">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          </p>
        </div>
      </footer>
    </>
  );
}
