import Image from "next/image";
import Section from "@/components/Section";
import Pricing from "@/components/Pricing";

export default function Page() {
  return (
    <>
      <section className="relative h-[46vh] grid place-items-center">
        <Image src="/images/services.png" alt="Services" fill className="object-cover opacity-70" />
        <div className="relative z-10 text-center px-4">
          <span className="pill">Clear value, clear progress</span>
          <h1 className="font-display text-5xl md:text-6xl mt-4">Services & Pricing</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </section>
      <Section title="Coaching Options" kicker="Nordschleife & Europe">
        <p className="text-white/85">
          Choose the format that fits your goals and seat time. We focus on safety, repeatable drills and momentum‑building wins.
        </p>
        <div className="mt-10">
          <Pricing />
        </div>
      </Section>
    </>
  );
}
