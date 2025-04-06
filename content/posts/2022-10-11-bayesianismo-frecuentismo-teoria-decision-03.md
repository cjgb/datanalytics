---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2022-10-11
lastmod: '2025-04-06T19:13:22.231263'
related:
- 2022-10-13-bayesianismo-frecuentismo-teoria-decision-04.md
- 2022-10-06-bayesianismo-frecuentismo-teoria-decision-02.md
- 2022-10-04-bayesianismo-frecuentismo-teoria-decision-01.md
- 2016-02-04-y-termino-con-lo-de-los-intervalos.md
- 2021-03-02-un-argumento-para-usar-la-normal-la-maximizacion-de-la-entropia.md
tags:
- teoría de la decisión
- frecuentismo
- bayesianismo
title: Bayesianismo y frecuentismo bajo la óptica de la teoría de la decisión, III
url: /2022/10/11/bayesianismo-frecuentismo-teoria-decision-03/
---

_[Esta es la tercera de una serie de cuatro o cinco entradas sobre el tema que se anuncia en el título.]_

Terminó la [segunda entrada](/2022/10/06/bayesianismo-frecuentismo-teoria-decision-02/)
de anunciando cómo la manera de operar con la expresión

$$L(\hat{\theta}) = \int_\theta \int_X L(\theta, \hat{\theta}) p(X | \theta) p(\theta) dX d\theta$$

determina las dos grandes corrientes dentro de la estadística. Para entender la primera, el frecuentismo, se debe reescribir la expresión anterior como

$$L(\hat{\theta}) = \int_\theta \left[\int_X L(\theta, \hat{\theta}) p(X | \theta) dX \right] p(\theta)d\theta$$

para _fijar_ $\theta$, estudiar la expresión encerrada en corchetes,

$$\int_X L(\theta, \hat{\theta}) p(X | \theta) dX$$

y buscar su mínimo (que es, en principio, función de $\theta$).

Por ilustrar el procedimiento, supóngase que $L(a,b) = (a-b)^2$ y que $X$ es una única observación de una distribución $N(\theta, \sigma)$, con $\sigma$ conocida. Luego, además, si se quiere, $\theta \sim N(0, 1)$, aunque no hará falta (aunque sí en futuras entradas de la serie). Entonces, la expresión anterior queda en

$$\int (\theta - \hat{\theta})^2 \phi(x, \theta, \sigma) dx,$$

donde $\phi(x, \theta, \sigma)$ es la densidad de una $N(\theta, \sigma$). Y sabemos ---el frecuentismo es abundante en teoremas de esa naturaleza--- que esa expresión se minimiza eligiendo  $\hat{\theta} = x$. Con tal elección, el valor mínimo es $\sigma^2$. Obsérvese además cómo, en este caso, es independiente de $\theta$, por lo que $L(\hat{\theta}) = \sigma^2$ también.

Lo que sigue va a ser una sucesión de notas sobre el planteamiento y el ejemplo anterior.

### Nota 1 (acerca de la no integración sobre $\theta$)

En el ejercicio no ha hecho falta integrar sobre $\theta$ por motivos obvios. En muchos otros casos, tampoco es necesario por el mismo motivo (invariancias traslacionales como en este caso, etc.). Por eso coinciden en este caso las dos definiciones de error de Bayes que mencionaba en una de las entradas previas de la serie.

En general, sin embargo, no es habitual en el frecuentismo integrar sobre $\theta$. Y, en particular, prestar atención a lo que pasa con valores distintos del parámetro. Las recetas del frecuentismo suelen ser del tipo: el mejor estimador de X es la media de los datos. Y es así siempre y para cualquier posible valor potencial de los parámetros subyacentes $\theta$.

Pero no tiene que ser siempre necesariamente así. No tengo ningún ejemplo, pero es posible que haya _teoremas_ en la línea ---hipotética--- de: si tienes una distribución t de Student con grados de libertad < 6, usa la mediana; si es mayor, es mejor usar la media. Eso significaría que según se distribuya el parámetro $\nu$, los grados de libertad, que aquí hacen el papel de $\theta$, el mejor estimador es uno u otro. Tal vez a algún lector más erudito que yo en estas materias le viene algún ejemplo concreto a la cabeza.

### Nota 2 (acerca de que $\theta$ sea un valor desconocido)

Este es, a mi entender, el gran agujero lógico del frecuentismo: fija un valor, $\theta$, desconocido. Por lo tanto, en principio, es imposible integrar

$$\int_X L(\theta, \hat{\theta}) p(X | \theta) dX$$

y lo habitual es utilizar aproximaciones, reemplazando (¿circularmente?) $\theta$ dentro de $p(X | \theta)$ por un estimador suyo, sea directamente o indirectamente (p.e., usando _bootstrap_). En el ejemplo anterior no ha sido necesario. En muchos casos conocidos, la teoría proporciona resultados (muchas veces asintóticos) según los cuales

$$(\theta - \hat{\theta}) \sim N(0, \sigma / \sqrt{n})$$

para ciertas elecciones de $\hat{\theta}$ (¿a que la anterior es una expresión familiar?) y que incluso el error cometido con tal selección es mínimo, a lo [UMVUE](https://es.wikipedia.org/wiki/Estimador_insesgado_de_varianza_m%C3%ADnima), lo que viene a ser garantía de que, de nuevo, con tal selección se alcanza el mínimo en la expresión integral anterior. Sin embargo, en casos menos simples no queda otra que realizar un salto mortal que es más justificable ---empíricamente--- que demostrable. Vale, tienes toda la teoría asintótica, etc.; pero ¿qué pasa cuando $n = 6$?

Este es, yo creo, el mayor de los conflictos intelectuales que encontramos los matemáticos devenidos estadísticos y que se manifiesta por doquier.

### Nota 3 (acerca de la validación cruzada, etc.)

Cosas como la minimización de la expresión

$$\int_X L(\theta, \hat{\theta}) p(X | \theta) dX$$

son habituales en el _aprendizaje automático_ y maneras particulares de realizarla más o menos aproximadamente reciben el nombre de validación cruzada, etc. En ese caso, habría varios modelos, representados por distintos posibles _procedimientos_ $\hat{\theta}$, y se estaría buscando, entre ellos, el más _adecuado_, i.e., el que en principio asegurase un menor error.

### Nota 4 (más sobre el problema de la aproximación de $\theta$)

De acuerdo con la nota 2, de desconocerse $\theta$, tiene que ser estimado de alguna manera más o menos defendible. Un problema que ocurre a veces (véase, por ejemplo, [esto](http://www.stat.columbia.edu/~gelman/research/unpublished/power4r.pdf)) es que esas estimaciones caen en zonas de baja probabilidad de $\theta$. La aproximación bayesiana es capaz de corregir esos problemas (esencialmente porque, a diferencia de la frecuentista, sí que tiene en cuenta $p(\theta)$).

Gran parte de los problemas de la no replicabilidad, etc., tienen que ver con este fenómeno, frente al que el frecuentismo ofrece pocas salvaguardias.