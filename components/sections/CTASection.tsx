import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="bg-primary py-12 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-black text-white sm:text-4xl">
          Zelite da vas projekat
          <br />
          bude sledeci?
        </h2>
        <div className="mt-6">
          <Button href="/kontakt/" variant="white-outline" size="md">
            Kontaktirajte nas
          </Button>
        </div>
      </div>
    </section>
  );
}
