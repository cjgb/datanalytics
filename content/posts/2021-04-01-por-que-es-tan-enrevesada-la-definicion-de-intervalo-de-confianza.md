---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2021-04-01 09:13:00+00:00
draft: false
lastmod: '2025-04-06T18:50:57.582491'
related:
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2020-02-18-la-probabilidad-de-que-el-parametro-este-en-el-intervalo-de-confianza-es-95.md
- 2024-04-04-sobre-cis.md
- 2022-10-11-bayesianismo-frecuentismo-teoria-decision-03.md
- 2017-11-07-intervalos-de-confianza-con-forma-de-rosquilla.md
tags:
- estadística
- fisher
- intervalos de confianza
title: ¿Por qué es tan enrevesada la definición de intervalo de confianza?
url: /2021/04/01/por-que-es-tan-enrevesada-la-definicion-de-intervalo-de-confianza/
---

En esta entrada voy a tratar de reconstruir históricamente el concepto de intervalo de confianza (IC) para tratar de explicar por qué el concepto ha llegado a tener una definición e interpretación tan precisa como confusa (e inútil). La interpretación de lo que _realmente_ son los IC son el coco ---el que se lleva a los diletantes que saben poco--- con el que amenazar a quienes tienen inseguridades metodológicas y una marca de erudición incontestable para quienes son capaces de enunciarla sin que se les trabe la lengua.

Tengo que reconocer que yo ni siquiera la sé; creo que solo creo que la sé. Por lo que recuerdo, viene a ser un resumen de cómo se construye, una manera de decir que un IC es aquello que construye al construir un IC. Un poco como cuando el INE dice que la tasa de paro es aquello que mide la metodología del INE para medir la tasa de paro.

Por eso voy a tratar de reconstruir la historia de este enorme malentendido. Ni que decir tiene que pudiera haber sucedido de otra manera y que lo que cuento es enteramente hipotético.

_[En lo que sigue, voy a referirme a dos tipos de personajes, los estadísticos y los usuarios (de la estadística), que en momentos históricos concretos pudieran haber sido las mismas personas. Por estadísticos me referiré a los que se preocuparon por cuestiones metodológicas, los estadísticos teóricos, si se quiere; y por usuarios, a los científicos (físicos, economistas, biólogos, etc.) que hacen uso de aquellos resultados.]_

**Acto I**

Los usuarios tienen datos y necesitan lo que hoy se llamaría una estimación puntual. Por ejemplo, tienen  una serie de medidas de un fenómeno y el estadístico les recomienda usar su media como estimación _buena_ de aquello que quieren medir.

_[Lo de la media parece una trivialidad hoy en día, pero en su momento fue materia de disputa. El mismo Gauss razonó la necesidad de su distribución en tanto que se preservara el hecho de que el mejor estimador de la centralidad de una serie de medidas eran precisamente su media.]_

**Acto II**

Los usuarios quieren saber cómo de alejada puede estar una estimación del parámetro de interés. Todo el mundo entiende que tiene sentido hablar de un rango dentro del cual se encuentre dicho parámetro con una determinada probabilidad. Vamos, que todo el mundo espera una solución en los términos de la interpretación que hoy se considera _naif_ e incorrecta.

Para bien o para mal, la manera de construir esos rangos vienen a depender de resultados teóricos del tipo

$$\frac{\theta - \hat{\theta}}{\sqrt{n}} \sim N(0, \sigma),$$

que permiten construir intervalos alrededor precisamente del valor desconocido $\theta$, pero no del conocido $\hat{\theta}$.

Nótese cómo nuestros actuales IC son intervalos alrededor de $\hat{\theta}$. ¿Cómo se le puede dar la vuelta al intervalo?

**Acto III**

Entra Fisher y pone encima de la mesa el llamado argumento fiduciario. Viene a decir que si A está cerca de B, entonces B está cerca de A. Vamos, que lo mismo da que el intervalo esté centrado en $\theta$ que en $\hat{\theta}$. Así zanja el asunto.

Recientemente estaba buscando en el libro _[Computer Age Statistical Inference](https://web.stanford.edu/~hastie/CASI/)_ de Efron y Hastie  justificación para esa pivotación y lo más que llegan a decir es que a Fisher le parecía _obviamente correcta_ (sobreentendiéndose que a ellos también, supongo).

**Acto IV**

Fisher es, como todo el mundo sabe, carne de cancelación por sus muchas desviaciones con respecto a lo que hoy se considera correcto. Algún estadístico quisquilloso miraría esa pivotación y pensaría: diga lo que diga Fisher, el IC construido por pivotación ya no es el IC que respondía a la pregunta planteada en el acto II; esto ya no es lo que se busca naturalmente, sino otra cosa. Otra cosa que es, como se anunciaba en el inicio de esta entrada, una mera descripción del ritual de construcción del intervalo. ¿Que se parece a lo que se pretende estimar? Pues San Antón. ¿Que no? Entonces, la purísima concepción.

Yo creo que, en el fondo, todo este tinglado se ha montado por tocarle las narices a Fisher y que todos hacemos caso de alguno de sus críticos sin saber muy bien por qué.

**Desenlace**

En definitiva, el IC nació como respuesta a una pregunta muy razonable. Pero ha acabado siendo la respuesta a un problema que nadie se había planteado y que a nadie ni le importa ni le interesa.

Curiosamente, desde la perspectiva bayesiana se pueden construir IC (donde C ahora es un cuasi-sinónimo de confianza), que sí que son interpretables como la respuesta a la pregunta del acto II y que se pueden hacer iguales (prioris no informativas, etc.) que los IC discutidos hoy aquí. Lo cual hace todo todavía mucho más confuso para todos.

**Mi conclusión**

Creo que los estadísticos frecuentistas deberían tratar de responder a la pregunta del acto II, es decir, tratar de obtener un procedimiento para construir unos intervalos (¿de qué?) que los usuarios de la estadística puedan interpretar rectamente como lo que esperan que sea. No sé la manera, pero deberían ponerse al tajo.