"use client";

import { useRef, useState, type FormEvent } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { slugForService } from "@/lib/pests";

// ─── Brand palette ──────────────────────────────────────────────────────────
// navy   #16243D - primary brand, headings, dark surfaces (from logo shield)
// green  #4E9B2D - accent, primary CTA (from logo lettering)
// greenD #3E7C23 - CTA hover
// ink    #131517 - body headings
// slate  #566072 - body copy
// mist   #F3F6F4 - light section backgrounds

// Progressively format a US phone number as the user types: "(555) 123-4567".
function formatUSPhone(value: string): string {
  const d = value.replace(/\D/g, "").slice(0, 10);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

// ─── Quote form ─────────────────────────────────────────────────────────────

const PEST_TYPES = [
  "Ants",
  "Termites",
  "Rodents (rats & mice)",
  "Cockroaches",
  "Spiders",
  "Bees & Wasps",
  "Fleas & Ticks",
  "Bed Bugs",
  "Mosquitoes",
  "Not sure — need an inspection",
];

function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [pest, setPest] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, zip, pest }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message
          ? err.message
          : "We couldn't submit your request. Please call us instead.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={compact ? "" : "text-left"}>
        <div className="text-[11px] font-bold text-[#4E9B2D] tracking-[0.1em] uppercase mb-2">Request Received</div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#16243D] mb-3">
          You&apos;re covered, {name.trim().split(" ")[0] || "neighbor"}!
        </h3>
        <p className="text-sm text-[#566072] leading-relaxed mb-6">
          Thanks for reaching out to Guardian. A local specialist will call you
          {zip ? ` about your ${pest ? pest.toLowerCase() + " " : ""}concern in ${zip}` : ""} within{" "}
          <span className="font-semibold text-[#16243D]">30 minutes</span> during business hours to schedule your free inspection.
        </p>
        <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#16243D] text-white text-sm font-bold hover:bg-[#1f3357] transition-colors">
          Need us sooner? Call {PHONE_DISPLAY}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-[11px] font-bold text-[#4E9B2D] tracking-[0.1em] uppercase mb-4">Get Your Free Inspection</div>
      <div className="flex flex-col gap-3">
        <label className="text-left">
          <span className="block text-xs font-semibold text-[#16243D] mb-1">Full name <span className="text-[#4E9B2D]">*</span></span>
          <input
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#16243D] focus:outline-none focus:ring-2 focus:ring-[#4E9B2D]/40 focus:border-[#4E9B2D]"
          />
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <label className="flex-1 text-left">
            <span className="block text-xs font-semibold text-[#16243D] mb-1">Phone <span className="text-[#4E9B2D]">*</span></span>
            <input
              required
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(formatUSPhone(e.target.value))}
              pattern="\(\d{3}\) \d{3}-\d{4}"
              title="Enter a 10-digit US phone number"
              placeholder="(858) 555-0147"
              className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#16243D] focus:outline-none focus:ring-2 focus:ring-[#4E9B2D]/40 focus:border-[#4E9B2D]"
            />
          </label>
          <label className="sm:w-32 text-left">
            <span className="block text-xs font-semibold text-[#16243D] mb-1">ZIP code</span>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]{5}"
              maxLength={5}
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
              placeholder="92101"
              className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#16243D] focus:outline-none focus:ring-2 focus:ring-[#4E9B2D]/40 focus:border-[#4E9B2D]"
            />
          </label>
        </div>
        <label className="text-left">
          <span className="block text-xs font-semibold text-[#16243D] mb-1">Email <span className="font-normal text-[#566072]">(optional)</span></span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@email.com"
            className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#16243D] focus:outline-none focus:ring-2 focus:ring-[#4E9B2D]/40 focus:border-[#4E9B2D]"
          />
        </label>
        <label className="text-left">
          <span className="block text-xs font-semibold text-[#16243D] mb-1">What&apos;s bugging you?</span>
          <select
            value={pest}
            onChange={(e) => setPest(e.target.value)}
            className="w-full border border-slate-300 rounded-md px-3 py-2.5 text-sm text-[#16243D] bg-white focus:outline-none focus:ring-2 focus:ring-[#4E9B2D]/40 focus:border-[#4E9B2D]"
          >
            <option value="">Select a pest…</option>
            {PEST_TYPES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="mt-1 w-full px-6 py-3 rounded-md bg-[#4E9B2D] text-white text-sm font-bold hover:bg-[#3E7C23] transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending…" : "Claim My Free Inspection →"}
        </button>
        {error && (
          <p className="text-sm text-red-600 text-center">
            {error} You can also call{" "}
            <a href={PHONE_HREF} className="font-semibold underline">{PHONE_DISPLAY}</a>.
          </p>
        )}
      </div>
      <p className="mt-3 text-xs text-[#566072] text-center">
        No obligation. Or call{" "}
        <a href={PHONE_HREF} className="text-[#4E9B2D] font-semibold hover:underline">{PHONE_DISPLAY}</a>
      </p>
    </form>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  const collage = [
    { alt: "Home exterior", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80&auto=format&fit=crop" },
    { alt: "Clean modern kitchen", image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=700&q=80&auto=format&fit=crop" },
    { alt: "Backyard patio", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80&auto=format&fit=crop" },
    { alt: "Family living room", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80&auto=format&fit=crop" },
    { alt: "Pest control technician", image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=700&q=80&auto=format&fit=crop" },
    { alt: "Suburban home", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80&auto=format&fit=crop" },
  ];

  return (
    <section id="top" className="pt-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#4E9B2D]/10 px-4 py-1.5 text-xs font-bold text-[#3E7C23] mb-5">
          <span className="w-2 h-2 rounded-full bg-[#4E9B2D]" />
          Locally owned and operated
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#16243D] leading-[1.05] tracking-tight mb-5">
          Take back your home from{" "}
          <span className="text-[#4E9B2D]">pests &amp; termites.</span>
        </h1>
        <p className="text-lg text-[#566072] leading-relaxed max-w-2xl mx-auto">
          Family- and pet-safe treatments that protect your home year-round.
        </p>
      </div>

      {/* Photo collage */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-0 md:rounded-t-2xl overflow-hidden">
          {collage.map((c, i) => (
            <div key={c.alt} className={`relative h-40 sm:h-56 overflow-hidden ${i >= 3 ? "hidden md:block" : ""}`}>
              <img src={c.image} alt={c.alt} decoding="async" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#16243D]/10" />
            </div>
          ))}
        </div>

        {/* Overlapping quote widget */}
        <div id="quote" className="relative z-10 mt-6 md:-mt-16 flex flex-col md:flex-row gap-4 md:gap-0 px-2 md:px-0 scroll-mt-24">
          <div className="md:flex-[5] bg-white shadow-2xl rounded-lg md:rounded-r-none border border-slate-100 p-6 sm:p-8">
            <QuoteForm />
          </div>

          {/* Stats panel — desktop only; on mobile the hero badge carries the message. */}
          <div className="hidden md:flex md:flex-[3] bg-[#16243D] rounded-lg md:rounded-l-none p-6 sm:p-8 flex-col justify-center gap-6">
            <div className="text-[11px] font-bold text-white/50 tracking-[0.1em] uppercase">Why homeowners choose Guardian</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white leading-none">30 yrs</div>
                <div className="text-xs text-white/60 mt-1 font-medium">of experience</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#6FBF3F] leading-none">100%</div>
                <div className="text-xs text-white/60 mt-1 font-medium">guaranteed</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white leading-none">30 min</div>
                <div className="text-xs text-white/60 mt-1 font-medium">avg. call back</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#6FBF3F] leading-none">5.0★</div>
                <div className="text-xs text-white/60 mt-1 font-medium">avg. rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-10 md:h-16" />
    </section>
  );
}

// ─── Trust bar ──────────────────────────────────────────────────────────────

function TrustBar() {
  const items = [
    "Licensed & Insured (CA PR #00000)",
    "Family & Pet Safe",
    "Same-Week Service",
    "Free Inspections",
    "Eco-Friendly Options",
  ];
  return (
    <section className="bg-[#F3F6F4] border-y border-slate-200 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-[#16243D]">
          {items.map((it) => (
            <span key={it} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#4E9B2D] shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4l2.3 2.3 6.3-6.3a1 1 0 011.4 0z" clipRule="evenodd" />
              </svg>
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────────────────

function Services() {
  const services = [
    { image: "/services/ant.jpg", title: "Ant Control", desc: "Argentine ants, odorous house ants, and carpenter ants — traced back to the colony and eliminated at the source." },
    { image: "/services/termite.jpg", title: "Termite Defense", desc: "Full inspections, spot treatments, and barrier protection against the subterranean and drywood termites common to the area." },
    { image: "/services/rodent.jpg", title: "Rodent Control", desc: "Rats and mice removed, entry points sealed, and preventive baiting so they don't come back." },
    { image: "/services/cockroach.jpg", title: "Cockroach Removal", desc: "Targeted treatments for German, American, and Oriental roaches in kitchens, bathrooms, and voids." },
    { image: "/services/spider.jpg", title: "Spider & Web Control", desc: "Knock down webs and treat harborage for black widows, brown widows, and nuisance spiders." },
    { image: "/services/bee.jpg", title: "Bees & Wasps", desc: "Safe removal and nest treatment for wasps, hornets, and yellowjackets around eaves and yards." },
    { image: "/services/mosquito.jpg", title: "Mosquito Reduction", desc: "Yard misting and breeding-source treatment so you can enjoy your patio all season long." },
    { image: "/services/protection.jpg", title: "Year-Round Protection", desc: "Quarterly plans that guard your home against seasonal invaders — with free re-services in between." },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-bold text-[#4E9B2D] uppercase tracking-widest mb-3">Our Services</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16243D] mb-4">
            Our team vs. your pest.
          </h2>
          <p className="text-[#566072] text-lg">
            From the coast to the canyons, we know the local pests and how to keep them out — with treatments that are tough on bugs and gentle on your family.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => {
            const slug = slugForService(s.title);
            const cardClass =
              "group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#4E9B2D] hover:-translate-y-1 transition-all";
            const inner = (
              <>
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16243D]/50 to-transparent" />
                  {slug && (
                    <span className="absolute top-3 right-3 rounded-full bg-white/90 text-[#16243D] text-[11px] font-bold px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more →
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#16243D] mb-2 group-hover:text-[#4E9B2D] transition-colors">{s.title}</h3>
                  <p className="text-sm text-[#566072] leading-relaxed">{s.desc}</p>
                </div>
              </>
            );

            return slug ? (
              <a key={s.title} href={`/pests/${slug}`} className={cardClass}>
                {inner}
              </a>
            ) : (
              <div key={s.title} className={cardClass}>
                {inner}
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <a href="#quote" className="inline-block px-6 py-3 rounded-md border-2 border-[#16243D] text-[#16243D] text-sm font-bold hover:bg-[#16243D] hover:text-white transition-colors">
            Don&apos;t see your pest? Ask us →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Why Us ─────────────────────────────────────────────────────────────────

function WhyUs() {
  const points = [
    {
      title: "Family & pet safe",
      desc: "We use low-toxicity, EPA-approved products and precise application — so your kids and pets are back to normal the same day.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c-4.5-2.25-8.25-6-8.25-11.25a4.5 4.5 0 018.25-2.475A4.5 4.5 0 0120.25 10.5c0 5.25-3.75 9-8.25 11.25z" />
      ),
    },
    {
      title: "Local experts",
      desc: "Locally owned and operated — our technicians know exactly which pests hit which neighborhoods, and when.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      ),
    },
    {
      title: "100% guarantee",
      desc: "If pests come back between scheduled visits, so do we — free of charge. That's the Guardian promise.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      ),
    },
    {
      title: "Upfront pricing",
      desc: "Clear, flat quotes with no hidden fees or high-pressure upsells. You'll know the price before we start.",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      ),
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-[#16243D] text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="text-xs font-bold text-[#6FBF3F] uppercase tracking-widest mb-3">Why Guardian</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Protection you can trust, service you&apos;ll remember.
          </h2>
          <p className="text-white/70 text-lg">
            We built Guardian on a simple idea: treat every home like our own, and stand behind the work — every single time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#4E9B2D] flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.7} viewBox="0 0 24 24">
                  {p.icon}
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process ────────────────────────────────────────────────────────────────

function Process() {
  const steps = [
    { step: "01", title: "Free Inspection", desc: "A local specialist inspects your home inside and out, identifies the pests and entry points, and pinpoints the source.", detail: "Usually same or next day." },
    { step: "02", title: "Custom Treatment", desc: "We apply a targeted, family-safe treatment plan built for your home and the specific pests we found — no cookie-cutter spraying.", detail: "Most visits done in under an hour." },
    { step: "03", title: "Ongoing Defense", desc: "Choose a one-time treatment or quarterly protection. Between visits, re-services are always free if pests return.", detail: "Backed by our 100% guarantee." },
  ];

  return (
    <section id="process" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <div className="text-xs font-bold text-[#4E9B2D] uppercase tracking-widest mb-3">How It Works</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16243D] mb-4">
            Pest-free in three simple steps.
          </h2>
          <p className="text-[#566072] text-lg">
            No long contracts, no runaround. Just fast, effective protection for your home.
          </p>
        </div>

        <div className="relative grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 h-px bg-slate-200" style={{ width: "calc(100% + 3rem)" }} />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-black mb-6 relative z-10 bg-[#4E9B2D] text-white">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-[#16243D] mb-3">{s.title}</h3>
                <p className="text-[#566072] leading-relaxed mb-3">{s.desc}</p>
                <p className="text-sm font-semibold text-[#4E9B2D]">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Areas ──────────────────────────────────────────────────────────

// TODO: replace these placeholder regions/cities with the real list from Mariah & Tony.
const AREA_REGIONS: { region: string; cities: string[] }[] = [
  { region: "Coastal", cities: ["La Jolla", "Carlsbad", "Oceanside", "Encinitas", "Del Mar", "Point Loma", "Pacific Beach", "Coronado"] },
  { region: "North County", cities: ["Escondido", "Vista", "San Marcos", "Poway", "Rancho Bernardo", "Mira Mesa"] },
  { region: "East County", cities: ["El Cajon", "Santee", "Spring Valley", "La Mesa", "Lakeside", "Alpine"] },
  { region: "South Bay", cities: ["Chula Vista", "National City", "Imperial Beach", "Bonita", "Otay Ranch", "Eastlake"] },
];

function ServiceAreas() {
  const [tab, setTab] = useState(0);
  const areas = AREA_REGIONS[tab].cities;

  return (
    <section id="service-areas" className="py-24 bg-[#F3F6F4] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <div className="text-xs font-bold text-[#4E9B2D] uppercase tracking-widest mb-3">Service Areas</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16243D] mb-4">
              Proudly defending homes across the county.
            </h2>
            <p className="text-[#566072] text-lg mb-6">
              From coastal condos to inland estates, our local crews are close by and ready to help.
              If you&apos;re in the county, we&apos;ve got you covered.
            </p>
            <a href="#quote" className="inline-block px-6 py-3 rounded-md bg-[#4E9B2D] text-white text-sm font-bold hover:bg-[#3E7C23] transition-colors shadow-sm">
              Check my address →
            </a>
          </div>

          <div>
            {/* Region tabs */}
            <div className="flex flex-wrap gap-2 mb-5 border-b border-slate-200 pb-3">
              {AREA_REGIONS.map((r, i) => (
                <button
                  key={r.region}
                  type="button"
                  onClick={() => setTab(i)}
                  aria-pressed={i === tab}
                  className={`px-4 py-2 rounded-md text-sm font-bold transition-colors ${
                    i === tab
                      ? "bg-[#16243D] text-white"
                      : "bg-white border border-slate-200 text-[#16243D] hover:border-[#4E9B2D] hover:text-[#4E9B2D]"
                  }`}
                >
                  {r.region}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2.5">
            {areas.map((a) => (
              <span key={a} className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm font-medium text-[#16243D] shadow-sm">
                <svg className="w-3.5 h-3.5 text-[#4E9B2D]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.572l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                </svg>
                {a}
              </span>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────────────────────────

function Testimonials() {
  const quotes = [
    { quote: "We had carpenter ants tunneling through our La Jolla deck. Guardian found the nest the same afternoon and it's been quiet ever since. Professional and honest.", author: "Rebecca M.", company: "La Jolla · Homeowner", initials: "RM", color: "bg-[#16243D]" },
    { quote: "The termite inspection was thorough and the tech actually explained what he was seeing. No scare tactics, no upsell. Fair price and great work.", author: "David T.", company: "Carlsbad · Homeowner", initials: "DT", color: "bg-[#4E9B2D]" },
    { quote: "Rats in the attic freaked me out. They sealed every entry point and set us up on quarterly service. Six months later, zero problems.", author: "Priya S.", company: "Mira Mesa · Homeowner", initials: "PS", color: "bg-[#16243D]" },
    { quote: "Two dogs and a toddler, so the pet-safe treatment mattered to us. Everyone was back in the yard by dinner. Couldn't be happier.", author: "Marcus B.", company: "Chula Vista · Homeowner", initials: "MB", color: "bg-[#4E9B2D]" },
    { quote: "Called on a Monday, inspected Tuesday, treated Wednesday. The wasp nest by our door is gone and the crew was super friendly.", author: "Ana R.", company: "Encinitas · Homeowner", initials: "AR", color: "bg-[#16243D]" },
    { quote: "Best pest company we've used in 20 years. Responsive, fairly priced, and they actually stand behind the guarantee.", author: "Greg H.", company: "Poway · Homeowner", initials: "GH", color: "bg-[#4E9B2D]" },
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToCard = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const stride = track.scrollWidth / quotes.length;
    const maxScroll = track.scrollWidth - track.clientWidth;
    track.scrollTo({ left: Math.min(i * stride, maxScroll), behavior: "smooth" });
  };

  const scrolledIndex = () => {
    const track = trackRef.current;
    if (!track) return active;
    const stride = track.scrollWidth / quotes.length;
    return Math.round(track.scrollLeft / stride);
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll > 0 && track.scrollLeft >= maxScroll - 1) {
      setActive(quotes.length - 1);
      return;
    }
    setActive(scrolledIndex());
  };

  return (
    <section id="reviews" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <div className="text-xs font-bold text-[#4E9B2D] uppercase tracking-widest mb-3">Reviews</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16243D]">
            Homeowners trust Guardian.
          </h2>
          <div className="mt-3 flex items-center justify-center sm:justify-start gap-2 text-sm text-[#566072]">
            <span className="text-[#F5A623] text-lg tracking-tight">★★★★★</span>
            <span className="font-semibold text-[#16243D]">5.0/5</span>
            <span>from 600+ verified reviews</span>
          </div>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous reviews"
            onClick={() => scrollToCard(Math.max(0, scrolledIndex() - 1))}
            className="absolute left-1 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-slate-300 bg-white shadow-sm text-[#16243D] flex items-center justify-center hover:border-[#4E9B2D] hover:text-[#4E9B2D] transition-colors"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next reviews"
            onClick={() => scrollToCard(Math.min(quotes.length - 1, scrolledIndex() + 1))}
            className="absolute right-1 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-slate-300 bg-white shadow-sm text-[#16243D] flex items-center justify-center hover:border-[#4E9B2D] hover:text-[#4E9B2D] transition-colors"
          >
            →
          </button>

          <div
            ref={trackRef}
            onScroll={onScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {quotes.map((q) => (
              <div
                key={q.author}
                className="snap-start shrink-0 basis-full sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] bg-white border border-slate-200 rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="text-[#F5A623] text-lg mb-5 tracking-tight">★★★★★</div>
                <p className="text-[#2b3444] leading-relaxed mb-8 text-[15px]">&ldquo;{q.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${q.color} flex items-center justify-center text-white text-sm font-bold`}>
                    {q.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#16243D] text-sm">{q.author}</div>
                    <div className="text-[#566072] text-xs">{q.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {quotes.map((q, i) => (
            <button
              key={q.author}
              type="button"
              aria-label={`Go to review ${i + 1}`}
              onClick={() => scrollToCard(i)}
              className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-[#4E9B2D]" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ──────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-24 bg-[#16243D] relative overflow-hidden">
      <img
        src="/logo-emblem.png"
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[80%] w-auto object-contain opacity-[0.06]"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs font-bold text-[#6FBF3F] uppercase tracking-widest mb-3">Get Started</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Ready to take back your home?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-md">
              Book your free inspection today. Tell us what&apos;s bugging you and a local Guardian
              specialist will reach out within 30 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-[#4E9B2D] text-white font-bold hover:bg-[#3E7C23] transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Call {PHONE_DISPLAY}
              </a>
              <a href="#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-md border border-white/30 text-white font-bold hover:bg-white/10 transition-colors">
                Request online →
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhyUs />
        <Process />
        <Services />
        <ServiceAreas />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
