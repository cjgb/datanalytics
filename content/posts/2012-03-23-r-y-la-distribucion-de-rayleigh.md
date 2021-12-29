---
author: Carlos J. Gil Bellosta
date: 2012-03-23 07:26:24+00:00
draft: false
title: R y la distribución de Rayleigh

url: /2012/03/23/r-y-la-distribucion-de-rayleigh/
categories:
- probabilidad
- r
tags:
- probabilidad
- r
---

En la reunión de usuarios de R de Madrid de ayer, Carlos Ortega estudió la [distribución en el tiempo del número de _bugs_ que aparecen en el código de R](http://prezi.com/wkkftr7hmsnt/bugs-en-r/) en cada versión. Indicó que es plausible que sigan una [distribución de Rayleigh](http://es.wikipedia.org/wiki/Distribuci%C3%B3n_de_Rayleigh), relativamente frecuente en ese tipo de contextos. E indicó que esta distribución, no tan conocida, tiene que ver (he olvidado lo que dijo exactamente) con dos normales independientes.

Efectivamente, según la Wikipedia, la distribución de Rayleigh (de parámetro $latex \sigma$)admite la caracterización

$$ \sqrt{ X^2 + Y^2 }$ donde $latex X, Y \sim N(0, \sigma).$$

Es decir, es el módulo de un vector bidimensional aleatorio cuyas componentes son normales con la misma varianza.

En efecto,


$$ P( \sqrt{ X^2 + Y^2 } < a ) = \frac{1}{2\pi\sigma^2}\int_{x^2 + y^2 < a} \exp \left(-\frac{x^2 + y^2}{2\sigma^2} \right)= c \int_0^a r \exp \left( -\frac{r^2}{2\sigma^2} \right)$$

mediante un cambio de variables (a coordenadas polares) de los afortunados. Y la integral resultante ya puede resolverse mediante el truco, desconocido en mi época de estudiante, de [copiar y pegar en Wolfran Alpha](http://www.wolframalpha.com/input/?i=%5Cint_0%5Ea+r+%5Cexp+-%5Cfrac%7Br%5E2%7D%7B2%5Csigma%5E2%7D). (Los trucos de mi época de estudiante, hay que reconocerlo, eran sustancialmente más tediosos; y es que las ciencias avanzan una barbaridad). Y el resultado es (ajustando lo que hay que ajustar en la constante para que en el infinito dé lo que tiene que dar)

$$ P( \sqrt{ X^2 + Y^2 } < a ) = 1 - \exp \left( -\frac{a^2}{2\sigma^2} \right),$$

nuestra distribución de Rayleigh.

La integral anterior la encontré hace muchos años, cuando tenía 19, en segundo de carrera, cuando nos explicaron —y aún lo recuerdo porque me pareció, en su día, pura taumaturgia— cómo muestrear la distribución normal.

En efecto, aunque muestrear un valor normal es _difícil_, un razonamiento basado en lo que aparece más arriba permite muestrear dos valores normales independientes, es decir, un punto del plano $latex (X,Y)$ donde $latex X$ e $latex Y$ son normales: primero se obtiene el módulo de un punto en el plano usando la distribución de Rayleigh y luego el ángulo usando la distribución uniforme sobre la circunferencia.

¿Y cómo se muestrea la distribución de Rayleigh? Invirtiendo la función de distribución: dado que por definición, $latex P(X$latex X = \sigma \sqrt{ -2 \log U},$

donde $latex U$ es uniforme.

¿Vale esto para algo? Pues mírese el código de R y, en particular, el fichero `snorm.c` y uno encontrará

{{< highlight c "linenos=true" >}}
if(BM_norm_keep != 0.0) { /* An exact test is intentional */
		s = BM_norm_keep;
		BM_norm_keep = 0.0;
		return s;
} else {
		theta = 2 * M_PI * unif_rand();
		R = sqrt(-2 * log(unif_rand())) + 10*DBL_MIN; /* ensure non-zero */
		BM_norm_keep = R * sin(theta);
		return R * cos(theta);
}
{{< / highlight >}}

¡Y mirad lo ahorrativo que es R, que guarda el valor obtenido con el seno y con el coseno!
