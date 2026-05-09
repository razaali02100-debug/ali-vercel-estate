import { useState } from "react";
import { BadgeCheck, ShieldCheck, User } from "lucide-react";
import ceoImg from "@/assets/ceo.jpg";
import p1 from "@/assets/partner-1.png";
import p2 from "@/assets/partner-2.png";
import p3 from "@/assets/partner-3.png";
import p4 from "@/assets/partner-4.png";
import p5 from "@/assets/partner-5.png";
import p6 from "@/assets/partner-6.png";
import p7 from "@/assets/partner-7.png";
import p8 from "@/assets/partner-8.png";

const tabs = ["About", "Our Partners", "CEO Message"] as const;
type Tab = (typeof tabs)[number];

const partners = [
  { name: "Bahria Builders", logo: p1 },
  { name: "DHA Developers", logo: p2 },
  { name: "Lahore Estates", logo: p3 },
  { name: "Citi Housing", logo: p4 },
  { name: "Park View", logo: p5 },
  { name: "Eden Group", logo: p6 },
  { name: "Imarat", logo: p7 },
  { name: "Graana", logo: p8 },
];

export function About() {
  const [tab, setTab] = useState<Tab>("About");

  return (
    <section id="about" className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-accent/15 text-accent-foreground px-3 py-1 text-xs font-semibold">
            ABOUT US
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Built on trust, driven by results
          </h2>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex glass shadow-soft rounded-2xl p-1.5">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                  tab === t
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="animate-fade-in">
          {tab === "About" && (
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-3xl overflow-hidden shadow-card">
                <img
                  src={ceoImg}
                  alt="Ali Estate dealer"
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-card">
                <h3 className="text-2xl font-bold">Ali Estate</h3>
                <p className="text-accent-foreground/80 font-medium mt-1">
                  5+ Years in Real Estate
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We help clients buy, sell and rent properties in DHA and
                  Bahria Town. Our process is transparent, paperwork-light and
                  built around what works best for you — whether you're an
                  end-user or an investor.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-accent/15 text-foreground px-3 py-2 text-sm font-medium">
                    <BadgeCheck className="h-4 w-4 text-accent" /> Verified
                    Dealer
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-xl bg-accent/15 text-foreground px-3 py-2 text-sm font-medium">
                    <ShieldCheck className="h-4 w-4 text-accent" /> Trusted
                    Agent
                  </span>
                </div>
              </div>
            </div>
          )}

          {tab === "Our Partners" && (
            <div className="bg-card rounded-3xl p-8 shadow-card overflow-hidden">
              <p className="text-center text-muted-foreground mb-6">
                We work with Pakistan's leading builders, developers and
                agencies.
              </p>
              <div className="group relative overflow-hidden">
                <div className="flex gap-5 animate-marquee group-hover:[animation-play-state:paused] w-max">
                  {[...partners, ...partners].map((p, i) => (
                    <div
                      key={i}
                      className="flex h-36 w-64 shrink-0 items-center justify-center rounded-2xl bg-secondary border border-border p-4"
                    >
                      <img
                        src={p.logo}
                        alt={p.name}
                        loading="lazy"
                        className="max-h-24 max-w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "CEO Message" && (
            <div className="grid md:grid-cols-[260px_1fr] gap-8 items-center bg-card rounded-3xl p-8 shadow-card">
              <img
                src={ceoImg}
                alt="CEO"
                loading="lazy"
                width={260}
                height={260}
                className="h-[260px] w-[260px] object-cover rounded-2xl mx-auto"
              />
              <div>
                <User className="h-6 w-6 text-accent" />
                <p className="mt-3 text-xl md:text-2xl leading-relaxed text-foreground">
                  "Our mission is to provide transparent and profitable real
                  estate solutions. Every client deserves clarity, fair pricing
                  and a dealer who truly listens."
                </p>
                <p className="mt-6 font-bold italic text-accent text-lg">
                  — Ali Khan, CEO
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
