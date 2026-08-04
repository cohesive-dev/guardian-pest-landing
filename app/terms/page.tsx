import type { Metadata } from "next";
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | Guardian Pest & Termite Defense",
  description:
    "Terms and conditions for Guardian Pest & Termite Defense, including our SMS messaging program terms, opt-out instructions, and service terms.",
};

export default function Terms() {
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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#16243D] mb-3">Terms &amp; Conditions</h1>
          <p className="text-sm text-[#566072] mb-10">Last updated: August 4, 2026</p>

          <div className="space-y-10 text-[#566072] leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Agreement to These Terms</h2>
              <p>
                These Terms &amp; Conditions govern your use of the Guardian Pest &amp; Termite Defense website, your
                requests for service, and your participation in our SMS messaging program. By using this website,
                submitting a request, or opting in to text messages, you agree to these terms.
              </p>
            </div>

            {/* ── SMS / A2P 10DLC program terms ───────────────────────────── */}
            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">SMS Messaging Program Terms</h2>

              <p className="mb-3">
                <span className="font-semibold text-[#16243D]">Program name:</span> Guardian Pest &amp; Termite Defense.
              </p>

              <p className="mb-3">
                <span className="font-semibold text-[#16243D]">Program description:</span> Guardian Pest &amp; Termite
                Defense sends SMS text messages to customers and prospective customers who provide their mobile number
                and consent. Messages include free inspection scheduling and confirmations, appointment reminders,
                technician arrival notifications, service follow-ups, billing and account notices, and replies to
                questions you send us. If you separately opt in to promotional messages, you may also receive seasonal
                service offers and reminders.
              </p>

              <p className="mb-3">
                <span className="font-semibold text-[#16243D]">How to opt in:</span> You consent to receive text messages
                by submitting your mobile number through a form on this website that includes an SMS consent disclosure,
                by providing your number and agreeing to text messages over the phone or in person, or by texting us
                first. Consent to receive marketing text messages is not a condition of purchasing any goods or
                services.
              </p>

              <p className="mb-3">
                <span className="font-semibold text-[#16243D]">Message frequency:</span> Message frequency varies. You
                can generally expect up to 4 messages per month, plus transactional messages related to any service you
                have requested or scheduled. This is a recurring messaging program.
              </p>

              <p className="mb-3">
                <span className="font-semibold text-[#16243D]">Cost:</span>{" "}
                <span className="font-semibold text-[#16243D]">Message and data rates may apply.</span> Guardian Pest
                &amp; Termite Defense does not charge for these messages, but your mobile carrier&apos;s standard
                message and data rates apply to every message sent and received.
              </p>

              <p className="mb-3">
                <span className="font-semibold text-[#16243D]">Supported carriers:</span> Carriers including AT&amp;T,
                Verizon Wireless, T-Mobile, Boost Mobile, U.S. Cellular, Metro by T-Mobile, and others are supported.
                Supported carriers may change without notice.{" "}
                <span className="font-semibold text-[#16243D]">
                  Carriers are not liable for any delayed or undelivered messages.
                </span>
              </p>

              <p>
                <span className="font-semibold text-[#16243D]">Privacy:</span> Information you share with us in
                connection with this messaging program is handled as described in our{" "}
                <a href="/privacy" className="text-[#4E9B2D] font-semibold hover:underline">
                  Privacy Policy
                </a>
                . Your mobile opt-in and consent information is never shared, sold, or rented to third parties.
              </p>
            </div>

            {/* ── Opt-out / HELP — required to be bold ─────────────────────── */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Opt-Out and Help Instructions</h2>
              <p className="mb-3 font-bold text-[#16243D]">
                To stop receiving text messages, reply STOP to any message from us at any time. You may also reply
                CANCEL, END, QUIT, UNSUBSCRIBE, or REVOKE.
              </p>
              <p className="mb-3 font-bold text-[#16243D]">
                After you send STOP, we will send one final message confirming that you have been unsubscribed, and you
                will receive no further text messages from us unless you opt in again.
              </p>
              <p className="mb-3 font-bold text-[#16243D]">
                For help, reply HELP to any message from us, or contact us at {PHONE_DISPLAY} or {EMAIL}.
              </p>
              <p>
                To rejoin the program at any time after opting out, text START to the same number or submit a new
                request through this website.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Customer Support</h2>
              <p>
                Questions about our messaging program or your service can be directed to us at{" "}
                <a href={PHONE_HREF} className="text-[#4E9B2D] font-semibold hover:underline">
                  {PHONE_DISPLAY}
                </a>{" "}
                or{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#4E9B2D] font-semibold hover:underline">
                  {EMAIL}
                </a>
                . Our team is available Monday through Saturday, 7am–7pm Pacific.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Service Requests and Estimates</h2>
              <p className="mb-3">
                Submitting a request through this website is not a binding contract for services. Inspections,
                estimates, and quoted pricing are provided after we evaluate your property, and pricing may change based
                on conditions found on site.
              </p>
              <p>
                Pest control services are performed by licensed technicians in accordance with California Structural
                Pest Control Board requirements. Any guarantee applies as described in your signed service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Website Use</h2>
              <p className="mb-3">
                The content on this website is provided for general information only and is not a substitute for a
                professional inspection. You agree not to use this website for any unlawful purpose or in any way that
                could damage, disable, or impair it.
              </p>
              <p>
                All logos, text, images, and other content on this website are the property of Guardian Pest &amp;
                Termite Defense and may not be reproduced without permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Guardian Pest &amp; Termite Defense is not liable for any
                indirect or incidental damages arising from your use of this website or our messaging program, including
                delayed or undelivered messages, which are outside of our control.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Changes to These Terms</h2>
              <p>
                We may update these Terms &amp; Conditions at any time. Changes become effective immediately upon
                posting on this page, and the &ldquo;last updated&rdquo; date above will reflect the most recent
                revision.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Governing Law</h2>
              <p>
                These Terms &amp; Conditions are governed by the laws of the State of California, without regard to its
                conflict of law provisions. Nothing in these terms limits any liability or waives any right that cannot
                be limited or waived under applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#16243D] mb-4">Contact Us</h2>
              <p>
                Guardian Pest &amp; Termite Defense · San Diego, CA ·{" "}
                <a href={PHONE_HREF} className="text-[#4E9B2D] font-semibold hover:underline">
                  {PHONE_DISPLAY}
                </a>{" "}
                ·{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#4E9B2D] font-semibold hover:underline">
                  {EMAIL}
                </a>
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
            <span className="mx-2">·</span>
            <a href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </p>
        </div>
      </footer>
    </>
  );
}
