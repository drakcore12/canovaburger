# Canova Burgers Website

Sitio responsive de lanzamiento para Canova Burgers, construido con HTML, CSS y JavaScript sin dependencias de compilación.

## Funciones

- Diseño bilingüe español/inglés.
- Menú editable por categorías.
- Carrito persistente con `localStorage`.
- Selector delivery/pickup y notas de pedido.
- Formularios con validación.
- Identidad visual Canova aplicada con SVG y CSS.
- Diseño responsive, accesible y optimizado para móvil.
- SEO básico y datos estructurados de restaurante.

## Abrir localmente

```bash
python3 -m http.server 8080 --directory website
```

Visita `http://localhost:8080`.

## Editar datos del negocio

En `app.js`, modifica el objeto `businessConfig`:

- `whatsapp`
- `instagram`
- `email`
- `orderUrl`
- `currency`

## Editar menú y precios

En `app.js`, modifica el arreglo `products`. Cada producto contiene nombre, descripción bilingüe, categoría y precio.

## Publicación

El workflow `.github/workflows/pages.yml` publica la carpeta `website/` mediante GitHub Pages. En la primera publicación puede ser necesario abrir **Settings → Pages** y seleccionar **GitHub Actions** como fuente.

## Pendientes antes de vender

Reemplazar enlaces y datos de contacto provisionales, confirmar precios, alergias, dirección, horarios, radio de entrega, plataforma de pedidos y política de privacidad definitiva.
