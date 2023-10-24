---
author: Carlos J. Gil Bellosta
date: 2023-10-31
title: "Más sobre paralelismos entre textos vía embeddings"

url: /2023/10/31/paralelismo-embeddings/
categories:
- estadística
tags:
- embeddings
- nlp
- python
- evangelios
---

Retomo el asunto de los paralelismos entre textos, que ya traté
[aquí](/2023/06/15/paralelismo-textos/),
por el siguiente motivo:

* Estoy explorando las posibilides del [RAG](https://www.promptingguide.ai/techniques/rag)
* Para lo cual es necesario crear una base de datos documental con los fragmentos debidamente _embebidos_
* En particular, estoy probando lo que [chroma](https://www.trychroma.com/) da de sí.

Esencialmente, chroma consiste en:
* Una base de datos (SQLite, de hecho) donde se almacenan los fragmentos, sus metadatos y sus _embeddings_.
* Mecanismos para crear los _embeddings_.
* Mecanismos para buscar (por similitud de los _embeddings_) fragmentos relacionados con una petición de búsqueda.

Mis experimentos en español han sido catastróficos. La culpa, realmente, no parece ser de crhoma en sí sino de los algoritmos de _embedding_ ---se supone que específicos para el español--- que he utilizado. Lo que sigue es un resumen de los resultados obtenidos en inglés, que parecen mucho mejores.

Para ello he vuelto al asunto de los evangelios _paralelos_ obteniendo

![](/wp-uploads/2023/paralelismo_evangelios_chroma.png#center)

Esta vez, lo he construido así: para cada frase (fragmento) de cada uno los evangelios, he buscado los 10 fragmentos más próximos del otro. Lo que se muestra en la gráfica es la matriz de coincidencias correspondiente. Se aprecia vagamente, como en el experimento anterior, el hilo argumental paralelo. Pero tampoco hay mucho más que añadir.

Eso sí, dejo para referencia futura el código completo [aquí](https://github.com/cjgb/datanalytics_code/blob/main/comparing_gospels_chroma_00.ipynb).

Y una nota: en el código en cuestión he usado los _embeddings_ por defecto de chroma. Uno tiene la opción de usar otros _manualmente_.