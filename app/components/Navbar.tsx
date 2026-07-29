"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

// Links point at home-page anchors with a leading "/" so they work from any
// route (e.g. a /pests/* page navigates home, then scrolls).
const LINKS = ["Why Us", "Process", "Services", "Service Areas", "Reviews"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/#top" className="flex items-center">
            <img
              src="/logo-horizontal.png"
              alt="Guardian Pest &amp; Termite Defense"
              className="h-11 sm:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l}
                href={`/#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[15px] font-semibold text-[#16243D] hover:text-[#4E9B2D] transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <a href={PHONE_HREF} className="flex items-center gap-1.5 text-sm font-bold text-[#16243D] hover:text-[#4E9B2D] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {PHONE_DISPLAY}
            </a>
            <a href="/#quote" className="px-5 py-2.5 rounded-md bg-[#4E9B2D] text-white text-sm font-bold hover:bg-[#3E7C23] transition-colors shadow-sm">
              Free Inspection
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="lg:hidden p-2 text-[#16243D] hover:bg-slate-100 rounded-md">
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {LINKS.map((l) => (
              <a
                key={l}
                href={`/#${l.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setOpen(false)}
                className="py-2.5 px-3 text-sm font-semibold text-[#16243D] hover:bg-slate-50 rounded-md"
              >
                {l}
              </a>
            ))}
            <a href={PHONE_HREF} onClick={() => setOpen(false)} className="py-2.5 px-3 text-sm font-bold text-[#16243D] hover:bg-slate-50 rounded-md">
              Call {PHONE_DISPLAY}
            </a>
            <a href="/#quote" onClick={() => setOpen(false)} className="mt-2 py-2.5 px-3 rounded-md bg-[#4E9B2D] text-white text-sm font-bold text-center hover:bg-[#3E7C23]">
              Get a Free Inspection
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
