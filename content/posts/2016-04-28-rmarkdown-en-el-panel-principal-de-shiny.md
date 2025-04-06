---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2016-04-28 08:13:26+00:00
draft: false
lastmod: '2025-04-06T18:47:32.276612'
related:
- 2017-06-26-como-preambulais-vuestros-rmd.md
- 2016-05-25-rmd2r-un-conversor-de-lo-que-su-propio-nombre-indica.md
- 2019-06-25-nota-para-mi-usar-flextable-usar-flextable.md
- 2018-04-25-diapositivas-con-reveal-js-y-yeoman.md
- 2011-01-31-r-node-una-interfaz-web-para-r.md
tags:
- rmarkdown
- shiny
title: Rmarkdown en el panel principal de Shiny
url: /2016/04/28/rmarkdown-en-el-panel-principal-de-shiny/
---

Comparto con mis lectores un experimento de esta misma mañana: cómo insertar en el panel principal de Shiny un documento generado con [Rmarkdown](http://rmarkdown.rstudio.com/). Que, por supuesto, cambia según se seleccionen unos u otros parámetros en Shiny.

Es un ejemplo sencillo, estúpido, sin comentarios, desordenado y, en resumen, muy mejorable. Puede descargarse de [aquí](/uploads/markdown_en_shiny.zip).

El truco es de los sucios:

* En `server.R` se guardan los parámetros que envía `ui.R` en un fichero _de intercambio_ con `save`.
* La plantilla del .Rmd lee esos parámetros durante el proceso de compilación (con ``rmarkdown::render``).
* `ui.R` pinta el html con `htmlOutput`.

Y, a partir de la plantilla, ¡a crecer!