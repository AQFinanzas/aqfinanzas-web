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
  "slug": "fitness-financiero",
  "titulo": "Fitness financiero: cómo entrenar tu dinero igual que entrenas tu cuerpo",
  "resumen": "Lograr un cuerpo sano y lograr el éxito financiero exigen lo mismo: disciplina, hábitos y pagar un precio. Así se aplica el fitness a tu dinero.",
  "categoria": "Finanzas personales",
  "fecha": "2019-09-19",
  "minutos": 2,
  "imagen": "/blog/img/fitness-financiero.jpg",
  "destacado": false
 }
];
