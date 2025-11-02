---
author: Carlos J. Gil Bellosta
categories:
- estadística
date: 2023-06-15
lastmod: '2025-04-06T18:54:41.519004'
related:
- 2023-10-31-paralelismo-embeddings.md
- 2018-10-15-dos-ejercicios-propuestos-sobre-embeddings.md
- 2023-10-19-errores-chatgpt.md
- 2012-05-28-desencriptando-ii-la-avaricia-es-mala.md
- 2018-01-29-donde-estan-las-letras.md
tags:
- openai
- embeddings
- nlp
- python
- evangelios
title: 'Paralelismos entre textos vía embeddings: el caso, por poner uno, de los evangelios
  de Mateo y Marcos'
url: /2023/06/15/paralelismo-textos/
---

Hace un tiempo tuve que leerlo _todo_ sobre cierto tema. Entre otras cosas, cinco libros bastante parecidos entre sí. Era una continua sensación de _déjà vu_: el capitulo 5 de uno de ellos era casi como el tres de otro, etc. Pensé que podría ser útil ---y hacerme perder menos tiempo--- poder observar el solapamiento _en bloques_ ---sígase leyendo para entender mejor el significado de lo que pretendía---.

En esta entrada voy a mostrar el resultado de mis ensayos sobre unos textos distintos. Los que me interesaban originalmente estaban en PDF y hacer un análisis más o menos riguroso exigía mucho trabajo de limpieza previo. Pensando en otros textos distintos que vienen a contar la misma historia se me ocurrió utilizar dos de los
[evangelios sinópticos](https://es.wikipedia.org/wiki/Evangelios_sin%C3%B3pticos)
(en particular, los de Mateo y Marcos).

Así que voy a contar primero lo que hice, luego mostrar resultados y, finalmente, criticarlo todo.

Lo que hice (y que puede verse, esencialmente,
[aquí](https://github.com/cjgb/datanalytics_code/blob/main/comparing_gospels_openai.ipynb)):

1. Descargar los evangelios de Mateo y Marcos en la versión inglesa (King James, para más señas).
1. Usar `spacy` para partir el texto en frases.
1. Usar OpenAI (en particular, los _embeddings_ del modelo `text-embedding-ada-002`) para convertir las frases en vectores de longitud aproximadamente igual al año de la traducción.
1. Encomendarme al becerro de oro del producto escalar para crear la matriz de distancias entre frases.
1. Pintar y colorear.

Los resultados. Primero, la matriz:

![](/img/2023/paralelismo_evangelios.png#center)

Filas y columnas corresponden a frases de los dos evangelios en cuestión. Sin forzar mucho la vista puede apreciarse una línea diagonal de _alta correlación_ que recorre la trama común. Las frases con correlación más alta son copias literales

![](/img/2023/paralelismo_evangelios_01.png#center)

aunque enseguida empiezan a aparecer pequeñas variaciones:

![](/img/2023/paralelismo_evangelios_02.png#center)

Es curioso que la menor de las _correlaciones_ es de 0.685295 (y entre frases, además, que apenas se parecen):

![](/img/2023/paralelismo_evangelios_03.png#center)

Mi resumen: estoy un poco decepcionado. Esperaba, tenía la vaga esperanza de que revelasen _bloques_ (más que una débil _línea argumental_) fácilmente identificables: el nacimiento, la crucifixión, etc. Igual tenía que haber pensado en unidades de texto más amplias que la frase completa. Pero esta tampoco es realmente mi guerra y si lo hago y si, sobre todo, lo logro, igual _piso_ algún TFG patatero.

Eso sí, se me ocurre una pequeña broma: reescribir uno de los evangelios de la siguiente manera:

1. Llamar a los dos evangelios, por simplificar, A y B.
1. Tomar como base uno de ellos, A.
1. Reemplazar la n-ésima frase de A por la más próxima a ella de B.
1. Juntar las frases resultantes, ver qué cosa sale y echarme unas risas.

Cualquier día.