---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-03-28 00:00:00
lastmod: '2025-04-06T19:02:30.931428'
related:
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2024-05-02-falacia-ecologica.md
- 2024-06-20-mas-r-cuadrado.md
- 2021-02-16-hay-mil-motivos-para-criticar-una-regresion-trucha-pero-una-rc2b2-baja-no-es-uno-de-ellos.md
tags:
- regresión
- paradojas
title: ¿Cómo se interpretan los resultados de estas regresiones
url: /2024/3/28/interpretacion-regresion/
---

Esta entrada trata sobre las aparentes contradicciones que surgen cuando se comparan las regresiones $y \sim x$ y $x \sim y$. En particular, [aqui](https://marginalrevolution.com/marginalrevolution/2021/07/a-regression-puzzle.html) se muestran

![](/wp-uploads/2024/rodgers-epa-vs-cap.png#center)

y

![](/wp-uploads/2024/rodgers-cap-vs-epa.png#center)

que vienen a decir:

- El tal Rodgers rinde por encima de lo que se espera para su salario.
- Para lo que rinde, gana demasiado.

Lo cual, a pesar de lo contradictorio, no es un fenómeno extrañísimo. Si uno hace


{{< highlight python >}}
n <- 100
x <- rnorm(n)

a <- .3
b <- .5
y <- a * x + b + 0.1 * rnorm(100)

reg1 <- lm(y ~ x)
reg2 <- lm(x ~ y)

which.1 <- y > predict(reg1, data.frame(x = x))
which.2 <- x > predict(reg2, data.frame(y = y))
tmp <- cbind(which.1, which.2)
tmp <- which(tmp[,1] & tmp[,2])

ab <- coef(reg2)

plot(x, y)
abline(reg1, col = "blue")
abline(b = 1/ ab[2], a = - ab[1] / ab[2], col = "green")

points(x[tmp], y[tmp], col = "red", pch = 16)
{{< / highlight >}}

puede obtener tantos gráficos de la forma

![](/wp-uploads/2024/rodgers.png#center)

como uno quiera; en todos ellos, los puntos sólidos rojos son los _rodgers_.

Por si alguien no la conoce, enlazo la [discusión de Andrew Gelman](https://statmodeling.stat.columbia.edu/2021/12/13/the-nfl-regression-puzzle-and-my-discussion-of-possible-solutions/) sobre el asunto.

La mía es más o menos así: este ejemplo pone de manifiesto un _bug_ de la regresión lineal que uno puede convertir en _feature_ cuando lo que le interesa es invertir el significado de unos números. Dicho de otra manera, dado que hoy en día está de moda despejar (como en una ecuación) la figura del relator y hacer que sean los propios números los que armen las historias, ese relator oculto entre las bambalinas puede ---no siempre se da la feliz circunstancia, como evidencian los gráficos anteriores--- tener la opción de elegir entre $y \sim x$ o $x \sim y$ para que los corolarios sean del agrado de quien ha de pagarle la nómina.