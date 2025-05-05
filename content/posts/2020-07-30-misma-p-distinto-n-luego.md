---
author: Carlos J. Gil Bellosta
categories:
- estadística
- r
date: 2020-07-30 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:48:46.976044'
related:
- 2011-12-20-p-n-y-mi-moneda-de-la-suerte.md
- 2016-01-25-comparaciones-de-tres-grupos-pruebas-vs-modelos.md
- 2019-12-04-p-valores-y-decisiones.md
- 2016-02-03-otra-vuelta-al-caso-del-test-que-rechaza-y-el-intervalo-que-contiene.md
- 2015-09-02-respuestas-distintas-a-la-misma-pregunta.md
tags:
- estadística
- p-valores
- prop.test
- r
- intervalo de confianza
title: Misma p, distinto n, luego...
url: /2020/07/30/misma-p-distinto-n-luego/
---

Tres situaciones. La primera:

{{< highlight R >}}
n <- 20
y <- 15
test <- prop.test(y, n, p = .5)
test$p.value
# [1] 0.04417134
test$conf.int
# 0.5058845 0.9040674
{{< / highlight >}}

La segunda:

{{< highlight R >}}
n <- 200
y <- 115
test <- prop.test(y, n, p = 0.5)
test$p.value
#[1] 0.04030497
test$conf.int
# 0.5032062 0.6438648
{{< / highlight >}}

Y la tercera:

{{< highlight R >}}
n <- 2000
y <- 1046
test <- prop.test(y, n, p = 0.5)
test$p.value
#[1] 0.0418688
test$conf.int
# 0.5008370 0.5450738
{{< / highlight >}}

En resumen:

* mismo problema
* distintos tamaños muestrales
* mismo p-valor (aproximadamente)
* distintos estimadores
* distintos intervalos de confianza

La pregunta: ¿qué circunstancia es más favorable? Una respuesta, [aquí](https://statmodeling.stat.columbia.edu/2015/10/13/what-do-you-learn-from-p-05-this-example-from-carl-morris-will-blow-your-mind/).

**Coda:** Había olvidado que había escrito sobre el mismo asunto años atrás. Precisamente, en [_p, n y mi moneda de la suerte_](https://datanalytics.com/2011/12/20/p-n-y-mi-moneda-de-la-suerte/).