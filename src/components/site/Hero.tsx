import heroImg from "@/assets/hero-villa.jpg";
import { MessageCircle, Users, Award, Handshake } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Handshake, value: "50+", label: "Deals Closed" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Luxury modern villa"
          width={1920}
          height={1280}
          className="h-full w-full object-cover animate-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-40 pb-16 md:pt-48 md:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-white">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Trusted Real Estate Expert · DHA & Bahria Town
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
            Find Your{" "}
            <span className="text-accent">Dream Property</span> with a
            Trusted Real Estate Expert
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-xl">
            Buy, Sell &amp; Rent premium homes, plots and commercial spaces in
            DHA Lahore and Bahria Town — handled end-to-end with full
            transparency.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-2xl bg-whatsapp px-6 py-3.5 font-semibold text-whatsapp-foreground hover:scale-[1.03] transition"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-dark rounded-2xl p-5 flex items-center gap-4 hover:scale-[1.02] transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/90 text-accent-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-white/70">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
