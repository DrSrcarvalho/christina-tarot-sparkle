import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { TarotSection } from "@/components/site/TarotSection";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { FloatingCandles } from "@/components/site/FloatingCandles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cristina Patricia Russo · Terapeuta Holística & Tarot Cigano" },
      {
        name: "description",
        content:
          "Há 20 anos guiando jornadas com Tarot Cigano e terapia holística. Atendimento 100% online. Agende pelo WhatsApp (11) 99950-4256.",
      },
      { property: "og:title", content: "Cristina Patricia Russo · Terapeuta Holística & Tarot Cigano" },
      {
        property: "og:description",
        content:
          "20 anos de experiência em Tarot Cigano e terapia holística. Clareza, equilíbrio e respostas para sua jornada.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-obsidian text-silk min-h-screen scroll-smooth">
      <Header />
      <FloatingCandles />
      <main>
        <Hero />
        <About />
        <Services />
        <TarotSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
