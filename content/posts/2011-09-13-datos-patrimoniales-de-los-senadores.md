---
author: Carlos J. Gil Bellosta
categories:
- números
- r
date: 2011-09-13 06:53:45+00:00
draft: false
lastmod: '2025-04-06T19:05:38.371339'
related:
- 2018-11-08-siguen-votando-igual-los-diputados.md
- 2012-09-20-como-votan-los-diputados.md
- 2012-03-27-acceso-y-reutilizacion-de-datos-publicos.md
- 2017-04-10-pues-si-puede-fabricarse-uno-para-espana.md
- 2011-06-10-datos-publicos-datos-dup.md
tags:
- números
- r
title: Datos patrimoniales de los senadores
url: /2011/09/13/datos-patrimoniales-de-los-senadores/
---

David Cabo, de [Pro Bono Público](http://blog.probp.org/) colgó el otro día una hoja de cálculo en Google Docs con referencias a las declaraciones del patrimonio (véase [un ejemplo](http://www.senado.es/legis9/senadores/regbi/DBR_70998.pdf)) a las que están ahora obligados los senadores y que cuelgan de la página de su benemérita y utilísima institución. Dado que los datos están en un formato no legible automáticamente, solicitó la colaboración de voluntarios para tabular la información.

Rápidamente logró completarse la tarea. Y ahora me he molestado en extraer una selección de los datos (quitando columnas descriptivas, etc.) para que los aficionados a R se entretengan sacándoles punta.

No estoy particularmente inspirado en estos días. Así que no voy a tratar de crear ningún tipo de visualización ni de realizar ningún análisis. Presento el código que aparece a continuación a modo de ejemplo por si alguien quiere dedicarle unos minutos. ¡Le agradecería que me indicase lo que ha llegado a hacer y averiguar!


{{< highlight R >}}
senado <- read.table("http://www.datanalytics.com/uploads/declaracion_bienes_senadores.csv", header = T, sep = ";", dec = ",")
table(senado$grupo)

plot(senado$irpf ~ senado$grupo)
plot(log10(senado$acciones), senado$dividendos)
{{< / highlight >}}