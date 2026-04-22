import heroImg from "@/assets/hero-tarot.jpg";

const PHONE = "5511999504256";
const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent("Olá Cristina, gostaria de agendar uma consulta.")}`;

const miniTestimonials = [
  { quote: "Mudou minha vida. Clareza imediata.", name: "Mariana S." },
  { quote: "Acolhedora e impressionantemente certeira.", name: "Renata L." },
];

export function Hero() {
  return (
    <section id="topo" className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cristina Patricia Russo - Terapeuta Holística e Tarot Cigano"
          width={1280}
          height={1600}
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,var(--crimson)_0%,transparent_70%)] opacity-90 mix-blend-color-dodge" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/85 to-obsidian/60" />
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw]" style={{ background: "var(--gradient-glow)" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center gap-8 animate-float-up">
        <div className="flex items-center gap-4 text-gold/80 text-[11px] md:text-xs font-medium tracking-[0.25em] uppercase">
          <span className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-gold/60" />
          <span>Intuição & Ancestralidade Romani</span>
          <span className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] text-balance text-silk drop-shadow-2xl">
          A chave para a porta <br />
          <i className="font-normal text-ember drop-shadow-[0_0_30px_rgba(214,74,33,0.4)]">
            que você teme abrir.
          </i>
        </h1>

        <p className="text-silk/80 max-w-[58ch] text-base md:text-xl font-light leading-relaxed text-pretty">
          Há <span className="text-gold font-medium">20 anos</span> guiando jornadas através do Tarot
          Cigano e de terapias holísticas. Cristina Patricia Russo ilumina o oculto e devolve o
          controle do seu caminho às suas mãos.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center gap-6">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-ember text-silk font-medium text-base rounded-full transition-all duration-500 hover:bg-flame hover:shadow-[0_0_60px_-10px_var(--flame)] hover:-translate-y-1"
          >
            <span className="tracking-wide">Agendar Minha Leitura</span>
            <span className="text-xl font-serif transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
          <a href="#servicos" className="text-silk/70 text-sm tracking-[0.2em] uppercase hover:text-gold transition-colors">
            Conhecer serviços
          </a>
        </div>

        <div className="flex items-center gap-5 text-sm text-silk/60 font-light mt-6">
          <div className="flex -space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-gold text-lg">★</span>
            ))}
          </div>
          <span className="tracking-wide">+2.000 vidas transformadas</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl w-full mt-4">
          {miniTestimonials.map((t) => (
            <figure
              key={t.name}
              className="text-left bg-obsidian-soft/50 backdrop-blur-sm border border-gold/15 rounded-sm px-5 py-4"
            >
              <blockquote className="text-silk/85 text-sm font-light italic leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="text-[10px] tracking-[0.25em] uppercase text-gold/80 mt-2">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}