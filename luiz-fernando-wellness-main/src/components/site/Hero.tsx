import { siteImages } from "./siteImages";
import { WHATSAPP_LINK } from "./whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-24 sm:pt-28 md:pt-32">
      <div className="absolute inset-0 -z-10 bg-grain opacity-60" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-6 sm:px-6 sm:pb-20 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-16 md:pb-32 md:pt-10">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:px-4 sm:text-[11px] sm:tracking-[0.25em]">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Blumenau · Indaial
          </span>
          <h1 className="mt-5 font-display text-[2.5rem] leading-[1.05] text-balance text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            LFO
            <span className="block italic text-primary">Massoterapia</span>
          </h1>
          <p className="mt-5 max-w-xl text-balance text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Cuidado terapêutico profissional focado em bem-estar, alívio de dores
            e relaxamento. Atendimento personalizado em Blumenau e Indaial.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-12px_var(--sage)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_var(--sage)] sm:px-7"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Agende sua sessão
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#servicos"
              className="text-center text-sm font-medium uppercase tracking-[0.2em] text-foreground/70 underline-offset-8 transition hover:text-foreground hover:underline"
            >
              Ver serviços
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border/70 pt-6 sm:gap-6 sm:pt-8">
            {[
              { k: "2+", v: "Anos de prática" },
              { k: "2", v: "Locais de atendimento" },
              { k: "2000+", v: "Sessões realizadas" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-2xl text-foreground sm:text-3xl">{s.k}</dt>
                <dd className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-secondary/60 blur-2xl sm:-inset-6 sm:rounded-[2.5rem]" aria-hidden />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-border/60 shadow-2xl sm:rounded-[2rem]">
            <img
              src={siteImages.hero}
              alt="Ambiente sereno de massoterapia com toalhas, vela e eucalipto"
              width={1600}
              height={1200}
              className="aspect-[4/5] h-full w-full object-cover sm:aspect-[4/5]"
            />
          </div>
          <div className="animate-float-soft absolute -left-4 bottom-8 hidden rounded-2xl border border-border bg-card/95 px-5 py-4 shadow-xl backdrop-blur md:block">
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Hoje</p>
            <p className="mt-1 font-display text-lg text-foreground">Horários disponíveis</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.157 5.335 5.492 0 12.05 0a11.82 11.82 0 018.413 3.488 11.821 11.821 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  );
}