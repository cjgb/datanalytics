---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- estadística
- r
date: 2019-12-04 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:53:36.592890'
related:
- 2013-05-16-el-error-en-las-encuestas-cuentas-en-una-servilleta.md
- 2016-07-04-gestion-de-la-mendacidad-encuestoelectoral-los-numeros.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
- 2016-01-25-comparaciones-de-tres-grupos-pruebas-vs-modelos.md
tags:
- p-valores
- prueba de hipótesis
- r
- remuestreo
title: P-valores y decisiones
url: /2019/12/04/p-valores-y-decisiones/
---

Los números de esta entrada son reales aunque disfrazados: proceden de un proyecto real. Para medir la efectividad de una serie de modelos que hemos creado en [Circiter](http://www.circiter.es), hemos pedido al cliente lo de siempre: que parta la lista de sujetos en dos _al azar_ para después poder medir los éxitos y fracasos usando dos procedimientos distintos.

Pero como tenemos dudas acerca del proceso de partición ---que no controlamos nosotros--- hemos medido el número de éxitos y fracasos en cada uno de los grupos en una prueba previa. Esperábamos que las proporciones fuesen _similares_ en ambos grupos y hemos obtenido esto:

* Grupo A: 119072 éxitos en 363523 sujetos  (32.75%)
* Grupo B: 118713 éxitos en 372664 sujetos (31.85%)

Parece compensado, pero, ¿qué nos dice la estadística frecuentista de toda la vida? Ejecutando

{{< highlight R >}}
n1 <- 363523
n2 <- 372664
op1 <- 119072
op2 <- 118713

v1 <- rep(0, n1)
v1[1:op1] <- 1
v2 <- rep(0, n2)
v2[1:op2] <- 1

my_v <- c(v1, v2)

res <- replicate(1000, {
  tmp <- sample(my_v, length(my_v))
  prop1 <- mean(head(tmp, n1))
  prop2 <- mean(tail(tmp, n2))
  prop1 / prop2
})
{{< / highlight >}}

obtenemos una aproximación al p-valor de 0, cero redondo.

Y ahora, la decisión.

Lo que acabamos de calcular es la probabilidad de obtener una desproporción como la que muestran los datos suponiendo que la partición sea perfectamente aleatoria. Pero sabemos poco acerca de la recíproca: la probabilidad de que la partición sea perfectamente aleatoria a la vista de la obtenida.

Podría pasar lo siguiente. Que tuviésemos delante el código con el que se ha realizado la partición y pareciese _bueno_. Podríamos en tal caso pensar que, vale, estamos _casi seguros_ de tener el algoritmo correcto aunque, tal vez, con  algún _bug_. Pero, por otra parte, aunque hayamos obtenido un p-valor de 0/1k, el _verdadero_, tal vez sea de 1/10k y pudiera, pudiera ser que nos hubiese tocado la china. ¿Y si hay 10k _Circiters_ haciendo lo mismo en estos días por el mundo y resulta que de todos ellos, solo a nosotros nos ha salido una partición así de anómala?

Sin embargo, no hemos visto el código con el que se ha realizado la partición. Además, tenemos motivos (¿sobrados?) para sospechar lo pésimo. No tenemos una priori sobre la probabilidad de que el muestreo esté correctamente realizado, pero la posteriori, a la vista de los datos, es necesariamente minúscula.

¿Y en términos del tamaño del efecto? Parece que es pequeño. A ojo, muchos lo habrían dado por bueno: 32.75% vs 31.85%. Pero también podría temerse que, una vez _demostrado_ el error en el procedimiento de muestreo, en otras particiones usando el mismo código, pudiera ocurrir _cualquier cosa_.

¿Y la decisión final? Pues sospecho que por motivos ajenos a los _data driven_ antes citados, acabemos dando por buena ---aunque con reservas--- a lo que nos han pasado. Tal es la vida del consultor.