import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      <Image src="/images/hero-home.png" alt="Nordschleife" fill className="object-cover opacity-70" priority />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 text-center">
        <span className="pill inline-block mb-4 uppercase tracking-widest">Nürburgring • Europe</span>
        <h1 className="font-display text-5xl md:text-7xl leading-tight">Cut Seconds. Build Confidence.<br/><span className="text-brand-red">Own the Green Hell.</span></h1>
        <p className="mt-6 text-white/80 max-w-2xl mx-auto">Real drivers. Real coaching. 1500+ laps of Nordschleife knowledge, delivered with clear, calm instruction that makes you faster and safer.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/contact" className="bg-brand-red text-black font-bold px-6 py-3 rounded-xl shadow-glow">Book Coaching</Link>
          <Link href="/services" className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition">See Services</Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  );
}
