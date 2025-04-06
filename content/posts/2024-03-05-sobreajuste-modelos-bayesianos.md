---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-03-05
lastmod: '2025-04-06T18:59:53.467007'
related:
- 2024-02-01-optimizacion-generalizacion.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2023-03-02-conformal-prediction.md
- 2022-10-13-bayesianismo-frecuentismo-teoria-decision-04.md
tags:
- estadística bayesiana
- sobreajuste
- generalización
title: Los modelos bayesianos, ¿condenados a sobreajustar?
url: /2024/03/05/sobreajuste-modelos-bayesianos/
---

Por ese micromundo en el que muevo, circuló recientemente una polémica sobre si los métodos bayesianos _sobreajustan_ necesaria e irremisiblemente. El desencadenante fue la publicación
[_Bayes is guaranteed to overfit, for any model, any prior, and every data point_](https://www.yulingyao.com/blog/2023/overfit/) en la que el autor sostiene que, efectivamente:

- Tiene sentido hablar de sobreajuste en modelos bayesianos (a diferencia de lo que sostienen otros en tanto que como los modelos bayesianos no maximizan ninguna función objetivo, no ha lugar siquiera hablar de sobreajuste).
- Y que, efectivamente, _sobreajustan_.

También reconoce, y eso hay que abonárselo, que otros métodos (MLE en particular) sobreajustan aún más.

Hoy quiero hacer constar mis comentarios sobre el asunto.

### Efectivamente, los modelos bayesianos sobreajustan

Supongamos que existe una distribución con distribución $X$ que se quiere estudiar. Se extrae una muestra $D_0$ y se ajusta un modelo bayesiano. Luego, se extrae una muestra $D_1$. Por sobreajustar se entiende que las predicciones para $D_0$ tienden a mejores que para $D_1$ (usando métricas como la suma de los logaritmos de las probabilidades a posteriori).

Lo cual es obvio, justo y necesario. Sucede lo mismo si se maximiza el MLE, si se minimiza algún tipo error (usando o no validación cruzada), si se usa algún tipo de regularización, etc.

De hecho, una manera de representar conceptualmente un modelo bayesiano es de la forma $P(\theta | D_0)$, que viene a significar algo así como _lo que se ha podido aprender de la distribución $X$ a partir de los datos $D_0$ ---y no de otras hipotéticas muestras de $X$---.

### Un ejemplo fácil de entender

Tenemos una moneda y queremos estimar la probabilidad de cara con $N = 1$ (para que todo se vea más claro). Se tira la moneda y sale cara. Usando MLE, el estimador de $p$ es 100%. Usando el modelo bayesiano de libro (con priori Beta(1, 1)), la posteriori sería una Beta(2, 1), que tiene la media en 2/3.

Si para esa moneda $p = 0.5$, efectivamente, el modelo bayesiando sobreajusta y, efectivamente también, el MLE lo hace mucho más.


### Pero sobreajustar no es siempre necesariamente malo

Imaginemos que tenemos un modelo genérico para las campañas publicitarias de los productos de una empresa, con sus prioris también genéricas. Ahora queremos construir un modelo para el producto A. Para ello, ajustamos el modelo usando una muestra de ventas de dicho producto.

Lo que hacemos al ajustar ese modelo es _sobreajustar_ el modelo inicial que sirve para cualquier producto y adaptarlo a las peculiaridades específicas del producto A. Es cierto que ese no es _exactamente_ el marco en el que se define el sobreajuste más arriba ---nuestro modelo funcionaría peor en _otro_ conjunto de datos asociado al producto A que sobre el que se ha usado para entrenarlo---, pero ilustra cómo, en el fondo, al aplicar modelos bayesianos buscamos la adaptación de modelos genéricos a casos más concretos. Y, en cierto modo, eso es sobreajustar.


### Y no solo por ese motivo

Si debió quedar algo en claro de mi entrada [_Ajuste de modelos: Optimización vs generalización_](/2024/02/01/model-generalization/) de no hace mucho es que, en estos tiempos en los que los modelos cada vez son más complejos, se están disociando optimización de generalización. Un modelo complejo que alcanza el error mínimo en el conjunto de entrenamiento puede no valer para nada.

Aún no sabemos ---y no lo sabremos nunca--- cómo hacer para construir modelos que aprendan de datos que no existen. Lo único que sabemos es:

- Usar los datos disponibles.
- Que la minimización estricta del error no es la vía.
- Que cierto grado de sobreajuste es inevitable.
- Utilizar cierto número de técnicas para mitigar el problema del sobreajuste y mejorar la generalización de los modelos.

De entre todas ellas, las que propone la estadística bayesiana propone el planteamiento más sólido conceptualmente: la de sesgar los coeficientes de los modelos en la dirección que, por otras vías, se sabe probable.


### Como conclusión

Lo que se se escribe en el artículo que motivó la polémica es una tautología del nivel 2+2=4. Efectivamente, no hay procedimiento de construcción de modelos que no sobreajuste. Y, efectivamente, el bayesiano bien usado es de los menos afectados por ese fenómeno.

Pero supongo que por motivos más o menos aleatorios, el artículo adquirió cierta popularidad, alguien se lo tomaría a pecho, eso contribuyó a su viralización, etc. y como consecuencia de todo ello estamos hoy aquí yo escribiendo y tú leyendo que el agua moja.