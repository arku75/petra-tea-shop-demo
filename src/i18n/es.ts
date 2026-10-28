// Todos los textos de interfaz viven aquí (decisión VISION §9: estructura i18n desde el día 1).
// Añadir un idioma = copiar este fichero y traducirlo. NUNCA escribir textos dentro de componentes.
export const T = {
  marca: "Petra + Erik",
  tienda: "Casa de Té",
  nav: {
    inicio: "Entrada", salon: "Salón", te: "Sala de Té", tePremium: "Té Premium",
    nosotros: "Nosotros", contacto: "Contacto", carrito: "Cesta",
    clasica: "Web clásica", tienda3d: "Tienda 3D",
  },
  intro: {
    teDelDia: "Té del día",
    titulo: "Casa de Té de Petra + Erik",
    subtitulo: "Una tienda pequeña, de madera y de tarros de cristal. Pasa: la puerta está abierta.",
    entrar: "Empuja la puerta",
    pista: "…o toca la puerta de la tienda",
  },
  salon: {
    titulo: "El salón",
    pistaTe: "La puerta verde lleva a la Sala de Té",
    pistaPremium: "La puerta granate, al Té Premium",
    cajas: "Las cajas de temporada, sobre la mesa",
  },
  sala: {
    mezclas: "Mezclas de la casa",
    te: "Sala de Té", tePremium: "Sala del Té Premium",
    pistaTarros: "Toca un tarro y se abre. Toca sus plantas: cada una cuenta la suya.",
    volver: "Volver a la sala",
    anadir: "Añadir a la cesta",
    precioPor: (g: number) => `tarro de ${g} g`,
    cucharasDeErik: "Las cucharitas de Erik, talladas a mano — toca una",
    sorpresa: "Con este té viaja una cucharita especial de Erik. ¿Cuál? — se revela en tu entrada.",
    tocaPlanta: "Toca una planta del abanico: cada una cuenta por qué está en este mix.",
  },
  extra: { talladaPor: "tallada por", despensaDe: "de la despensa de" },
  caja: {
    enTemporada: "En temporada",
    fueraTemporada: "Guardada fuera de temporada (+15%)",
    contiene: "Contiene",
    teAlAzar: "Un té de la sala, a elegir de la estantería",
    cucharaAlAzar: "Una cucharita de Erik, al azar de la colección",
  },
  carrito: {
    titulo: "Tu cesta",
    vacia: "La cesta está vacía. En la Sala de Té hay tarros esperando.",
    irATienda: "Ir a la Sala de Té",
    subtotal: "Subtotal", envio: "Envío", envioGratis: "Gratis",
    envioGratisDesde: (n: string) => `Envío gratis a partir de ${n}`,
    descuento: "Descuento", total: "Total",
    cupon: "¿Tienes un cupón?", cuponAplicar: "Aplicar",
    cuponInvalido: "Ese cupón no existe (prueba PETRA10)",
    pagarTarjeta: "Simular pedido", pagarPaypal: "Simular pedido",
    demoAviso: "Demostración local: no se realizan cobros, pedidos ni envíos. No introduzcas datos personales.",
    quitar: "Quitar",
  },
  gracias: {
    titulo: "¡Gracias!",
    entrada: "ENTRADA A LA CASA DE TÉ",
    pedidoNum: "Entrada nº",
    cucharaTitulo: "El secreto de la ?",
    cucharaIntro: "La cucharita especial que viaja con tu pedido es…",
    bienvenidas: [
      "La puerta queda abierta: vuelve cuando quieras, el agua estará caliente.",
      "Esta entrada no caduca nunca: la casa te espera con la tetera puesta.",
      "Gracias por sentarte un rato en nuestra casa. La próxima taza la servimos juntos.",
      "Que el té te acompañe hasta que vuelvas — y cuando vuelvas, habrá sitio junto al fuego.",
    ],
    cuerpo: "Esto es una vista previa del recibo que llegará por correo desde la dirección de la casa cuando la tienda esté conectada.",
    pedido: "Pedido de prueba",
    volver: "Volver al salón",
    sinPedido: "Aquí no hay ninguna entrada reciente: esta página se abre sola al terminar una compra. La tetera sigue puesta —",
    pagadoTarjeta: "Pedido de demostración", pagadoPaypal: "Pedido de demostración",
    irClasica: "Ir a la web clásica", ir3d: "Entrar en la tienda 3D",
  },
  nosotros: {
    historia: "Sobre Petra y Erik",
    titulo: "Petra + Erik",
    petra: "Petra hace los tés y prepara todo: los mixes, las cajas, la despensa. Cada mezcla se prueba en la mesa de casa antes de llegar a un tarro.",
    erik: "Erik trabaja la madera. Una de sus cucharitas talladas a mano viaja al azar con cada té premium y cada caja estacional. Los tés normales y la caja general no incluyen cuchara.",
  },
  contacto: {
    titulo: "Escríbenos",
    nombre: "Tu nombre", email: "Tu correo", mensaje: "Tu mensaje",
    enviar: "Probar formulario",
    enviado: "Prueba completada. No se ha enviado ni guardado ningún mensaje.",
    error: "No se ha podido enviar. Conservamos tu mensaje aquí: vuelve a intentarlo.",
  },
  a11y: {
    escena: "Escena tridimensional de la tienda. El contenido también está disponible como texto bajo la escena.",
    cerrar: "Cerrar", menuTienda: "Navegación de la tienda", idioma: "Idioma", inicio: "Petra + Erik — inicio",
    articulos: (n: number) => `${n} artículos`,
  },
  guia: {
    intro: "Empuja la puerta de la tienda — o tócala directamente.",
    salon: "Toca una caja de la mesa: cada estación tiene la suya.",
    te: "Toca un tarro: se abre y te enseña sus plantas.",
    tePremium: "Toca un tarro premium — con cada uno viaja la 🥄 sorpresa.",
    carrito: "Aquí está tu cesta; el cupón PETRA10 te hace un regalo.",
    nosotros: "Toca las cucharitas de Erik: cada una cuenta la suya.",
    contacto: "Deja tu carta sobre el escritorio.",
  },
  cl: {
    faqTitulo: "Preguntas de verdad",
    faq: [
      { q: "¿Cuándo llega mi pedido?", a: "Preparamos los pedidos los martes y jueves — las mezclas se envasan al momento. En Eslovenia, 2-3 días laborables; al resto de la UE, 4-7. Envío gratis desde 50 €." },
      { q: "¿Qué productos incluyen una cucharita de Erik?", a: "Cada té premium y cada caja estacional incluyen una cucharita de Erik al azar. Los tés normales y la caja general de té con queso no incluyen cuchara." },
      { q: "¿Cuánto duran las mezclas?", a: "Cada bolsa lleva su fecha de mezcla. En tarro cerrado y sin luz, unos 12 meses con carácter. Después no hace daño — pero pierde el porqué." },
      { q: "¿Por qué las cajas fuera de temporada cuestan +15%?", a: "Guardar producto de otra estación cuesta espacio y cuidado. Preferimos decirlo: la caja de la estación actual siempre está a su precio justo." },
      { q: "¿Puedo devolver un pedido?", a: "14 días desde la entrega con el producto sin abrir. Lo abierto no se devuelve (es alimento), pero si algo llega mal, lo reponemos sin discusión." },
      { q: "¿De dónde salen las plantas?", a: "Del huerto de casa, del prado alto y de vecinos del valle con nombre. Cada lámina dice qué hace cada planta; en La despensa ves lo que queda." },
      { q: "¿Hacéis cucharas por encargo?", a: "Erik talla cuando la madera aparece. Si una cuchara te enamora y ya voló, te avisamos cuando su árbol dé otra." },
    ],
    enviosTitulo: "Envíos y devoluciones",
    enviosBloques: {
      envios: ["Preparamos pedidos martes y jueves: las mezclas se envasan ese día.", "Eslovenia: 2-3 días laborables · 3,90 €", "Unión Europea: 4-7 días laborables · 4,90 €", "Gratis desde 50 € en toda la UE.", "Embalaje de papel y cartón, sin plástico."],
      devoluciones: ["14 días desde la entrega, producto sin abrir.", "Lo abierto no se devuelve (es alimento); si algo llega mal o roto, lo reponemos sin discusión.", "Escríbenos desde Contacto y lo resolvemos en un día."],
      pago: "El pedido solo crea un recibo ficticio en esta pestaña. No hay cobros, confirmaciones por email, envíos ni devoluciones de productos.",
    },
    metodoTitulo: "El método de la casa",
    metodo: [
      { t: "recolectar", d: "Las plantas se cogen en su momento, no antes: la manzanilla cuando el prado amarillea, el saúco la semana exacta de junio. Lo que no da el huerto, lo dan vecinos con nombre." },
      { t: "mezclar", d: "Petra prueba cada mezcla en la mesa de la cocina hasta que el porqué de cada planta se sostiene. Si una planta no aporta, fuera." },
      { t: "tallar", d: "Erik talla con madera caída o de poda, nunca de árbol sano. Cada cuchara guarda el nombre de su árbol." },
    ],
    mezclasT: "Las mezclas", maderaT: "La madera", ahora: "ahora", casiAgotado: "casi agotado",
    pagoSenal: "Demostración local: no se realizan cobros, pedidos ni envíos. No introduzcas datos personales.",
    entradaReclamo: "Tu compra genera una ENTRADA numerada de la casa",
    entradaCuchara: "— y dentro viaja la cucharita 🥄? de Erik",
    teDeLaSala: "1 té de la sala, a elegir",
    cucharaCorta: "1 cucharita de Erik, al azar — se revela en tu entrada",
    navDespensa: "La despensa",
    despensaTitulo: "La despensa de la casa",
    despensaSub: "Lo que hay ahora mismo en las baldas, estación a estación. Cuando algo se acaba, se acaba hasta la próxima cosecha.",
    quedan: "quedan",
    unidades: "uds.",
    agotado: "agotado hasta la próxima",
    vaEnCaja: "va en la caja de",
    todoElAno: "todo el año",
    navTes: "Los tés", navCajas: "Cajas de estación", navCucharas: "Cucharas", navA11y: "Secciones de la tienda",
    cesta: "Cesta", pieLema: "Mezclas de plantas hechas en casa y cucharas talladas a mano, desde el valle de Vipava.",
    pieTienda: "La tienda", pieCasa: "La casa", pieDerechos: "hecho en casa, sin prisa",
    heroEyebrow: "Casa de té · Ajdovščina", verTes: "Ver los tés de la casa", verCaja: "La caja de la estación",
    lamina: "Lámina", plantasDe: "plantas", porQue: "por qué está en esta mezcla",
    cajaTemporada: "La caja de esta estación", dentroCaja: "Dentro de la caja",
    cucharaSorpresa: "Y una cucharita de Erik al azar — sabrás cuál al abrirla: viene revelada en tu entrada de compra.",
    fueraTemporada: "Fuera de su estación", recargo: "+15% fuera de temporada — lo honesto es decirlo",
    procedencias: "De dónde viene todo", procedenciasSub: "Nada genérico: cada cosa de esta casa tiene su sitio y su historia.",
    erikTitulo: "Las cucharas de Erik", erikSub: "Talladas una a una; no hay dos iguales. Una viaja escondida en cada caja.",
    verColeccion: "Ver la colección",
    destacados: "Mezclas de la casa", verTodos: "Ver todos",
    preparacion: "Preparación", prepAgua: "Agua a 95 °C", prepTiempo: "5–7 minutos", prepCantidad: "Una cucharadita colmada por taza",
    volver: "Volver", anadir: "Añadir a la cesta", enCesta: "En la cesta",
    filtroTodos: "Todos", filtroClasicos: "De la casa", filtroPremium: "Premium",
    premiumNota: "Los premium llevan 🥄?: una cucharita sorpresa de Erik que solo se revela en tu entrada.",
    cestaTitulo: "Tu cesta", cestaVacia: "La cesta está vacía. Los tés esperan.",
    cupon: "¿Tienes cupón?", cuponEtiqueta: "Cupón", emailRecibo: "Email ficticio (opcional; no se guarda)", aplicar: "Aplicar", subtotal: "Subtotal", envio: "Envío",
    envioGratis: "Envío gratis desde 50 €", total: "Total", pagarTarjeta: "Simular pedido",
    demoAviso: "Demostración local: no se realizan cobros, pedidos ni envíos. No introduzcas datos personales.",
    seguirComprando: "Seguir comprando",
    visita3d: "Visita la tienda en 3D",
    pieLegal: "Lo legal",
    navLegal: "Aviso legal", navPrivacidad: "Privacidad", navCookies: "Cookies", navDevoluciones: "Devoluciones",
    legalTitulo: "Aviso legal",
    legal: [
      {
        "t": "Demo de portafolio",
        "p": [
          "Esta es una demostración pública del proyecto web Petra + Erik, no la tienda operativa. Los productos, precios y textos se presentan como muestra del diseño.",
          "El pedido solo crea un recibo ficticio en esta pestaña. No hay cobros, confirmaciones por email, envíos ni devoluciones de productos."
        ]
      }
    ],
    privacidadTitulo: "Privacidad",
    privacidad: [
      {
        "t": "Privacidad de la demo",
        "p": [
          "Los formularios no envían ni guardan tu nombre, email o mensaje. Utiliza datos ficticios para probarlos.",
          "GitHub Pages sirve los archivos públicos. El alojamiento puede registrar las peticiones HTTP según sus propias condiciones. La aplicación no integra analítica ni publicidad."
        ]
      },
      {
        "t": "Solo en tu navegador",
        "p": [
          "La cesta y el idioma se guardan en localStorage con prefijo petra-demo. El recibo ficticio usa sessionStorage. Puedes borrarlos limpiando los datos del sitio."
        ]
      }
    ],
    cookiesTitulo: "Cookies",
    cookies: [
      {
        "t": "Solo en tu navegador",
        "p": [
          "La cesta y el idioma se guardan en localStorage con prefijo petra-demo. El recibo ficticio usa sessionStorage. Puedes borrarlos limpiando los datos del sitio.",
          "GitHub Pages sirve los archivos públicos. El alojamiento puede registrar las peticiones HTTP según sus propias condiciones. La aplicación no integra analítica ni publicidad."
        ]
      }
    ],
    devolucionesTitulo: "Devoluciones",
    devoluciones: [
      {
        "t": "Sin pedidos reales",
        "p": [
          "El pedido solo crea un recibo ficticio en esta pestaña. No hay cobros, confirmaciones por email, envíos ni devoluciones de productos."
        ]
      }
    ],
    e404Titulo: "Esta página no está en la casa",
    e404Cuerpo: "El enlace lleva a una balda vacía. Prueba en la web clásica o entra en la tienda en 3D.",
    consentimiento: "Entiendo que este es un formulario de demostración y que no se enviará ningún mensaje.",
    consentimientoFalta: "Marca la casilla de privacidad para dejar la carta.",
    historiaTitulo: "Una casa pequeña que huele a té",
    historia: "Petra mezcla las plantas en la cocina; Erik talla la madera en el taller de al lado. Todo lo que ves sale de estas dos manos y de gente del valle a la que conocemos por su nombre.",
  },
  provisional: "Demostración local: no se realizan cobros, pedidos ni envíos. No introduzcas datos personales.",
} as const;
