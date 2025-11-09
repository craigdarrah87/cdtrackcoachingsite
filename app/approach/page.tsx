import Image from "next/image";
import Section from "@/components/Section";

export default function Page() {
  return (
    <>
      <section className="relative h-[46vh] grid place-items-center">
        <Image src="/images/approach.png" alt="Our Approach" fill className="object-cover opacity-70" />
        <div className="relative z-10 text-center px-4">
          <span className="pill">Speed Meets Safety</span>
          <h1 className="font-display text-5xl md:text-6xl mt-4">Our Approach</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </section>
      <Section title="Our Approach" kicker="Speed Meets Safety">
        <div className="space-y-4">
          <p>True pace comes from calm inputs and clean vision. We build drivers from the ground up: sightlines, reference points, braking phases, rotation timing, throttle discipline and traffic strategy. Every session finishes with plain‑English notes so you know exactly what to do next time out.</p>
        </div>
      </Section>
    </>
  );
}
