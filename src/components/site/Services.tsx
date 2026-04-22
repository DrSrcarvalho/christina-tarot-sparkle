import { Sparkles, Heart, Moon, Flame, Leaf, Eye } from "lucide-react";

const services = [
  { icon: Sparkles, title: "Tarot Cigano", desc: "Leitura tradicional do Baralho Cigano para revelar o que está oculto e orientar decisões." },
  { icon: Heart, title: "Terapia Holística", desc: "Acolhimento integrativo para reequilibrar corpo, mente e emoções com técnicas naturais." },
  { icon: Moon, title: "Aconselhamento Espiritual", desc: "Conversas profundas para clareza em momentos de transição e dúvida existencial." },
  { icon: Flame, title: "Limpeza Energética", desc: "Rituais de purificação para liberar bloqueios e restaurar a vibração pessoal." },
  { icon: Leaf, title: "Cromoterapia & Cristais", desc: "Uso terapêutico de cores e cristais para harmonização dos centros de energia." },
  { icon: Eye, title: "Mentoria Intuitiva", desc: "Acompanhamento personalizado para desenvolver sua intuição e propósito de vida." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28 md:py-40 px-6 lg:px-12 bg-obsidian-soft/40">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-10 h-px bg-gold/60" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-gold">O que ofereço</span>
            <span className="w-10 h-px bg-gold/60" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-silk leading-[1.1]">
            Caminhos para <i className="text-ember font-normal">a sua clareza</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10 border border-gold/10">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-obsidian p-8 md:p-10 transition-all duration-500 hover:bg-obsidian-soft"
            >
              <div className="size-12 mb-6 flex items-center justify-center rounded-full bg-ember/10 border border-ember/20 group-hover:bg-ember/20 group-hover:scale-110 transition-all duration-500">
                <Icon className="size-5 text-ember" />
              </div>
              <h3 className="font-serif text-2xl text-silk mb-3">{title}</h3>
              <p className="text-silk/65 text-sm leading-relaxed font-light">{desc}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-ember group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}