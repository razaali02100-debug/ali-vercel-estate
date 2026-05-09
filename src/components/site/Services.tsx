import { Home, KeyRound, TrendingUp, Building2 } from "lucide-react";

const services = [
  { icon: Home, title: "Buy Property", text: "Find your perfect home with verified listings and transparent pricing." },
  { icon: KeyRound, title: "Sell Property", text: "Get the best market value with our professional selling network." },
  { icon: Building2, title: "Rent Property", text: "Short and long term rentals across DHA and Bahria Town." },
  { icon: TrendingUp, title: "Investment Advice", text: "Data-backed advice on the highest ROI sectors and plot files." },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold">
            WHAT WE OFFER
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Services built for results</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-3xl p-7 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1.5 border border-border/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
