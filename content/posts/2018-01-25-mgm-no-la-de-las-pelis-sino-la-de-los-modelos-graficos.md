---
author: Carlos J. Gil Bellosta
date: 2018-01-25 08:13:12+00:00
draft: false
title: mgm (no la de las pelis sino la de los modelos gráficos)

url: /2018/01/25/mgm-no-la-de-las-pelis-sino-la-de-los-modelos-graficos/
categories:
- estadística
- r
tags:
- estadística
- mgm
- modelos gráficos
- paquetes
- r
---

Cayeron en mis manos unos datos que no puedo publicar, pero me atreveré a presentar algunos resultados anonimizados. Se trata de una tabla de puntuaciones numéricas (18 en total, cada una en su columna) proporcionadas por unos cuantos centenares de sujetos (filas). Era de interés un estudio cualitativo de las posibles relaciones de dependencia entre las variables.

La manera más rápida de comenzar, un `heatmap(cor(dat))`, para obtener

![](/wp-uploads/2018/01/heatmap.png)

Y luego PCA y todas esas cosas.

Pero esos datos fueron la excusa perfecta para ensayar algo que todavía no tengo muy claro lo que hace (porque no he acabado de leer con detalle [esto](https://arxiv.org/pdf/1510.06871v2.pdf)): [`mgm`](https://cran.r-project.org/web/packages/mgm/index.html).

Así que

{{< highlight R "linenos=true" >}}
modelo <- mgm(as.matrix(dat),
    type = rep("g", ncol(dat)),
    level = rep(1, ncol(dat)),
    k = 2,
    lambdaSel = "EBIC", lambdaGam = 0.25)
{{< / highlight >}}

y luego

{{< highlight R "linenos=true" >}}
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

![](/wp-uploads/2018/01/mgm.png)

que podrá ser muchas cosas (algunas que aún desconozco) pero que nunca dejará de ser la mar de _molón_.

(Y dejo al lector el ejercicio de compararlo con el _heatmap_ de más arriba).