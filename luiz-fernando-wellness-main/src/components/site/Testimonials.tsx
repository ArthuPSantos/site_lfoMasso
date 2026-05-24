const testimonials = [
  {
    name: "Mariana S.",
    role: "Blumenau",
    quote:
      "Saí da sessão renovada. O ambiente é acolhedor e o Luiz tem mãos sensíveis e técnicas — minha dor lombar simplesmente sumiu.",
  },
  {
    name: "Rafael T.",
    role: "Indaial",
    quote:
      "Atendimento profissional do começo ao fim. Recomendo para quem corre, treina pesado ou só precisa relaxar de verdade.",
  },
  {
    name: "Camila R.",
    role: "Blumenau",
    quote:
      "A ventosaterapia mudou minha rotina. Sinto meu corpo mais leve e durmo muito melhor desde que comecei o acompanhamento.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-secondary/40 py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Depoimentos</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-foreground sm:text-4xl md:text-5xl">
            Confiança que se sente em <em className="italic">cada toque</em>.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:gap-6 md:mt-14 md:grid-cols-3 md:gap-7">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-8"
            >
              <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M9.13 8C5.74 8 3 10.74 3 14.13c0 3.4 2.74 6.13 6.13 6.13.84 0 1.5-.66 1.5-1.5s-.66-1.5-1.5-1.5C7.4 17.26 6 15.86 6 14.13 6 12.4 7.4 11 9.13 11c.84 0 1.5-.66 1.5-1.5S9.97 8 9.13 8zm10.74 0c-3.39 0-6.13 2.74-6.13 6.13 0 3.4 2.74 6.13 6.13 6.13.84 0 1.5-.66 1.5-1.5s-.66-1.5-1.5-1.5c-1.73 0-3.13-1.4-3.13-3.13 0-1.73 1.4-3.13 3.13-3.13.84 0 1.5-.66 1.5-1.5S20.71 8 19.87 8z"/>
              </svg>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-7 border-t border-border/60 pt-5">
                <p className="font-display text-lg text-foreground">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}