"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SERVICES } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Ime mora imati najmanje 2 karaktera"),
  email: z.string().email("Unesite ispravnu email adresu"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Poruka mora imati najmanje 10 karaktera"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Greska pri slanju");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full border border-light-border bg-white px-4 py-3 text-dark outline-none transition-colors focus:border-primary";
  const errorClasses = "mt-1 text-xs text-primary";

  if (status === "success") {
    return (
      <div className="bg-green-50 p-8 text-center">
        <p className="text-xl font-bold text-green-800">
          Hvala vam na poruci!
        </p>
        <p className="mt-2 text-green-700">
          Odgovoricemo vam u najkracem roku.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-primary underline"
        >
          Posaljite novu poruku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
            Ime i prezime *
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={cn(inputClasses, errors.name && "border-primary")}
            placeholder="Vase ime"
          />
          {errors.name && (
            <p className={errorClasses}>{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={cn(inputClasses, errors.email && "border-primary")}
            placeholder="vasa@email.com"
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={inputClasses}
            placeholder="+381 6x xxx xxxx"
          />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
            Kompanija
          </label>
          <input
            id="company"
            type="text"
            {...register("company")}
            className={inputClasses}
            placeholder="Naziv kompanije"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
          Usluga koja vas zanima
        </label>
        <select
          id="service"
          {...register("service")}
          className={cn(inputClasses, "appearance-none")}
        >
          <option value="">Izaberite uslugu</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          Poruka *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={cn(inputClasses, "resize-none", errors.message && "border-primary")}
          placeholder="Opisite nam sta vam treba..."
        />
        {errors.message && (
          <p className={errorClasses}>{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-primary">
          Doslo je do greske. Pokusajte ponovo ili nas kontaktirajte telefonom.
        </p>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? "Slanje..." : "Posaljite poruku"}
      </Button>
    </form>
  );
}
