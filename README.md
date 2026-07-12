# Canova Burgers - Brand Repository

Sistema de identidad visual, verbal y digital de **Canova Burgers**.

> **Versión:** 1.0  
> **Estado:** identidad inicial y sitio web de lanzamiento listos para validación.  
> **Lema:** **BIG FLAVOR. NO EXCUSES.**

## Sitio web

La carpeta [`website/`](website/) contiene una página responsive de lanzamiento con:

- navegación bilingüe español/inglés;
- menú editable por categorías;
- carrito persistente con `localStorage`;
- selector delivery/pickup y notas de pedido;
- formularios con validación;
- historia, valores, packaging, preguntas frecuentes y privacidad;
- SEO básico, datos estructurados y diseño accesible;
- identidad visual Canova aplicada mediante SVG y CSS.

El workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) despliega la carpeta `website/` mediante GitHub Pages. En la primera publicación puede ser necesario seleccionar **Settings → Pages → GitHub Actions**.

## Contenido del repositorio

- [`website/`](website/): sitio de lanzamiento listo para publicación.
- [`docs/manual/`](docs/manual/): manual completo de identidad en Markdown.
- [`docs/strategy/`](docs/strategy/): propósito, audiencia, posicionamiento, voz y mensajes.
- [`docs/production/`](docs/production/): normas visuales, producción y lista de lanzamiento.
- [`assets/logos/`](assets/logos/): isotipo C-hamburguesa, sello y composiciones vertical/horizontal.
- [`assets/icons/`](assets/icons/): sistema de iconografía.
- [`assets/patterns/`](assets/patterns/): patrón para papel y superficies.
- [`assets/packaging/`](assets/packaging/): artboards de referencia para packaging.
- [`assets/social/`](assets/social/): artboards de redes y delivery.
- [`assets/tokens/`](assets/tokens/): paleta en JSON y variables CSS.

Los archivos SVG y Markdown son los maestros editables del repositorio. Las exportaciones PDF, DOCX, PNG y ZIP se distribuyen como paquetes de entrega.

## Uso rápido de la marca

1. Use `assets/logos/logo-vertical.svg` como versión protagonista.
2. Use `assets/logos/logo-horizontal.svg` en encabezados y banners.
3. Use `assets/logos/isotipo-c-burger.svg` para avatar o app icon.
4. Use `assets/logos/seal-circular.svg` en stickers, vasos y sellos.

## Configurar la web

En `website/app.js`, edite `businessConfig` para cambiar WhatsApp, Instagram, correo, enlace de pedidos y moneda. En el arreglo `products` se actualizan precios, descripciones y productos.

## Colores

| Nombre | HEX |
|---|---|
| Negro carbón | `#0D0D0D` |
| Crema tostado | `#F2E9D8` |
| Amarillo queso | `#FFC72C` |
| Rojo parrilla | `#E6392E` |
| Naranja fuego | `#FF8A00` |

## Tipografías

El wordmark se trabaja como lettering vectorial. Para titulares se recomienda **Noto Sans Display ExtraCondensed Black** o **Barlow Condensed Black**, y para texto **Inter** o **Montserrat**. Los archivos de fuentes no se incluyen.

## Nota de producción

Los empaques incluidos son artes conceptuales, no dielines. El proveedor de impresión debe suministrar los troqueles y especificaciones finales. La disponibilidad legal del nombre y del símbolo debe verificarse antes de registrar o invertir en producción masiva.

## Derechos

Identidad desarrollada para el proyecto Canova Burgers. La publicación del repositorio no concede una licencia de reutilización a terceros.
