const benefits = [
  { t: "Alívio de dores musculares", d: "Reduz tensões e desconfortos persistentes com técnicas manuais precisas." },
  { t: "Redução do estresse", d: "Acalma o sistema nervoso e devolve a sensação de leveza ao dia a dia." },
  { t: "Relaxamento corporal", d: "Liberação profunda de áreas contraídas para um corpo mais solto e fluido." },
  { t: "Recuperação muscular", d: "Apoio à recuperação de treinos, esforços e lesões com técnicas terapêuticas." },
  { t: "Mais bem-estar", d: "Equilíbrio entre corpo e mente, com efeitos que se estendem por dias." },
  { t: "Alívio de tensões", d: "Foco nas regiões mais sobrecarregadas — pescoço, ombros, lombar e quadril." },
];

export function Benefits() {
  return (
    <section id="beneficios" className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Benefícios</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-foreground sm:text-4xl md:text-5xl">
            O que você sente ao <em className="italic">cuidar de si</em>.
          </h2>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/70 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.t}
              className="group relative bg-card p-6 transition-colors hover:bg-secondary/50 sm:p-8"
            >
              <span className="font-display text-sm text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl text-foreground sm:text-2xl">{b.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
              <div className="mt-6 h-px w-10 bg-accent/60 transition-all group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}