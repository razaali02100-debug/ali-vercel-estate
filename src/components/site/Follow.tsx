import { Facebook, Instagram, Linkedin, MessageCircle, Music2 } from "lucide-react";

const socials = [
  { icon: Facebook, label: "Facebook", href: "#", color: "hover:bg-[#1877F2]" },
  { icon: Instagram, label: "Instagram", href: "#", color: "hover:bg-gradient-to-br hover:from-[#feda75] hover:via-[#d62976] hover:to-[#4f5bd5]" },
  { icon: Music2, label: "TikTok", href: "#", color: "hover:bg-black" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/923001234567", color: "hover:bg-whatsapp" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:bg-[#0A66C2]" },
];

export function Follow() {
  return (
    <section className="py-24 bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold">SOCIAL</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold">Follow Us & Get Latest Property Deals</h2>
        <p className="mt-3 text-muted-foreground">Join 5,000+ buyers on our social channels</p>

        <div className="mt-10 group relative overflow-hidden">
          <div className="flex gap-4 animate-marquee group-hover:[animation-play-state:paused] w-max">
            {[...socials, ...socials].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener"
                className={`flex shrink-0 items-center gap-3 rounded-2xl bg-card px-6 py-4 shadow-soft border border-border/40 hover:text-white hover:-translate-y-1 hover:shadow-card transition-all duration-300 ${s.color}`}
              >
                <s.icon className="h-5 w-5" />
                <span className="font-semibold text-sm">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
