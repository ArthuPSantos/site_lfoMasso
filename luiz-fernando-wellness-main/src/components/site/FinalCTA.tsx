import { WHATSAPP_LINK } from "./whatsapp";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-primary px-6 py-12 text-center text-primary-foreground shadow-2xl sm:rounded-[2.5rem] sm:px-8 sm:py-16 md:px-16 md:py-24">
          <div className="absolute inset-0 -z-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,white,transparent_60%)]" aria-hidden />
          <p className="text-[10px] uppercase tracking-[0.28em] text-primary-foreground/70 sm:text-[11px] sm:tracking-[0.3em]">
            Seu corpo agradece
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance sm:text-4xl md:text-6xl">
            Pronto para se sentir <em className="italic">leve de novo</em>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] text-primary-foreground/85 sm:text-base md:text-lg">
            Agende sua sessão pelo WhatsApp e receba um atendimento atento,
            seguro e desenhado para o que você precisa hoje.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="relative z-50 mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-background px-6 py-4 text-sm font-medium text-foreground shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl sm:mt-10 sm:w-auto sm:px-8 cursor-pointer"
          >
            <span className="h-2 w-2 rounded-full bg-primary" />
            Agendar pelo WhatsApp
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}