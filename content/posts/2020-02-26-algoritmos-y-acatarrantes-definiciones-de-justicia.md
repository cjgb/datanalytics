---
author: Carlos J. Gil Bellosta
date: 2020-02-26 09:13:00+00:00
draft: false
title: '"Algoritmos" y acatarrantes definiciones de "justicia"'

url: /2020/02/26/algoritmos-y-acatarrantes-definiciones-de-justicia/
categories:
- probabilidad
- r
tags:
- algoritmos
- discriminación
- justicia
- ludismo
- r
- sesgo
---

Lee _[Justicia: los límites de la inteligencia artificial... y humana](https://nadaesgratis.es/anxo-sanchez/justicia-los-limites-de-la-inteligencia-artificial)_ y cuando acabes, te propongo un pequeño experimento probabilístico. Por referencia, reproduzco aquí los criterios de _justicia_ del artículo que glosa el que enlazo:

![](/wp-uploads/2020/02/fairness.png#center)

Centrémonos en (B), sabiendo que, por simetría, lo que cuento se aplica también a (C).

Supongamos que tenemos dos grupos, cada uno de ellos de

{{< highlight R >}}
n <- 1000000
{{< / highlight >}}

personas para estar en las asíntotas que aman los frecuentistas. Estos grupos tienen distribuciones distintas de un factor de riesgo,

{{< highlight R >}}
p.group.1 <- rbeta(n, 3, 2)
p.group.2 <- rbeta(n, 2, 3)
{{< / highlight >}}

y se observan

{{< highlight R >}}
y.group.1 <- sapply(p.group.1, function(p) rbinom(1, 1, p))
y.group.2 <- sapply(p.group.2, function(p) rbinom(1, 1, p))
{{< / highlight >}}

Construimos un modelo perfecto, que a cada sujeto le asigne exactamente su probabilidad. Ese es el _score_.

Por otro lado, la clase negativa a la que se refiere (B) son los sujetos para los que `y = 0`. Para ser _justo_, debería suceder que


{{< highlight R >}}
mean(p.group.1[y.group.1 == 0])
mean(p.group.2[y.group.2 == 0])
{{< / highlight >}}

fuesen iguales.

Vosotros mismos.

**Nota:** Después de escrito lo anterior he dado con un ejemplo todavía más simple e ilustrativo. Si nadie lo adelanta antes en los comentarios, va mañana.