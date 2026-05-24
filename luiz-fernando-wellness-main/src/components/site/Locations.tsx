const locations = [
  {
    city: "Blumenau",
    address: "Rua João Pessoa, 2029",
    neighborhood: "Velha, Blumenau",
    mapQuery: "Rua João Pessoa, 2029, Velha, Blumenau",
  },
  {
    city: "Indaial",
    address: "Rua Boa Vista, 52",
    neighborhood: "Tapajós, Indaial",
    mapQuery: "Rua Boa Vista, 52, Tapajós, Indaial",
  },
];

export function Locations() {
  return (
    <section id="locais" className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary">Locais</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-balance text-foreground sm:text-4xl md:text-5xl">
            Dois espaços, o mesmo <em className="italic">cuidado</em>.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:grid-cols-2">
          {locations.map((l) => (
            <article
              key={l.city}
              className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary sm:aspect-[16/10]">
                <iframe
                  title={`Mapa - ${l.city}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(l.mapQuery)}&output=embed`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Atendimento</p>
                <h3 className="mt-2 font-display text-2xl text-foreground sm:text-3xl">{l.city}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {l.address}<br />{l.neighborhood}
                </p>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(l.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary hover:text-accent"
                >
                  Como chegar <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}