---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2013-12-04 07:43:34+00:00
draft: false
lastmod: '2025-04-06T18:49:59.381786'
related:
- 2010-06-28-los-mejores-paquetes-de-r-ii-analisis-anual-de-la-red-social-de-los-participantes-en-r-help.md
- 2010-04-18-los-mejores-paquetes-de-r-i-la-red-social-de-los-participantes-en-r-help.md
- 2018-04-09-la-intrahistoria-de-mi-libro-de-r.md
- 2011-07-28-el-paquete-pxr-en-cran.md
- 2012-06-07-hoy-hablaremos-de-r-es-org.md
tags:
- r
- r-help-es
title: Ayuda de R en español
url: /2013/12/04/ayuda-de-r-en-espanol/
---

He ejecutado hoy tres ficheros secuencialmente:

{{< highlight bash >}}
#!/bin/bash

wget -nd -r -l1 --accept gz https://stat.ethz.ch/pipermail/r-help-es/
zcat *.gz > all_mails
rm *.gz
{{< / highlight >}}

en sh,

{{< highlight python >}}
#!/usr/bin/python

import mailbox
from email.utils import parsedate
from time import mktime

for message in mailbox.mbox('all_mails'):
    fecha = parsedate(message["date"])
    print str(fecha[0]) + "-" + str(fecha[1])
{{< / highlight >}}

en Python y finalmente

{{< highlight R >}}
#!/usr/bin/Rscript

library(zoo)

meses <- read.table("horas.txt")[,1]
meses <- paste(meses, "-1", sep = "")
meses <- table(meses)

meses <- zoo(meses, order.by = strptime(names(meses), format = "%Y-%m-%d"))

png("uso_r_help_es.png")
    plot(meses)
dev.off()
{{< / highlight >}}

en R para construir

[![](/wp-uploads/2013/12/uso_r_help_es.png#center)
](/wp-uploads/2013/12/uso_r_help_es.png#center)

y constatar que la [lista de correo de ayuda de R en español](https://stat.ethz.ch/mailman/listinfo/r-help-es) está en crisis.

(Nota para quienes entienden mejor las explicaciones textuales que el siempre unívoco código: los programas anteriores descargan los correos enviados a r-help-es desde sus orígenes, extraen sus fechas de envío y representan gráficamente su número por mes).

Pudiera ser esta la única serie temporal de cosas relacionadas con R que no tiene esa tendencia que los de letras, los de mixtas y la mitad de los de ciencias describen como _exponencial_. Es preocupante.

[Pedro Concejero](https://twitter.com/ConcejeroPedro) lanzó el otro día el guante: hay que conseguir (¡y por su propio bien!) atraer a los usuarios de R —y sobre todo los noveles— a sus discusiones. Para mí, las listas de correo son parte integral de la documentación de R, su versión _social_.

Así que dejo aquí planteada la siguiente pregunta: ¿cómo darle más vida a la lista? ¿Cómo llegar a quienes no la conocen? Se aceptan sugerencias.

(Nota: algún movimiento ya se ha hecho. P.e., he editado la [presentación de la lista](https://stat.ethz.ch/mailman/listinfo/r-help-es) para hacerla más _google-friendly_.)