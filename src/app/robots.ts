export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { SITE_URL as BASE } from "@/lib/demo";
export default function robots(): MetadataRoute.Robots {
  return {
    // cestas, recibos, el taller de Petra y la API no son páginas para buscar
    rules: { userAgent: "*", disallow: "/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
