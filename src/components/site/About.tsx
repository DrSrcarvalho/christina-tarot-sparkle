import aboutImg from "@/assets/holistic-hands.jpg";

export function About() {
  return (
    <section id="sobre" className="relative py-28 md:py-40 px-6 lg:px-12 overflow-hidden">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-ember/5 blur-[120px] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 relative">
          <div className="aspect-[3/4] w-full max-w-[440px] p-3 border border-gold/15 relative">
            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/60" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/60" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/60" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/60" />
            <div className="w-full h-full overflow-hidden bg-obsidian-soft">
              <img
                src={aboutImg}
                alt="Mãos segurando esfera de cristal com chama"
                loading="lazy"
                width={1280}
                height={960}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-1000"
              />
            </div>
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-obsidian-soft border border-gold/20 px-6 py-5 rounded-sm shadow-card">
            <div className="font-serif text-5xl text-ember">20</div>
            <div className="text-[10px] tracking-[0.25em] uppercase text-silk/70 mt-1">Anos de prática</div>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pl-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-px bg-gold/60" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold">Quem é Cristina</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-silk">
            Duas décadas dedicadas a <i className="text-ember font-normal">acolher almas</i> e iluminar caminhos.
          </h2>
          <div className="space-y-5 text-silk/75 text-lg leading-relaxed font-light max-w-[58ch]">
            <p>
              Sou Cristina Patricia Russo, terapeuta holística e leitora do Baralho Cigano. Há mais de
              20 anos atendo pessoas que buscam clareza, equilíbrio emocional e respostas para os
              momentos decisivos da vida.
            </p>
            <p>
              Meu trabalho une a sabedoria ancestral do povo cigano à escuta atenta da terapia
              holística — um espaço seguro, sem julgamentos, onde o autoconhecimento se torna o
              caminho para a transformação verdadeira.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "+2k", l: "Atendimentos" },
              { n: "20", l: "Anos" },
              { n: "100%", l: "Sigilo" },
            ].map((s) => (
              <div key={s.l} className="border-l border-gold/30 pl-4">
                <div className="font-serif text-3xl text-gold">{s.n}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-silk/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}