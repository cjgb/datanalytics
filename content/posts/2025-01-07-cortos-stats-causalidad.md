---
author: Carlos J. Gil Bellosta
date: 2025-01-07
title: 'Varios apuntes sobre causalidad'
url: /2025/01/07/cortos-estadística
categories:
- cortos
tags:
- causalidad
- nadaesgratis
- derecho
- software
- d de cohen
- t-test
---

Lo más satisfactorio de la entrada [_Resolving disputes between J. Pearl and D. Rubin on causal inference_](https://statmodeling.stat.columbia.edu/2009/07/05/disputes_about/) es constatar cómo el autor, Andrew Gelman, también encuentra _opacos_ conceptos muy _pearlianos_ como el de _collider of an M-structure_.

La entrada de NadaEsGratis en cuestión se titula
[_Consumo de alcohol entre los adolescentes y rendimiento educativo_](https://nadaesgratis.es/bagues/consumo-de-alcohol-entre-los-adolescentes-y-rendimiento-educativo).
Por dónde y cuándo se ha publicado, _sabemos_ sin leerla que va a encontrar una relación negativa entre ambos. Pero el estudio está plagado de problemas (el uso de _proxies_, efectos pequeños, la gran cantidad de ruido, la falacia ecológica, etc.), cualquiera de los cuales hemos visto por sí solos poner en cuestión otros resultados en otras partes. Afortunadamente para el autor, como solo busca probar que la hierba es verde y que al agua moja, es muy probable que nadie lo cuestione con el manual de metodología en mano.

En [_La racionalidad económica de los criterios de imputación objetiva_](https://almacendederecho.org/la-racionalidad-economica-de-los-criterios-de-imputacion-objetiva) se discuten varias implementaciones en el derecho del concepto de causalidad.

[`dowhy`](https://github.com/py-why/dowhy) (y el ecosistema al que pertenece) es uno de esos paquetes que hace no tanto estarían en R y no en Python pero que resulta que es al revés. Permite realizar (según indica la documentación):

- Estimación de efectos: identificación, ATE, CATE, VVII y más.
- Cuantificación de influencias causales: análisis de mediación, fuerza de flechas directas, influencia causal intrínseca.
- Análisis de escenarios hipotéticos: generar muestras de la distribución de intervención, estimar contrafactuales.
- Análisis de causas raíz y explicaciones: atribuir anomalías a sus causas, encontrar causas de cambios en las distribuciones, estimar la relevancia de las variables y más.

Lo que cuenta en [_All Medications Are Insignificant In The Eyes Of God And Traditional Effect Size Criteria_](https://www.astralcodexten.com/p/all-medications-are-insignificant) Scott Alexander, basado en el artículo [_Determining maximal achievable effect sizes of antidepressant therapies in placebo-controlled trials_](https://onlinelibrary.wiley.com/doi/10.1111/acps.13340) parece uno de esos teoremas de imposibilidad: si tienes un grupo de control/placebo con una variabilidad grande, es prácticamente imposible encontrar efectos positivos _significativos_ (en términos de la d de Cohen).

Las [_5 different reasons why it’s important to include pre-treatment variables when designing and analyzing a randomized experiment (or doing any causal study)_](https://statmodeling.stat.columbia.edu/2024/11/18/5-different-reasons-why-its-important-to-include-a-pre-treatment-variable-when-designing-and-analyzing-a-randomized-experiment/) según Andrew Gelman son:

1. Ajustar por sesgos en diseños no aleatorizados.
1. Ajustar por desequilibrios aleatorios en diseños aleatorizados (y por desequilibrios no aleatorios debido a aleatorización imperfecta, abandono, etc.).
1. Reducir el error estándar del efecto estimado.
1. Poder estudiar si hay desequilibrios y heterogeneidad entre los grupos de tratamiento y control.
1. Poder generalizar a una población con una distribución diferente de x.

Es decir, hay cinco motivos menos para usar antiguallas como el t-test y similares.


