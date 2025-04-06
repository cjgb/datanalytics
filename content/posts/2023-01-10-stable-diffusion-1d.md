---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2023-01-10
lastmod: '2025-04-06T18:49:55.374952'
related:
- 2022-06-16-modelos-difusion.md
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2018-03-01-kriging-con-stan.md
- 2019-01-08-modelos-de-conteos-con-sobredispersion-con-stan.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
tags:
- ciencia de datos
- stable diffusion
- denoising diffusion
- r
- deep learning
title: '"Denoising diffusion" en una dimensión (entre otras simplificaciones)'
url: /2023/01/10/denoising-difussion-1d/
---

### I. Motivación e introducción

_Denoising diffusion_ ---DD en lo que sigue--- es uno de los principales ingredientes del archipopular _stable diffusion_. Es un algoritmo que se usa fundamentalmente para generar imágenes y que funciona, a grandes rasgos así:

* Se parte de un catálogo de imágenes, que son vectores en un espacio (de dimensión alta).
* Esos vectores se _difuminan_ utilizando un proceso concreto ---piénsese en una especie de movimiento Browniano--- hasta que su distribución es aproximadamente una normal (en ese espacio de dimensión elevada).
* A partir de valores aleatorios de esa distribución normal, _invirtiendo_ el proceso de difusión, se obtienen muestras del espacio original (de las fotos).

Subyace a todo este tinglado la conocida como _hipótesis de la subvariedad_. Todas las fotos son, en el fondo, vectores en $R^N$ donde si las fotos son, digamos, $1000 \times 1000$, $N$ es 3M (número de píxeles por el número de canales). La hipótesis de la subvariedad dice que la distribución de las fotos que reconocemos como tales ---piénsese que la mayoría de las _fotos_ de $R^N$ no dejan de ser manchas grises--- residen en una subvariedad de dimensión baja incrustada en $R^N$. Generar imágenes equivale entonces a muestrear dicha subvariedad, con el problema de que no sabemos ni qué forma tiene ni dónde está. Lo que proporciona DD es un _caminito_ para llegar a ella desde un punto cualquiera del espacio.

