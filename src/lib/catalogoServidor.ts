import catalog from "../../data/catalogo-vivo.json";
import type { Tea, Extra, Plant } from "./types";
import { TEAS } from "@/data/teas";

export interface CatalogoVivo { teas: Tea[]; extras: Extra[]; plants?: Plant[] }
export async function catalogoVivo(): Promise<CatalogoVivo> {
  const data = catalog as Partial<CatalogoVivo>;
  return { teas: data.teas ?? [], extras: data.extras ?? [], plants: data.plants ?? [] };
}
export async function tesPublicados(): Promise<Tea[]> {
  const live = await catalogoVivo();
  return [...new Map([...TEAS, ...live.teas].map((tea) => [tea.id, tea])).values()];
}
