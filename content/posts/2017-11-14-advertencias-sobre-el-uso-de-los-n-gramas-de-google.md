---
author: Carlos J. Gil Bellosta
categories:
- nlp
date: 2017-11-14 08:13:42+00:00
draft: false
lastmod: '2025-04-06T18:46:35.411752'
related:
- 2016-09-23-importa-mas-la-causalidad-hoy-en-dia.md
- 2022-07-28-temas-nadaesgratis.md
- 2013-01-10-una-aplicacion-seo-con-r.md
- 2018-01-05-preludio-de-mas-por-venir.md
- 2016-05-06-un-corpus-de-textos-en-espanol-para-nlp.md
tags:
- google
- ngramas
- nlp
title: Advertencias sobre el uso de los n-gramas de Google
url: /2017/11/14/advertencias-sobre-el-uso-de-los-n-gramas-de-google/
---

Dudaba en si dedicar la entrada a popularizar los n-gramas de Google en lugar de advertir sobre sus sesgos. Pero, habida cuenta de que lo primero sería llover sobre mojado (véase [esto](https://datanalytics.com/2016/09/23/importa-mas-la-causalidad-hoy-en-dia/) o [esto](https://datanalytics.com/2017/02/02/cuanto-durara-la-solo-nostalgia/)), me he decantado por lo segundo.

El primer problema es el del reconocimiento de caracteres. Aunque la tecnología mejorará, aún se encuentra, p.e., [_cami6n_](https://books.google.com/ngrams/graph?content=cami6n&year_start=1800&year_end=2000&corpus=15&smoothing=3&share=&direct_url=t1%3B%2Ccami6n%3B%2Cc0) en lugar de _camión_.

El fundamental, no obstante, es que los libros aparecen una única vez independientemente de su popularidad. Esto plantea problemas para medir el impacto cultural de determinados términos: su presencia o ausencia en los n-gramas puede no encontrar correlato en la calle.

Y una concreción del anterior es la sobreabundancia de literatura científica y técnica que parece encontrarse en los corpus. Las publicaciones de ese tipo son numerosas pero de tirada corta e impacto (cultural, si se quiere) limitado. Este fenómeno, no obstante, podría encontrarse más acusadamente en la versión inglesa que en la española de los n-gramas.

Los dos últimos problemas (y otras cuestiones interesantes sobre la evolución de las frecuencias de determinadas palabras por décadas) se explican detalladamente en [_Characterizing the Google Books Corpus: Strong Limits to Inferences of Socio-Cultural and Linguistic Evolution_](http://journals.plos.org/plosone/article?id=10.1371/journal.pone.0137041), de lectura recomendada.

Nótese, además, que el artículo anterior estudia la versión inglesa de los n-gramas de Google. Esos de vosotros que andéis detrás de proyectos por eso de publicar, etc. para medrar en lo académico, con trasladar lo trasladable a la española,...