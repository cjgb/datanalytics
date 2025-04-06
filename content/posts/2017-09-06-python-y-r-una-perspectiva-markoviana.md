---
author: Carlos J. Gil Bellosta
categories:
- r
date: 2017-09-06 08:13:16+00:00
draft: false
lastmod: '2025-04-06T18:46:36.739246'
related:
- 2013-12-18-cuanta-gente-usara-r-vs-python-vs-otros-dentro-de-1000-anos.md
- 2014-08-13-mis-procesos-puntuales-con-glm.md
- 2019-02-12-sr-python-muchas-gracias-por-su-candidatura-ya-le-llamaremos-cuando-tenga-modelos-mixtos.md
- 2016-06-16-metropolis-hastings-en-scala.md
- 2018-01-25-mgm-no-la-de-las-pelis-sino-la-de-los-modelos-graficos.md
tags:
- markov
- python
- r
title: 'Python y R: una perspectiva markoviana'
url: /2017/09/06/python-y-r-una-perspectiva-markoviana/
---

Hoy he visto

![](/wp-uploads/2017/09/r_python.jpg)


[aquí](http://www.kdnuggets.com/2017/08/python-overtakes-r-leader-analytics-data-science.html) y he escrito

{{< highlight R >}}
m <- matrix(c(74, 15, 10, 1, 11, 50, 38, 1,
            5, 4, 90, 1, 17, 4, 19, 60),
            4, 4, byrow = TRUE)
m <- m / 100
{{< / highlight >}}

luego

{{< highlight R >}}
m %*% m %*% m %*% m %*% m %*% m %*% m %*% m %*% m %*% m %*% m %*% m %*% m%*% m%*% m%*% m%*% m%*% m%*% m %*% m %*% m %*% m %*% m %*% m %*% m %*% m %*% m %*% m %*% m %*% m %*% m%*% m%*% m%*% m%*% m%*% m%*% m
#          [,1]      [,2]      [,3]       [,4]
#[1,] 0.1926676 0.1133218 0.6696203 0.02439024
#[2,] 0.1926647 0.1133206 0.6696245 0.02439024
#[3,] 0.1926638 0.1133202 0.6696258 0.02439024
#[4,] 0.1926675 0.1133218 0.6696205 0.02439025
{{< / highlight >}}

y finalmente

{{< highlight R >}}
res <- eigen(t(m))
res$vectors[,1] / sum(res$vectors[,1])
#[1] 0.19266473 0.11332059 0.66962444 0.02439024
{{< / highlight >}}

[Aquí](https://brilliant.org/wiki/stationary-distributions/) dice por qué.