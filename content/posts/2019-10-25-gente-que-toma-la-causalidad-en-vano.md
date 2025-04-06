---
author: Carlos J. Gil Bellosta
categories:
- artículos
- estadística
- mala ciencia
date: 2019-10-25 09:13:51+00:00
draft: false
lastmod: '2025-04-06T18:52:41.545814'
related:
- 2025-03-11-cortos-causalidad.md
- 2022-03-08-estadistica-ciencias-blandas.md
- 2014-06-24-causalidad-a-la-pearl-y-el-operador-do.md
- 2018-04-03-causalidad-malo-lo-uno-pero-tampoco-bueno-lo-otro.md
- 2022-05-05-individualismo-metodologico.md
tags:
- airbnb
- barcelona
- causalidad
- econometría
- estadística espacial
- mala ciencia
title: Gente que toma la causalidad en vano
url: /2019/10/25/gente-que-toma-la-causalidad-en-vano/
---

Me refiero a los autores de [_El impacto de Airbnb en el mercado de vivienda de Barcelona_](https://nadaesgratis.es/admin/el-impacto-de-airbnb-en-el-mercado-de-vivienda-de-barcelona), que a partir de datos puramente observacionales y en un artículo de apenas 1500 palabras, mencionan la causalidad siete veces. Además, escriben joyas como

>[N]uestra investigación se basa en un modelo de econometría lineal (y no de econometría espacial) ya que nuestro objetivo principal es hacer un análisis causal robusto.

Ya sabes: si quieres un análisis causal robusto, el modelo lineal (_chupatesa_, [Pearl](https://en.wikipedia.org/wiki/Judea_Pearl)).

Nah, lo que esa gente publica es otro estudio más de atribución, que, muchas veces y en su versión de sombrero negro, consiste esencialmente en vestir de lenguaje estadístico trucos diversos para obtener el número que tu audiencia quiere ver. Lo puedes apellidar _robusto_, pero no deja de ser un juego de meter y sacar variables (¡las hay de todo pelaje!) en un modelo lineal (es el que mejor se presta, sobre todo cuando hay muchas variables explicativas potenciales correlacionadas) hasta obtener coeficientes con una (basta) o dos (¡bingo!) estrellitas al costado de la de interés.

**Nota:** Cierto que los problemas de atribución pueden interpretarse como de _causalidad inversa_. Porque, en cierto modo, aspiran a establecer relaciones causales. Pero, realmente, solo alcanzan a revelar correlaciones vaya uno a saber si espurias o no.

**Otra nota:** Sí, he hecho y hago modelos de atribución. Pero siempre trato de ser claro acerca de cómo las hipótesis de partida (más o menos razonables, pero nunca exentas de cierta dosis de arbitrariedad) condicionan los resultados, de cuántos y cuáles son los problemas de las variables de partida y en última instancia, de sus limitaciones. ¿Serán conscientes los autores del artículo de todas esas cuestiones cuando teclean _robustos_?