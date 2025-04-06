---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-03-02
lastmod: '2025-04-06T18:46:24.759662'
related:
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
- 2020-06-29-sobremuestreando-x-y-no-y.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2022-03-08-estadistica-ciencias-blandas.md
- 2017-10-16-modelos-no-lineales-directos-e-inversos.md
tags:
- error
- regresión lineal
- sesgo
- varianza
- stan
- r
title: '"Proxys": error y sesgo en modelos lineales'
url: /2022/03/02/proxys-error-sesgo-modelos-lineales/
---

El otro día publiqué un [minihilo en Twitter](https://twitter.com/gilbellosta/status/1498670875847139329)
 que terminaba con una encuesta. Proponía el siguiente problema:

1. Quiero, abusando del lenguaje, estimar el efecto de $x$ sobre $y$ usando el modelo lineal clásico $y = a_0 + a_1 x + \epsilon_1$.
2. Pero no puedo medir $x$ con precisión. Solo tengo una medida ruidosa/aproximada de $x$, $z = x + \eta$, donde $\eta$ es normal, independiente de $\epsilon_1$, etc.
3. Uso el modelo $y = b_0 + b_1 z + \epsilon_2$.

La pregunta que planteé consistía en elegir entre las siguientes tres opciones:

1. $b_1$ es un estimador bueno (sin sesgo, mismo error) de $a_1$.
2. $b_1$ es un estimador sin sesgo pero con más varianza que $a_1$.
3. $b_1$ está sesgado.

Hay varias cosas que decir sobre este problema. En primer lugar, que es muy frecuente, mucho más de lo que parece. Ejemplos:

1. Quiero estudiar el efecto de la renta sobre $X$, pero como no tengo la renta de los sujetos, uso la del municipio/sección censal/provincia.
2. Quiero estudiar el efecto de la contaminación por partículas en suspensión sobre la mortalidad de una cohorte de sujetos, pero como no tengo la exposición, uso las cifras de las estación de medida más próxima al domicilio de cada sujeto.
3. Etc.

En realidad, hay pocos estudios donde no digan cosas del tipo: quiero estudiar el efecto de $X$ sobre $Y$, pero como no puedo medir $X$, tomo una cosa _parecida_ $Z$, porque es lo único que hay a la mano (y si no publico... ya saben).

Obviamente, la respuesta a la pregunta anterior ---que discutiré a más abajo--- tiene mucho que decir sobre la validez del subterfugio anterior.

En segundo lugar, hay varios caminos para obtener una respuesta a la pregunta planteada arriba. Uno es el teórico, que es farragoso y aburrido. Otro es simular. Pero prefiero un experimento mental (sí, a lo [_street fighting statistics_](https://www.datanalytics.com/2021/11/09/nuevo-video-en-youtube-street-fighting-statistics-2-n/)):

1. Si $z$ es prácticamente igual a $x$ (digamos que el ruido es tan pequeño que solo lo afecta de la vigésima cifra significativa de $x$ en adelante), entonces $a_1$ es prácticamente igual a $b_1$ por razones obvias. Si esto no fuese cierto, estaríamos haciendo homeopatía de datos en lugar de ciencia de datos.
2. Si $z$ es prácticamente ruido y la señal, $x$, es comparativamente muy pequeña (digamos que la señal solo afecta de la vigésima cifra significativa del ruido en adelante), $b_1$ es prácticamente cero sea cual sea el valor de $a_1$.
3. Entre (1) y (2), hay sesgo por pura interpolación.

Finalmente, déjeseme apuntar una idea que algunos encontrarán provocativa. Tengo la sensación de que problemas como este ---esta entrada es, de hecho, una especie de preparación para otras que tengo programadas para el futuro inmediato sobre extensiones del problema que trata--- son meramente seudoproblemas. Se trata de problemas que surgen únicamente cuando uno depende de herramientas básicas. Fundamentalmente, me refiero al modelo lineal clásico, que es bien sabido que da para lo que da y no más ---económetras del mundo, os estoy apelando---. En un universo más sofisticado metodológicamente, es probable que nadie se hubiese percatado de él.

Efectivamente, una manera de sortear el problema planteado por el uso injustificado del modelo lineal es modelar generativamente el problema _tal cual es_ y no acomodado a la _monoherramienta_. Por ejemplo, como sigue.

Primero, voy a generar datos de acuerdo con el esquema anterior. Nótese que también genero $x$ (necesariamente) aunque después, obviamente, no lo usaré en la modelización.

{{< highlight R >}}
set.seed(1234)
n <- 1000
x <- rnorm(n)  # unknown data
eta1 <- rnorm(n) # measurement error1
z <- x + eta1
# unknown data
epsilon <- rnorm(n)
beta0 <- 0
beta1 <- 1.5
y <- beta0+beta1*x + epsilon
{{</ highlight >}}

Ahora, el modelo:

{{< highlight R >}}
library(rstan)
stan_code <- "
data {
  int N;
  vector[N] y;
  vector[N] z;
}
parameters {
  real beta0;
  real beta1;
  vector[N] x;
}
model {
  x ~ normal(0, 1);
  z ~ normal(x, 1);
  y ~ normal(beta0 + beta1 * x, 1);
}"
datos_stan <- list(
  N = n,
  y = y,
  z = z
)
fit <- stan(model_code = stan_code,
            data = datos_stan,
            iter = 20000, warmup = 2000,
            chains = 1, thin = 4,
            include = FALSE, pars = "x")
{{</ highlight >}}

Como se aprecia, $x$ está modelado como lo que es: un vector de parámetros desconocido. Solo sabemos ---o asumimos--- que tiene una distribución (¿priori?) normal. Damos por conocidos el error de medida, etc. (i.e., las $\sigma$) del resto de las variables. El modelo se ajusta y da como resultado ---recuérdese que `beta0` y `beta1` son $0$ y $1.5$ por construcción---

![](/wp-uploads/2022/03/proxys_bias.png#center)

que, como se dice, nos produce mucho orgullo y satisfacción.

**Coda:** Parece que el problema aquí discutido (¡gracias, [José R. Berrendero](https://twitter.com/JRBerrendero)!) es un caso particular del [_modelo de errores en variables_](https://en.wikipedia.org/wiki/Errors-in-variables_models). En concreto, es una variante en la que las varianzas de los errores ---y esto no sé hasta qué punto es generalizable--- se dan por conocidas. Igual me entretengo investigando hasta qué punto se pueden relajar las hipótesis de partida del modelo y saco una entrada adicional en el futuro.