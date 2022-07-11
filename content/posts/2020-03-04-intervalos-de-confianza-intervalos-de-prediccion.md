---
author: Carlos J. Gil Bellosta
date: 2020-03-04 09:13:00+00:00
draft: false
title: Intervalos de confianza, intervalos de predicción

url: /2020/03/04/intervalos-de-confianza-intervalos-de-prediccion/
categories:
- estadística
tags:
- estadística
- intervalo de confianza
- intervalo de predicción
- predicción
- r
---

Contexto:

{{< highlight R >}}
modelo <- lm(dist ~ speed, data = cars)
{{< / highlight >}}

Intervalos de confianza:







{{< highlight R >}}
head(predict(modelo, interval = "confidence"))
#        fit        lwr       upr
#1 -1.849460 -12.329543  8.630624
#2 -1.849460 -12.329543  8.630624
#3  9.947766   1.678977 18.216556
#4  9.947766   1.678977 18.216556
#5 13.880175   6.307527 21.452823
#6 17.812584  10.905120 24.720047
{{< / highlight >}}

Intervalos de predicción:

{{< highlight R >}}
head(predict(modelo, interval = "prediction"))
#        fit       lwr      upr
#1 -1.849460 -34.49984 30.80092
#2 -1.849460 -34.49984 30.80092
#3  9.947766 -22.06142 41.95696
#4  9.947766 -22.06142 41.95696
#5 13.880175 -17.95629 45.71664
#6 17.812584 -13.87225 49.49741
{{< / highlight >}}

Creo que la diferencia (y el significado) es claro. Para todos los demás, [esto](https://datascienceplus.com/prediction-interval-the-wider-sister-of-confidence-interval/).
