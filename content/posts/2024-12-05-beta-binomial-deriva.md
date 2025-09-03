---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-12-05
lastmod: '2025-04-06T18:52:12.723678'
related:
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2011-01-10-c2bfuna-caida-demasiado-drastica-de-la-varianza.md
- 2024-03-05-sobreajuste-modelos-bayesianos.md
- 2023-07-25-tutorial-numpyro-1-modelos-probabilisticos.md
- 2012-01-12-localidad-globalidad-y-maldicion-de-la-dimensionalidad.md
tags:
- estadística
- ciencia de datos
- estadística bayesiana
- binomial
- beta
- deriva
title: Sobre el modelo beta-binomial con "deriva"
url: /2024/12/05/beta-binomial/
---

### Planteamiento del problema

El modelo beta-binomial es precisamente el que estudió el reverendo Bayes. Es tan viejo como la estadística bayesiana: tienes una moneda, la tiras repetidamente y vas afinando progresivamente la estimación de la probabilidad de cara asociada a tal moneda.

Una variante habitual del problema anterior ocurre cuando hay una deriva (uso _deriva_ como traducción de _shift_) en la probabilidad de la cara de la _moneda_: puedes estar tratando de vender productos en Amazon y estimar el número de ventas por impresión; es tentador usar el modelo beta-binomial, pero hay un problema: ¿los datos de hace tres años, siguen siendo relevantes?; ¿habrán cambiado en tanto las probabilidades?; en tal caso, ¿qué se puede hacer?

Efectivamente, si $N$ es el número total de _tiradas_, es resabido que la precisión de la estimación crece con $N$. Pero el promedio puede estar sesgado si se tienen en cuenta observaciones de hace mucho, de cuando $p$ era distinta. Es la tensión entre sesgo y varianza en estado puro.

### Algunas soluciones que vienen a ser la misma

Hay varias soluciones para este problema que vienen a ser una sola. Menciono las que he usado en alguna ocasión.

1. Usar algún tipo de "decaimiento" exponencial que quite peso a las observaciones viejas.
2. Usar algún tipo de modelo flexible (p.e., _splines_) para modelar la evolución de $p$ a lo largo del tiempo.
3. Usar algún tipo de modelo de "cambio de régimen" para identificar el punto de corte más reciente y usar en el modelo beta-binomial solo las observaciones a partir de dicho momento.

Se podría escribir y probar un teorema que demostrase que vienen a ser la misma cosa y que todas tienen que deshacer el mismo nudo gordiano (solo que de distinta manera): determinar cuánta historia usar. Esta profundidad histórica viene determinada en casa caso por:

1. El tamaño del coeficiente $\lambda$ en el término de "decaimiento" $\exp(-\lambda t)$.
2. La el grado de flexibilidad de los _splines_.
3. La sensibilidad del criterio del punto de corte en la detección del cambio de régimen.

En el fondo, es pura heurística.

### ¿Qué dice la ciencia al respecto?

He estado buscando artículos al respecto y la sensación que me da es la academia ha convertido variaciones sobre los principios básicos de la heruística anterior en un pequeño subgénero dentro del nada comedido flujo de publicaciones científicas. Hay un artículo-resumen de hace diez años, [_A survey on concept drift adaptation_](https://dl.acm.org/doi/10.1145/2523813) que ilustra cómo, efectivamente, no hay apenas nada más allá de reinterpretaciones y variaciones _ad hoc_ de los procedimientos mencionados en la sección anterior. Dudo ---aunque tal vez algún lector pueda sacarme del error--- que el asunto haya quedado zanjado en los diez años subsiguientes.