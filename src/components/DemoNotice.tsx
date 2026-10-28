"use client";

import { useLang } from "@/i18n";
import { DEMO_COPY } from "@/lib/demo";

export default function DemoNotice() {
  const { lang } = useLang();
  return <aside className="demo-notice">{DEMO_COPY[lang].notice}</aside>;
}
