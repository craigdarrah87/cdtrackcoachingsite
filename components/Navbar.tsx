"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "Our Approach" },
  { href: "/services", label: "Services" },
  { href: "/why", label: "Why Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-black/80 backdrop-blur-sm border-b border-white/10" : "bg-transparent"}`}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="CD Track Coaching" width={44} height={44} className="rounded" />
          <span className="font-display text-xl tracking-wide">CD Track <span className="text-brand-red">Coaching</span></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="uppercase text-sm tracking-widest hover:text-brand-red transition-colors">{l.label}</Link>
          ))}
          <Link href="/contact" className="ml-2 bg-brand-red text-black font-bold px-4 py-2 rounded-xl shadow-glow hover:scale-[1.02] transition">Book Now</Link>
        </nav>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 border border-white/20 rounded-lg">☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="uppercase tracking-widest py-1">{l.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="bg-brand-red text-black font-bold px-4 py-2 rounded-xl text-center">Book Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
