import { useEffect, useState } from "react";
import { WHATSAPP_LINK } from "./whatsapp";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#locais", label: "Locais" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:py-5">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">
            L
          </span>
          <span className="hidden font-display text-base leading-none text-foreground sm:block md:text-lg">
            LFO
            <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
              Massoterapia
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex lg:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-[11px] font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg sm:px-5 sm:py-2.5 sm:text-xs"
          >
            Agendar
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/70 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-foreground/80 hover:text-foreground border-b border-border/40 last:border-b-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}