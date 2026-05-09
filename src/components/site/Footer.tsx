import { Facebook, Instagram, Linkedin, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-bold text-lg">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground font-black">A</span>
            Ali Estate
          </div>
          <p className="mt-4 text-primary-foreground/70 text-sm leading-relaxed">
            Your trusted real estate partner in DHA & Bahria Town, Lahore.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, MessageCircle].map((I, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-xl bg-white/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            {["About", "Properties", "Services", "Reviews", "Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-accent">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/75">
            <li>Buy Property</li><li>Sell Property</li><li>Rent Property</li><li>Investment Advice</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-accent shrink-0" /> DHA Phase 6, Lahore</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-accent shrink-0" /> +92 300 1234567</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-accent shrink-0" /> hello@aliestate.pk</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-white/10 pt-6 mx-auto max-w-7xl px-5 text-xs text-primary-foreground/60 flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Ali Estate. All rights reserved.</p>
        <p>Crafted with care for premium real estate.</p>
      </div>
    </footer>
  );
}
