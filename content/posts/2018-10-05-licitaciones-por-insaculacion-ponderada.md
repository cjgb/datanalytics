---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
- varios
date: 2018-10-05 08:13:24+00:00
draft: false
lastmod: '2025-04-06T18:57:47.137612'
related:
- 2010-11-08-una-revision-neoliberal-del-principio-de-peter.md
- 2014-11-25-boceto-de-entrada-sobre-bits-y-referendums.md
- 2022-11-17-igualdad-oportunidades.md
- 2019-01-16-una-de-las-mil-maneras-malas-de-elegir-al-mejor-predictor.md
- 2023-10-05-llms-historia.md
tags:
- insaculación
- licitaciones
- peter
- probabilidad
title: Licitaciones por insaculación ponderada
url: /2018/10/05/licitaciones-por-insaculacion-ponderada/
---

Hace unos años, cuando aún no me había avivado en estos temas, recibí una llamada que me puso muy contento: en un ayuntamiento de nosedónde reconocían mis muchos méritos estadísticos y computacionales y me invitaban a participar en una licitación a vaya Vd. a saber qué cosa. Pero, vamos, lo que pasaba, como tantísimas veces, es que tenían ya escogido a un proveedor y necesitaban a dos comparsas para salvar el trámite burocrático de contar con tres propuestas.

Años después me pasó lo mismo con el ministerio de trabajo, que tenía un proyecto para contar inmigrantes. Ahí bregué y, la verdad, casi le corto la hierba por debajo de los pies a una consultora de las grandes. Me tumbaron por los puntos de valoración subjetivos. Pero casi les hago un siete.

La normativa actual (en España y presumo que en otros sitios) es bienintencionada pero ineficaz. Siempre pienso que al igual que existe un Consejo de Estado encargado de emitir informes no vinculantes sobre el encaje legal de las nuevas leyes y normas, deberíamos dotarnos de un Consejo de Facinerosos, integrado por los más habiles de entre los corruptos, los defraudadores y los concejales de urbanismo, encargado de darle la vuelta al refrán y encontrar la trampa antes de hecha la ley.

Me desvío (mil perdones).

La cosa es que en una licitación al uso, alguien otorga puntos en función de criterios objetivos y menos objetivos y el que más saca se lleva el gato al agua. De las colusiones corolarias de esta manera de proceder dan noticia diariamente los medios. Para remediarlas, he aquí mi propuesta: que los puntos se conviertan en poderanciones de probabilidad y el ganador de una licitación se elija al azar de acuerdo con dicha distribución de probabilidad ponderada. Por precisar, si los puntos obtenidos por cada candidato son $latex p_i$, se elija al ganador de acuerdo con una distribución de probabilidades dada por $latex P_i = p_i / \sum_j p_j$. O, si se quiere, elíjase un $latex q > 1$ y hágase $latex P_i = p_i^q / \sum_j p_j^q$, para dar mayor peso a las mejores propuestas. Y determínese, además, si procede, un puntaje mínimo, etc.

Pero así se solucionaría de manera bastante efectiva el problema del candidato preseleccionado. Aparecerían, sin duda, otros artefactos para engañar al sistema (pienso rápidamente: crear muchas empresas que son la misma que opten todas a la misma licitación), pero más fáciles de identificar y subsanar que los que lo desnaturalizan hoy en día.

De tener más tiempo, trazaría con cierto detalle la relación que tiene esta propuesta mía con [principio de Peter](https://datanalytics.com/2010/11/08/una-revision-neoliberal-del-principio-de-peter/) o [la teoría de los contratos incompletos y la compensación bajo incertidumbre](https://marginalrevolution.com/marginalrevolution/2016/10/performance-pay-nobel.html). Déjolo como ejercicio para el lector interesado.