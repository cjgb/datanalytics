---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2026-06-09
description: Incluyendo notas sobre Mahalanobis el estadístico, la aplicación de la
  IRT para evitar la inflación de notas y comentarios sobre el manido tabPFN.
lastmod: '2026-06-04T12:09:43.254635'
related:
- 2025-11-20-estadistica.md
- 2025-12-11-cortos.md
- 2025-07-01-cortos-estadistica.md
- 2025-10-16-estadistica.md
- 2025-05-20-cortos-estadistica.md
tags:
- estadística
- encuestas electorales
- paradoja de berkson
- mahalahobis
- stan
- irt
title: 'Notas (24): la paradoja de Berkson en acción y otros asuntos'
url: /2026/06/09/cortos-estadistica/
---

Mi viejo colega J.L. Cañadas ha publicado su consuetudinario [análisis de las encuestas electorales, esta vez para las elecciones andaluzas de 2026](https://muestrear-no-es-pecado.netlify.app/2026/05/meta-analisis-andalucia.html). La novedad de este año es que ha delegado el trabajo en Claude: le ha pasado los enlaces de las anteriores y le ha pedido que lo replique. Y nada mal. Como anécdota, contaré que yo también traté luego de replicar sus resultados usando modelos gratuitos para ver si respondían mucho peor que Claude pero luego caí en la cuenta de que uno de ellos había encontrado por su cuenta la entrada enlazada más arriba y la había copiado literalmente. Hay modelos listos y modelos espabilados, parece.

No estoy muy de acuerdo hoy con Gelman cuando critica [la preferencia de las personas por predicciones categóricamente correctas](https://statmodeling.stat.columbia.edu/2026/05/08/the-pick-the-winner-picker-heuristic-preference-for-categorically-correct-forecasts/), particularmente en contextos electorales. En concreto, se refiere a cómo la gente las valora en función de si _aciertan_ eventos discretos, sin importar el hecho de que lo que realmente miden son magnitudes continuas. Pero es evidente que lo relevante de este tipo de eventos es si ocurren o no determinados eventos (p.e., el partido X logra la mayoría absoluta). [De eso hablé hace tiempo](/2022/05/10/encuestas-electorales-cualitativas/), así que no me extiendo.

Las IAs generativas pueden crear imágenes porque (se especula), las imágenes realmente relevantes (para nosotros los humanos) tienen unas características muy concretas. Hay gente que dice que «habitan una hipervariedad» de baja dimensión en el espacio de todas las imágenes combinatoriamente posibles. Si lo mismo ocurriese con las tablas de datos y una IA fuese capaz de representar esa hipervariedad, podría predecir (es decir, añadir nuevas columnas compatibles con el resto) igual que una IA puede completar una imagen en la que se han enmascarado algunas zonas. Así entiendo yo [tabPFN](https://thierrymoudiki.github.io//blog/2026/05/17/r/python/conformalized-tabpfn).

Peter Ellis hace un [estudio de la supervivencia de las guerras interestatales desde la época postnapoleónica](https://freerangestats.info/blog/2026/05/13/war-durations) sin utilizar el análisis de la supervivencia. A todo esto, ¿no chocha pensar en que «las guerras sobreviven»?

En [_Recent discoveries on the acquisition of the highest levels of statistical fallacies_](https://statmodeling.stat.columbia.edu/2026/05/13/recent-discoveries-on-the-persistence-of-statistical-fallacies/), Gelman recoge un caso de libro de la [paradoja de Berkson](/2019/06/12/mas-sobre-la-paradoja-de-berkson/).

[_Alchemize: Transpile PyMC to Rust for 3-7x speed-up_](https://discourse.pymc.io/t/alchemize-transpile-pymc-to-rust-for-3-7x-speed-up/17709). Y Stan, y NumPy, etc. Usando un LLM que toma el modelo y lo reescribe en Rust.

Alex Tabarrok sugiere usar técnicas inspiradas por la [teoría de la respuesta al ítem](/tags/irt/) para [mitigar la inflación de notas](https://marginalrevolution.com/marginalrevolution/2026/03/grade-caps-are-not-a-good-solution-to-grade-inflation.html). La ventaja del IRT es que mitiga la penalización que sufren actualmente los estudiantes que eligen las asignaturas más exigentes e introduce cierto grado de comparabilidad entre ellas.

La estadística, por motivos históricos, tiene dos almas; simplificando mucho, una está próxima a las matemáticas y otra, a la economía. Mahalanobis está asociado a la primera por algún resultado abstracto conocido de todos. Lo que no sé si mucha gente sabe es que, además, [fue uno de los miembros de la comisión para el primer plan de desarrollo quinquenal de la India, etc.](https://altermag.com/articles/the-making-of-indian-statistics)