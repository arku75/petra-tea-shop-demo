"use client";

import { Component, type ReactNode } from "react";
import Link from "next/link";
import { useLang } from "@/i18n";
import { assetPath } from "@/lib/demo";

const COPY = {
  es: {
    eyebrow: "Petra + Erik · Casa de Té",
    title: "La casa también te espera aquí",
    checking: "Preparando la visita a la tienda…",
    body: "No hemos podido mostrar el recorrido 3D en este navegador. Puedes explorar los tés, cambiar de idioma y probar la cesta en la tienda clásica.",
    shop: "Entrar en la tienda clásica",
    teas: "Explorar los tés",
    image: "Vista del salón original en 3D, con muebles de madera y cajas de té",
    caption: "Vista previa del salón de la tienda 3D",
  },
  en: {
    eyebrow: "Petra + Erik · Tea House",
    title: "The tea house is still open to you",
    checking: "Preparing your visit to the shop…",
    body: "We could not display the 3D tour in this browser. You can explore the teas, switch languages, and try the basket in the classic shop.",
    shop: "Enter the classic shop",
    teas: "Explore the teas",
    image: "Preview of the original 3D tea room with wooden furniture and tea boxes",
    caption: "Preview of the original 3D tea room",
  },
  sl: {
    eyebrow: "Petra + Erik · Čajna hiša",
    title: "Čajna hiša vas čaka tudi tukaj",
    checking: "Pripravljamo obisk trgovine…",
    body: "V tem brskalniku nismo mogli prikazati 3D-ogleda. V klasični trgovini lahko raziščete čaje, zamenjate jezik in preizkusite košaro.",
    shop: "Vstopi v klasično trgovino",
    teas: "Razišči čaje",
    image: "Predogled izvirne 3D-čajnice z lesenim pohištvom in škatlami čaja",
    caption: "Predogled izvirne 3D-čajnice",
  },
} as const;

export default function SceneFallback({ checking = false }: { checking?: boolean }) {
  const { lang } = useLang();
  const copy = COPY[lang];
  return (
    <section className="scene-fallback" aria-label={copy.eyebrow}>
      <div className="scene-fallback-inner">
        <figure className="scene-fallback-figure">
          <img src={assetPath("/images/salon-doorway-preview.png")} alt={copy.image} />
          <figcaption>{copy.caption}</figcaption>
        </figure>
        <div className="scene-fallback-copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="font-display">{copy.title}</h1>
          <p role="status">{checking ? copy.checking : copy.body}</p>
          <div className="scene-fallback-links">
            <Link href="/clasica" className="btn-miel">{copy.shop} →</Link>
            <Link href="/clasica/tes" className="scene-fallback-secondary">{copy.teas}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Keep navigation and the classic storefront available if the renderer fails. */
export class SceneErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? <SceneFallback /> : this.props.children; }
}
