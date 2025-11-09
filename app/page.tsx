import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="What We Do" kicker="CD Track Coaching">
        <p>
          We coach drivers at the Nürburgring and across Europe. From your first lap to
          chasing PBs, we make you faster by making you calmer, smoother and more precise.
          1500+ laps of hard-won knowledge, delivered with zero ego.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: "Track Day Coaching", copy: "In-car instruction that improves vision, lines, braking and throttle discipline." },
            { title: "Video & Data Review", copy: "Honest analysis with clear, bite‑size actions for your very next session." },
            { title: "Setup & Strategy", copy: "Tyres, pressures, warm-up, traffic management and safety culture." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <h3 className="font-display text-xl mb-2">{c.title}</h3>
              <p className="text-white/80">{c.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/services" className="px-5 py-3 border border-white/20 rounded-xl hover:border-white/40 transition">Explore services & pricing →</Link>
        </div>
      </Section>

      <section className="relative">
        <Image src="/images/why.png" alt="M4 at the Ring" width={1920} height={800} className="w-full h-[50vh] object-cover opacity-70" />
        <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-10">
          <div className="rounded-2xl bg-black/70 border border-white/10 p-6 md:p-10 shadow-glow">
            <h2 className="font-display text-3xl md:text-5xl mb-4">Why Choose Us?</h2>
            <ul className="space-y-2 text-white/85">
              <li>• Local knowledge: we live the Nordschleife – every crest, camber and compromise.</li>
              <li>• Personal bests built safely. Pace comes from clarity, not chaos.</li>
              <li>• Founder’s PB: 7:14 BTG (Bridge to Gantry) – proof we walk the talk.</li>
            </ul>
            <div className="mt-6">
              <Link href="/why" className="bg-brand-red text-black font-bold px-5 py-3 rounded-xl">See the full story</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
