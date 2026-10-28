"use client";
// La carta a la casa: el formulario como sobre, sin artificio.
import { useState } from "react";
import Link from "next/link";
import { useT, useLang } from "@/i18n";
import { DEMO_COPY } from "@/lib/demo";

export default function ContactoClasica() {
  const T = useT();
  const { lang } = useLang();
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");
  const enviar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstado("ok");
  };
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 pt-12">
      <p className="eyebrow">{T.cl.heroEyebrow}</p>
      <h1 className="font-display text-4xl sm:text-5xl mt-2">{T.contacto.titulo}</h1>
      <p className="mt-4 text-sm">{DEMO_COPY[lang].contact}</p>
      {estado === "ok" ? (
        <div className="lamina p-8 mt-8 text-center">
          <p className="text-lg">✉️ {DEMO_COPY[lang].sent}</p>
        </div>
      ) : (
        <form onSubmit={enviar} className="lamina p-7 pt-8 mt-8 space-y-4">
          {estado === "error" && <p role="alert" className="text-[var(--granate)]">{T.contacto.error}</p>}
          <label className="block">
            <span className="eyebrow">{T.contacto.nombre}</span>
            <input name="nombre" required className="mt-1 w-full border border-[rgba(58,37,19,0.25)] rounded-[3px] px-3 py-2.5 bg-white/60" />
          </label>
          <label className="block">
            <span className="eyebrow">{T.contacto.email}</span>
            <input name="email" type="email" required className="mt-1 w-full border border-[rgba(58,37,19,0.25)] rounded-[3px] px-3 py-2.5 bg-white/60" />
          </label>
          <label className="block">
            <span className="eyebrow">{T.contacto.mensaje}</span>
            <textarea name="mensaje" required rows={5} className="mt-1 w-full border border-[rgba(58,37,19,0.25)] rounded-[3px] px-3 py-2.5 bg-white/60" />
          </label>
          {/* RGPD: consentimiento explícito, obligatorio, con enlace a la política */}
          <label className="flex items-start gap-3 text-sm leading-snug cursor-pointer">
            <input name="consiente" type="checkbox" required className="mt-1 w-5 h-5 accent-[var(--madera-oscura)] shrink-0" />
            <span>{T.cl.consentimiento} <Link href="/clasica/privacidad" className="underline underline-offset-2">{T.cl.navPrivacidad} →</Link></span>
          </label>
          <button className="btn-tinta px-6 py-3" disabled={estado === "enviando"}>
            {estado === "enviando" ? "…" : T.contacto.enviar}
          </button>
        </form>
      )}
    </main>
  );
}
