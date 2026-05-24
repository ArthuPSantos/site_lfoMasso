import { siteImages } from "./siteImages";
import { WHATSAPP_LINK } from "./whatsapp";

const services = [
  {
    img: siteImages.services.myofascial,
    title: "Liberação Miofascial",
    desc: "Técnica manual que libera tensões profundas das fáscias, devolvendo mobilidade e aliviando dores crônicas.",
    benefits: ["Mais mobilidade", "Alívio de dores", "Postura equilibrada"],
  },
  {
    img: siteImages.services.stones,
    title: "Relaxante com Pedras Quentes",
    desc: "Massagem profundamente relaxante com pedras vulcânicas aquecidas — ideal para dissolver o estresse acumulado.",
    benefits: ["Relaxamento profundo", "Circulação ativa", "Bem-estar imediato"],
  },
  {
    img: siteImages.services.cupping,
    title: "Ventosaterapia",
    desc: "Terapia de sucção que estimula a circulação, reduz tensões musculares e auxilia na recuperação do corpo.",
    benefits: ["Recuperação muscular", "Redução de nódulos", "Drenagem natural"],
  },
  {
    img: siteImages.services.needling,
    title: "Dry Needling",
    desc: "Agulhamento seco preciso sobre pontos-gatilho, indicado para dores musculares persistentes e reabilitação.",
    benefits: ["Alívio focal", "Liberação de gatilhos", "Recuperação rápida"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative bg-secondary/40 py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Serviços</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-foreground sm:text-4xl md:text-5xl">
            Técnicas terapêuticas para o seu <em className="italic">equilíbrio</em>.
          </h2>
          <p className="mt-4 text-[15px] text-muted-foreground sm:text-base md:text-lg">
            Cada modalidade é escolhida conforme a necessidade do seu corpo —
            combinando ciência, sensibilidade e acolhimento.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-7">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
                <h3 className="font-display text-xl text-foreground sm:text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-1.5">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-foreground/70">
                      <span className="h-1 w-1 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Agendar <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}