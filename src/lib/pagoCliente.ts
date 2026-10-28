"use client";

import { cartSubtotal, cartDiscount, cartShipping, lineName, linePrice } from "./cart";
import { cuponByCodigo } from "@/data/coupons";
import type { CartLine } from "./types";
import { assetPath, RECEIPT_KEY } from "./demo";

/** Generate a local demo receipt. Email is deliberately neither read nor persisted. */
export async function iniciarPago(lines: unknown, codigo: string | null, _email: string, _clasica: boolean) {
  if (!Array.isArray(lines) || !lines.length) throw new Error("La cesta está vacía / Empty basket.");
  const items = lines as CartLine[];
  if (items.some((line) => !Number.isInteger(line.qty) || line.qty < 1 || line.qty > 999)) {
    throw new Error("Cantidad no válida / Invalid quantity.");
  }
  const sub = cartSubtotal(items);
  const cupon = codigo ? cuponByCodigo(codigo) ?? null : null;
  const disc = cartDiscount(sub, cupon);
  const ship = cartShipping(sub - disc);
  const receipt = {
    test: true,
    metodo: "demo",
    fecha: new Date().toISOString(),
    cupon: cupon?.codigo ?? null,
    entrada: `DEMO-${Date.now().toString(36).toUpperCase()}`,
    lineas: items.map((line) => ({ nombre: lineName(line), qty: line.qty, precio: linePrice(line) })),
    sub, disc, ship, total: Math.round((sub - disc + ship) * 100) / 100,
    fraseIdx: 0,
  };
  sessionStorage.setItem(RECEIPT_KEY, JSON.stringify(receipt));
  window.location.assign(assetPath("/gracias/"));
}
