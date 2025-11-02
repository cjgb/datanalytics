---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2018-01-25 08:13:12+00:00
draft: false
lastmod: '2025-04-06T18:55:35.268888'
related:
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2017-09-06-python-y-r-una-perspectiva-markoviana.md
- 2014-02-06-experimentos-con-el-paquete-gbm.md
- 2010-09-16-representando-graficamente-conjuntos-de-datos-pequenos.md
- 2012-05-18-modelos-exponenciales-para-grafos-aleatorios-y-iii-inferencia.md
tags:
- estadística
- mgm
- modelos gráficos
- paquetes
- r
title: mgm (no la de las pelis sino la de los modelos gráficos)
url: /2018/01/25/mgm-no-la-de-las-pelis-sino-la-de-los-modelos-graficos/
---

Cayeron en mis manos unos datos que no puedo publicar, pero me atreveré a presentar algunos resultados anonimizados. Se trata de una tabla de puntuaciones numéricas (18 en total, cada una en su columna) proporcionadas por unos cuantos centenares de sujetos (filas). Era de interés un estudio cualitativo de las posibles relaciones de dependencia entre las variables.

La manera más rápida de comenzar, un `heatmap(cor(dat))`, para obtener

![](/img/2018/01/heatmap.png#center)

Y luego PCA y todas esas cosas.

Pero esos datos fueron la excusa perfecta para ensayar algo que todavía no tengo muy claro lo que hace (porque no he acabado de leer con detalle [esto](https://arxiv.org/pdf/1510.06871v2.pdf)): [`mgm`](https://cran.r-project.org/web/packages/mgm/index.html).

Así que

{{< highlight R >}}
modelo <- mgm(as.matrix(dat),
    type = rep("g", ncol(dat)),
    level = rep(1, ncol(dat)),
    k = 2,
    lambdaSel = "EBIC", lambdaGam = 0.25)
{{< / highlight >}}

y luego

{{< highlight R >}}
qgraph(modelo$pairwise$wadj,
    layout = 'spring', repulsion = 1.3,
    edge.color = modelo$pairwise$edgecolor,
    nodeNames = colnames(dat),
    color = color,
    groups = my_groups,
    legend.mode = "style2", legend.cex=.4,
    vsize = 3.5, esize = 15)
{{< / highlight >}}

para obtener

![](/img/2018/01/mgm.png#center)

que podrá ser muchas cosas (algunas que aún desconozco) pero que nunca dejará de ser la mar de _molón_.

(Y dejo al lector el ejercicio de compararlo con el _heatmap_ de más arriba).