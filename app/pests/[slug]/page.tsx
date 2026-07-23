import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { PESTS, getPest } from "@/lib/pests";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";

export function generateStaticParams() {
  return PESTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pest = getPest(slug);
  if (!pest) return { title: "Pest Guide | Guardian Pest & Termite Defense" };
  return {
    title: `${pest.name}: Origin, Life Cycle & Damage | Guardian`,
    description: pest.meta,
  };
}

export default async function PestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pest = getPest(slug);
  if (!pest) notFound();

  const others = PESTS.filter((p) => p.slug !== pest.slug);

  const sections = [
    { heading: "Where they come from", body: pest.origin },
    { heading: "Life cycle", body: pest.lifecycle },
    { heading: "The damage they cause", body: pest.damage },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative bg-[#16243D] overflow-hidden">
          <img
            src={pest.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16243D] via-[#16243D]/85 to-[#16243D]/70" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <a href="/#services" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6FBF3F] hover:text-white transition-colors mb-6">
              ← All services
            </a>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
              <div>
                <div className="text-xs font-bold text-[#6FBF3F] uppercase tracking-widest mb-3">Pest Guide</div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">{pest.name}</h1>
                <p className="text-xl text-white/80 font-medium mb-4">{pest.tagline}</p>
                <p className="text-white/70 text-lg leading-relaxed max-w-xl">{pest.intro}</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="/#quote" className="inline-flex items-center justify-center px-7 py-3.5 rounded-md bg-[#4E9B2D] text-white font-bold hover:bg-[#3E7C23] transition-colors shadow-sm">
                    Get a free inspection →
                  </a>
                  <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-white/30 text-white font-bold hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <img src={pest.image} alt={pest.name} className="w-full h-72 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article */}
        <section className="bg-white py-16 sm:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            {sections.map((s, i) => (
              <div key={s.heading} className={i > 0 ? "mt-12" : ""}>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16243D] mb-4 flex items-center gap-3">
                  <span className="inline-block w-8 h-1 rounded-full bg-[#4E9B2D]" />
                  {s.heading}
                </h2>
                <p className="text-[#3b4658] text-lg leading-relaxed">{s.body}</p>
              </div>
            ))}

            {/* Warning signs */}
            <div className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16243D] mb-6 flex items-center gap-3">
                <span className="inline-block w-8 h-1 rounded-full bg-[#4E9B2D]" />
                Warning signs
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {pest.signs.map((sign) => (
                  <li key={sign} className="flex items-start gap-3 bg-[#F3F6F4] border border-slate-200 rounded-lg p-4">
                    <svg className="w-5 h-5 text-[#4E9B2D] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 111.4-1.4l2.3 2.3 6.3-6.3a1 1 0 011.4 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[15px] text-[#2b3444] leading-snug">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How Guardian handles it */}
            <div className="mt-12 rounded-2xl bg-[#16243D] p-8 sm:p-10">
              <div className="text-xs font-bold text-[#6FBF3F] uppercase tracking-widest mb-3">How Guardian handles it</div>
              <p className="text-white/85 text-lg leading-relaxed mb-6">{pest.treatment}</p>
              <a href="/#quote" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#4E9B2D] text-white font-bold hover:bg-[#3E7C23] transition-colors shadow-sm">
                Book your free inspection →
              </a>
            </div>
          </div>
        </section>

        {/* Other pests */}
        <section className="bg-[#F3F6F4] border-t border-slate-200 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-extrabold text-[#16243D] mb-6">Other pests we handle</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {others.map((p) => (
                <a
                  key={p.slug}
                  href={`/pests/${p.slug}`}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-[#4E9B2D] hover:-translate-y-1 transition-all"
                >
                  <div className="h-24 overflow-hidden">
                    <img src={p.image} alt={p.short} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-sm font-bold text-[#16243D] group-hover:text-[#4E9B2D] transition-colors">{p.short}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
