---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2025-04-10
description: Es posible construir modelos estadísticos similares en calidad pero que
  tienen interpretaciones distintas. En la entrada se exploran algunas consecuencias
  de ello.
lastmod: '2025-04-29T23:34:22.350692'
related:
- 2024-10-17-interpretacion-modelos.md
- 2024-09-12-cortos-stats.md
- 2017-01-16-weapons-of-math-destruction.md
- 2019-11-18-los-ejemplos-son-las-conclusiones.md
- 2025-03-06-seleccion-modelos.md
tags:
- explicación
- árboles frugales
title: 'Multiplicidad de modelos, multiplicidad de explicaciones: algunas consecuencias'
url: /2025/04/10/diversidad-explicaciones
---

Hay cosas obvias en las que uno no repara hasta que ve que otro les apunta con el dedo y les da un nombre. Luego no deja de verlas por doquier.

Una de ellas y que ahora encuentro en todas partes es la de la diversidad de explicaciones. Escribí sobre ello el otro día. Decía allí (citando un artículo de B. Ripley):

> Si buscamos un modelo explicativo, deberíamos tener presente que puede haber varios modelos explicativos (aproximadamente) igual de buenos: lo aprendí [...] tras haber hecho muchas selecciones informales de modelos en problemas aplicados en los que me hubiera resultado útil haber podido presentar soluciones alternativas.

Me vienen a la mente algunas cuestiones relacionadas con este asunto:

- Uno de los objetivos de la estadística es crear modelos y que estos sean usados (y no archivados). Los usuarios potenciales de los modelos pueden plantear objeciones que pueden llegar a resultar obstáculos insalvables para su implementación. Es estadístico está obligado a realizar ciertas tareas de relaciones públicas para vender su modelo. Una de ellas, explicarlo de manera que sea entendido por sus potenciales usuarios y estos vean que es _razonable_. En ese punto y habida cuenta de la multiplicidad de explicaciones, el estadístico cuenta con cierta latitud para elegir unos u otros en función de lo que entiende que su público espera.
- Algo parecido hacen por defecto ---y por diseño--- los llamados [árboles rápidos y frugales](/2016/07/13/rapido-y-frugal-una-digresion-en-la-direccion-inhabitual/). El objetivo explícito detrás de la concepción de este tipo de modelos es el de construir "sistemas expertos" en medicina de los que se fíen los médicos. Se podrían construir sistemas (algo) mejores, pero si van a acabar en un cajón, conviene recordar el argumento de San Anselmo sobre la relación entre existencia y optimalidad.
- Parece que la interpretabilidad de modelos va a ser condición necesaria para recibir el visto bueno legal para su utilización en algunos ámbitos. De nuevo, la posibilidad muy marxista de poder decir "si no le gusta esta explicación aquí tengo otra distinta pero igualmente válida" puede ayudar a sortear trabas legales para la feliz implantación de modelos predictivos.