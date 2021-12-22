---
author: Carlos J. Gil Bellosta
date: 2015-03-12 08:13:21+00:00
draft: false
title: Datos en formato largo y melt

url: /2015/03/12/datos-en-formato-largo-y-melt/
categories:
- r
tags:
- melt
- r
- reshape2
- paquetes
---

En ocasiones uno recibe datos no muy distintos de


{{< highlight R "linenos=true" >}}
aragon <- read.table("http://datanalytics.com/uploads/pob_aragon",
                        header = T, sep = "\t")
aragon

# Provincias Periodo Hombres Mujeres
# 1     Huesca    2014  113840  111069
# 2     Huesca    2004  107961  104940
# 3     Teruel    2014   71449   68916
# 4     Teruel    2004   71073   68260
# 5   Zaragoza    2014  471675  488436
# 6   Zaragoza    2004  441840  455510
{{< / highlight >}}


Los mismos datos en _formato largo_ son:


{{< highlight R "linenos=true" >}}
library(reshape2)

aragon.largo <- melt(aragon, id.vars = c("Provincias", "Periodo"))
aragon.largo
# Provincias Periodo variable  value
# 1      Huesca    2014  Hombres 113840
# 2      Huesca    2004  Hombres 107961
# 3      Teruel    2014  Hombres  71449
# 4      Teruel    2004  Hombres  71073
# 5    Zaragoza    2014  Hombres 471675
# 6    Zaragoza    2004  Hombres 441840
# 7      Huesca    2014  Mujeres 111069
# 8      Huesca    2004  Mujeres 104940
# 9      Teruel    2014  Mujeres  68916
# 10     Teruel    2004  Mujeres  68260
# 11   Zaragoza    2014  Mujeres 488436
# 12   Zaragoza    2004  Mujeres 455510
{{< / highlight >}}


Si eso de _datos largos_ (o en formato largo) no te suena, pierde un momento en:

* Convencerte de que, efectivamente, la información contenida en ambas tablas es idéntica
* Memorizar lo siguiente: `reshape2`, `reshape2`,... y `melt`, `melt`,...
* Entender el papel del argumento `id.vars` en la llamada a `melt`: ¿qué catástrofe sucede si usas `id.vars = "Provincia"`?

¿Por qué datos en formato largo? Creo que por cuatro motivos. El primero, subjetivo y tal vez el menos importante, es conceptual: creo que es una representación natural de los datos. Una tabla se convierte en un vector de valores etiquetados. En el ejemplo anterior, la columna `value` contiene números y las anteriores los contextualizan, los describen.

El segundo es que es el formato más conveniente para **filtrar**. Cualquier filtro en formato largo se escribe tal que `aragon[`condición`,]` (o similares). No hay selección de columnas.

Tercero, que es el formato más conveniente para realizar cierto tipo de **agregaciones** (p.e., eliminando dimensiones para extraer totales). Verbigracia,


{{< highlight R "linenos=true" >}}
library(plyr)

aragon.totales <- ddply(aragon.largo,
    .(Provincias, Periodo),
    summarize, total = sum(value))

aragon.totales
Provincias Periodo  total
# 1     Huesca    2004 212901
# 2     Huesca    2014 224909
# 3     Teruel    2004 139333
# 4     Teruel    2014 140365
# 5   Zaragoza    2004 897350
# 6   Zaragoza    2014 960111
{{< / highlight >}}


Y finalmente, es que a partir del formato largo se puede reestructurar la información de la tabla de otras maneras fácilmente. Aunque de eso hablaré en otra entrada.
