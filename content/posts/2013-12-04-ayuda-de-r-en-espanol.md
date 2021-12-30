---
author: Carlos J. Gil Bellosta
date: 2013-12-04 07:43:34+00:00
draft: false
title: Ayuda de R en español

url: /2013/12/04/ayuda-de-r-en-espanol/
categories:
- r
tags:
- r
- r-help-es
---

He ejecutado hoy tres ficheros secuencialmente:

{{< highlight bash "linenos=true" >}}
#!/bin/bash

wget -nd -r -l1 --accept gz https://stat.ethz.ch/pipermail/r-help-es/
zcat *.gz > all_mails
rm *.gz
{{< / highlight >}}

en sh,

{{< highlight python "linenos=true" >}}
#!/usr/bin/python

import mailbox
from email.utils import parsedate
from time import mktime

for message in mailbox.mbox('all_mails'):
    fecha = parsedate(message["date"])
    print str(fecha[0]) + "-" + str(fecha[1])
{{< / highlight >}}

en Python y finalmente

{{< highlight R "linenos=true" >}}
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
