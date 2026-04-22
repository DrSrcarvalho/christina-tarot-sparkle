import { useReveal } from "@/hooks/useReveal";

const items = [
  { quote: "Cristina mudou minha vida. As palavras dela trouxeram clareza num momento que eu já não enxergava saída. Gratidão eterna.", name: "Mariana S.", city: "São Paulo" },
  { quote: "Atendimento sério, acolhedor e impressionantemente certeiro. O que ela viu nas cartas se confirmou semanas depois.", name: "Renata L.", city: "Campinas" },
  { quote: "Encontrei na Cristina a escuta que eu precisava. A terapia holística somada ao Tarot foi um divisor de águas pra mim.", name: "Patrícia M.", city: "Santo André" },
];

export function Testimonials() {
  const head = useReveal<HTMLDivElement>();
  return (
    <section id="depoimentos" className="relative py-28 md:py-40 px-6 lg:px-12 bg-obsidian-soft/40">
      <div className="max-w-[1280px] mx-auto">
        <div ref={head.ref} className={`text-center mb-16 max-w-2xl mx-auto reveal ${head.visible ? "is-visible" : ""}`}>
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-10 h-px bg-gold/60" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold">Depoimentos</span>
            <span className="w-10 h-px bg-gold/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-silk leading-[1.1]">
            Histórias de <i className="text-ember font-normal">transformação</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <TestimonialCard key={t.name} t={t} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, delay }: { t: { quote: string; name: string; city: string }; delay: number }) {
  const r = useReveal<HTMLElement>();
  const delayClass = delay === 0 ? "" : delay === 1 ? "reveal-delay-1" : "reveal-delay-2";
  return (
    <figure
      ref={r.ref}
      className={`relative bg-obsidian border border-gold/10 p-8 md:p-10 hover:border-gold/30 transition-colors duration-500 reveal ${delayClass} ${r.visible ? "is-visible" : ""}`}
    >
              <span className="absolute -top-4 left-8 font-serif text-7xl text-ember leading-none">“</span>
              <blockquote className="text-silk/80 font-light leading-relaxed text-base mb-6 pt-2">
                {t.quote}
              </blockquote>
              <figcaption className="border-t border-gold/15 pt-4">
                <div className="font-serif text-lg text-gold">{t.name}</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-silk/50 mt-1">{t.city}</div>
              </figcaption>
    </figure>
  );
}