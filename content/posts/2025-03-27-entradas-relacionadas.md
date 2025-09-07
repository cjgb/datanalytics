---
author: Carlos J. Gil Bellosta
categories:
- computación
- llms
date: 2025-03-27
description: Descripción del proceso de creación del widget de entradas relacionadas
  en el blog usando LLMs y editando la plantilla de Hugo.
lastmod: '2025-04-06T19:21:57.684078'
related:
- 2015-03-04-adaequatio-rei-et-analysis.md
- 2021-03-04-sobre-el-teorema-de-aumann.md
- 2019-08-15-relevante-para-entender-la-maldicion-de-la-dimensionalidad.md
- 2023-11-21-sumas-lognormales.md
- 2024-04-30-falacia-ecologica.md
tags:
- llms
- hugo
title: Ahora el blog tiene una lista de entradas relacionadas construida usando LLMs
url: /2025/03/27/entradas-relacionadas/
---

He implementado las _entradas relacionadas_ en el blog. Dos entradas están relacionadas cuando el producto escalar de sus _embeddings_ es alto.

Así que en primer lugar he asociado a cada entrada un _embedding_. Las entradas _son_ ficheros de _markdown_ con un preámbulo en _yaml_. Los _embeddings_ no están creados directamente sobre el texto bruto de la entrada sino sobre la entrada y algunos de los elementos, no todos, del preámbulo.

He usado el modelo `text-embedding-004` de Google aunque no podría razonar muy convincentemente la decisión. Quise saber si hay algún tipo de _embedding_ que funcione particularmente bien en español y no llegué a ninguna conclusión convincente. Hay algunos modelos de _embedding_ que los buscadores mencionan cuando en tu búsqueda yuxtapones "_embedding_" y "español", pero no sé si aparecen porque han sido entrenados primordialmente con textos en español, porque son particularmente buenos en español, o porque son cuñados de [ALIA](https://alia.gob.es/), [MarIA](https://www.bsc.es/es/noticias/noticias-del-bsc/el-primer-sistema-masivo-de-inteligencia-artificial-de-la-lengua-espa%C3%B1ola-maria-empieza-resumir-y) y todas esas cosas hipersuperdupercomputercenterbarlenoniensis.

Sobre el producto escalar no voy a abundar.

El paquete [`python-frontmatter`](https://pypi.org/project/python-frontmatter/) es muy útil para editar el preámbulo y añadirle extensiones no contempladas explícitamente en [Hugo](https://gohugo.io/).

La parte más delicada del proceso es modificar la plantilla de Hugo para que muestre las entradas relacionadas. He seguido la que creo que es la vía del mínimo esfuerzo, consistente en:
- Identificar otro componente del blog similar en aspecto y función: el _widget_ de "últimas entradas publicadas".
- Copiárselo a Gemini y pedirle que lo transforme en otro que dé cuenta de las entradas relacionadas, que, para cada entrada, es una lista disponible en el preámbulo.
- Copipegar la respuesta de Gemini en el lugar adecuado.
- Realizar otros ajustes necesarios para concluir satisfactoriamente el proyecto, como activar el nuevo _widget_ en la barra lateral (añadiendo su nombre a un vector en el fichero de configuración) y alguna otra modificación menor. Por supuesto, bajo la permanente guía de Gemini.

No lo clava siempre pero, en general, la evidencia circunstancial parece indicar que funciona bastante bien y que puede resultar útil.
