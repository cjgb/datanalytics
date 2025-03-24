---
author: Carlos J. Gil Bellosta
date: 2025-03-11
title: 'Varios asuntos relacionados con la causalidad'
description: "Una serie de enlaces relacionados con la causalidad, el modelo de Neyman-Rubin y la inferencia causal, sobre todo en presencia de 'missing values'."
url: /2025/03/11/cortos-causalidad
categories:
- cortos
tags:
- causalidad
---

### I.

Tiene Andrew Gelman una entrada en su blog,
[_Rubinism: separating the causal model from the Bayesian data analysis_](https://statmodeling.stat.columbia.edu/2009/07/10/rubinism_separa/),
que es, según se mire, relevante o trivial. Esencialmente distingue entre el RCM (modelo causal de Rubin) y el análisis bayesiano (de datos):
- El RCM (o modelo de los efectos potenciales en inferencia causal) lo resume como un modelo en el que se entiende que los datos proceden de una muestra en la que, en el mejor de los casos, se ha visto el efecto de un tratamiento dado en cada sujeto.
- El análisis bayesiano como un marco más amplio que puede servir para analizar el RCM (aunque hay alternativas) o para otras cuestiones.

A todo esto, el RCM se llama también modelo de Neyman-Rubin. Neyman (el de los intervalos de confianza) introdujo una versión limitada del modelo en su tesis de maestría de 1923 y muchos años después, en los 70, Donald Rubin lo extendió y generalizó en una serie de artículos como [este](https://psycnet.apa.org/doiLanding?doi=10.1037%2Fh0037350).

### II.

En otra entrada, [_History, historians, and causality_](https://statmodeling.stat.columbia.edu/2022/09/01/history-historians-and-causality/) en la que discute el paralelismo entre el análisis causal y la estadística bayesiana con el quehacer de los historiadores, Gelman abunda sobre el mismo punto: son actividades distintas que pueden ejercerse independientemente la una de la otra.

El otro tema del artículo es la relación entre la estadística (predicar sobre poblaciones a partir de una muestra) y la historia (predicar sobre periodos históricos a partir de fragmentos). Y sobre, además, cómo los historiadores, a diferencia de, por ejemplo, los economistas ---y, supongo, los estadísticos---, no son tan amigos de generalizaciones _urbi et orbi_.

### III.

De que ambos conceptos (el RCM y el análisis bayesiano), a pesar de la admonición anterior, se consideran íntimamente entretejidos da cuenta la entrada
[_What should we expect in comparing human causal inference to Bayesian models?_](https://statmodeling.stat.columbia.edu/2021/12/22/what-should-we-expect-in-comparing-human-causal-inference-to-bayesian-models/)
en el mismo blog (aunque, concedido, la confusión está más en el breve rótulo que en el contenido en sí del artículo).

### IV.

Mucho de lo que trata el estudio de la causalidad en estadística, en el fondo, es lo que pasa cuando uno quiere estudiar fenómenos como

![](/wp-uploads/2025/puzzling_anatomy.svg#center)

con modelos parciales que, por algún motivo, ignoran parte de la estructura generadora de los datos. Dicho de otra manera, cuando el modelo es manifiestamente incorrecto. El el caso anterior, por ejemplo, estudiando la regresión lineal $y \sim x_1$. Existe una solución evidente a todas estas discusiones bizantinas, reiterativas e irrelevantes:
- Abandonar los modelos triviales (como la regresión lineal).
- Modelizar adecuadamente la estructura generadora de datos tal cual es.

Nota: el gráfico anterior está extraído de
[_Puzzling Regression Anatomy_](https://skranz.github.io/r/2020/07/01/PuzzlingRegressionAnatomy.html),
donde el lector interesado encontrará, además, una discusión _old style_ sobre el asunto.

### V.

La  mejor parte de la entrada
[_Effects are correlated, policy outcomes are not, and multi-factor explanations are hard_](https://www.lesswrong.com/posts/LRJk55uBehJqL6dju/effects-are-correlated-policy-outcomes-are-not-and-multi)
es la última en la que discute la sobredeterminación causal razonando sobre el diagrama

![](/wp-uploads/2025/fertile_crescent.svg#center)

que describe las _causas_ esgrimidas en el libro _Guns, Germs and Steel_ de J. Diamond acerca de los motivos por los que la agricultura surgió en primer lugar en el llamado creciente fértil. El resumen es la obviedad de que no pueden coexistir múltiples causas poderosas e independientes.

### VI.

Escribe [Alfonso Novales en NadaEsGratis](https://nadaesgratis.es/admin/el-regimen-de-vivienda-y-el-riesgo-de-pobreza-como-la-interpretacion-erronea-de-la-evidencia-condiciona-las-politicas):

> No cabe duda de que el dato que mencionan [una serie de titulares de prensa] es llamativo y preocupante, pero la redacción de titulares no es inocua: mientras que el Banco de España proporcionaba un enunciado meramente descriptivo, los titulares de prensa anteriores, referidos al informe del Banco de España, sugieren una relación de causalidad, según la cual los elevados alquileres son una causa principal de que un alto porcentaje de hogares que viven en régimen de alquiler se encuentren en riesgo de pobreza o exclusión social (RPES).

La prensa siempre toma el nombre de la causalidad en vano.

(El resto del artículo es, además, una ilustración muy interesante y práctica del uso del teorema de Bayes).

### VII.

Los estudiosos de la causalidad en todas sus facetas disfrutarán del artículo
[_Causalidad fáctica y causalidad jurídica: imputación objetiva o alcance de la responsabilidad_](https://almacendederecho.org/causalidad-factica-y-causalidad-juridica-imputacion-objetiva-o-alcance-de-la-responsabilidad)
publicado en el [Almacén de Derecho](https://almacendederecho.org) y sobre el que guardo en la carpeta de borradores una pequeña recensión que aún me da pudor publicar.

### VIII.

En [_Matching, missing data, a quasi-experiment, and causal inference_](https://solomonkurz.netlify.app/blog/2025-02-02-matching-missing-data-a-quasi-experiment-and-causal-inference-oh-my/)
realiza Solomon Kurz una _inferencia causal_ sobre datos observacionales que tienen algunas variables omitidas. Así que imputa, empareja observaciones y, finalmente, modela y calcula el efecto deseado. Merece la pena ejecutar el código línea a línea y perder el tiempo explorando los objetos intermedios.

Una cosa que no me gusta de la aproximación a la que invitan los paquetes de R que usa (y cómo los usa) es que no sigue el procedimiento que me parece natural:
1. Simular una imputación.
2. Simular un emparejamiento.
3. Modelar.
4. Iterar cuantas veces se desee el procedimiento anterior.
5. Extraer el resumen de los modelos ajustados en cada iteración.
6. Aplicar, si procede, el [ajuste de Rubin](https://arxiv.org/pdf/1801.04058) para tener en cuenta la varianza que introduce la imputación.