---
author: Carlos J. Gil Bellosta
date: 2022-10-13
title: 'Bayesianismo y frecuentismo bajo la óptica de la teoría de la decisión, y IV'

url: /2022/10/13/bayesianismo-frecuentismo-teoria-decision-04/

categories:
- estadística
tags:
- teoría de la decisión
- frecuentismo
- bayesianismo
---

_[Esta es la cuarta y última (por el momento) de una serie de entradas sobre el tema que se anuncia en el título.]_

En la [tercera entrega de la serie](/2022/10/11/bayesianismo-frecuentismo-teoria-decision-03/)
se introdujo el frecuentismo como una particular manera de resolver el problema de minimización asociado a la expresión

$$L(\hat{\theta}) = \int_\theta \int_X L(\theta, \hat{\theta}) p(X | \theta) p(\theta) dX d\theta.$$

En esta entrada se introducirá el bayesianismo de manera análoga con el concurso del teorema de Fubini (que, recuérdese, permite _conmutar_ las integrales):

$$L(\hat{\theta}) = \int_X \int_\theta L(\theta, \hat{\theta}) p(\theta | X) p(X) d\theta dX = $$

$$= \int_X \left[ \int_\theta L(\theta, \hat{\theta}) p(\theta | X) d\theta \right] p(X) dX.$$

De esta manera, la expresión _entre corchetes_ (y de interés) será

$$\int_\theta L(\theta, \hat{\theta}) p(\theta | X) d\theta,$$

que es la que se intentará minimizar. De hecho, la minimización de esa expresión es precisamente en lo que consiste el bayesianismo.

Como ilustración de la cosa, se va a estudiar la solución bayesiana al mismo problema planteado en la entrega anterior. La expresión de interés queda ahora de la forma

$$\int_\theta (\theta - \hat{\theta})^2 p(\theta | x) d\theta.$$

Por la muy conveniente forma que tienen las distribuciones en este ejemplo sencillo, es sabido (consúltense las tablas de distribuciones conjugadas) que $\phi(\theta, x)$ es la densidad de una

$$N\left(\frac{x}{\sigma^2 + 1}, \frac{\sigma}{\sqrt{\sigma^2 + 1}}\right)$$

Por lo tanto, el mínimo se alcanza en $\frac{x}{\sigma^2 + 1}$ y el valor de la integral es $\frac{\sigma^2}{\sigma^2 + 1}$.

Y, como en la entrega anterior, una serie de notas.

### Nota 1 (comparación con los resultados de la aproximación frecuentista)

El ejemplo anterior ilustra un aspecto importante en la comparación de la aproximación frecuentista y bayesiana. Nótese cómo en aquella, el error promedio cometido es de $\sigma^2$ mientras que en la bayesiana es menor, de $\frac{\sigma^2}{\sigma^2 + 1}$.

¿El motivo? La aproximación frecuentista ignora los detalles específicos del problema. En particular, la existencia y naturaleza de la _priori_. La aproximación frecuentista es genérica y aplica a cualquier priori; la bayesiana es contextual y está apegada a ella. Nótese, de hecho, cómo habría una convergencia de la aproximación bayesiana a la frecuentista en tanto que se _difuminase_ (i.e., se hiciese crecer la varianza) de la priori.

Este esta es una cuestión sobre la que argumenté en [un vídeo que publiqué en mi canal de Youtube](https://youtu.be/Dyt5HsEJxTw), de la que esta entrada ofrece algo de luz y que me gustaría desarrollar con más detalle en el futuro.

### Nota 2 (barreras de entrada a la aproximación bayesiana)

Incluso en el ejercicio ilustrativo de esta entrada, tremendamente sencillo, han aparecido fórmulas relativamente complejas. La forma final del estimador, aun siendo simple, es algo más trabajosa de calcular y de aplicar que la que ofrece el frecuentismo. La aproximación bayesiana es, desde un punto de vista práctico, más trabajosa que la frecuentista.

En la práctica compiten mutuamente (aquí ensayo una traducción o adaptación de _trade-off_) la mejora en los resultados que ofrece la perspectiva bayesiana al incorporar la información adicional contenida en la priori con la facilidad de implementación de la aproximación frecuentista.

### Nota 2 (la aproximación bayesiana tiene una lógica intachable)

Desde el punto de vista lógico, la aproximación bayesiana es intachable. No existe ningún cabo suelto, ningún acto de fe, ningún cabo sin atar. A los matemáticos nos _mola_.

### Nota 3 (sobre la no integración sobre los datos)

En la exposición anterior se ha omitido la integración sobre $X$ de rigor, sobre los _datos_. La aproximación bayesiana fija los datos ---lo cual tiene todo el sentido del mundo--- pero muchas veces uno se pregunta: ¿qué comportamiento puede tener el estimador construido con ciertos datos cuando se lo expone a otros distintos? Es entonces cuando cabe plantearse realizar esa segunda integración.

Entiendo que esta cuestión está relacionada con la pregunta acerca de las _buenas propiedades frecuentistas_ de un estimador bayesiano. Aunque, claro, esta cuestión también podría plantearse en otro sentido distinto: el de cómo cambiaría frente a cambios en la priori. Estaré atento cada vez que se hable de las _propiedades frecuentistas_ de un estimador bayesiano para tratar de esclarecer en cada caso a qué se pueden estar refiriendo exactamente.