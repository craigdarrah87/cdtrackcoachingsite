export default function Section({ title, kicker, children }: { title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        {kicker && <div className="pill inline-block mb-4">{kicker}</div>}
        <h2 className="font-display text-3xl md:text-5xl mb-6">{title}</h2>
        <div className="prose prose-invert max-w-none text-white/85">{children}</div>
      </div>
    </section>
  );
}
