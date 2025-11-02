---
author: Carlos J. Gil Bellosta
categories:
- finanzas
- gráficos
- r
date: 2013-02-28 07:03:53+00:00
draft: false
lastmod: '2025-04-06T18:49:12.321030'
related:
- 2013-02-27-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes.md
- 2013-01-09-el-ibex-35-estilo-gapminder.md
- 2016-04-08-clusters-de-trayectorias-con-la-distancia-de-frechet.md
- 2011-09-09-treemaps-en-r.md
- 2016-05-20-descarga-de-datos-del-ibex-35-y-otros-minuto-a-minuto-en-tiempo-casi-real.md
tags:
- bolsa
- finanzas
- gráficos
- mercados financieros
- r
title: 'Addenda: ¿qué ha pasado en el Ibex durante el último mes? '
url: /2013/02/28/addenda-que-ha-pasado-en-el-ibex-durante-el-ultimo-mes/
---

Abundando en el tema de ayer, ahora, los mismos datos representados con mapas de calor:

[![](/img/2013/02/ibex_heatmap.png#center)
](/img/2013/02/ibex_heatmap.png#center)

Para obtenerlo, a lo que ya teníamos basta añadirle:

{{< highlight R >}}
library(gplots)
heatmap.2(
    as.matrix(ibex.scaled),
    Rowv=F, Colv=T, key=F, trace="none",
    col=redgreen, xlab="valor", ylab="",
    margins=c(5,10))
{{< / highlight >}}