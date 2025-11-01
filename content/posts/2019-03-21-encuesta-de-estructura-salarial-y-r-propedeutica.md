---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2019-03-21
lastmod: '2025-11-01'
related:
- 2015-03-09-unas-preguntas-incomodas.md
- 2018-03-09-brechas-salariales-asi-las-calcularia-yo.md
- 2013-01-14-algunos-resultados-de-la-encuesta-trimestral-de-coste-laboral.md
- 2012-08-06-un-paseo-por-el-paquete-microdatoses-y-la-epa-de-nuevo.md
- 2012-11-28-coma-cero-dos-por-ciento-anda-ya.md
tags:
- ees
- encuestas
- ine
- microdatos
- microdatoses
- salarios
title: 'Encuesta de Estructura Salarial y R: propedéutica'
url: /2019/03/21/encuesta-de-estructura-salarial-y-r-propedeutica/
---

La [nota de prensa que acompaña a los resultados definitivos de la EES de 2014](https://www.ine.es/prensa/np996.pdf) reza:

>El salario bruto medio anual fue de 22.858,17 euros por trabajador en el año 2014, un 0,7% superior al del año anterior.

Para poder replicar esa cifra y poder comparar manzanas con manzanas hay que preprocesar los datos crudos de la EES así:


{{< highlight R >}}
library(MicroDatosEs)
dat <- ees2010("md_EES_2014.txt")

# Días año
dat$DIASRELABA <- dat$DRELABAM * 30.42 +
    dat$DRELABAD
dat$DIASRELABA[dat$DIASRELABA > 365]<- 365
dat$DIASANO <- dat$DIASRELABA -
    dat$DSIESPA2 - dat$DSIESPA4

# Salario bruto anual
dat$SALANUAL = (365/dat$DIASANO) *
    (dat$SALBRUTO + dat$VESP)
{{< / highlight >}}

Ahora sí que se puede definir, por ejemplo,

{{< highlight R >}}
salario.medio.anual <- function(x){
    sum(x$SALANUAL * x$FACTOTAL) / sum(x$FACTOTAL)
}
{{< / highlight >}}

y calcular

{{< highlight R >}}
salario.medio.anual(dat)
#[1] 22858.16
{{< / highlight >}}

en cuasiasombrosa consonancia con la cifra _oficial_, e incluso

{{< highlight R >}}
salario.medio.anual(dat[dat$SEXO == "Hombre",])
#[1] 25727.05
salario.medio.anual(dat[dat$SEXO == "Mujer",])
#[1] 19745.01
{{< / highlight >}}

si uno osa aventurarse en los procelosísismos corolarios de

> El salario medio anual de las mujeres fue de 19.744,82 euros, con un crecimiento del 1,2% respecto a 2013. El de los hombres fue de 25.727,24 euros, con un aumento del 0,2.

**Coda:** Casi se me olvida comentar que he probado sin éxito el diletantísimo código en R con el que ahora acompaña el INE a los microdatos de la EES. [`MicroDatosEs`](https://cran.r-project.org/web/packages/MicroDatosEs/index.html)funciona mejor (y, al menos, funciona). Y me reservo la opinión sobre quienes reinventan la rueda a mi costa.