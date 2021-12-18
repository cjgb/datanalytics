---
author: Carlos J. Gil Bellosta
date: 2021-04-27 09:13:00+00:00
draft: false
title: Un artículo muy poco BdE del BdE

url: /2021/04/27/un-articulo-muy-poco-bde-del-bde/
categories:
- estadística
tags:
- aprendizaje automático
- banca
- estadística
- estadística viejuna
---

En tiempos, cuando me dedicaba a esas cosas, el principal motivo por el que en los bancos que conocí por dentro no usaban otra cosa que GLMs era el BdE. Más concretamente, el carpetovetonismo del BdE: el BdE quería y esperaba GLMs, los bancos construían y mostraban GLMs a los reguladores y todo el mundo vivía feliz y despreocupado de las novedades en su covacha.

Ahora, en el BdE  han publicado [esto](https://www.bde.es/f/webbde/SES/Secciones/Publicaciones/PublicacionesSeriadas/DocumentosTrabajo/21/Files/dt2105e.pdf), cuyo resumen es:

>En este artículo estudiamos el rendimiento de diferentes modelos de aprendizaje automático ---machine learning (ML)--- en la predicción de incumplimiento crediticio. Para ello hemos utilizado una base de datos única y anónima de uno de los bancos españoles más importantes. Hemos comparado el rendimiento estadístico de los modelos tradicionalmente más usados, como la regresión logística (Logit), con modelos más avanzados, como la regresión logística penalizada (Lasso), árboles de clasificación y regresión, bosques aleatorios, XGBoost y redes neuronales profundas. Siguiendo el proceso de validación supervisora de sistemas basados en calificaciones internas ---Internal ratings-based approach (IRB)--- hemos examinado los beneficios en poder predictivo de usar técnicas de ML, tanto para clasificar como para calibrar. Hemos realizado simulaciones con diferentes tamaños de muestras y número de variables explicativas para aislar las ventajas que pueden tener los modelos de ML asociadas al acceso de grandes cantidades de datos, de las ventajas propias de los modelos de ML. Encontramos que los modelos de ML tienen un mejor rendimiento que Logit tanto en clasificación como en calibración, aunque los modelos más complejos de ML no son necesariamente los que predicen mejor. Posteriormente traducimos esta mejoría en rendimiento estadístico a impacto económico. Para ello estimamos el ahorro en capital regulatorio cuando usamos modelos de ML en lugar de métodos tradicionales para calcular los activos ponderados en función del riesgo. Nuestros resultados indican que usar XGBoost en lugar de Lasso puede resultar en ahorros de un 12,4% a un 17%, en términos de capital regulatorio, cuando utilizamos el proceso IRB. Esto nos lleva a concluir que los beneficios potenciales de usar ML, en términos económicos, serían significativos para las instituciones, lo que justifica una mayor investigación para comprender mejor todos los riesgos incorporados en los modelos de ML.

Además, por mucho que he buscado, no aparecen ni las palabras ética, ni sesgo (en el neosentido), ni nada de [lo que quita al sueño a Kathy O'Neil](https://www.youtube.com/watch?v=51VQCHv-Gr8) en ninguna parte. Lo cual es muy de agradecer.