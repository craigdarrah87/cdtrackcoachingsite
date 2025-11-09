import Image from "next/image";
import Section from "@/components/Section";

export default function Page() {
  return (
    <>
      <section className="relative h-[46vh] grid place-items-center">
        <Image src="/images/why.png" alt="Why Us" fill className="object-cover opacity-70" />
        <div className="relative z-10 text-center px-4">
          <span className="pill">What Sets Us Apart?</span>
          <h1 className="font-display text-5xl md:text-6xl mt-4">Why Choose Us</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </section>
      <Section title="Why Choose CD Track Coaching" kicker="Proof over promises">
        <ul className="space-y-3 text-white/85">
          <li>• Local expertise: we live the Nordschleife – every crest, camber and compromise.</li>
          <li>• Calm, clear coaching that builds pace safely and predictably.</li>
          <li>• Founder PB: 7:14 BTG (Bridge to Gantry) – experience that translates.</li>
        </ul>
      </Section>
    </>
  );
}
