import Container from "@/components/ui/Container";
import { CLIENTS } from "@/lib/constants";

export default function ClientLogos() {
  return (
    <section className="bg-white py-32 sm:py-40">
      <Container>
        <p className="mb-16 text-center text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
          Brendovi koji nam veruju
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-16 md:gap-20">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
            >
              <div className="flex h-10 w-32 items-center justify-center">
                <span className="text-sm font-medium tracking-wide text-text-secondary">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
