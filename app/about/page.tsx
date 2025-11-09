import Image from "next/image";
import Section from "@/components/Section";

export default function Page() {
  return (
    <>
      <section className="relative h-[46vh] grid place-items-center">
        <Image src="/images/about.png" alt="About Us" fill className="object-cover opacity-70" />
        <div className="relative z-10 text-center px-4">
          <span className="pill">From Garages to Green Hell</span>
          <h1 className="font-display text-5xl md:text-6xl mt-4">About Us</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </section>
      <Section title="About Us" kicker="From Garages to Green Hell">
        <div className="space-y-4">
          <p>Two decades of seat time and spanner time. Our journey started in the garages, learning how cars breathe, bite and break. That mechanical empathy now fuels clear, real‑world coaching built on more than 1500 laps of the Nürburgring. We help you feel what the car needs and translate that into speed—with safety as the baseline, always.</p>
        </div>
      </Section>
    </>
  );
}
