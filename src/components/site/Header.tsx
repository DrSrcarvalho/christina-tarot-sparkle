import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#tarot", label: "Tarot Cigano" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-obsidian/70 border-b border-gold/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="#topo" className="font-serif text-xl tracking-wide text-silk font-medium">
          Cristina <span className="text-ember italic">Patricia Russo</span>
        </a>
        <nav className="hidden lg:flex gap-10 text-[11px] tracking-[0.2em] uppercase text-silk/70">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ember transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden text-silk p-2"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gold/10 bg-obsidian/95 backdrop-blur-md">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.15em] uppercase text-silk/80 hover:text-ember transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}