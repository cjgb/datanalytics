---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-09-07
lastmod: '2025-04-06T18:57:22.357295'
related:
- 2023-07-20-coeficientes-no-identificables.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2024-03-05-sobreajuste-modelos-bayesianos.md
- 2024-02-01-optimizacion-generalizacion.md
- 2022-03-08-estadistica-ciencias-blandas.md
tags:
- estadística bayesiana
- modelos lineales
- identificabilidad
title: De cómo la estadística bayesiana ha descompuesto la solución a un problema
  que la estadística clásica tenía plusquamsolucionado
url: /2023/09/07/identificabilidad-terminos-independientes-modelos-bayesianos/
---

### I.

Voy a plantear el problema del día en el contexto más simple y familiar para la mayoría que se me ocurre: una _ANOVA_ para comparar dos tratamientos. Se puede representar de la forma

$$y_i \sim \alpha + \beta_{T(i)} + \epsilon$$

donde $T(i)$ es el tratamiento, $A$ o $B$, que recibe el sujeto $i$. Parecería que el modelo estuviese sugiriendo determinar tres parámetros, $\alpha$, $\beta_A$ y $\beta_B$, correspondientes al efecto sin tratamiento y los efectos adicionales de los tratamientos $A$ y $B$. Sin embargo, si $\hat{\alpha}$, $\hat{\beta}_A$ y $\hat{\beta}_B$ es una solución, también lo es $\hat{\alpha} + \lambda$, $\hat{\beta}_A - \lambda$ y $\hat{\beta}_B - \lambda$ para cualquier $\lambda$. ¡No hay solución única (sino, más bien, una recta entera de soluciones)!

La _solución clásica_ al problema consiste en estimar solo dos parámetros, típicamente $\alpha + \beta_A$ y $\beta_B - \beta_A$. La manera habitual de conseguirlo es utilizando una _matriz de diseño_ adecuada que represente los _contrastes_ que se espera realizar sobre los datos, etc. Tedio absoluto.

Pero hay que entenderlo: los estadísticos aspiran a hacer _inferencia_ y ya que el mundo es tal que es imposible sobre los tres parámetros razonables del modelo, la hacen de los dos de los que sí.

### II.

No así la buena gente de Python ---o de cierta parte de él--- que tal vez pensó que no valía la pena la exégesis _ad nauseam_ de un problema viejo y pequeñito dentro del enorme mundo del análisis de datos. Diríase que razonaron de la siguiente manera:

1. los parámetros buscados son la solución de un problema de minimización (cuadrática, para ser más precisos);
1. tenemos algoritmos para encontrar mínimos de funciones (cuadráticas en particular);
1. además, no nos importa para nada la inferencia, solo la predicción;
3. así que los vamos a usar sin parar mientes en nada más.

Así pergeñaron esa cuasicosa de la que se habló en
[_Sobre la peculiarísima implementación del modelo lineal en (pseudo-)scikit-learn_](/2019/07/17/sobre-la-peculiarisima-implementacion-del-modelo-lineal-en-pseudo-scikit-learn/)
y que, como comprobará quien se preste a visitar el enlace, aplicado a nuestro problema, puede resultar en cualquiera de las soluciones $\hat{\alpha} + \lambda$, $\hat{\beta}_A - \lambda$ y $\hat{\beta}_B - \lambda$ dependiendo del humor de la CPU y sin garantía de nada.

No obstante, ha de quedar claro que si el objetivo único es el de predecir, tanto da esta implementación como la mucho más laboriosa y sofisticada de la sección anterior.

### III.

Una posible formulación bayesiana del problema original para una selección de prioris _de vainilla_ es

$$y_i \sim N(\alpha + \beta_{T(i)}, \sigma)$$
$$\alpha \sim N(0, \sigma_\alpha)$$
$$\beta_A, \beta_B \sim N(0, \sigma_\beta)$$

(donde he omitido la especificación de las distintas sigmas). De nuevo, aparecen tres parámetros y no dos. ¿Qué ocurre entonces al ajustar el modelo? El mundo sigue siendo el mismo que cuando leías las primeras líneas de la entrada y la verosimilitud no cambia al transformar $\hat{\alpha}$, $\hat{\beta}_A$ y $\hat{\beta}_B$ en $\hat{\alpha} + \lambda$, $\hat{\beta}_A - \lambda$ y $\hat{\beta}_B - \lambda$. Así que cabe esperar una correlación positiva importante entre las $\beta$ estimadas y negativa entre estas y $\alpha$.

En efecto, así se aprecia en los resultados de un modelo en el que he estado trabajando estos días:

![](/wp-uploads/2023/identificabilidad_modelos_bayesianos.png#center)

En el modelo hay un término independiente (primera fila/columna en la cuadrícula) y varias $\beta$ con distinto número de niveles. En la figura se muestra el gráfico _por parejas_ de la densidad a posteriori de las distintas variables y se ve cómo las correspondientes los siete niveles de la primera están enormemente correlacionados entre sí y negativamente con el término independiente. También se muestra la distribución de los coeficientes correspondientes a algunos de los niveles de la segunda de las variables.

El problema no es tan grave como en Python en la medida que las prioris sobre los coeficientes impiden que las $\lambda$ sean extravagantemente grandes, pero sigue dificultando la inferencia. Y digo _dificultando_ porque esta aún es posible en los términos de la estadística clásica: solo habría que restar las muestras correspondientes de las variables asociadas a dos niveles distintos de la misma $\beta$ para poder estudiar la diferencia entre ellos, etc.

Tampoco es grave para la predicción. Pero sigue siendo tremendamente antifotogénico. Sobre todo, habida cuenta del interés por la inferencia que se le presupone a quien se toma la molestia de analizar datos bajo la perspectiva bayesiana.

El problema es conocido y uno puede ver una discusión del mismo en, p.e., la
[guía de usuario de Stan](https://mc-stan.org/docs/stan-users-guide/multilevel-regression-and-poststratification.html). Pero ninguno de los remedios que sugiere pueden elevarse a la categoría de soluciones. ¡Qué se le va a hacer!