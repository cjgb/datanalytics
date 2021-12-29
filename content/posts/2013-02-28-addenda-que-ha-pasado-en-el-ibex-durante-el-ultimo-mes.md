---
author: Carlos J. Gil Bellosta
date: 2013-02-28 07:03:53+00:00
draft: false
title: 'Addenda: ¿qué ha pasado en el Ibex durante el último mes? '

url: /2013/02/28/addenda-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes/
categories:
- finanzas
- gráficos
- r
tags:
- bolsa
- finanzas
- gráficos
- mercados financieros
- r
---

Abundando en el tema de ayer, ahora, los mismos datos representados con mapas de calor:

[![](/wp-uploads/2013/02/ibex_heatmap.png)
](/wp-uploads/2013/02/ibex_heatmap.png)

Para obtenerlo, a lo que ya teníamos basta añadirle:

{{< highlight R "linenos=true" >}}
library(gplots)
heatmap.2(
    as.matrix(ibex.scaled),
    Rowv=F, Colv=T, key=F, trace="none",
    col=redgreen, xlab="valor", ylab="",
    margins=c(5,10))
{{< / highlight >}}



