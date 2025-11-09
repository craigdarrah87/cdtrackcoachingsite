type Plan = { title: string; price: string; bullets: string[] };
const plans: Plan[] = [
  { title: "Per Lap (Nordschleife)", price: "£25 / €30", bullets: ["Live coaching (passenger)","Actionable feedback per section","Perfect for focused practice"]},
  { title: "Hourly", price: "£100 / €120", bullets: ["Goal-based coaching","Clear drills & debrief","Video review optional"]},
  { title: "Half Day", price: "£250 / €300", bullets: ["Track walk & line review","Car setup guidance","Post-session report"]},
  { title: "Full Day", price: "£500 / €600", bullets: ["Comprehensive program","Video + data analysis","Max seat time & progress"]},
];

export default function Pricing() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((p) => (
        <div key={p.title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
          <h3 className="font-display text-2xl mb-2">{p.title}</h3>
          <p className="text-brand-red text-xl font-bold mb-4">{p.price}</p>
          <ul className="space-y-2 text-white/85">
            {p.bullets.map((b, i) => <li key={i}>• {b}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
