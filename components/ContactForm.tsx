"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input required placeholder="Name" className="bg-black/60 border border-white/15 rounded-xl px-4 py-3" />
      <input required type="email" placeholder="Email" className="bg-black/60 border border-white/15 rounded-xl px-4 py-3" />
      <input placeholder="Phone / WhatsApp" className="bg-black/60 border border-white/15 rounded-xl px-4 py-3" />
      <textarea required placeholder="Tell us about your goals, car, and experience" rows={5} className="bg-black/60 border border-white/15 rounded-xl px-4 py-3" />
      <button className="bg-brand-red text-black font-bold px-5 py-3 rounded-xl">Send Request</button>
      {sent && <p className="text-green-400">Thanks! We’ll get back to you shortly.</p>}
      <p className="text-white/60 text-sm">Prefer direct? Email <a className="underline" href="mailto:craig@cdtrackcoaching.com">craig@cdtrackcoaching.com</a> or WhatsApp <a className="underline" href="tel:+447854252732">+44 7854 252732</a>.</p>
    </form>
  );
}
