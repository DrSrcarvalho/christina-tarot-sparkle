export function Footer() {
  return (
    <footer className="border-t border-gold/10 py-10 px-6 lg:px-12 bg-obsidian">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-silk/50">
        <div className="font-serif text-base text-silk/80">
          Cristina <span className="text-ember italic">Patricia Russo</span>
        </div>
        <div className="text-xs tracking-wider">
          © {new Date().getFullYear()} · Terapia Holística & Tarot Cigano · Todos os direitos reservados
        </div>
        <div className="text-xs tracking-wider">
          Desenvolvido por <span className="text-gold">Sebastião Carvalho</span>
        </div>
      </div>
    </footer>
  );
}