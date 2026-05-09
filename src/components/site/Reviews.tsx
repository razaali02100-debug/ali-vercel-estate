import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Hassan Ali", rating: 5, text: "Smooth experience buying my first home in DHA. Ali was honest about every detail and the paperwork was handled professionally." },
  { name: "Sara Malik", rating: 5, text: "Sold our 10 marla in Bahria above expected price within 3 weeks. Highly recommend their network." },
  { name: "Bilal Ahmed", rating: 5, text: "Found a great rental in Bahria Heights. No hidden charges, no time wasted. Clear communication throughout." },
  { name: "Ayesha Khan", rating: 5, text: "Professional, transparent and quick. Ali Estate handled my plot purchase end-to-end without any surprises." },
  { name: "Usman Sheikh", rating: 5, text: "Best dealer in DHA Lahore. Genuine pricing and excellent after-sale support." },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold">REVIEWS</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">What our clients say</h2>
        </div>
      </div>
      <div className="group relative">
        <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max px-5">
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="w-[340px] md:w-[380px] shrink-0 bg-card rounded-3xl p-7 shadow-soft hover:shadow-card transition border border-border/40"
            >
              <Quote className="h-8 w-8 text-accent" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4"
                    style={{ fill: "#FFB800", color: "#FFB800" }}
                  />
                ))}
              </div>
              <p className="mt-4 text-foreground/85 leading-relaxed">{r.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full bg-accent/20 flex items-center justify-center font-bold text-foreground">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">Verified Client</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
