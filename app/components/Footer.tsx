import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from "@/lib/site";
import { PESTS } from "@/lib/pests";

export default function Footer() {
  return (
    <footer className="bg-[#0f1a2e] text-white/70 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="inline-flex bg-white rounded-xl p-2.5 shadow-sm">
                <img src="/logo.png" alt="Guardian Pest & Termite Defense" className="h-16 w-auto object-contain" />
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Trusted pest &amp; termite defense. Locally owned and operated,
              and 100% guaranteed.
            </p>
            <a href={PHONE_HREF} className="text-white font-bold hover:text-[#6FBF3F] transition-colors">{PHONE_DISPLAY}</a>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Why Guardian", href: "/#why-us" },
                { label: "How It Works", href: "/#process" },
                { label: "Service Areas", href: "/#service-areas" },
                { label: "Reviews", href: "/#reviews" },
                { label: "Free Inspection", href: "/#quote" },
              ].map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Services — each links to its pest page */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {PESTS.map((p) => (
                <li key={p.slug}>
                  <a href={`/pests/${p.slug}`} className="hover:text-white transition-colors">{p.serviceTitle}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a></li>
              <li className="pt-1">San Diego, CA</li>
              <li>Mon–Sat · 7am–7pm</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-xs">© 2026 Guardian Pest &amp; Termite Defense. All rights reserved.</p>
          <p className="text-xs text-white/50">
            Licensed &amp; insured · CA Structural Pest Control Board
            <span className="mx-2">·</span>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
