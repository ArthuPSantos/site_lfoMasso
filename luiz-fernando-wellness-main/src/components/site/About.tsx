import { siteImages } from "./siteImages";

export function About() {
  return (
    <section id="sobre" className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-20">
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-secondary/60 sm:-inset-4" aria-hidden />
          <img
            src={siteImages.portrait}
            alt="Retrato do massoterapeuta Luiz Fernando"
            width={900}
            height={1100}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Sobre</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-foreground sm:text-4xl md:text-5xl">
            Um cuidado atento ao seu <em className="italic text-primary">corpo</em> e ao seu tempo.
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Luiz Fernando é massoterapeuta dedicado ao cuidado integral do corpo —
            unindo técnicas terapêuticas precisas a um ambiente acolhedor. Seu
            trabalho é voltado à recuperação muscular, alívio de tensões e ao
            equilíbrio entre corpo e mente.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg">
            Cada sessão é pensada de forma individual, respeitando o ritmo, a
            queixa e o objetivo de quem busca bem-estar — seja para aliviar dores
            crônicas, recuperar-se de esforços ou simplesmente relaxar.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Atendimento personalizado",
              "Ambiente acolhedor e tranquilo",
              "Técnicas terapêuticas validadas",
              "Horários flexíveis",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}