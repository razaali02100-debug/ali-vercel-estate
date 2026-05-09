import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  message: z.string().trim().min(5, "Tell us a bit more").max(500),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    alert("Dealer will contact you shortly. Thank you!");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold">
            GET IN TOUCH
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Let's talk property</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-3xl p-8 shadow-card">
            <h3 className="font-bold text-xl">Send a message</h3>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <input
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <input
                  name="phone"
                  placeholder="Phone number"
                  className="w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm focus:outline-none focus:border-accent"
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us what you're looking for..."
                  className="w-full rounded-2xl border border-border bg-secondary/40 px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-primary text-primary-foreground py-3.5 font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              <a href="tel:+923001234567" className="flex items-center gap-3 rounded-2xl bg-secondary/60 p-4 hover:bg-accent/15 transition">
                <Phone className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-xs text-muted-foreground">Call</div>
                  <div className="font-semibold text-sm">+92 300 1234567</div>
                </div>
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener" className="flex items-center gap-3 rounded-2xl bg-secondary/60 p-4 hover:bg-accent/15 transition">
                <MessageCircle className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-xs text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold text-sm">+92 300 1234567</div>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-secondary/60 p-4">
                <MapPin className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-xs text-muted-foreground">Office</div>
                  <div className="font-semibold text-sm">DHA Phase 6, Lahore</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-secondary/60 p-4">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-semibold text-sm">hello@aliestate.pk</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-card min-h-[420px]">
            <iframe
              title="DHA Lahore Map"
              src="https://www.google.com/maps?q=DHA+Phase+6+Lahore&output=embed"
              loading="lazy"
              className="w-full h-full min-h-[420px] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
