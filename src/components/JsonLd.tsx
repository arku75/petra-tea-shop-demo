// JSON-LD para Google (U6): la Organización/Tienda y los Productos (tés) — server component.
import { TEAS } from "@/data/teas";
import { jsonLdSeguro } from "@/lib/jsonLd";

import { SITE_URL as BASE } from "@/lib/demo";

export function OrgJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Petra + Erik · Casa de Té",
    url: BASE,
    description: "Casa de té artesana: mezclas de plantas hechas en casa, cucharitas de madera talladas a mano y cajas de temporada.",
    founder: [{ "@type": "Person", name: "Petra" }, { "@type": "Person", name: "Erik" }],
    currenciesAccepted: "EUR",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSeguro(data) }} />;
}

export function TeasJsonLd({ sala }: { sala: "te" | "te-premium" }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: TEAS.filter((t) => t.sala === sala).map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: t.nombre,
        description: t.paraQueSirve,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdSeguro(data) }} />;
}
