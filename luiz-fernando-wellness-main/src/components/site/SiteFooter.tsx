import { INSTAGRAM_LINK, FACEBOOK_LINK, WHATSAPP_LINK } from "./whatsapp";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 pb-24 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between md:pb-10">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-primary text-primary-foreground font-display">
            L
          </span>
          <div>
            <p className="font-display text-base text-foreground">LFO Massoterapia</p>
            <p className="text-xs">Blumenau · Indaial</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em]">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp</a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram</a>
            <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="hover:text-foreground">Facebook</a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} Luiz Fernando.</p>
        </div>
      </div>
    </footer>
  );
}