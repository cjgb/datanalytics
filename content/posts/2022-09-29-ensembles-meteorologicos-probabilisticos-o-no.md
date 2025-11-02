---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2022-09-29
lastmod: '2025-04-06T18:52:26.151984'
related:
- 2022-06-09-el-modelo-es-y.md
- 2024-10-31-efectividad-alertas.md
- 2023-07-25-tutorial-numpyro-1-modelos-probabilisticos.md
- 2021-04-08-sobre-las-probabilidades-de-eventos-que-ocurren-una-unica-vez.md
- 2024-12-19-promediar-predicciones.md
tags:
- ensembles
- meteorología
- probabilidad
title: '"Ensembles" meteorológicos: ¿probabilísticos o no?'
url: /2022/09/29/ensembles-meteorologicos-probabilisticos/
---

Primero, una brevísima introducción al uso de _ensembles_ en meteorología:

![](/img/2022/09/ensembles.jpeg#center)

1. Los metereólogos tienen modelos físicos deterministas que permiten _proyectar_ a futuro el estado presente del tiempo (o de otros estados presentes hipotéticos).
2. Sin embargo, esos modelos (tanto por su propia naturaleza como por las simplificaciones computacionales sin cuyo concurso las proyecciones serían materialmente inviables) son muy sensibles a las condiciones iniciales de partida (véase la gráfica anterior).
3. Luego se realizan _ensembles_, i.e., proyecciones partiendo de pequeñas variaciones de las situaciones iniciales, que luego se agregan de cierta manera (para más detalles, consúltese el libro [Física del caos en la predicción meteorológica](https://www.aemet.es/es/conocermas/recursos_en_linea/publicaciones_y_estudios/publicaciones/detalles/Fisica_del_caos_en_la_predicc_meteo) y, en particular, el capítulo 27).

Y ahora, las preguntas son:

* ¿Puede decirse que estas predicciones son propiamente probabilísticas?
* ¿Bajo qué condiciones podría decirse que lo son?