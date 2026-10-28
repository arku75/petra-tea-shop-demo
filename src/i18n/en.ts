// English interface — same shape as es.ts (catalogue texts stay Spanish until Petra translates them)
export const T_EN = {
  marca: "Petra + Erik",
  tienda: "Tea House",
  nav: {
    inicio: "Entrance", salon: "Parlour", te: "Tea Room", tePremium: "Premium Tea",
    nosotros: "About us", contacto: "Contact", carrito: "Basket",
    clasica: "Classic shop", tienda3d: "3D shop",
  },
  intro: {
    teDelDia: "Tea of the day",
    titulo: "Petra + Erik's Tea House",
    subtitulo: "A small shop of wood and glass jars. Come in — the door is open.",
    entrar: "Push the door",
    pista: "…or tap the shop door",
  },
  salon: {
    titulo: "The parlour",
    pistaTe: "The green door leads to the Tea Room",
    pistaPremium: "The claret door, to Premium Tea",
    cajas: "The seasonal boxes, on the table",
  },
  sala: {
    mezclas: "House blends",
    te: "Tea Room", tePremium: "Premium Tea Room",
    pistaTarros: "Tap a jar and it opens. Tap its plants: each one tells its story.",
    volver: "Back to the room",
    anadir: "Add to basket",
    precioPor: (g: number) => `${g} g jar`,
    cucharasDeErik: "Erik's hand-carved little spoons — tap one",
    sorpresa: "A special little spoon by Erik travels with this tea. Which one? — revealed on your ticket.",
    tocaPlanta: "Tap a plant in the fan: each one tells why it belongs in this blend.",
  },
  extra: { talladaPor: "carved by", despensaDe: "from the pantry of" },
  caja: {
    enTemporada: "In season",
    fueraTemporada: "Kept out of season (+15%)",
    contiene: "Contains",
    teAlAzar: "One tea from the room, your pick from the shelf",
    cucharaAlAzar: "One of Erik's little spoons, at random",
  },
  carrito: {
    titulo: "Your basket",
    vacia: "The basket is empty. There are jars waiting in the Tea Room.",
    irATienda: "Go to the Tea Room",
    subtotal: "Subtotal", envio: "Shipping", envioGratis: "Free",
    envioGratisDesde: (n: string) => `Free shipping from ${n}`,
    descuento: "Discount", total: "Total",
    cupon: "Have a coupon?", cuponAplicar: "Apply",
    cuponInvalido: "That coupon doesn't exist (try PETRA10)",
    pagarTarjeta: "Simulate order", pagarPaypal: "Simulate order",
    demoAviso: "Local demonstration: no charges, real orders, or deliveries. Do not enter personal details.",
    quitar: "Remove",
  },
  gracias: {
    titulo: "Thank you!",
    entrada: "TEA HOUSE ADMISSION",
    pedidoNum: "Ticket no.",
    cucharaTitulo: "The secret of the ?",
    cucharaIntro: "The special little spoon travelling with your order is…",
    bienvenidas: [
      "The door stays open: come back whenever you like, the water will be hot.",
      "This ticket never expires: the house waits with the kettle on.",
      "Thank you for sitting a while in our house. The next cup we pour together.",
      "May the tea keep you company until you return — and there will be a seat by the fire.",
    ],
    cuerpo: "This is a preview of the receipt that will arrive by email from the house address once the shop is connected.",
    pedido: "Test order",
    volver: "Back to the parlour",
    sinPedido: "There is no recent ticket here: this page opens by itself when a purchase ends. The kettle is still on —",
    pagadoTarjeta: "Demonstration order", pagadoPaypal: "Demonstration order",
    irClasica: "Go to the classic shop", ir3d: "Enter the 3D shop",
  },
  nosotros: {
    historia: "About Petra and Erik",
    titulo: "Petra + Erik",
    petra: "Petra makes the teas and prepares everything: the blends, the boxes, the pantry. Every blend is tasted at the kitchen table before it reaches a jar.",
    erik: "Erik works the wood. One of his hand-carved spoons, chosen at random, accompanies every premium tea and seasonal box. Regular teas and the year-round House Box do not include a spoon.",
  },
  contacto: {
    titulo: "Write to us",
    nombre: "Your name", email: "Your email", mensaje: "Your message",
    enviar: "Try the form",
    enviado: "Demo completed. No message was sent or stored.",
    error: "Your message could not be sent. It is still here: please try again.",
  },
  a11y: {
    escena: "Three-dimensional scene of the shop. The content is also available as text below the scene.",
    cerrar: "Close", menuTienda: "Shop navigation", idioma: "Language", inicio: "Petra + Erik — home",
    articulos: (n: number) => `${n} items`,
  },
  guia: {
    intro: "Push the shop door — or just tap it.",
    salon: "Tap a box on the table: every season has its own.",
    te: "Tap a jar: it opens and shows you its plants.",
    tePremium: "Tap a premium jar — the 🥄 surprise travels with each one.",
    carrito: "Here is your basket; coupon PETRA10 brings a little gift.",
    nosotros: "Tap Erik's little spoons: each tells its own story.",
    contacto: "Leave your letter on the desk.",
  },
  cl: {
    faqTitulo: "Real questions",
    faq: [
      { q: "When does my order arrive?", a: "We pack orders on Tuesdays and Thursdays — blends are bagged that same day. Slovenia: 2-3 working days; rest of the EU: 4-7. Free shipping from €50." },
      { q: "Which products include one of Erik's spoons?", a: "Every premium tea and seasonal box includes one of Erik's spoons chosen at random. Regular teas and the year-round tea-and-cheese House Box do not include a spoon." },
      { q: "How long do the blends keep?", a: "Each bag carries its blending date. In a closed jar away from light, about 12 months at its best. After that it does no harm — but loses its why." },
      { q: "Why do out-of-season boxes cost +15%?", a: "Storing another season's produce takes space and care. We'd rather say it: the current season's box is always at its fair price." },
      { q: "Can I return an order?", a: "14 days from delivery, unopened. Opened food can't be returned, but if anything arrives wrong we replace it, no questions." },
      { q: "Where do the plants come from?", a: "From the home garden, the high meadow and valley neighbours we know by name. Each plate says what every plant does; The pantry shows what's left." },
      { q: "Do you carve spoons to order?", a: "Erik carves when the wood appears. If a spoon you love is gone, we'll tell you when its tree gives another." },
    ],
    enviosTitulo: "Shipping & returns",
    enviosBloques: {
      envios: ["We pack orders Tuesdays and Thursdays: blends are bagged that day.", "Slovenia: 2-3 working days · €3.90", "European Union: 4-7 working days · €4.90", "Free from €50 across the EU.", "Paper and cardboard packaging, no plastic."],
      devoluciones: ["14 days from delivery, unopened.", "Opened goods can't be returned (it's food); anything damaged we replace, no questions.", "Write to us via Contact and we'll sort it within a day."],
      pago: "An order only creates a fictional receipt in this tab. There are no charges, email confirmations, deliveries, or product returns.",
    },
    metodoTitulo: "How this house works",
    metodo: [
      { t: "gather", d: "Plants are picked in their moment, not before: chamomile when the meadow turns yellow, elderflower in its exact June week. What the garden doesn't give, named neighbours do." },
      { t: "blend", d: "Petra tastes every blend at the kitchen table until each plant's why holds up. If a plant adds nothing, out it goes." },
      { t: "carve", d: "Erik carves fallen or pruned wood, never a healthy tree. Each spoon keeps its tree's name." },
    ],
    mezclasT: "The blends", maderaT: "The wood", ahora: "now", casiAgotado: "almost gone",
    pagoSenal: "Local demonstration: no charges, real orders, or deliveries. Do not enter personal details.",
    entradaReclamo: "Your purchase creates a numbered HOUSE TICKET",
    entradaCuchara: "— and Erik's 🥄? spoon travels inside",
    teDeLaSala: "1 house tea of your choice",
    cucharaCorta: "1 of Erik's spoons, at random — revealed on your ticket",
    navDespensa: "The pantry",
    despensaTitulo: "The house pantry",
    despensaSub: "What's on the shelves right now, season by season. When something runs out, it's gone until the next harvest.",
    quedan: "left",
    unidades: "pcs.",
    agotado: "gone until next time",
    vaEnCaja: "goes in the box of",
    todoElAno: "all year",
    navTes: "The teas", navCajas: "Season boxes", navCucharas: "Spoons", navA11y: "Shop sections",
    cesta: "Basket", pieLema: "House-made herbal blends and hand-carved spoons, from the Vipava valley.",
    pieTienda: "The shop", pieCasa: "The house", pieDerechos: "made at home, unhurried",
    heroEyebrow: "Tea house · Ajdovščina", verTes: "See the house teas", verCaja: "This season's box",
    lamina: "Plate", plantasDe: "plants", porQue: "why it belongs in this blend",
    cajaTemporada: "The box of this season", dentroCaja: "Inside the box",
    cucharaSorpresa: "And one of Erik's little spoons at random — revealed on your purchase ticket.",
    fueraTemporada: "Out of its season", recargo: "+15% out of season — honesty first",
    procedencias: "Where everything comes from", procedenciasSub: "Nothing generic: everything in this house has its place and its story.",
    erikTitulo: "Erik's spoons", erikSub: "Carved one by one; no two alike. One travels hidden in every box.",
    verColeccion: "See the collection",
    destacados: "House blends", verTodos: "See all",
    preparacion: "Brewing", prepAgua: "Water at 95 °C", prepTiempo: "5–7 minutes", prepCantidad: "One heaped teaspoon per cup",
    volver: "Back", anadir: "Add to basket", enCesta: "In the basket",
    filtroTodos: "All", filtroClasicos: "House", filtroPremium: "Premium",
    premiumNota: "Premium teas carry 🥄?: a surprise spoon from Erik, revealed only on your ticket.",
    cestaTitulo: "Your basket", cestaVacia: "The basket is empty. The teas are waiting.",
    cupon: "Have a coupon?", cuponEtiqueta: "Coupon", emailRecibo: "Fictional email (optional; not stored)", aplicar: "Apply", subtotal: "Subtotal", envio: "Shipping",
    envioGratis: "Free shipping from €50", total: "Total", pagarTarjeta: "Simulate order",
    demoAviso: "Local demonstration: no charges, real orders, or deliveries. Do not enter personal details.",
    confirmarPedidoDemo: "Confirm demo order",
    seguirComprando: "Keep browsing",
    visita3d: "Visit the shop in 3D",
    pieLegal: "The legal bit",
    navLegal: "Legal notice", navPrivacidad: "Privacy", navCookies: "Cookies", navDevoluciones: "Returns",
    legalTitulo: "Legal notice",
    legal: [
      {
        "t": "Portfolio demo",
        "p": [
          "This is a public demonstration of the Petra + Erik website project, not the operational shop. Products, prices, and copy are shown as design examples.",
          "An order only creates a fictional receipt in this tab. There are no charges, email confirmations, deliveries, or product returns."
        ]
      }
    ],
    privacidadTitulo: "Privacy",
    privacidad: [
      {
        "t": "Demo privacy",
        "p": [
          "Forms do not send or store your name, email, or message. Use fictional details when trying them.",
          "GitHub Pages serves the public files. The hosting provider may log HTTP requests under its own terms. The application includes no analytics or advertising."
        ]
      },
      {
        "t": "Only in your browser",
        "p": [
          "The basket and language are stored in localStorage using the petra-demo prefix. The fictional receipt uses sessionStorage. Clear site data to remove them."
        ]
      }
    ],
    cookiesTitulo: "Cookies",
    cookies: [
      {
        "t": "Only in your browser",
        "p": [
          "The basket and language are stored in localStorage using the petra-demo prefix. The fictional receipt uses sessionStorage. Clear site data to remove them.",
          "GitHub Pages serves the public files. The hosting provider may log HTTP requests under its own terms. The application includes no analytics or advertising."
        ]
      }
    ],
    devolucionesTitulo: "Returns",
    devoluciones: [
      {
        "t": "No real orders",
        "p": [
          "An order only creates a fictional receipt in this tab. There are no charges, email confirmations, deliveries, or product returns."
        ]
      }
    ],
    e404Titulo: "This page isn't in the house",
    e404Cuerpo: "That link leads to an empty shelf. Try the classic shop or step into the 3D shop.",
    consentimiento: "I understand this is a demonstration form and no message will be sent.",
    consentimientoFalta: "Tick the privacy box to leave the letter.",
    historiaTitulo: "A small house that smells of tea",
    historia: "Petra blends the plants in the kitchen; Erik carves wood in the workshop next door. Everything you see comes from these two pairs of hands and from valley people we know by name.",
  },
  provisional: "Local demonstration: no charges, real orders, or deliveries. Do not enter personal details.",
} as const;
