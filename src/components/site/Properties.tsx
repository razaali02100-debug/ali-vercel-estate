import { useMemo, useState } from "react";
import { MapPin, Maximize2, MessageCircle, ArrowRight } from "lucide-react";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

type Cat = "Buy" | "Rent" | "Commercial";

const items: {
  img: string;
  title: string;
  price: string;
  location: string;
  area: string;
  cat: Cat;
}[] = [
  { img: p1, title: "5 Marla Modern House", price: "PKR 2.85 Cr", location: "DHA Phase 6, Lahore", area: "5 Marla", cat: "Buy" },
  { img: p2, title: "10 Marla Luxury Villa", price: "PKR 6.50 Cr", location: "Bahria Town, Sector C", area: "10 Marla", cat: "Buy" },
  { img: p3, title: "2-Bed Apartment", price: "PKR 95,000/mo", location: "Bahria Town Heights", area: "1,250 sqft", cat: "Rent" },
  { img: p4, title: "Commercial Plaza", price: "PKR 12.0 Cr", location: "DHA Y-Block", area: "8 Marla", cat: "Commercial" },
  { img: p5, title: "Furnished Apartment", price: "PKR 130,000/mo", location: "DHA Phase 5", area: "1,600 sqft", cat: "Rent" },
  { img: p6, title: "Penthouse with View", price: "PKR 9.20 Cr", location: "Bahria Sky Tower", area: "3,200 sqft", cat: "Buy" },
];

const cats: ("All" | Cat)[] = ["All", "Buy", "Rent", "Commercial"];

export function Properties() {
  const [filter, setFilter] = useState<"All" | Cat>("All");
  const list = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.cat === filter)),
    [filter]
  );

  const notify = () => alert("Dealer will contact you shortly. Thank you!");

  return (
    <section id="properties" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block rounded-full bg-accent/15 text-foreground px-3 py-1 text-xs font-semibold">
              FEATURED LISTINGS
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Hand-picked properties
            </h2>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Verified listings across DHA & Bahria Town — updated weekly.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold border transition ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground/70 border-border hover:border-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <article
              key={i}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-xs font-semibold">
                  {p.cat}
                </span>
                <span className="absolute top-4 right-4 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-bold">
                  {p.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{p.title}</h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" /> {p.location}
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                  <Maximize2 className="h-4 w-4 text-accent" /> {p.area}
                </div>
                <div className="mt-5 flex gap-2">
                  <button
                    onClick={notify}
                    className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl bg-primary text-primary-foreground px-3 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href={`https://wa.me/923001234567?text=I'm interested in ${encodeURIComponent(p.title)}`}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center rounded-xl bg-whatsapp text-whatsapp-foreground px-3 py-2.5 hover:opacity-90 transition"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
