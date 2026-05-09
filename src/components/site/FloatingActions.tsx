import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="h-14 w-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-glow hover:scale-110 transition animate-pulse"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+923001234567"
        aria-label="Call"
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-card hover:scale-110 transition"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
