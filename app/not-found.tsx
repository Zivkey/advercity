import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center bg-white">
      <Container className="text-center">
        <p className="text-[12rem] font-black leading-none text-primary sm:text-[16rem]">
          404
        </p>
        <h1 className="mt-4 text-3xl font-black text-dark sm:text-4xl">
          Stranica nije pronadjena
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Izgleda da stranica koju trazite ne postoji ili je premeštena.
        </p>
        <div className="mt-10">
          <Button href="/" size="lg">
            Nazad na pocetnu
          </Button>
        </div>
      </Container>
    </section>
  );
}
