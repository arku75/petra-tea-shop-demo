/** Public portfolio demo. There are no payment, email, or customer APIs. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/petra-tea-shop-demo";
export const SITE_URL = `https://arku75.github.io${BASE_PATH}`;
export const RECEIPT_KEY = "petra-demo-receipt";

export function assetPath(path: string): string {
  return path.startsWith("/") && !path.startsWith(`${BASE_PATH}/`)
    ? `${BASE_PATH}${path}`
    : path;
}

export const DEMO_COPY = {
  es: {
    notice: "Demo de portafolio · Sin compras ni mensajes reales",
    contact: "Puedes probar el formulario con datos ficticios. Nada se envía ni se guarda.",
    sent: "Prueba completada. No se ha enviado ni guardado ningún mensaje.",
    receipt: "Recibo de demostración · Sin cobros, pedidos ni envíos reales",
  },
  en: {
    notice: "Portfolio demo · No real purchases or messages",
    contact: "Try the form using fictional details. Nothing is sent or stored.",
    sent: "Demo completed. No message was sent or stored.",
    receipt: "Demo receipt · No real charges, orders, or deliveries",
  },
  sl: {
    notice: "Predstavitvena različica · Brez pravih nakupov ali sporočil",
    contact: "Obrazec preizkusite z izmišljenimi podatki. Nič se ne pošlje ali shrani.",
    sent: "Preizkus je končan. Nobeno sporočilo ni bilo poslano ali shranjeno.",
    receipt: "Predstavitveni račun · Brez pravih plačil, naročil ali dostav",
  },
} as const;
