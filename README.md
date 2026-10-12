# Inventario de Logística — Cáritas Diocesana Guasdualito y PMA

Interfaz web para consultar entregas por comunidad, mes y waybill. La **data no se altera**: solo se reorganizó el código y se modernizó la vista para teléfono y computadora.

## Cómo usarlo

Abre `index.html` en el navegador (doble clic). Funciona en local y en GitHub Pages porque cada mes es un archivo de datos cargado con `<script>`.

## Estructura

```
caritas-inventario/
├── index.html              Interfaz única (cabecera, buscador, modal)
├── css/styles.css          Estilos (mismos colores institucionales)
├── js/app.js               Lógica: meses, búsqueda, tema, modal
├── meses/agosto.js         Data de agosto 2026
├── meses/septiembre.js     Data de septiembre 2026
├── meses/octubre.js        Data de octubre 2026
└── README.md
```

La pantalla es **una sola**. Los meses se eligen con las pestañas; cada mes vive en su propio archivo para que el código no esté todo junto.

## Publicar en GitHub

1. Crea un repositorio nuevo y sube **esta carpeta** como raíz del repo (el `index.html` debe quedar en la raíz).
2. En el repo: **Settings → Pages → Deploy from a branch → main / root**.
3. La URL será `https://USUARIO.github.io/NOMBRE-DEL-REPO/`.

Enlaces internos usan rutas relativas (`css/`, `js/`, `meses/`), válidas en GitHub Pages.

## Actualizar un mes

Edita solo el archivo correspondiente en `meses/`. No hace falta tocar la interfaz. Para un mes nuevo:

1. Copia `meses/octubre.js` y cambia el `id` y `label`.
2. Incluye el script en `index.html`.
3. Agrégalo a `MONTH_ORDER` en `js/app.js`.
