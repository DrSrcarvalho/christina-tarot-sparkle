export function Footer() {
  return (
    <footer className="border-t border-gold/10 py-10 px-6 lg:px-12 bg-obsidian">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-3 text-sm text-silk/50">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-serif text-base text-silk/80">
            Cristina <span className="text-ember italic">Patricia Russo</span>
          </div>
          <div className="text-xs tracking-wider text-center">
            © {new Date().getFullYear()} · Terapia Holística & Tarot Cigano · Todos os direitos reservados
          </div>
          <div className="hidden md:block w-[1px]" />
        </div>
        <div className="text-[8px] tracking-[0.15em] uppercase text-silk/20 font-light">
          Desenvolvido por Sebastião Carvalho
        </div>
      </div>
    </footer>
  );
}