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
- [ ] Aviso legal, Política de privacidad, Política de cookies — actualmente son
      enlaces `#` sin página real detrás. Se necesita: identificación fiscal
      (NIF/CIF), texto RGPD/LOPDGDD, y revisión por un asesor legal antes de publicar
- [ ] Confirmar que el texto de descargo de responsabilidad médica ("La consulta
      nutricional no sustituye...") es el que finalmente se quiere usar

## Técnico
- [ ] Dominio propio: se está comprando `pabloquinteronutricion.com`. Cuando esté
      activo: añadir `CNAME` en la raíz del repo, configurarlo en Settings → Pages,
      y sustituir ese dominio (ahora mismo hardcodeado como placeholder) en
      `index.html` (canonical, og:url, og:image, twitter:image, JSON-LD), en
      `robots.txt` (línea `Sitemap:`), en `sitemap.xml` (`<loc>`) y en `llms.txt`
- [x] Favicon — `favicon.svg` (monograma verde/melocotón). Pendiente opcional:
      generar un PNG/ICO de respaldo para iOS/navegadores antiguos con una
      herramienta de diseño, ya que aquí no hay conversor SVG→raster disponible
- [ ] Analítica (Google Analytics / Plausible / similar) — no hay ningún script de
      medición instalado; decidir si se quiere y cuál, valorando GDPR/cookies

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
