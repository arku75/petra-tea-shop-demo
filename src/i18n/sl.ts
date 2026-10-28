// Slovenski vmesnik — enaka oblika kot es.ts (besedila kataloga ostanejo v španščini, dokler jih Petra ne prevede)
export const T_SL = {
  marca: "Petra + Erik",
  tienda: "Čajna hiša",
  nav: {
    inicio: "Vhod", salon: "Salon", te: "Čajna soba", tePremium: "Premium čaj",
    nosotros: "O nas", contacto: "Kontakt", carrito: "Košara",
    clasica: "Klasična trgovina", tienda3d: "3D trgovina",
  },
  intro: {
    teDelDia: "Čaj dneva",
    titulo: "Čajna hiša Petra + Erik",
    subtitulo: "Majhna trgovina iz lesa in steklenih kozarcev. Vstopi — vrata so odprta.",
    entrar: "Potisni vrata",
    pista: "…ali se dotakni vrat trgovine",
  },
  salon: {
    titulo: "Salon",
    pistaTe: "Zelena vrata vodijo v Čajno sobo",
    pistaPremium: "Bordo vrata v Premium čaj",
    cajas: "Sezonske škatle, na mizi",
  },
  sala: {
    mezclas: "Hišne mešanice",
    te: "Čajna soba", tePremium: "Soba premium čaja",
    pistaTarros: "Dotakni se kozarca in se odpre. Dotakni se rastlin: vsaka pove svojo zgodbo.",
    volver: "Nazaj v sobo",
    anadir: "Dodaj v košaro",
    precioPor: (g: number) => `kozarec ${g} g`,
    cucharasDeErik: "Erikove ročno izrezljane žličke — dotakni se ene",
    sorpresa: "S tem čajem potuje posebna Erikova žlička. Katera? — razkrije se na tvoji vstopnici.",
    tocaPlanta: "Dotakni se rastline v pahljači: vsaka pove, zakaj sodi v to mešanico.",
  },
  extra: { talladaPor: "izrezljal", despensaDe: "iz shrambe:" },
  caja: {
    enTemporada: "V sezoni",
    fueraTemporada: "Shranjeno izven sezone (+15 %)",
    contiene: "Vsebuje",
    teAlAzar: "En čaj iz sobe, po izbiri s police",
    cucharaAlAzar: "Ena Erikova žlička, naključno",
  },
  carrito: {
    titulo: "Tvoja košara",
    vacia: "Košara je prazna. V Čajni sobi čakajo kozarci.",
    irATienda: "V Čajno sobo",
    subtotal: "Vmesni znesek", envio: "Poštnina", envioGratis: "Brezplačno",
    envioGratisDesde: (n: string) => `Brezplačna poštnina nad ${n}`,
    descuento: "Popust", total: "Skupaj",
    cupon: "Imaš kupon?", cuponAplicar: "Uporabi",
    cuponInvalido: "Ta kupon ne obstaja (poskusi PETRA10)",
    pagarTarjeta: "Preizkusi naročilo", pagarPaypal: "Preizkusi naročilo",
    demoAviso: "Lokalna predstavitev: brez pravih plačil, naročil ali dostav. Ne vnašajte osebnih podatkov.",
    quitar: "Odstrani",
  },
  gracias: {
    titulo: "Hvala!",
    entrada: "VSTOPNICA V ČAJNO HIŠO",
    pedidoNum: "Vstopnica št.",
    cucharaTitulo: "Skrivnost ?",
    cucharaIntro: "Posebna žlička, ki potuje s tvojim naročilom, je…",
    bienvenidas: [
      "Vrata ostajajo odprta: vrni se, kadar želiš — voda bo vroča.",
      "Ta vstopnica nikoli ne poteče: hiša čaka s čajnikom na ognju.",
      "Hvala, da si posedel v naši hiši. Naslednjo skodelico natočiva skupaj.",
      "Naj te čaj spremlja, dokler se ne vrneš — ob ognju bo prostor zate.",
    ],
    cuerpo: "To je predogled računa, ki bo prišel po e-pošti z naslova hiše, ko bo trgovina povezana.",
    pedido: "Testno naročilo",
    volver: "Nazaj v salon",
    sinPedido: "Tu ni nobene nedavne vstopnice: ta stran se odpre sama ob koncu nakupa. Čajnik je še vedno na štedilniku —",
    pagadoTarjeta: "Predstavitveno naročilo", pagadoPaypal: "Predstavitveno naročilo",
    irClasica: "V klasično trgovino", ir3d: "Vstopi v 3D trgovino",
  },
  nosotros: {
    historia: "O Petri in Eriku",
    titulo: "Petra + Erik",
    petra: "Petra pripravlja čaje in vse ostalo: mešanice, škatle, shrambo. Vsaka mešanica se preizkusi za domačo mizo, preden pride v kozarec.",
    erik: "Erik obdeluje les. Vsakemu premium čaju in sezonski škatli priloži naključno izbrano ročno izrezljano žličko. Običajni čaji in celoletna domača škatla so brez žličke.",
  },
  contacto: {
    titulo: "Piši nam",
    nombre: "Tvoje ime", email: "Tvoj e-naslov", mensaje: "Tvoje sporočilo",
    enviar: "Preizkusi obrazec",
    enviado: "Preizkus je končan. Nobeno sporočilo ni bilo poslano ali shranjeno.",
    error: "Sporočila ni bilo mogoče poslati. Besedilo ostaja tukaj: poskusite znova.",
  },
  a11y: {
    escena: "Tridimenzionalna scena trgovine. Vsebina je na voljo tudi kot besedilo pod sceno.",
    cerrar: "Zapri", menuTienda: "Navigacija po trgovini", idioma: "Jezik", inicio: "Petra + Erik — domov",
    articulos: (n: number) => `${n} izdelkov`,
  },
  guia: {
    intro: "Potisni vrata trgovine — ali se jih dotakni.",
    salon: "Dotakni se škatle na mizi: vsak letni čas ima svojo.",
    te: "Dotakni se kozarca: odpre se in ti pokaže svoje rastline.",
    tePremium: "Dotakni se premium kozarca — z vsakim potuje 🥄 presenečenje.",
    carrito: "Tu je tvoja košara; kupon PETRA10 prinese darilce.",
    nosotros: "Dotakni se Erikovih žličk: vsaka pove svojo zgodbo.",
    contacto: "Pusti svoje pismo na pisalni mizi.",
  },
  cl: {
    faqTitulo: "Prava vprašanja",
    faq: [
      { q: "Kdaj prispe moje naročilo?", a: "Naročila pripravljamo ob torkih in četrtkih — mešanice pakiramo isti dan. Slovenija: 2-3 delovne dni; ostala EU: 4-7. Brezplačna dostava od 50 €." },
      { q: "Kateri izdelki vključujejo Erikovo žličko?", a: "Vsak premium čaj in sezonska škatla vključujeta naključno izbrano Erikovo žličko. Običajni čaji in celoletna domača škatla s čajem in sirom so brez žličke." },
      { q: "Kako dolgo zdržijo mešanice?", a: "Vsaka vrečka nosi datum mešanja. V zaprtem kozarcu brez svetlobe okoli 12 mesecev. Potem ne škodi — a izgubi svoj zakaj." },
      { q: "Zakaj so škatle izven sezone +15 % dražje?", a: "Hraniti pridelek druge sezone zahteva prostor in skrb. Raje povemo: škatla trenutne sezone je vedno po pošteni ceni." },
      { q: "Lahko vrnem naročilo?", a: "14 dni od dostave, neodprto. Odprtega ne sprejemamo (hrana je), a če kaj prispe poškodovano, zamenjamo brez vprašanj." },
      { q: "Od kod prihajajo rastline?", a: "Z domačega vrta, visokega travnika in od sosedov iz doline, ki jih poznamo po imenu. Vsak list pove, kaj dela vsaka rastlina; v Shrambi vidiš, kaj ostaja." },
      { q: "Rezljate žličke po naročilu?", a: "Erik rezlja, ko se pojavi les. Če te žlička očara in je ni več, ti sporočimo, ko njeno drevo da novo." },
    ],
    enviosTitulo: "Dostava in vračila",
    enviosBloques: {
      envios: ["Naročila pripravljamo ob torkih in četrtkih: mešanice pakiramo isti dan.", "Slovenija: 2-3 delovne dni · 3,90 €", "Evropska unija: 4-7 delovnih dni · 4,90 €", "Brezplačno od 50 € po vsej EU.", "Embalaža iz papirja in kartona, brez plastike."],
      devoluciones: ["14 dni od dostave, neodprto.", "Odprtega ne sprejemamo (hrana je); poškodovano zamenjamo brez vprašanj.", "Piši nam prek Kontakta in uredimo v enem dnevu."],
      pago: "Naročilo ustvari le izmišljen račun v tem zavihku. Ni plačil, e-poštnih potrdil, dostav ali vračil izdelkov.",
    },
    metodoTitulo: "Kako dela ta hiša",
    metodo: [
      { t: "nabrati", d: "Rastline nabiramo ob svojem času, ne prej: kamilico, ko travnik porumeni, bezeg točno tisti junijski teden. Česar vrt ne da, dajo sosedje z imenom." },
      { t: "zmešati", d: "Petra pokuša vsako mešanico za kuhinjsko mizo, dokler zakaj vsake rastline ne zdrži. Če rastlina ne prispeva, gre ven." },
      { t: "rezljati", d: "Erik rezlja padli ali obrezani les, nikoli zdravega drevesa. Vsaka žlička hrani ime svojega drevesa." },
    ],
    mezclasT: "Mešanice", maderaT: "Les", ahora: "zdaj", casiAgotado: "skoraj razprodano",
    pagoSenal: "Lokalna predstavitev: brez pravih plačil, naročil ali dostav. Ne vnašajte osebnih podatkov.",
    entradaReclamo: "Tvoj nakup ustvari oštevilčeno VSTOPNICO hiše",
    entradaCuchara: "— in v njej potuje Erikova žlička 🥄?",
    teDeLaSala: "1 hišni čaj po izbiri",
    cucharaCorta: "1 Erikova žlička naključno — razkrita na vstopnici",
    navDespensa: "Shramba",
    despensaTitulo: "Hišna shramba",
    despensaSub: "Kar je zdaj na policah, sezono za sezono. Ko česa zmanjka, tega ni do naslednje letine.",
    quedan: "ostane",
    unidades: "kos.",
    agotado: "razprodano do naslednjič",
    vaEnCaja: "gre v škatlo",
    todoElAno: "vse leto",
    navTes: "Čaji", navCajas: "Sezonske škatle", navCucharas: "Žličke", navA11y: "Deli trgovine",
    cesta: "Košara", pieLema: "Doma pripravljene zeliščne mešanice in ročno rezljane žličke iz Vipavske doline.",
    pieTienda: "Trgovina", pieCasa: "Hiša", pieDerechos: "narejeno doma, brez naglice",
    heroEyebrow: "Čajna hiša · Ajdovščina", verTes: "Poglej hišne čaje", verCaja: "Škatla te sezone",
    lamina: "List", plantasDe: "rastlin", porQue: "zakaj sodi v to mešanico",
    cajaTemporada: "Škatla te sezone", dentroCaja: "V škatli",
    cucharaSorpresa: "In ena Erikova žlička naključno — razkrita na tvoji vstopnici ob nakupu.",
    fueraTemporada: "Izven svoje sezone", recargo: "+15 % izven sezone — poštenost na prvem mestu",
    procedencias: "Od kod prihaja vse", procedenciasSub: "Nič generičnega: vsaka stvar v tej hiši ima svoj kraj in svojo zgodbo.",
    erikTitulo: "Erikove žličke", erikSub: "Rezljane ena po ena; ni dveh enakih. Ena potuje skrita v vsaki škatli.",
    verColeccion: "Poglej zbirko",
    destacados: "Hišne mešanice", verTodos: "Vse",
    preparacion: "Priprava", prepAgua: "Voda pri 95 °C", prepTiempo: "5–7 minut", prepCantidad: "Zvrhana žlička na skodelico",
    volver: "Nazaj", anadir: "V košaro", enCesta: "V košari",
    filtroTodos: "Vsi", filtroClasicos: "Hišni", filtroPremium: "Premium",
    premiumNota: "Premium čaji nosijo 🥄?: presenečenje — Erikova žlička, razkrita šele na vstopnici.",
    cestaTitulo: "Tvoja košara", cestaVacia: "Košara je prazna. Čaji čakajo.",
    cupon: "Imaš kupon?", cuponEtiqueta: "Kupon", emailRecibo: "Izmišljen e-naslov (neobvezno; se ne shrani)", aplicar: "Uporabi", subtotal: "Vmesni znesek", envio: "Dostava",
    envioGratis: "Brezplačna dostava od 50 €", total: "Skupaj", pagarTarjeta: "Preizkusi naročilo",
    demoAviso: "Lokalna predstavitev: brez pravih plačil, naročil ali dostav. Ne vnašajte osebnih podatkov.",
    seguirComprando: "Nadaljuj z brskanjem",
    visita3d: "Obišči trgovino v 3D",
    pieLegal: "Pravno",
    navLegal: "Pravno obvestilo", navPrivacidad: "Zasebnost", navCookies: "Piškotki", navDevoluciones: "Vračila",
    legalTitulo: "Pravno obvestilo",
    legal: [
      {
        "t": "Predstavitveni projekt",
        "p": [
          "To je javna predstavitev spletnega projekta Petra + Erik, ne delujoča trgovina. Izdelki, cene in besedila so prikazani kot primeri oblikovanja.",
          "Naročilo ustvari le izmišljen račun v tem zavihku. Ni plačil, e-poštnih potrdil, dostav ali vračil izdelkov."
        ]
      }
    ],
    privacidadTitulo: "Zasebnost",
    privacidad: [
      {
        "t": "Zasebnost predstavitve",
        "p": [
          "Obrazci ne pošiljajo ali shranjujejo vašega imena, e-naslova ali sporočila. Za preizkus uporabite izmišljene podatke.",
          "GitHub Pages dostavlja javne datoteke. Ponudnik gostovanja lahko beleži zahteve HTTP v skladu s svojimi pogoji. Aplikacija nima analitike ali oglaševanja."
        ]
      },
      {
        "t": "Samo v vašem brskalniku",
        "p": [
          "Košara in jezik se shranita v localStorage s predpono petra-demo. Izmišljeni račun uporablja sessionStorage. Podatke odstranite tako, da izbrišete podatke spletnega mesta."
        ]
      }
    ],
    cookiesTitulo: "Piškotki",
    cookies: [
      {
        "t": "Samo v vašem brskalniku",
        "p": [
          "Košara in jezik se shranita v localStorage s predpono petra-demo. Izmišljeni račun uporablja sessionStorage. Podatke odstranite tako, da izbrišete podatke spletnega mesta.",
          "GitHub Pages dostavlja javne datoteke. Ponudnik gostovanja lahko beleži zahteve HTTP v skladu s svojimi pogoji. Aplikacija nima analitike ali oglaševanja."
        ]
      }
    ],
    devolucionesTitulo: "Vračila",
    devoluciones: [
      {
        "t": "Brez pravih naročil",
        "p": [
          "Naročilo ustvari le izmišljen račun v tem zavihku. Ni plačil, e-poštnih potrdil, dostav ali vračil izdelkov."
        ]
      }
    ],
    e404Titulo: "Te strani ni v hiši",
    e404Cuerpo: "Povezava vodi na prazno polico. Poskusi v klasični trgovini ali vstopi v 3D trgovino.",
    consentimiento: "Razumem, da je to predstavitveni obrazec in da sporočilo ne bo poslano.",
    consentimientoFalta: "Označi polje o zasebnosti, da pustiš pismo.",
    historiaTitulo: "Majhna hiša, ki diši po čaju",
    historia: "Petra meša rastline v kuhinji; Erik rezlja les v delavnici zraven. Vse, kar vidiš, prihaja iz teh dveh parov rok in od ljudi iz doline, ki jih poznamo po imenu.",
  },
  provisional: "Lokalna predstavitev: brez pravih plačil, naročil ali dostav. Ne vnašajte osebnih podatkov.",
} as const;
