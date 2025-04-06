---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-01-24
lastmod: '2025-04-06T18:56:29.229860'
related:
- 2012-04-11-correccion-por-exposicion-del-modelo-logistico.md
- 2020-07-22-aun-mas-sobre-la-presunta-sobredispersion-en-modelos-de-poisson.md
- 2020-09-22-una-diferencia-teorica-importante-entre-los-lm-y-el-resto-de-los-glm.md
- 2020-07-17-mas-sobre-la-presunta-sobredispersion-en-el-modelo-de-poisson.md
- 2022-03-03-error-sesgo-modelos-lineales.md
tags:
- estadística
- r
- regresión lineal
- regresión de poisson
- glms
- función de enlace
title: Funciones de enlace "por defecto" en (ciertos) GLMs
url: /2023/01/24/funciones-enlace-defecto-glm/
---

Después de publicar
[_Una regresión de Poisson casi trivial con numpyro_](/2023/01/18/regresion-poisson-numpyro/)
me riñeron por usar la identidad como función de enlace en la regresión de Poisson. Es decir, por especificarlo como

$$\lambda_t = a + b t$$

en lugar del estándar

$$\lambda_t = \exp(a + b t).$$

Hay varias cosas bastante bien conocidas y una que lo es bastante menos ---y que resulta mucho más paradójica--- que decir al respecto.

Antes necesito añadir que:
* Probablemente, omitir $\exp$ fue una acto involuntario (y, creo, además, que afortunado).
* Realmente, y como se discute abajo, el modelo no necesita la función exponencial de enlace. Si se hubiese tratado de uno que sí, habrían saltado las alarmas y, sin duda, lo habría corregido.

Cosas conocidas sobre la identidad (y la función exponencial) como funciones de enlace para modelos de Poisson:

* Aunque la exponencial es la opción por defecto en casi todas partes, la identidad es la alternativa más popular.
* La identidad plantea algunos problemas (¡puede dar lugar a valores $\lambda < 0$!) que no tienen por qué ocurrir en todos los contextos. En particular, no en el que se trataba en el estudio en cuestión: en todo el rango de interés, $\lambda$ estaba necesariamente lejos del cero.

Pero el caso de hoy plantea una cuestión adicional que, creo, es incluso más importante que todo lo anterior. Imaginemos que ---por pereza, ignorancia o influencia de la econometría mal entendida--- queremos modelar los datos de la entrada anterior usando el modelo lineal _de toda la vida_ con todas sus opciones _por defecto_:

{{< highlight R >}}
lm(y ~ t, data = dat)
{{< / highlight >}}

Ahí estás diciendo que $y = a + b t$ y que cada año, la media de $y$ aumenta en $b$ unidades.

Sin embargo, si has oído hablar de la regresión de Poisson y la aplicas con sus opciones _por defecto_, es decir, haces

![](/wp-uploads/2023/chatgpt_poisson_regression.png#center)

estarás dentro de la ortodoxia, pero diciendo que $y = \exp(a + b t)$ (obvio señalar que los valores de $a$ y $b$ no coincidirán con los de arriba) y que, por tanto, cada año que pasa, la media se multiplica por $e^b$.

Es decir: no solo cambiamos la especificación del modelo (o la forma esperada de la dispersión) sino también algo muy relevante sobre la naturaleza de los datos y, en concreto, el _modelo generador_. Porque no es lo mismo un crecimiento lineal que uno exponencial, obviamente. Cierto que para coeficientes pequeños y rangos razonables la diferencia no es sustancial. Pero nadie negará que
[de lo lineal a lo geométrico media un mundo](/2022/12/08/lineal-o-exponencial).

Así que, en definitiva, parece aconsejable repensar la forma de la función de enlace atendiendo al modelo teórico de generación de los datos en lugar de fiarse no más de lo primero que se encuentra en la literatura más a mano.

### Coda

Perdónenme los estadísticos: he usado impropiamente el término _función de enlace_ en todo lo anterior. En realidad, he llamado función de enlace a su inversa. ¡Pero es que da tanta, tanta pereza portarse siempre bien!