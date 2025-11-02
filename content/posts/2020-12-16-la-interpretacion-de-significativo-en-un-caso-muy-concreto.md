---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2020-12-16 20:11:37+00:00
draft: false
lastmod: '2025-04-06T18:45:15.595312'
related:
- 2020-10-07-el-modelo-de-poisson-es-razonablemente-robusto-pero-atencion-a-lo-de-razonablemente.md
- 2024-02-13-outliers-dos-modos.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2015-01-27-grandes-datos-maquinas-pequenas-y-regresiones-logisticas-con-variables-categoricas.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
tags:
- estadística
- fourier
- outliers
- modelos
title: La interpretación de "significativo" en un caso muy concreto
url: /2020/12/16/la-interpretacion-de-significativo-en-un-caso-muy-concreto/
---

Comienzo por el final:

![](/img/2020/12/significativo-1.png#center)

En el gráfico anterior se aprecian unos datos, generados mediante

{{< highlight R >}}
n <- 100
x <- 1:n

y_base <- cos(2 * pi * x / 100)
y <- y_base + rnorm(n, 0, .4)

datos <- data.frame(x = x, y_base = y_base, y = y,
                    cos1 = cos(2 * pi * x / 100),
                    cos2 = cos(4 * pi * x / 100))
{{< / highlight >}}

a los que se ha ido añadiendo un ruido progresivamente, es decir, una serie de _outliers_ artificiales.

Las líneas rojas representan la predicción realizada mediante un modelo _de segundo orden de Fourier_ (si se me permite), es decir,

{{< highlight R >}}
modelo <- lm(y ~ cos1 + cos2, data = out)
{{< / highlight >}}

Los p-valores correspondientes al segundo coeficiente (que no aporta nada al modelo generativo) son

![](/img/2020/12/significativo_p_valores.png#center)

Es decir, con no tanto ruido, el coeficiente _parece_ significativo. Y por su propia naturaleza, la naturaleza del coseno,

![](/img/2020/12/significativo_cosenos.png#center)

si sube cerca del cero para arrimarse a los _outliers_, tiene también que subir cerca del 50 porque tal es su naturaleza. Lo cual conlleva una exégesis muy agotadora de la significantísima naturaleza de ese repunte en el entorno del 50 en esos gráficos que he mostrado al comenzar y la enorme pérdida que representan para la humanidad si desaparece por la inopinada ocurrencia de usar métodos robustos de ajuste, etc.

En fin, nunca voléis solo con instrumentos.