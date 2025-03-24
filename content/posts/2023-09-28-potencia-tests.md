---
author: Carlos J. Gil Bellosta
date: 2023-09-28
title: '¿Qué catástrofes cabe esperar de las pruebas estadísticas con poca potencia?'

url: /2023/09/28/potencia-tests-estadisticos/
categories:
- estadística
tags:
- estadística
- prueba de hipótesis
- potencia
---

Desde cierto punto de vista, lo ideal a la hora de realizar una prueba estadística es que:

* El efecto sea grande.
* La variación de los sujetos sea pequeña.
* El tamaño de la muestra sea generoso.

Pero solo _bajo cierto punto de vista_: todas las pruebas estadísticas en que pasa eso ya se han hecho antes. Llevamos cientos de años haciendo ciencia y billones de euros invertidos en ella. Lo que nos enseñan las pruebas estadísticas con un SNR (_signal to noise ratio_) y posibilidad de extraer nuevas observaciones a bajo coste, ya lo sabemos desde hace tiempo.
Lo que queda por averiguar de ese antílope del que ya se han saciado la manada de leones que lo cazó son las vísceras, tendones y huesos que roen las hienas. Quienes se dedican a la _ciencia_ están abocados, por aquello de la originalidad, a estudiar problemas en los que algunas de las condiciones anteriores deja de cumplirse. Es decir, muchos de los resultados publicados han estudiado datos en los que:

* El efecto es pequeño y/o
* la variación de los efectos es grande en los sujetos y/o
* el tamaño de la muestra es minúsculo.

La teoría nos dice que eso conlleva que la _potencia estadística_ de las pruebas de hipótesis que se realizan es baja. Es decir, que hay pocas posibilidades de identificar un efecto. Quien se gana la vida realizando este tipo de pruebas se enfrenta a la posibilidad de obtener p valores $\ge 0.05$ impublicables.

Pero, ¿qué sucede si $p < 0.05$ en contextos de baja potencia estadística? Dos cosas:

1. El efecto puede estar (tremendamente) sobreestimado.
2. La dirección del efecto estimado puede ser la contraria a la verdadera.

Para ilustrar lo que cuento he creado una
[pequeña aplicación en Shiny](http://shiny.circiter.es/test-power/)
cuyo código fuente se puede consultar
[aquí](https://github.com/cjgb/datanalytics_shiny/tree/master/test-power).

Esencialmente consta de un selector,

![](/wp-uploads/2023/power_00.png#center)

donde se puede determinar el tamaño del efecto, la desviación estándar de los datos, el número de sujetos, el nivel de confianza de la prueba y, finalmente, el número de veces que la prueba se va a iterar, es decir, el número de _experimentos simulados_ que se van a realizar con dichos parámetros.

La prueba es prácticamente la más simple que puede realizarse: la estimación del tamaño de un efecto bajo hipótesis de normalidad, etc. vía `t-test`. Para que no haya dudas: esencialmente, lo que se estudia es el objeto que en _seudocódigo_ se construye así:

{{< highlight python >}}
replicate(
  n_iter,
  t-test(
    rnorm(n_subjects, effect_size, sd),
    conf.level = alpha))
{{< / highlight >}}

Los resultados que muestra son la distribución de los efectos _significativos_ estimados junto con la de todos los efectos,

![](/wp-uploads/2023/power_01.png#center)

la de los efectos significativos únicamente,

![](/wp-uploads/2023/power_02.png#center)

y, finalmente, algunos estadísticos relevantes:

![](/wp-uploads/2023/power_03.png#center)

Dentro de estos últimos merece la pena fijarse en los dos últimos: la sobreestimación del efecto en términos absolutos y relativos.

En conclusión, la baja potencia es un arma de doble filo que corta de distinta manera a los agentes implicados:

* Corta a los hacedores de pruebas estadísticas en tanto que reduce la probabilidad de obtener resultados publicables.
* Pero una vez obtenidos resultados publicables y  publicados estos, corta a los consumidores de conocimiento porque es probable que este esté torcido. Y no puede saberse ni en qué dirección y ni en qué medida.