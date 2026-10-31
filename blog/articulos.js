/* =========================================================
   LISTA DE ARTÍCULOS DEL BLOG
   Cada artículo nuevo se agrega aquí (el más reciente arriba)
   y su página va en /blog/<slug>/index.html (copiar plantilla.html).
   Campos:
     slug       → dirección: aqfinanzas.com/blog/<slug>/
     titulo     → título del artículo
     resumen    → 1–2 frases para la tarjeta
     categoria  → una de las CATEGORIAS de abajo
     fecha      → "AAAA-MM-DD"
     minutos    → tiempo de lectura
     imagen     → ruta de la portada (ej. "/blog/img/mi-articulo.jpg")
     destacado  → true para mostrarlo grande arriba (solo uno)
   ========================================================= */
window.CATEGORIAS = [
  "Primeros pasos",
  "Bolsa de Nueva York",
  "Método RCR",
  "Finanzas personales",
  "Mentalidad",
  "Emprendimiento",
  "Economía"
];

window.ARTICULOS = [
 {
  "slug": "verdades-y-mentiras-del-network-marketing",
  "titulo": "Verdades y mentiras del network marketing: lo que debes saber antes",
  "resumen": "¿Vale la pena el network marketing? Conozco la industria desde adentro: estas son las verdades y mentiras que debes conocer antes de entrar en ella.",
  "categoria": "Emprendimiento",
  "fecha": "2020-06-04",
  "minutos": 2,
  "imagen": "/blog/img/verdades-y-mentiras-del-network-marketing.jpg",
  "destacado": false
 },
 {
  "slug": "senales-de-que-estas-quebrado",
  "titulo": "Señales de que estás quebrado y debes hacer cambios en tus finanzas",
  "resumen": "Estar quebrado es temporal; ser pobre es permanente. Estas señales te avisan que tocaste fondo y que es hora de hacer cambios en tus finanzas.",
  "categoria": "Finanzas personales",
  "fecha": "2020-05-26",
  "minutos": 2,
  "imagen": "/blog/img/senales-de-que-estas-quebrado.jpg",
  "destacado": false
 },
 {
  "slug": "error-tipico-del-emprendedor",
  "titulo": "El error típico del emprendedor promedio: vender sin crear un activo",
  "resumen": "Muchos emprendedores saltan de idea en idea buscando el producto estrella. El verdadero error es no entender la diferencia entre vender y crear un activo.",
  "categoria": "Emprendimiento",
  "fecha": "2020-05-14",
  "minutos": 2,
  "imagen": "/blog/img/error-tipico-del-emprendedor.jpg",
  "destacado": false
 },
 {
  "slug": "venezolano-en-el-exterior",
  "titulo": "Venezolano en el exterior: 5 rasgos que lo delatan a distancia",
  "resumen": "La energía, la ética de trabajo y el amor por su tierra delatan al venezolano en cualquier país. Estos son cinco rasgos que lo hacen único en el exterior.",
  "categoria": "Mentalidad",
  "fecha": "2020-05-07",
  "minutos": 2,
  "imagen": "/blog/img/venezolano-en-el-exterior.jpg",
  "destacado": false
 },
 {
  "slug": "trading-antes-de-empezar",
  "titulo": "Trading: 6 cosas que debes saber antes de invertir tu primer dólar",
  "resumen": "Antes de entrar al trading necesitas saber esto: vas a invertir tiempo, cuidarte de falsos expertos y desarrollar un sistema. Seis claves desde mi experiencia.",
  "categoria": "Bolsa de Nueva York",
  "fecha": "2020-04-28",
  "minutos": 2,
  "imagen": "/blog/img/trading-antes-de-empezar.jpg",
  "destacado": false
 },
 {
  "slug": "pagar-el-precio-marca-personal",
  "titulo": "¿Estás dispuesto a pagar el precio para crear tu marca personal?",
  "resumen": "Crear una marca personal o empresarial tiene un precio alto. La diferencia entre quienes se posicionan y quienes no está en sus ganas de pagarlo.",
  "categoria": "Emprendimiento",
  "fecha": "2019-10-09",
  "minutos": 2,
  "imagen": "/blog/img/pagar-el-precio-marca-personal.jpg",
  "destacado": false
 },
 {
  "slug": "creencias-limitantes-sobre-el-dinero",
  "titulo": "Al demonio las creencias limitantes sobre el dinero y la riqueza",
  "resumen": "«Seguro se lo robó», «mejor pobre pero honrado». Estas creencias pasan de generación en generación y te alejan de la riqueza. Así puedes romperlas.",
  "categoria": "Mentalidad",
  "fecha": "2019-10-02",
  "minutos": 2,
  "imagen": "/blog/img/creencias-limitantes-sobre-el-dinero.jpg",
  "destacado": false
 },
 {
  "slug": "empresario-quejon-reinventarse",
  "titulo": "Para el empresario quejón: reinventarte vale más que quejarte",
  "resumen": "Siempre habrá motivos para quejarse de las ventas, los impuestos o el país. El empresario que crece es el que se reinventa mientras los demás se lamentan.",
  "categoria": "Emprendimiento",
  "fecha": "2019-09-26",
  "minutos": 2,
  "imagen": "/blog/img/empresario-quejon-reinventarse.jpg",
  "destacado": false
 },
 {
  "slug": "fitness-financiero",
  "titulo": "Fitness financiero: cómo entrenar tu dinero igual que entrenas tu cuerpo",
  "resumen": "Lograr un cuerpo sano y lograr el éxito financiero exigen lo mismo: disciplina, hábitos y pagar un precio. Así se aplica el fitness a tu dinero.",
  "categoria": "Finanzas personales",
  "fecha": "2019-09-19",
  "minutos": 2,
  "imagen": "/blog/img/fitness-financiero.jpg",
  "destacado": true
 },
 {
  "slug": "modelo-de-negocios",
  "titulo": "Explícame tu modelo de negocios y te diré cuánto vale tu empresa",
  "resumen": "Uber no es dueña de un solo taxi y vale miles de millones. Hoy la riqueza la crea un modelo de negocios que resuelve problemas, no los activos que posees.",
  "categoria": "Emprendimiento",
  "fecha": "2019-09-04",
  "minutos": 2,
  "imagen": "/blog/img/modelo-de-negocios.jpg",
  "destacado": false
 },
 {
  "slug": "marcas-debiles-vs-marcas-fuertes",
  "titulo": "Marcas débiles vs. marcas fuertes: 8 diferencias en tu marca personal",
  "resumen": "Todos somos una marca, lo sepamos o no. Estas 8 diferencias entre marcas débiles y marcas fuertes te ayudarán a fortalecer tu marca personal y tus ingresos.",
  "categoria": "Emprendimiento",
  "fecha": "2019-08-28",
  "minutos": 2,
  "imagen": "/blog/img/marcas-debiles-vs-marcas-fuertes.jpg",
  "destacado": false
 },
 {
  "slug": "venezuela-es-mucho-mas",
  "titulo": "Para que nunca se te olvide: Venezuela es mucho más que su crisis",
  "resumen": "Cuando alguien reduce a Venezuela a su crisis, vale recordar a sus héroes, artistas, científicos y deportistas. Esto es lo que somos de verdad.",
  "categoria": "Mentalidad",
  "fecha": "2019-08-21",
  "minutos": 2,
  "imagen": "/blog/img/venezuela-es-mucho-mas.jpg",
  "destacado": false
 },
 {
  "slug": "venezuela-carencias-y-oportunidades",
  "titulo": "Venezuela, llena de carencias y oportunidades para emprender",
  "resumen": "Los espacios vacíos que deja una crisis también son nichos de mercado. Así veía las carencias de Venezuela como oportunidades para emprender con éxito.",
  "categoria": "Economía",
  "fecha": "2019-07-24",
  "minutos": 2,
  "imagen": "/blog/img/venezuela-carencias-y-oportunidades.jpg",
  "destacado": false
 },
 {
  "slug": "emprender-en-tiempos-de-crisis",
  "titulo": "Emprender en tiempos de crisis: lo que necesita un empresario hoy",
  "resumen": "Emprender por necesidad no basta: de cada 10 negocios, solo 2 llegan a los 10 años. Esto es lo que debe tener un empresario para avanzar con éxito.",
  "categoria": "Emprendimiento",
  "fecha": "2019-06-17",
  "minutos": 2,
  "imagen": "/blog/img/emprender-en-tiempos-de-crisis.jpg",
  "destacado": false
 },
 {
  "slug": "tu-valor-comercial-es-tu-mayor-activo",
  "titulo": "Tu valor comercial es tu mayor activo: cómo construirlo en el mercado",
  "resumen": "El activo más importante que tienes eres tú. Así se construye un valor comercial fuerte: generar valor, crear confianza y unir modelo de negocio con marca.",
  "categoria": "Emprendimiento",
  "fecha": "2019-06-02",
  "minutos": 3,
  "imagen": "/blog/img/tu-valor-comercial-es-tu-mayor-activo.jpg",
  "destacado": false
 },
 {
  "slug": "aprender-la-leccion-de-la-crisis",
  "titulo": "La crisis pasará si y solo si aprendemos la lección como sociedad",
  "resumen": "O aprendemos la lección o estamos condenados a repetirla. Lo que los países que superaron sus crisis nos enseñan sobre educación, integridad y justicia.",
  "categoria": "Mentalidad",
  "fecha": "2018-08-15",
  "minutos": 3,
  "imagen": "/blog/img/aprender-la-leccion-de-la-crisis.jpg",
  "destacado": false
 },
 {
  "slug": "antes-si-se-podia-es-falso",
  "titulo": "«Antes sí se podía, ahora no»: por qué esa creencia es falsa",
  "resumen": "Muchos creen que para sus padres era más fácil prosperar. Es falso: nunca hubo tantas herramientas ni oportunidades para generar dinero como hoy.",
  "categoria": "Mentalidad",
  "fecha": "2018-07-24",
  "minutos": 2,
  "imagen": "/blog/img/antes-si-se-podia-es-falso.jpg",
  "destacado": false
 },
 {
  "slug": "flor-de-la-abundancia-estafa",
  "titulo": "Flor de la abundancia: la estafa disfrazada de oportunidad de negocio",
  "resumen": "En tiempos de crisis abundan las estafas que prometen dinero fácil y rápido. La única defensa real es la educación financiera. Así puedes reconocerlas.",
  "categoria": "Finanzas personales",
  "fecha": "2018-07-16",
  "minutos": 3,
  "imagen": "/blog/img/flor-de-la-abundancia-estafa.jpg",
  "destacado": false
 },
 {
  "slug": "solo-la-educacion-nos-hara-libres",
  "titulo": "Solo la educación nos hará libres: la base para transformar un país",
  "resumen": "Ninguna propuesta de país funciona sin una educación que nos enseñe a pensar y a convivir. Por qué la educación transformadora es la base de todo cambio.",
  "categoria": "Mentalidad",
  "fecha": "2018-07-09",
  "minutos": 3,
  "imagen": "/blog/img/solo-la-educacion-nos-hara-libres.jpg",
  "destacado": false
 },
 {
  "slug": "reglas-del-juego-del-dinero",
  "titulo": "Enfócate en las reglas del juego del dinero, no en los jugadores",
  "resumen": "Si te enfocas en los jugadores perderás; si te enfocas en las reglas ganarás. La educación financiera es lo que te permite nadar entre tiburones.",
  "categoria": "Mentalidad",
  "fecha": "2018-05-22",
  "minutos": 3,
  "imagen": "/blog/img/reglas-del-juego-del-dinero.jpg",
  "destacado": false
 },
 {
  "slug": "trabajar-por-dinero-o-crear-riqueza",
  "titulo": "O trabajas por dinero, o trabajas para crear riqueza: la diferencia",
  "resumen": "Trabajar por dinero no es lo mismo que crear riqueza. Estos cuatro principios te ayudan a dar el salto: servir, construir un activo, planificar y tener fe.",
  "categoria": "Mentalidad",
  "fecha": "2018-05-07",
  "minutos": 2,
  "imagen": "/blog/img/trabajar-por-dinero-o-crear-riqueza.jpg",
  "destacado": false
 },
 {
  "slug": "presupuesto-familiar-punto-de-partida",
  "titulo": "Presupuesto familiar: nadie sabe hacia dónde va si no sabe dónde está",
  "resumen": "El presupuesto familiar es tu punto de partida: te muestra dónde estás, te ayuda a manejar deudas y a crear excedentes. Así puedes empezar hoy.",
  "categoria": "Finanzas personales",
  "fecha": "2018-04-24",
  "minutos": 2,
  "imagen": "/blog/img/presupuesto-familiar-punto-de-partida.jpg",
  "destacado": false
 },
 {
  "slug": "balance-familiar",
  "titulo": "Balance familiar: la herramienta para medir la salud de tus finanzas",
  "resumen": "El balance familiar muestra si tus finanzas están sanas. Aprende a distinguir activos de pasivos como lo hacen los ricos y a planificar tu vida financiera.",
  "categoria": "Finanzas personales",
  "fecha": "2018-04-19",
  "minutos": 2,
  "imagen": "/blog/img/balance-familiar.jpg",
  "destacado": false
 },
 {
  "slug": "deuda-positiva-y-deuda-negativa",
  "titulo": "Caras vemos, deudas no sabemos: deuda positiva vs. deuda negativa",
  "resumen": "¿Endeudarse o no? La pregunta correcta es qué compras con el dinero prestado. Conoce la diferencia entre deuda positiva y negativa antes de pedir un crédito.",
  "categoria": "Finanzas personales",
  "fecha": "2018-04-19",
  "minutos": 2,
  "imagen": "/blog/img/deuda-positiva-y-deuda-negativa.jpg",
  "destacado": false
 },
 {
  "slug": "secretos-de-una-mente-millonaria",
  "titulo": "Secretos de una mente millonaria: 5 principios para crear riqueza",
  "resumen": "El dinero por sí solo no te hace millonario. Estos principios de una mente millonaria te ayudan a construir riqueza: pasión, ser-hacer-tener, proceso y tiempo.",
  "categoria": "Mentalidad",
  "fecha": "2018-04-19",
  "minutos": 2,
  "imagen": "/blog/img/secretos-de-una-mente-millonaria.jpg",
  "destacado": false
 },
 {
  "slug": "dinero-facil-no-es-rentable",
  "titulo": "¿Ser chanchullero es rentable? Por qué el dinero fácil empobrece",
  "resumen": "Vivir de chanchullo en chanchullo parece rentable, pero te deja ahogado financieramente. Los problemas de dinero se resuelven con educación financiera.",
  "categoria": "Emprendimiento",
  "fecha": "2018-03-13",
  "minutos": 2,
  "imagen": "/blog/img/dinero-facil-no-es-rentable.jpg",
  "destacado": false
 },
 {
  "slug": "riqueza-detras-de-un-cafe",
  "titulo": "La riqueza o la pobreza puede estar detrás de un simple café",
  "resumen": "Un pequeño hábito diario, como dos cafés, puede cambiar tus finanzas a largo plazo. Así se combinan el cambio de hábitos, la inversión y el interés compuesto.",
  "categoria": "Finanzas personales",
  "fecha": "2018-02-26",
  "minutos": 3,
  "imagen": "/blog/img/riqueza-detras-de-un-cafe.jpg",
  "destacado": false
 },
 {
  "slug": "la-tartamudez-mi-mayor-bendicion",
  "titulo": "La tartamudez, mi mayor bendición: vivir tu pasión pese a tus límites",
  "resumen": "Durante años la tartamudez me causó miedo y vergüenza. Así aprendí a enfrentarla y a convertir mi mayor limitación en el motor para vivir mi pasión.",
  "categoria": "Mentalidad",
  "fecha": "2018-02-12",
  "minutos": 4,
  "imagen": "/blog/img/la-tartamudez-mi-mayor-bendicion.jpg",
  "destacado": false
 },
 {
  "slug": "todo-lo-que-sube-tiene-que-bajar",
  "titulo": "Todo lo que sube tiene que bajar: cómo invertir cuando cae la bolsa",
  "resumen": "Cuando Wall Street cae, ¿quién pierde? El éxito en bolsa depende de la información. Tres áreas que todo inversionista debe dominar antes de poner su dinero.",
  "categoria": "Bolsa de Nueva York",
  "fecha": "2018-02-05",
  "minutos": 3,
  "imagen": "/blog/img/todo-lo-que-sube-tiene-que-bajar.jpg",
  "destacado": false
 },
 {
  "slug": "el-dinero-compra-la-felicidad",
  "titulo": "¿El dinero compra la felicidad? Lo que dice un estudio de Harvard",
  "resumen": "Un estudio de Harvard sugiere que pagar por tener más tiempo libre aumenta la satisfacción con la vida. El dinero sí puede ayudarte a ser más feliz.",
  "categoria": "Finanzas personales",
  "fecha": "2018-01-29",
  "minutos": 2,
  "imagen": "/blog/img/el-dinero-compra-la-felicidad.jpg",
  "destacado": false
 },
 {
  "slug": "como-empezar-a-invertir",
  "titulo": "Todos podemos generar riqueza: 4 consejos para empezar a invertir",
  "resumen": "Invertir ya no es solo para ricos: vivimos la democratización de las inversiones. Estos son cuatro consejos para dar tus primeros pasos como inversionista.",
  "categoria": "Primeros pasos",
  "fecha": "2018-01-22",
  "minutos": 3,
  "imagen": "/blog/img/como-empezar-a-invertir.jpg",
  "destacado": false
 },
 {
  "slug": "la-crisis-no-es-economica-es-educativa",
  "titulo": "La crisis no es económica, es educativa: por qué educarte en finanzas",
  "resumen": "Los problemas de dinero no se resuelven con más dinero, sino con educación financiera. Por qué la verdadera crisis es educativa y cómo prepararte para ella.",
  "categoria": "Finanzas personales",
  "fecha": "2018-01-07",
  "minutos": 3,
  "imagen": "/blog/img/la-crisis-no-es-economica-es-educativa.jpg",
  "destacado": false
 },
 {
  "slug": "metas-financieras-como-lograrlas",
  "titulo": "Metas financieras: 5 pasos para planificar y lograr tus objetivos",
  "resumen": "Lo que no se planifica no se logra. Estos 5 pasos te ayudan a cumplir tus metas financieras: define tu meta, controla tus gastos, revisa, recorta e invierte.",
  "categoria": "Finanzas personales",
  "fecha": "2017-12-18",
  "minutos": 2,
  "imagen": "/blog/img/metas-financieras-como-lograrlas.jpg",
  "destacado": false
 },
 {
  "slug": "finanzas-en-hiperinflacion",
  "titulo": "Consejos financieros extremos para sobrevivir a la hiperinflación",
  "resumen": "Cinco consejos que di a finales de 2017 para enfrentar la hiperinflación en Venezuela: dolarizar, no pagar por adelantado, manejar deuda y diversificar.",
  "categoria": "Economía",
  "fecha": "2017-12-11",
  "minutos": 3,
  "imagen": "/blog/img/finanzas-en-hiperinflacion.jpg",
  "destacado": false
 },
 {
  "slug": "oportunidades-se-ven-con-la-mente",
  "titulo": "Las oportunidades no se ven con los ojos, se ven con una mente educada",
  "resumen": "Las oportunidades casi nunca llegan como un diamante pulido, sino como un carbón por transformar. Solo una mente educada financieramente sabe verlas.",
  "categoria": "Mentalidad",
  "fecha": "2017-11-27",
  "minutos": 3,
  "imagen": "/blog/img/oportunidades-se-ven-con-la-mente.jpg",
  "destacado": false
 },
 {
  "slug": "habito-de-la-lectura",
  "titulo": "El hábito de la lectura: por qué es vital para una sociedad próspera",
  "resumen": "Una persona que no lee no tiene ventaja sobre quien no sabe leer. Por qué la lectura es el hábito de éxito más importante para una persona y para un país.",
  "categoria": "Mentalidad",
  "fecha": "2017-11-06",
  "minutos": 2,
  "imagen": "/blog/img/habito-de-la-lectura.jpg",
  "destacado": false
 },
 {
  "slug": "no-es-la-falta-de-dinero-es-la-falta-de-un-sueno",
  "titulo": "No es la falta de dinero, es la falta de un sueño: cómo salir adelante",
  "resumen": "La falta de dinero es pasajera; la falta de un sueño es lo que nos lleva al fracaso. Por qué un sueño claro es el combustible para salir de la pobreza.",
  "categoria": "Mentalidad",
  "fecha": "2017-10-30",
  "minutos": 3,
  "imagen": "/blog/img/no-es-la-falta-de-dinero-es-la-falta-de-un-sueno.jpg",
  "destacado": false
 },
 {
  "slug": "dime-de-que-presumes-cuanto-debes",
  "titulo": "Dime de qué presumes y te diré cuánto debes: la trampa del estatus",
  "resumen": "Vivir de apariencias y comprar lujos que no puedes pagar te aleja de la riqueza. Así funciona la trampa del estatus y cómo construir cimientos sólidos.",
  "categoria": "Finanzas personales",
  "fecha": "2017-10-16",
  "minutos": 3,
  "imagen": "/blog/img/dime-de-que-presumes-cuanto-debes.jpg",
  "destacado": false
 },
 {
  "slug": "llenar-el-vaso-gratificacion-diferida",
  "titulo": "Aprende a llenar el vaso: el principio de vivir de lo que se desborda",
  "resumen": "Un principio financiero que cambió mi forma de ver el dinero: llena el vaso con disciplina y paciencia, y vive solo de lo que se desborda. Así se aplica.",
  "categoria": "Finanzas personales",
  "fecha": "2017-10-08",
  "minutos": 3,
  "imagen": "/blog/img/llenar-el-vaso-gratificacion-diferida.jpg",
  "destacado": false
 },
 {
  "slug": "habitos-financieros-que-llevan-a-la-quiebra",
  "titulo": "5 hábitos financieros que te pueden llevar a la quiebra: evítalos",
  "resumen": "No conocer tus gastos, no ahorrar el 10 % o comprar lo que no puedes pagar te mantiene quebrado. Estos son 5 errores financieros que debes evitar a toda costa.",
  "categoria": "Finanzas personales",
  "fecha": "2017-10-02",
  "minutos": 3,
  "imagen": "/blog/img/habitos-financieros-que-llevan-a-la-quiebra.jpg",
  "destacado": false
 },
 {
  "slug": "el-dinero-si-crece-en-los-arboles",
  "titulo": "El dinero sí crece en los árboles: la historia del fin del patrón oro",
  "resumen": "¿El dinero no crece en los árboles? Bretton Woods y el fin del patrón oro en 1971 explican por qué el dinero es papel y por qué debes construir activos.",
  "categoria": "Economía",
  "fecha": "2017-09-25",
  "minutos": 3,
  "imagen": "/blog/img/el-dinero-si-crece-en-los-arboles.jpg",
  "destacado": false
 },
 {
  "slug": "muchos-miedos-pocos-ingresos",
  "titulo": "Muchos miedos, pocos ingresos: cómo superar el miedo y ganar más",
  "resumen": "Tus resultados financieros son inversamente proporcionales a tus miedos. Cómo enfrentarlos con inteligencia emocional para que tus ingresos empiecen a crecer.",
  "categoria": "Mentalidad",
  "fecha": "2017-07-17",
  "minutos": 2,
  "imagen": "/blog/img/muchos-miedos-pocos-ingresos.jpg",
  "destacado": false
 },
 {
  "slug": "marca-personal-salir-de-la-crisis",
  "titulo": "Cómo salir de la crisis financiera si eres profesional independiente",
  "resumen": "Si eres profesional independiente y no te das a conocer, tendrás problemas financieros. La salida está en tu marca personal y en saber venderte.",
  "categoria": "Emprendimiento",
  "fecha": "2017-07-10",
  "minutos": 3,
  "imagen": "/blog/img/marca-personal-salir-de-la-crisis.jpg",
  "destacado": false
 },
 {
  "slug": "mercadeo-en-redes-oportunidad-o-piramide",
  "titulo": "Mercadeo en redes: ¿oportunidad de negocio o pirámide? 7 claves",
  "resumen": "¿El mercadeo en redes es una oportunidad real o una pirámide? Desde mi experiencia en la industria, te comparto siete claves para evaluar una empresa.",
  "categoria": "Emprendimiento",
  "fecha": "2017-07-03",
  "minutos": 3,
  "imagen": "/blog/img/mercadeo-en-redes-oportunidad-o-piramide.jpg",
  "destacado": false
 },
 {
  "slug": "dime-con-quien-andas-entorno-y-dinero",
  "titulo": "Dime con quién andas: cómo tu entorno define tus finanzas",
  "resumen": "Tus resultados financieros dependen de los libros que lees y de las personas con las que andas. Cómo elegir tu entorno y por qué buscar un mentor.",
  "categoria": "Mentalidad",
  "fecha": "2017-06-27",
  "minutos": 3,
  "imagen": "/blog/img/dime-con-quien-andas-entorno-y-dinero.jpg",
  "destacado": false
 },
 {
  "slug": "la-pobreza-es-una-decision",
  "titulo": "La pobreza no es una condición, es una decisión que puedes cambiar",
  "resumen": "Tu capacidad para generar riqueza no depende del entorno, sino de tu relación con el dinero. Por qué la pobreza es una decisión y cómo empezar a cambiarla.",
  "categoria": "Mentalidad",
  "fecha": "2017-06-19",
  "minutos": 3,
  "imagen": "/blog/img/la-pobreza-es-una-decision.jpg",
  "destacado": false
 },
 {
  "slug": "activos-como-el-bambu-chino",
  "titulo": "Los activos son como el bambú chino: paciencia para crear riqueza",
  "resumen": "Crear un activo es como sembrar bambú chino: durante años no ves nada, pero las raíces crecen. Así se pasa de trabajar por dinero a que trabaje por ti.",
  "categoria": "Emprendimiento",
  "fecha": "2017-02-05",
  "minutos": 2,
  "imagen": "/blog/img/activos-como-el-bambu-chino.jpg",
  "destacado": false
 },
 {
  "slug": "juventud-emprendedora-leccion",
  "titulo": "La juventud emprendedora nos da una lección sobre la nueva economía",
  "resumen": "Las reglas del dinero cambiaron. Una generación de jóvenes que rompe el molde demuestra que el resultado financiero depende de cada uno. Esta es su lección.",
  "categoria": "Emprendimiento",
  "fecha": "2017-01-29",
  "minutos": 3,
  "imagen": "/blog/img/juventud-emprendedora-leccion.jpg",
  "destacado": false
 }
];
