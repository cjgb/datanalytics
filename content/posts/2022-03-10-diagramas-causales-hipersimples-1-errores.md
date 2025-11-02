---
author: Carlos J. Gil Bellosta
categories:
- estadística
- causalidad
date: 2022-03-10
lastmod: '2025-04-06T18:48:23.164320'
related:
- 2022-03-22-diagramas-causales-hipersimples-3-mediadores.md
- 2022-03-18-diagramas-causales-hipersimples-2-control.md
- 2022-03-08-estadistica-ciencias-blandas.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2021-10-26-sobre-las-r2-pequenas-y-sus-interpretaciones.md
tags:
- causalidad
- redes bayesianas
- regresión lineal
- errores
- varianza
- r
title: 'Diagramas causales hiperbásicos (I): variables omitidas y sus consecuencias'
url: /2022/03/10/diagramas-causales-hiperbasicos-01-variables-omitidas/
---

Comienzo hoy una serie de cuatro entradas (¡creo!) sobre diagramas causales supersimples que involucran a tres variables aleatorias: $X$, $Y$ y $Z$. En todos los casos, estaré argumentaré alrededor de en las regresiones lineales `Y ~ X` e `Y ~ X + Z` porque nos permiten leer, interpretar y comparar rápida y familiarmente los resultados obtenidos. En particular, me interesará la estimación del efecto (causal, si se quiere) de $X$ sobre $Y$, identificable a través del coeficiente de $X$ en las regresiones.
No obstante, quiero dejar claro que:

1. Explicitaré las relaciones entre las variables usando la distribución normal. Pero solo porque es la manera más simple y familiar de hacerlo: otros métodos harían la exposición más compleja y la lectura menos amena.
2. Usaré como herramienta de análisis la regresión lineal, pero podría utilizar otras (árboles, etc.) para obtener resultados análogos.

El diagrama causal de hoy es, prácticamente, el más simple que cabe concebir: $X$ tiene un efecto en $Y$ (el que se quiere estimar) y $Z$ tiene otro efecto en $Y$ que nos es indiferente. Gráficamente:

![](/img/2022/03/red_causal_hiperbasica_00.png#center)

¿En qué variarán las regresiones `Y ~ X` e `Y ~ X + Z`? Voy a ilustrarlo con un ejemplo concreto basado en una simulación de los datos que es una de las posibles manifestaciones del diagrama causal anterior:

{{< highlight R >}}
n <- 1000
x <- rnorm(n)
z <- rnorm(n)
y <- .5 * x + .2 * z + rnorm(n, 0, .1)
{{< / highlight >}}

(Para los nuevos en el asunto: al ser $X$ y $Z$ _fuente_ pero no _sumidero_ de fechas, podemos _inicializar_ esas variables como mejor nos parezca; el que dependa $Y$ de ambas significa que esta tiene que ser función de aquellas.)

Comenzaré con la regresión `Y ~ X`. Tal como se ha definido $Y$, cabe esperar que el coeficiente de $X$ sea aproximadamente $0.5$. Y en efecto, `summary(lm(Y ~ X))` da

{{< highlight text "linenos=false" >}}
             Estimate Std. Error t value Pr(>|t|)
(Intercept) -0.008209   0.007122  -1.153    0.249
x            0.494448   0.006864  72.033   <2e-16 ***

Residual standard error: 0.2249 on 998 degrees of freedom
Multiple R-squared:  0.8387,	Adjusted R-squared:  0.8385
F-statistic:  5189 on 1 and 998 DF,  p-value: < 2.2e-16
{{< / highlight >}}

Por otro lado, `summary(lm(Y ~ X + Z))` da

{{< highlight text "linenos=false" >}}
            Estimate Std. Error t value Pr(>|t|)
(Intercept) 0.001920   0.003172   0.605    0.545
x           0.506494   0.003059 165.598   <2e-16 ***
z           0.198410   0.003118  63.630   <2e-16 ***

Residual standard error: 0.1 on 997 degrees of freedom
Multiple R-squared:  0.9681,	Adjusted R-squared:  0.9681
F-statistic: 1.514e+04 on 2 and 997 DF,  p-value: < 2.2e-16
{{< / highlight >}}

¿En qué se parecen? Esencialmente, en la estimación del coeficiente de $X$: es, como cabría esperar, aproximadamente $0.5$.

¿En qué difieren? Esencialmente, en el error del modelo. En el más simple, la sd residual es de .22 y en el más complejo, de 0.1 (que es, como cabría esperar de nuevo, el especificado en la construcción de $Y$, i.e., el _real_). Estas diferencias en el tamaño de los residuos se trasladan al resto de los estadísticos: la $R^2$, etc.

Nótese que, en general, el error residual de un modelo lineal recoge la influencia de todas las variables potencialmente incluibles en la regresión pero que quedan fuera de él por distintos motivos. Introducir variables _similares_ ---aquí _similares_ tiene un significado muy concreto que aclarará en las siguientes entradas de las serie--- a $Z$ ayuda a reducir el error residual y, por lo tanto, los estadísticos que dependen de él, como la mencionada $R^2$. Pero no tiene mayor impacto en la medición del efecto de interés.

### Notas adicionales

Esta es una entrada ridículamente simple. Además, la he tratado con una muy inhabitual deferencia hacia los que menos saben de estas cosas. Alguien podría acusarme de estar ablandándome y _bajando el nivel_. Pero incluso gente que debería saber del asunto realiza manifestaciones públicas en las que uno aprende que no y que lo obligan a uno a escribir cosas como
[_Hay mil motivos para criticar una regresión "trucha", pero una R² baja no es uno de ellos_](/2021/02/16/hay-mil-motivos-para-criticar-una-regresion-trucha-pero-una-r2-baja-no-es-uno-de-ellos/)
o
[_Sobre las R² pequeñas y sus interpretaciones_](/2021/10/26/sobre-las-r2-pequenas-y-sus-interpretaciones/),
que son esta misma entrada escrita de otra manera.

Porque, efectivamente, en las ciencias _duras_ existen pocas $Z$ desconocidas: ciertas condiciones de laboratorio y poco más. Por eso _gozan_ de $R^2$ elevadas. Sin embargo, en las ciencias _blandengues_, hay más variables $Z$ ensuciando los modelos que los que una vida entera dedicada al asunto permitiría enumerar y los que viven de ellas tienen que conformarse con $R^2$ bajos. Este, además, no sería un problema si las $Z$ obedeciesen el diagrama causal motivo de la entrada de hoy: como se ha visto, la estimación del coeficiente de $X$ no se ha visto alterada por la inclusión o exclusión de $Z$. El problema surge realmente cuando se complica la relación causal entre las variables. Pero ese es tema para las subsiguientes entradas de la serie.