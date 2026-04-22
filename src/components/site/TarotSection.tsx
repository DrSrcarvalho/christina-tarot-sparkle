import tarotImg from "@/assets/tarot-cards.jpg";

const PHONE = "5511999504256";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Olá Cristina, quero agendar uma leitura de Tarot Cigano.")}`;

export function TarotSection() {
  return (
    <section id="tarot" className="relative py-28 md:py-40 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--ember)_0%,transparent_50%)] opacity-[0.06] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="lg:order-2 relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-gold/15 group">
            <img
              src={tarotImg}
              alt="Cartas do Tarot Cigano dispostas à luz de velas"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
          </div>
        </div>

        <div className="lg:order-1">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-gold/60" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold">Tradição Romani</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-silk leading-[1.1] mb-8">
            O Baralho Cigano <i className="text-ember font-normal">não mente.</i>
          </h2>
          <p className="text-silk/75 text-lg font-light leading-relaxed mb-6 max-w-[55ch]">
            Herdado de uma tradição ancestral, o Tarot Cigano é uma das ferramentas mais diretas e
            reveladoras de leitura intuitiva. Cada carta carrega símbolos vivos do cotidiano —
            dinheiro, amor, caminhos, encontros — e responde com franqueza ao que o seu coração
            precisa ouvir.
          </p>
          <ul className="space-y-3 text-silk/80 mb-10">
            {[
              "Leitura completa de 36 cartas",
              "Respostas objetivas e diretas",
              "Sessões presenciais ou online",
              "Atendimento sigiloso e acolhedor",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-ember mt-2 text-xs">◆</span>
                <span className="font-light">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/60 transition-all duration-500 text-sm tracking-[0.2em] uppercase"
          >
            Reservar leitura <span className="font-serif text-base">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}