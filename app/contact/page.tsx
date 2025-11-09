import Image from "next/image";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <>
      <section className="relative h-[46vh] grid place-items-center">
        <Image src="/images/contact.png" alt="Contact" fill className="object-cover opacity-70" />
        <div className="relative z-10 text-center px-4">
          <span className="pill">Ready to book?</span>
          <h1 className="font-display text-5xl md:text-6xl mt-4">Contact</h1>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </section>
      <Section title="Tell us about your goals" kicker="We’ll reply quickly">
        <p>Use the form to reach out or email <a className="underline" href="mailto:craig@cdtrackcoaching.com">craig@cdtrackcoaching.com</a>. WhatsApp: <a className="underline" href="tel:+447854252732">+44 7854 252732</a>.</p>
      </Section>
    </>
  );
}
