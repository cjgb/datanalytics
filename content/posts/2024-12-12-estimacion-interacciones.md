---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2024-12-12
lastmod: '2025-04-06T18:57:16.612108'
related:
- 2017-07-13-gelmaneando.md
- 2020-07-14-sobre-el-efecto-medio.md
- 2023-09-28-potencia-tests.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2022-03-10-diagramas-causales-hipersimples-1-errores.md
tags:
- estadística
- interacciones
- potencia
title: Bajo hipótesis razonables, hacen falta 16 veces más observaciones para estimar
  una interacción que para estimar un efecto principal
url: /2024/12/12/estimacion-interacciones/
---

Uno de los grandes temas de estas páginas es que el efecto principal de un tratamiento es un indicador demasiado burdo. Casi siempre queremos ver ese efecto propiamente desglosado: a unos sujetos les afecta más, a otro menos.

Para lograr ese objetivo, hay que estudiar cómo interactúa el efecto con otras variables (p.e., sexo). Desafortunadamente, cuanto mayor es el grado de desglose, más incertidumbre existe sobre las estimaciones; a la inversa, para lograr una mayor precisión en las estimaciones, hace falta incrementar el tamaño muestral. Pero, ¿cuánto?

Andrew Gelman ha usado frecuentemente en su blog la siguiente heurística: hacen falta 16 veces más observaciones para estimar una interacción ---implícitamente: con una variable binaria (¡glups!), como el sexo--- que para estimar el efecto principal. Afortunadamente, tiene un par de entradas
([esta](https://statmodeling.stat.columbia.edu/2018/03/15/need16/) y
[esta](https://statmodeling.stat.columbia.edu/2023/11/09/you-need-16-times-the-sample-size-to-estimate-an-interaction-than-to-estimate-a-main-effect-explained/)) en las que justifica dicha heurística.

El razonamiento se basa en lo siguiente:

1. Si se usan promedios ---que es equivalente a la regresión lineal--- para estimar el efecto principal y una interacción (binaria), el error estándar de la interacción es el doble que el del efecto principal.
2. Es razonable suponer que una interacción tendrá la mitad de la magnitud de un efecto principal.
3. Por lo tanto, el tamaño del efecto verdadero dividido por el error estándar es 4 veces mayor para la interacción que para el efecto principal.
4. Para lograr un nivel equivalente de potencia estadística para la estimación de la interacción, hace falta un tamaño muestral 4^2 = 16 veces el necesario para un efecto principal.

La tensión entre señal y ruido / sesgo y varianza en estado puro.

La regla es un tanto antiintuitiva porque de manera _naif_, uno podría suponer que hace falta el doble de observaciones: el problema de calcular el efecto de una interacción es prácticamente equivalente al de estimar el efecto principal para un conjunto de datos que contiene únicamente la subpoblación de interés (que se supone que es el 50% de la total). Es instructivo repasar el argumento de Gelman para identificar dónde falla este.