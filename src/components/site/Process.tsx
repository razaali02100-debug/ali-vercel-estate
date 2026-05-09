import { PhoneCall, Home, Handshake } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Contact Us", text: "Call or WhatsApp to share your requirement, budget and timeline." },
  { icon: Home, title: "Property Visit", text: "We arrange shortlisted visits — no pressure, just clarity." },
  { icon: Handshake, title: "Deal Finalization", text: "Transparent paperwork, fair pricing, deal closed." },
];

export function Process() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-14">
          <span className="inline-block rounded-full bg-accent/25 text-accent px-3 py-1 text-xs font-semibold">
            HOW IT WORKS
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Three simple steps</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 relative">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-3xl p-8 glass-dark hover:-translate-y-1 transition"
            >
              <div className="absolute -top-5 left-8 h-10 w-10 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center font-bold shadow-glow">
                {i + 1}
              </div>
              <s.icon className="h-9 w-9 text-accent mt-2" />
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-primary-foreground/75">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
