---
author: Carlos J. Gil Bellosta
date: 2016-04-28 08:13:26+00:00
draft: false
title: Rmarkdown en el panel principal de Shiny

url: /2016/04/28/rmarkdown-en-el-panel-principal-de-shiny/
categories:
- r
tags:
- rmarkdown
- shiny
---

Comparto con mis lectores un experimento de esta misma mañana: cómo insertar en el panel principal de Shiny un documento generado con [Rmarkdown](http://rmarkdown.rstudio.com/). Que, por supuesto, cambia según se seleccionen unos u otros parámetros en Shiny.

Es un ejemplo sencillo, estúpido, sin comentarios, desordenado y, en resumen, muy mejorable. Puede descargarse de [aquí](/wp-uploads/2016/04/markdown_en_shiny.zip).

El truco es de los sucios:



	  * En `server.R` se guardan los parámetros que envía `ui.R` en un fichero _de intercambio_ con `save`.
	  * La plantilla del .Rmd lee esos parámetros durante el proceso de compilación (con ``rmarkdown::render``).
	  * `ui.R` pinta el html con `htmlOutput`.


Y, a partir de la plantilla, ¡a crecer!
