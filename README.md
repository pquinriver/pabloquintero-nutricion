# Pablo Quintero — Nutrición

Web de una sola página (español) para la consulta de nutrición de Pablo Quintero en
Santa Cruz de Tenerife. HTML/CSS estático, sin build ni dependencias — se publica
directamente con GitHub Pages.

## Antes de publicar

Abre **`CONTENIDO-PENDIENTE.md`** — lista todo lo que sigue como placeholder
(teléfono, email, dirección, formación/colegiado, redes sociales, páginas legales)
y hay que sustituir por los datos reales.

## Ver el sitio en local

No hace falta ningún servidor ni build. Basta con abrir `index.html` en el navegador,
o servirlo con cualquier servidor estático simple:

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Estructura

```
index.html            todo el sitio: HTML, CSS y JS en un único archivo
assets/
  pablo.png            foto de Pablo (recorte en blanco y negro vía CSS)
.github/workflows/
  claude.yml           permite pedir cambios mencionando @claude en un issue o PR
CONTENIDO-PENDIENTE.md  checklist de datos reales pendientes
```

## Publicar en GitHub Pages

1. Crea el repositorio en GitHub (público, para que Pages sea gratuito) y sube este
   contenido — ver los comandos exactos que te ha pasado Claude en el chat.
2. En el repo: **Settings → Pages → Build and deployment → Source → "Deploy from a
   branch"**, rama `main`, carpeta `/ (root)`. Guarda.
3. A los pocos minutos el sitio estará en `https://<tu-usuario>.github.io/<nombre-repo>/`.
   Si más adelante conectas un dominio propio (p. ej. `pabloquinteronutricion.com`),
   se configura en esa misma pantalla de Settings → Pages.

No hay paso de compilación: cualquier cambio que se haga a `index.html` en la rama
`main` se publica tal cual en el siguiente despliegue automático de Pages (1-2 minutos).

## Pedir cambios con @claude

Este repo incluye `.github/workflows/claude.yml`. Una vez esté instalada la GitHub
App de Claude y añadido el secreto (ver instrucciones de Claude en el chat), puedes
abrir un issue o comentar en un pull request escribiendo, por ejemplo:

```
@claude cambia el color del botón de WhatsApp a un tono más suave
@claude añade una pregunta al FAQ sobre si se admiten seguros médicos
```

Claude responderá en el propio issue/PR y, si procede, abrirá un pull request con el
cambio para que lo revises y hagas merge.
