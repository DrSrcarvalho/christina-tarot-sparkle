import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

const PHONE_RAW = "5511999504256";
const PHONE_DISPLAY = "(11) 99950-4256";
const WA = `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent("Olá Cristina, gostaria de agendar uma consulta.")}`;

export function Contact() {
  return (
    <section id="contato" className="relative py-28 md:py-40 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_center,var(--crimson)_0%,transparent_60%)] opacity-60 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-10 h-px bg-gold/60" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold">Contato</span>
          <span className="w-10 h-px bg-gold/60" />
        </div>
        <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-silk leading-[1.05] mb-8">
          Sua jornada começa <br />
          <i className="text-ember font-normal">com uma conversa.</i>
        </h2>
        <p className="text-silk/75 text-lg font-light max-w-[55ch] mx-auto mb-12">
          Entre em contato pelo WhatsApp para conhecer os horários disponíveis e agendar seu
          atendimento online.
        </p>

        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-4 px-10 py-5 bg-ember text-silk font-medium rounded-full hover:bg-flame hover:shadow-[0_0_60px_-10px_var(--flame)] hover:-translate-y-1 transition-all duration-500 mb-16"
        >
          <MessageCircle className="size-5" />
          <span className="tracking-wide">Conversar no WhatsApp</span>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-3xl mx-auto">
          <div className="border-l border-gold/30 pl-5">
            <Phone className="size-4 text-gold mb-3" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-silk/60 mb-1">Telefone</div>
            <a href={`tel:+${PHONE_RAW}`} className="font-serif text-xl text-silk hover:text-ember transition-colors">
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="border-l border-gold/30 pl-5">
            <Clock className="size-4 text-gold mb-3" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-silk/60 mb-1">Atendimento</div>
            <div className="font-serif text-xl text-silk">Seg a Sáb · 9h às 19h</div>
          </div>
          <div className="border-l border-gold/30 pl-5">
            <MapPin className="size-4 text-gold mb-3" />
            <div className="text-[10px] tracking-[0.25em] uppercase text-silk/60 mb-1">Modalidade</div>
            <div className="font-serif text-xl text-silk">Atendimento Online</div>
          </div>
        </div>
      </div>
    </section>
  );
}