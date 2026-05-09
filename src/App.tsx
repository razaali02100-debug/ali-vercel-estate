import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Properties } from "@/components/site/Properties";
import { Services } from "@/components/site/Services";
import { Reviews } from "@/components/site/Reviews";
import { Process } from "@/components/site/Process";
import { Contact } from "@/components/site/Contact";
import { Follow } from "@/components/site/Follow";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Properties />
      <Services />
      <Reviews />
      <Process />
      <Contact />
      <Follow />
      <Footer />
      <FloatingActions />
    </main>
  );
}
