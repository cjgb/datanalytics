---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2025-07-01
description: Sobre los efectos heterogéneos, la menguante calidad de las estadísticas
  públicas y algunos asuntos estadísticos más
lastmod: '2025-09-04T14:00:42.221883'
related:
- 2022-03-08-estadistica-ciencias-blandas.md
- 2022-03-03-error-sesgo-modelos-lineales.md
- 2025-04-22-cortos-stats.md
- 2024-09-12-cortos-stats.md
- 2017-01-16-weapons-of-math-destruction.md
tags:
- brms
- stan
- genética
- varianza
- estadística pública
- media
title: Sobre los efectos heterogéneos, la menguante calidad de las estadísticas públicas
  y algunos asuntos estadísticos más
url: /2025/07/01/cortos-estadistica/
---

- El término y concepto de varianza se acuñaron para, al parecer, poder definir el de heredabilidad en la protogenética decimonónica. Dos artículos muy interesantes y accesibles sobre el tema (sobre todo el segundo), son [_Missing Heritability: Much More Than You Wanted To Know_](https://www.astralcodexten.com/p/missing-heritability-much-more-than) de Scott Alexander y [Heritability puzzlers](https://dynomight.net/heritable/) de Dynomight. (Si crees, como yo, que el segundo tiene un gazapo o inconsistencia, deja una nota en los comentarios).

- Solomon Kurz ha publicado material para _aprender Stan con brms_ (partes [I](https://solomonkurz.netlify.app/blog/2025-07-07-learn-stan-with-brms-part-i/), [II](https://solomonkurz.netlify.app/blog/2025-07-07-learn-stan-with-brms-part-ii/) y [III](https://solomonkurz.netlify.app/blog/2025-07-07-learn-stan-with-brms-part-iii/)). Tengo dos objeciones al uso de `brms`: primero, que al usarlo no se aprende Stan sino otra cosa; y, segundo, que la interfaz de fórmula para la especificación de modelos, que es lo que permite _brms_, da de sí lo que da de sí y no más. Es cierto que _casi siempre_ buscamos implementar modelos que admiten una _interfaz de fórmula_, pero esos son, precisamente, los más sencillos y para los que los LLMs tendrían menos problemas para generar el correspondiente código de Stan.

- Es bien sabido que, en los últimos tiempos, [la calidad de las estadísticas públicas está menguando en muchos países](/2025/06/10/cortos-economia/). Pero eso afecta, en principio, a la varianza. Uno de los motivos por los que las estadísticas públicas, _prima facie_, no tienen sesgos y, en particular, no tienen sesgos con intencionalidad política, es que [tienen que defenderse constantemente de quienes afirman que sí](https://kentclarkcenter.org/filterable-categories/the-attack-on-accuracy/). Solo Dios sabe qué pasaría si nos faltasen los troles, tengan estos pelo naranja o no.

- Quienes sostienen que las estadísticas públicas siempre y en todo lugar están exentas de sesgos motivados políticamente, deberían echar un vistazo a la historia del cálculo de la inflación en Argentina o lo que pasó en Grecia antes de 2008.

- No entiendo muy bien la entrada [_Stimulus Plots_](https://datacolada.org/126) de DataColada porque no he invertido el tiempo necesario para averiguar cuáles son esos _estímulos_ a los que se refiere. Me parece que se refieren a algún tipo de _tratamiento_ concreto. Así, el argumento principal del texto vendría a ser la obviedad de que decir que un tratamiento tiene un efecto promedio determinado no es lo mismo que sostener que el efecto en cada caso está próximo a esa media y que no varía según otras características de los sujetos. En el fondo, está caminando en dirección opuesta a la de la estadística decimonónica ---y la inercia que arrastra hasta la actualidad--- de pensar en sujetos esféricos, en el _homme moyen_. En particular, dicen:

> Lo más tentador cuando se comparan medias es no pensar en los estímulos subyacentes y aceptar que el estudio simplemente ha generado y comparado unas medias. La segunda cosa más tentadora es imaginar que todos los estímulos tienen esencialmente el mismo efecto. La tercera, imaginar que los distintos estímulos tienen efectos ligeramente distintos, pero todos simétricamente distribuidos alrededor del valor central [...]. Pero no hay ningún motivo para que ocurra así. Cada estímulo es distinto y puede tener efectos reales diferentes. Así que sugerimos una cuarta opción: no dar por hecho nada de antemano y examinar los datos.
