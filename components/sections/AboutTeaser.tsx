import Button from "@/components/ui/Button";

export default function AboutTeaser() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          O nama
        </p>
        <h2 className="mt-5 text-4xl font-black tracking-tight text-dark sm:text-5xl">
          25+ Godina Iskustva
          <br />u Marketingu
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary">
          Od 1999. godine pomažemo preduzećima u Nišu i Srbiji da izgrade
          jake brendove i ostvare merljive rezultate. Naš tim od 20+
          stručnjaka kombinuje kreativnost sa strateškim pristupom — od
          digitalnog marketinga i SEO optimizacije do OOH kampanja na
          našim sopstvenim bilbordima.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-secondary">
          Radili smo sa brendovima kao što su McDonald&apos;s, Delta Planet,
          AIK Banka, Eurobank i Vapiano — dokazujući da rezultati govore
          glasnije od obećanja. Bilo da vam treba kompletna digitalna
          strategija, redizajn vizuelnog identiteta ili precizno targetirane
          Google Ads kampanje, naš tim je tu da vaš biznis dovede do novih
          klijenata.
        </p>
        <div className="mt-10">
          <Button href="/o-nama/" variant="outline">
            Saznajte vise
          </Button>
        </div>
      </div>
    </section>
  );
}
