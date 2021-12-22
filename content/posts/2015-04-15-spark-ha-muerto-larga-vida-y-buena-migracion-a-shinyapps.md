---
author: Carlos J. Gil Bellosta
date: 2015-04-15 08:13:48+00:00
draft: false
title: Spark ha muerto, ¡larga vida (y buena migración) a Shinyapps!

url: /2015/04/15/spark-ha-muerto-larga-vida-y-buena-migracion-a-shinyapps/
categories:
- r
tags:
- r
- shiny
- shinyapps
---

Primero, y por evitar confusiones, [este](https://spark.apache.org/) no es el Spark que se nos muere. Se muere un servidor de RStudio donde se colgaban aplicaciones desarrolladas en `shiny`, `spark.rstudio.com`.

El nuevo servicio se llama [`shinyapps.io`](http://www.shinyapps.io). Que viene a ser lo mismo pero más formal, con sus _tokens_, sus claves, su modelo _freemium_ y sus servicios _pro_ de pago.

Migrar aplicaciones, como mi [vetusto detector de idiomas](http://www.datanalytics.com/2013/05/06/mi-primera-aplicacion-en-shiny-un-detector-de-idiomas/), viene a ser equivalente a colgarlas modo ex novo en `shinyapps.io`:

1. Abrir una cuenta en `shinyapps.io`
2. Instalar el paquete shinyapps de Github (i.e., `devtools::install_github('rstudio/shinyapps')`)
3. Subir tu aplicación: `shinyapps::deployApp('path/to/app')`

