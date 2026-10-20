# Guía para Claude en este repositorio

Web de la consulta de nutrición de Pablo Quintero (pabloquinteronutricion.com).
Jekyll en GitHub Pages, rama `main`. El plan de SEO completo vive en el proyecto de
claude.ai («plan-seo-web.md»); este archivo resume las reglas para trabajar aquí.

## Forma de trabajar
- **Nunca subas directamente a `main`.** Una rama y un pull request por cambio o artículo; Pablo revisa y hace merge.
- Español de España, tuteo, tono de profesional cercano.
- Credencial: «Doctor en Nutrición» en todo el sitio. En la caja de autor y en «Sobre mí»: «Doctor en Nutrición por la Universidad de Navarra». No toques el aviso legal sin que Pablo lo pida (debe llevar la denominación oficial del título).
- Ubicaciones: **online siempre primero** («Online · Santa Cruz de Tenerife · El Médano», «online y en Tenerife»).
- Método (no inventar otro): llamada gratuita de 15 minutos para ver si hay encaje → programa de 12 semanas que empieza con una primera consulta de 60 minutos → plan a medida introducido poco a poco, con revisión semanal.

## Artículos nuevos del blog

### Archivo y URL
- `_posts/AAAA-MM-DD-slug.md` → URL `/blog/slug/` (la genera `permalink: /blog/:title/`).
- Slug en minúsculas, sin tildes ni ñ, palabras separadas por guiones, 3–6 palabras, con la búsqueda principal. **No cambiarlo una vez publicado.**
- La fecha del nombre de archivo no puede ser futura (Jekyll no publica posts con fecha futura y la URL daría 404). `_config.yml` usa `timezone: Atlantic/Canary`.

### Front matter
```yaml
---
layout: post
title: "..."            # 45–55 caracteres, búsqueda principal al principio. El <title> añade « · Pablo Quintero».
description: "..."      # 140–155 caracteres, beneficio claro e invitación al clic; única por artículo
last_modified_at: AAAA-MM-DD   # opcional; se muestra como «Revisado el…» y va a dateModified
h1: "..."               # opcional, si el H1 visible debe ser distinto del title
faq:                    # opcional; se pinta al final del artículo y genera el schema FAQPage
  - q: "¿Pregunta?"
    a: "Respuesta en markdown."
cta_title: "..."        # opcional; sustituye el título por defecto del CTA
cta_copy: "..."         # opcional
---
```
- No añadir `noindex`.
- El layout `post` ya pinta: H1, autor y fechas, FAQ, CTA de WhatsApp (con el título del artículo prerrellenado para saber de dónde viene el contacto), caja de autor, suscripción y schema `Article` + `FAQPage`. No los repitas en el cuerpo.

### Contenido
- Sin H1 en el cuerpo. Usa `##` y `###` en orden, con la búsqueda en algún H2 de forma natural.
- Búsqueda principal en el primer párrafo, sin forzarla.
- Público de los artículos actuales: **hombres de 35–50 con hijos y trabajo exigente** (bloque de problemas de hombres). Filtro del público en las primeras líneas.
- Mínimo 3 enlaces internos: otros artículos del blog si existen y la home (`/#contacto`, `/#asi-trabajo` o `/#sobre-mi`). Texto de enlace descriptivo, nunca «aquí».
- Estudios: enlaza la fuente original (PubMed, DOI u organismo oficial). Nada inventado; si algo no está verificado, no se publica.
- Sin «garantizado», «cura», «revierte», «detox», «quema grasa» ni promesas de kilos o plazos. Nunca sugerir cambiar medicación. Derivar al médico cuando toque.
- Imágenes (si las hay): `/assets/blog/`, nombre descriptivo con guiones, `alt` descriptivo en español, < 200 KB (WebP o JPG).

### Sitemap (obligatorio, se mantiene a mano)
Añade antes de `</urlset>`:
```xml
  <url>
    <loc>https://pabloquinteronutricion.com/blog/slug/</loc>
    <lastmod>AAAA-MM-DD</lastmod>
  </url>
```
Si editas un post publicado de forma sustancial, actualiza su `<lastmod>` y su `last_modified_at`.

### llms.txt
Añade el artículo en la sección «Blog» con una línea de descripción.

### Al terminar
- Comprueba que la URL del sitemap coincide exactamente con `/blog/slug/` (barra final incluida).
- Dile a Pablo la URL final para que pida la indexación en Search Console.
