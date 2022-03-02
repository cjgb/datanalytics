---
author: Carlos J. Gil Bellosta
date: 2018-07-23 14:45:54+00:00
draft: false
title: Suicidios, crisis, y cambios de régimen en series temporales

url: /2018/07/23/suicidios-crisis-y-cambios-de-regimen-en-series-temporales/
categories:
- números
tags:
- mortalidad
- suicidio
- ine
- r
- changepoint
- cambios estructurales
---

El [capo de los diletantes](https://www.datanalytics.com/2018/07/19/que-no-que-es-imposible-esconder-medio-millon-de-muertos-y-que-la-cordialidad-esta-de-mas/), en [declaraciones a El País](https://elpais.com/elpais/2018/07/18/ciencia/1531909943_997080.html), dijo:

>"Ellos no se habían dado cuenta y nosotros tampoco", asegura Antonio Cabrera de León, autor principal del artículo del medio millón de muertos, que defiende la tesis principal de su trabajo: "Yo no tengo duda de que ha habido un incremento importantísimo de la mortalidad". Y añade: "No negamos que haya un problema con los datos, que a lo mejor no son 500.000, puede variar en decenas de miles arriba o abajo". Para Cabrera, director del área de Medicina Preventiva y Salud Pública de la ULL, no se puede negar que "**los suicidios por los desahucios y las penurias están ahí**".

Veamos pues dónde están esos suicidios. Los encontramos en el INE y podemos hacer cosas tales como:

{{< highlight R >}}
library(pxR)
library(reshape2)
library(changepoint)
library(ggplot2)

raw <- as.data.frame(read.px("https://datanalytics.com/uploads/14819.px"))

dat <- raw[, -1]
dat$Periodo <- as.Date(paste0(dat$Periodo, "M01"),
    "%YM%mM%d")
dat <- dcast(dat, Periodo ~ Sexo)
colnames(dat) <- gsub("Ambos sexos",
    "ambos", colnames(dat))

ggplot(dat, aes(x = Periodo, y = ambos)) +
    geom_line() +
    ylab("suicidios") +
    ggtitle("Sucidios mensuales en España (1980-2017) según el INE")
{{< / highlight >}}

para obtener

![](/wp-uploads/2018/07/suicidios_espana.png#center)

Porque me gusta, puedo y sé, abundo (con la descomposición en tendencia, estacionalidad mensual y residuo):

{{< highlight R >}}
tmp <- ts(dat$ambos, start = c(1980, 1), frequency = 12)
descomposicion <- stl(tmp, s.window = "periodic")
plot(descomposicion)
{{< / highlight >}}

![](/wp-uploads/2018/07/suicidios_espana_descomposicion.png#center)


Una de las cosas que nos enseña esta descoposición es que los suicidios tienden a ser más frecuentes en verano, con máximo en el mes que corre.

Y vamos con las apreciaciones del señor que publicó esa cosa que nadie más que él había advertido (entre otras cosas, porque era mentira) y que en lugar de retractarse, sigue con la matraca: ¿hay cambios de tendencia en la tasa de suicidios?

Un análisis hipersuperficial, sin tener en cuenta la distribución por edad de la población subyacente ni ninguna de las otras consideraciones de rigor, pero que incluyo aunque solo sea por ilustrar el uso de [`changepoint`](https://cran.r-project.org/web/packages/changepoint/index.html), nos dice que:

{{< highlight R >}}
    res <- cpt.meanvar(tmp, test.stat = "Poisson", method = "BinSeg")
    plot(res)
{{< / highlight >}}

![](/wp-uploads/2018/07/suicidios_espana_cambio_regimen.png#center)

¡Uaaaaahhhhhhh! ¡La fea cara del _austericidio_, reflejada en el gráfico! En promedio, unos 33 suicidios más por mes a partir del 2012, casi 400 al año. Un efecto mil veces menor que el especulado por los autores, más suficiente como para mantener en alto el pendón de la sociología normativa: causas tan horribles como la austeridad merecen sin duda efectos atroces.

De todos modos, de esos 400, 200 como poco se explican fácil. Basta con reproducir aquí el [inverosímil gráfico de la evolución de los suicidios en la villa de Madrid](https://www.datanalytics.com/2015/12/03/el-curioso-caso-de-los-suicidios-en-la-villa-de-madrid/),

![](/wp-uploads/2015/12/suicidios_municipio_madrid.png#center)

(Ay, INE, INE... ¡qué cosas publicas!)

Y nada, eso.

_**Nota final:** una de las pocas cosas ciertas que se sabe sobre los suicidios en España es que las cifras oficiales no son fiables. Desconfiad siempre de los estudios al respecto y nunca hagáis caso de los que usan las cifras del INE sin cuestionarlas._
