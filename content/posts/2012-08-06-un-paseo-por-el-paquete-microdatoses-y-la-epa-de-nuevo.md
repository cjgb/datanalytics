---
author: Carlos J. Gil Bellosta
date: 2012-08-06 07:31:47+00:00
draft: false
title: Un paseo por el paquete MicroDatosEs (y la EPA, de nuevo)

url: /2012/08/06/un-paseo-por-el-paquete-microdatoses-y-la-epa-de-nuevo/
categories:
- estadística
- r
tags:
- datos abiertos
- epa
- estadística pública
- ine
- microdatoses
- r
---

En esta entrada voy a ilustrar el uso del [paquete MicroDatosEs](http://www.datanalytics.com/2012/08/03/el-paquete-microdataes-para-microdatos-publicos/) que anuncié el otro día. Como indiqué entonces, de momento sólo permite leer microdatos de la EPA con el formato que tiene desde el año 2005, la fecha del último cambio metodológico.

Como todavía no están disponibles los del segundo trimestre del 2012, utilizaré los del primero. Para ello, hay que ir a las [páginas del INE](http://www.ine.es/prodyser/micro_epa.htm) y seleccionar el fichero correspondiente al primer trimestre de 2012 (que los impacientes pueden descargar directamente de su [enlace directo](ftp://www.ine.es/temas/epa/datos_1t12.zip)).

Se trata de un fichero comprimido que, obviamente, tenemos que descomprimir, para obtener un fichero de texto llamado `EPAwebT0112` con un contenido prácticamente ininteligible. Haciendo

{{< highlight R >}}
library(MicroDatosEs)
epa <- epa2005("EPAwebT0112")
{{< / highlight >}}

se carga este fichero en R. El objeto resultante es de la clase `data.set`, una estructura de datos similar a un `dataframe` definido en el [paquete `memisc`](http://cran.r-project.org/web/packages/memisc/index.html) y que dispone de ciertos instrumentos y estructuras de datos que lo hacen muy adecuado para trabajar con información procedente de encuestas. De hecho, quien quiera usar R en este ámbito, haría bien en, cuando menos, familiarizarse con [la viñeta del paquete](http://cran.r-project.org/web/packages/memisc/vignettes/anes48.pdf).

Para inspeccionar el contenido del objeto `epa` se puede hacer `summary(epa)` y luego seleccionar las variables de interés mediante

{{< highlight R >}}
dat <- subset(epa, select = c(edad, sexo, nforma, aoi, factorel) )
{{< / highlight >}}

que corresponden a la edad, sexo, nivel de formación, estado ocupacional y el factor de elevación de los individuos encuestados. Puedo recodificar niveles así:

{{< highlight R >}}
dat$aoi <- recode(dat$aoi, "o" = 1 <- 3:4,
    "p" = 2 <- 5:6, "i" = 3 <- 7:9)
dat$nforma <- recode( dat$nforma,
    "o"  = 1 <- c(80,11),
    "p"  = 2 <- c(12,21,22,23,36),
    "fp" = 3 <- c(31,33,34,41,51),
    "b"  = 4 <- c(32),
    "u"  = 5 <- c(50,52:56,59,61) )
{{< / highlight >}}

con lo que estoy indicando, por ejemplo, que los ocupados, "o", son aquellos con los códigos 3 y 4 en la encuesta, los parados, "p", los de los códigos 5 y 6 y los inactivos los de los códigos 7, 8 y 9. Igualmente, recodifico los niveles educativos en "otros", "primaria", "formación profesional", "bachiller" y "universidad". Luego, con

{{< highlight R >}}
dat <- as.data.frame(dat)
{{< / highlight >}}

convierto el objeto `data.set` en un `dataframe` tradicional.

Por ejemplo, si ahora se hace

{{< highlight R >}}
tasa.paro <- dat[as.numeric(dat$edad) > 3,]     # se eliminan los menores de 16 años
tasa.paro <- tasa.paro[tasa.paro$aoi != "i", ]   # se eliminan los inactivos
tasa.paro$factorel <- tasa.paro$factorel / 100    # realmente no necesario
100 * sum(tasa.paro$factorel * (tasa.paro$aoi == "p")) / sum(tasa.paro$factorel)
{{< / highlight >}}

se obtiene la consabida tasa de paro para el primer trimestre del año.

¿Se ofrece alguien a completar los detalles hasta construir el [gráfico que mostré el otro día](http://www.datanalytics.com/2012/07/12/edad-nivel-de-formacion-sexo-y-paro/)?



