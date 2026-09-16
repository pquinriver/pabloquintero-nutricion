# Contenido pendiente antes de publicar

Todo lo marcado abajo sigue con datos de ejemplo en `index.html`. Sustitúyelo antes
de anunciar el sitio públicamente.

## Contacto
- [x] Teléfono real → +34642104190
- [x] Número de WhatsApp real → wa.me/34642104190
- [x] Email real → pablo@quinriver.es
- [x] Dirección completa de la consulta → Rambla de Santa Cruz, 131 - 38001 –
      Santa Cruz de Tenerife
- [ ] Enlaces reales de Instagram y LinkedIn (ahora mismo son `#` en el footer)

## Credenciales
- [x] Bloque "Formación y experiencia" en Sobre mí → Nutricionista y Doctor en
      Nutrición por la Universidad de Navarra. (Pendiente aún: número de colegiado
      del Colegio de Dietistas-Nutricionistas de Canarias y asociaciones
      profesionales, si proceden)

## Legal
- [x] Aviso legal, Política de privacidad, Política de cookies →
      `aviso-legal.html`, `privacidad.html`, `cookies.html`, enlazadas desde el
      footer. Redactadas con datos reales (Flint Bio S.L., NIF B27607928) siguiendo
      buenas prácticas LSSI-CE/RGPD-LOPDGDD estándar, publicadas por decisión
      expresa sin pasar por revisión de un abogado/gestor. Pendiente si se quiere
      cerrar del todo:
      - [ ] Datos de inscripción en el Registro Mercantil (no se incluyeron por no
            tenerlos a mano)
      - [ ] Revisión por un asesor legal, especialmente por tratarse de un sitio
            de salud (datos de salud = categoría especial en RGPD)
- [ ] Confirmar que el texto de descargo de responsabilidad médica ("La consulta
      nutricional no sustituye...") es el que finalmente se quiere usar

## Técnico
- [x] Dominio propio: `pabloquinteronutricion.com` comprado en Namecheap. `CNAME`
      añadido en la raíz del repo. Pendiente: configurar los registros DNS en
      Namecheap (ver instrucciones fuera de este archivo) y esperar a que
      GitHub Pages emita el certificado HTTPS
- [x] Favicon — `favicon.svg` (monograma verde/melocotón). Pendiente opcional:
      generar un PNG/ICO de respaldo para iOS/navegadores antiguos con una
      herramienta de diseño, ya que aquí no hay conversor SVG→raster disponible
- [ ] Analítica: se decidió usar Cloudflare Web Analytics (gratis, sin cookies, sin
      banner de consentimiento necesario) — falta que Pablo cree la cuenta gratuita
      en Cloudflare y me pase el script/token para instalarlo

## Blog
- [x] Estructura de blog en Jekyll (`_config.yml`, `_layouts`, `_includes`,
      `_posts/`, `blog/index.html`), con feed RSS automático en `/feed.xml`
      (plugin `jekyll-feed`, compatible con GitHub Pages sin Gemfile). Primer
      artículo de ejemplo publicado en `/blog/por-que-no-doy-dietas-cerradas/`
- [x] Cuenta en Kit creada (plan gratuito), formulario de suscripción al blog
      embebido en `_includes/subscribe.html`
- [ ] Lead magnet: el plan gratuito de Kit no incluye automatizaciones, así que
      la entrega automática de un PDF/guía al suscribirse no está disponible
      todavía. Revisar si el formulario tiene la opción "Incentive email" /
      "Content upgrade" (a veces incluida en formularios gratuitos); si no,
      valorar subir de plan más adelante o buscar otra vía. No bloquea el
      lanzamiento del blog
- [ ] Decidir próximos temas del blog (partir de las preguntas del FAQ es un
      buen punto de partida)

## SEO / IA
- [x] Meta Open Graph / Twitter Card, canonical, JSON-LD (MedicalBusiness, Person,
      FAQPage), `robots.txt`, `sitemap.xml`, `llms.txt` — hecho en la rama
      `seo/technical-foundation`, con el dominio placeholder de arriba
- [ ] Perfil de Google Business Profile (solo lo puede crear Pablo, requiere
      verificación de la dirección)
- [ ] Enlaces reales de Instagram/LinkedIn → añadirlos también a `sameAs` en el
      JSON-LD una vez existan
- [ ] Número de colegiado (Colegio de Dietistas-Nutricionistas de Canarias) →
      añadirlo al bloque de credenciales y como `identifier` en el JSON-LD
- [ ] Google Search Console: verificar la propiedad y enviar `sitemap.xml` en
      cuanto el dominio esté activo