Esta entrada está basada en [_Denoising diffusion probabilistic models from first principles_](https://liorsinai.github.io/coding/2022/12/03/denoising-diffusion-1-spiral.html), una entrada en la que se discute el problema de la DD ejemplificándolo en un caso en dimensión dos. En él, la subvariedad es una espiral y en la parte final se pueden observar los _caminitos_ (o aproximaciones a ellos) a los que me refiero en el párrafo anterior.

Nótese que en esa entrada se ha simplificado enormemente el problema al llamar _fotos_ a puntos en una espiral en el plano. Yo voy a simplificar todavía mucho más la presentación anterior, comenzando por reducir al mínimo extremo la dimensionalida del problema, dejándola en 1 y llamando _fotos_ a unos cuantos puntos en la recta numérica.

{{< highlight R >}}
photos <- c(-1, 0, 1)
{{< / highlight >}}

Como necesito muchos puntos de partida, en realidad voy a tomar muestras repetidas de ellas:

{{< highlight R >}}
n_photos <- 1000
orig_photos <- sample(photos, n_photos, replace = TRUE)
{{< / highlight >}}

(Este es un problema que ocurre solo en dimensión uno. De todos modos, casi nada cambiaría en lo que sigue si las fotos, en lugar de vivir en un conjunto discreto de puntos fuesen muestras de una distribución de probabilidad muy concentrada en un entorno pequeño de ellos.)

### II. Difusión

A cada punto lo vamos a someter a una especie de movimiento browniano discretizado (en varios _saltitos_). En concreto:

{{< highlight R >}}
n_jumps <- 60
means_jumps <- 0.01 * (1:n_jumps)
sd_jumps <- means_jumps

diffusion <- function(x, i){
  rnorm(n_photos, x - x * means_jumps[i], sd_jumps[i])
}
{{< / highlight >}}

Vale, no es un movimiento browniano porque tiene un _drift_. De hecho, el _drift_, que es

$$x \longmapsto (1 - \mu_i) x,$$

donde los $\mu_i$ son valores muy pequeños:

* Tiene un valor distinto en cada $x$.
* Contrae, es decir, atrae centrípetamente cada $x$ hacia el origen.

**Nota:** Esas son las propiedades más importantes de la difusión.

Así que el _drift_ contrae y, por otro lado, la pequeña $\sigma$ difumina ligeramente las trayectorias e impide que todo colapse lineal y aburridamene hacia el cero.

Así que difuminamos ---guardando los pasos intermedios---

{{< highlight R >}}
diffusion_data <- matrix(orig_photos, n_photos, n_jumps + 1)

for (i in 2:ncol(diffusion_data)) {
  diffusion_data[,i] <- diffusion(diffusion_data[, i-1], i - 1)
}
{{< / highlight >}}

y obtenemos, entre otras cosas, un histograma del resultado final:

{{< highlight R >}}
hist(diffusion_data[,ncol(diffusion_data)], breaks = 50)
{{< / highlight >}}

![](/wp-uploads/2023/denoising_diffusion_00.png#center)


### III. Inversión de la difusión

Para generar una _foto_ hay que:

* Elegir un punto al azar de esa distribución final (la representada por histograma).
* Invertir el proceso de difusión.

Lo primero es sencillo. De hecho, no nos vamos a contentar con una única _foto_ sino que vamos a generar 100 de ellas. Para ello, vamos a tomar una muestra de puntos (o _semillas_) con la distribución que aproximadamente refleja el histograma:

{{< highlight R >}}
tmp <- diffusion_data[,ncol(diffusion_data)]
seeds <- rnorm(100, mean(tmp), sd(tmp))
{{< / highlight >}}

Para invertir el proceso de difusión hay que invertir cada uno de los _saltitos_ por separado. Por ejemplo, el _saltito_ 10 tiene esta pinta:

{{< highlight R >}}
plot(diffusion_data[, 10],
     diffusion_data[, 11],
     xlab = "jump from",
     ylab = "jump to")
{{< / highlight >}}

![](/wp-uploads/2023/denoising_diffusion_01.png#center)

La _inversa_, por lo tanto, tiene este aspecto:

{{< highlight R >}}
plot(diffusion_data[, 11],
     diffusion_data[, 10],
     xlab = "points at",
     ylab = "came from")
{{< / highlight >}}

![](/wp-uploads/2023/denoising_diffusion_02.png#center)

Nótese que podemos representar fácilmente esas funciones por trabajar en una dimensión. Las funciones correspondientes en dimensión $N$ lo serían entre vectores de $R^N$ y $R^N$. La ventaja de trabajar en una dimensión, además, es que tenemos mil maneras de aproximar esa función; en dimensiones más altas, _todo el mundo_ usa redes neuronales. Usando ---¿por qué no?--- árboles (de cierta _profundidad_/_complejidad_):

{{< highlight R >}}
inv_diff <- function(x, i) {
  my_x <- diffusion_data[,i+1]
  my_y <- diffusion_data[,i]

  mod <- ctree(my_y ~ my_x,
               data.frame(my_x = my_x, my_y = my_y),
               controls = ctree_control(
                 mincriterion = .1))

  predict(mod, data.frame(my_x = my_x))
}
{{< / highlight >}}

Cada `foo_i(x) <- inv_diff(x, i)` representa una aproximación al _saltito_ `i`, de manera que

{{< highlight R >}}
out <- seeds
for (i in n_jumps:2) {
  print(i)
  out <- inv_diff(out, i)
}
{{< / highlight >}}

debería ser una muestra ---aproximada--- de nuestras _fotos_ originales. Y en efecto,

![](/wp-uploads/2023/denoising_diffusion_03.png#center)

### IV. Comentarios finales

* En el fondo, por construcción, la _mejor_ representación de la inversa de cada saltito sería una _dilatación_ (la operación contraria a la contracción que representa el _drift_ del movimiento _seudobrowniano_). Eso, al menos, para los primeros _saltitos_.
* Es instructivo contemplar la función que invierte los _saltitos_ como definiendo un campo vectorial en $R^N$ que apunta hacia la subvariedad donde residen las fotos.
* En todo lo anterior hay cierto trabajo de calibración del tamaño de los saltos, etc. sine qua non.
* No sé hasta qué punto todas las referencias a Langevin, etc. en la literatura sobre el tema no es puro ejercicio de erudición académica irrelevante en la práctica. Tal vez fueron relevantes en el momento de la ideación del proceso, pero podría vivirse sin ellos (sí, me estoy refiriendo aquí muy concretamente a los contextos de descubrimiento y de justificación).