import type { Metadata, Viewport } from "next";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/400-italic.css";
import "@fontsource/karla/500.css";
import "@fontsource/karla/600.css";
import "@fontsource/karla/700.css";
import "./globals.css";
import { T } from "@/i18n/es";
import Menu from "@/components/hud/Menu";
import { LangProvider } from "@/i18n";
import DemoNotice from "@/components/DemoNotice";
import { assetPath, SITE_URL } from "@/lib/demo";


export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  robots: { index: false, follow: false },
  title: { default: `${T.marca} — Demo de ${T.tienda}`, template: `%s · ${T.marca} · Demo` },
  description:
    "Casa de té de Petra + Erik: mezclas de plantas hechas en casa, cucharitas de madera talladas a mano y cajas de temporada. Una tienda pequeña por la que se pasea.",
  openGraph: {
    siteName: `${T.marca} — ${T.tienda}`, locale: "es_ES", type: "website",
    images: [{ url: assetPath("/og.png"), width: 1200, height: 630, alt: `${T.marca} — ${T.tienda} · Ajdovščina` }],
  },
  icons: { icon: [{ url: assetPath("/favicon.svg"), type: "image/svg+xml" }, { url: assetPath("/favicon.ico"), sizes: "48x48" }], apple: assetPath("/apple-touch-icon.png") },
  manifest: assetPath("/manifest.webmanifest"),
};
export const viewport: Viewport = { themeColor: "#3a2513" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <LangProvider>
          <Menu />
          <DemoNotice />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
