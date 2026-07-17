---
author: Carlos J. Gil Bellosta
categories:
- cortos
date: 2026-07-21
description: Que incluyen un análisis del coste de los modelos frontera, el nada barato vicio del tokenmaxxing y del papel de la fricción en la sincronización de equipos de trabajo.
lastmod: '2026-07-17T16:21:19.791656'
related:
- 2026-03-02-cortos.md
- 2026-03-16-cortos.md
- 2026-05-12-cortos-economia.md
- 2026-06-02-cortos-llms.md
- 2025-11-13-economia.md
tags:
- llms
- economía
- tokens
- metr
title: 'Notas (30): sobre el impacto económico de los LLMs y algunos asuntos más'
url: /2026/07/21/cortos-llms/
---

[_How fast is AI?_](https://howfastis.ai/) es una publicación interactiva que usa la teoría de los «eslabones débiles» de Charles I. Jones para explicar la aparente paradoja que que aunque la capacidad de la IA se duplique aproximadamente cada seis meses, el crecimiento de la economía sigue cerca de su tendencia histórica del 2% anual. El motivo es que las tareas no automatizables ---juicio, responsabilidad, confianza, presencia física--- lastran el avance.

El [conocido gráfico de METR](https://metr.org/time-horizons/) suele interpretarse como evidencia de que la capacidad de la IA crece «exponencialmente». Toby Ord se pregunta [si los costes horarios de los agentes de IA crecen también de forma exponencial](https://www.tobyord.com/writing/hourly-costs-for-ai-agents), una cuestión que pocos se formulan y que matizaría la interpretación generalizada. A partir de los datos del propio METR, el autor identifica puntos de saturación en las curvas coste-rendimiento y encuentra alguna evidencia de que tanto los costes totales como los costes horarios por tarea crecen exponencialmente, acercándose en algunos modelos a los salarios humanos. De confirmarse, la tendencia de METR, que mide la frontera técnica, estaría sobreestimando la capacidad real de la IA para resolver problemas económica y eficientemente.

Brian Albrecht sostiene que [un «impuesto al cómputo» es una idea pésima](https://www.economicforces.xyz/p/a-compute-tax-is-a-really-dumb-idea): los resultados clásicos de Diamond-Mirrlees y Chamley-Judd advierten contra los gravámenes sobre los bienes intermedios y el capital, por distorsionar toda la cadena productiva que se apoya en ellos, además de que su recaudación potencial es minúscula frente al PIB. Discute además otras dificultades prácticas a la hora de definir qué cuenta exactamente como cómputo y el riesgo de fuga de la base imponible hacia jurisdicciones con energía barata.

Antonio Cámara Largo cierra en Almacén de Derecho su [serie sobre la gestión del conocimiento jurídico en la era de la IA](https://almacendederecho.org/gestion-del-conocimiento-juridico-en-la-era-de-la-ia-y-4).

SemiAnalysis conversó con [más de 50 grandes empresas sobre su gasto en tokens](https://newsletter.semianalysis.com/p/tokenbudgeting-our-conversations) para concluir que los casos sonados de _tokenmaxxing_ y presupuestos sobrepasados representan anécdotas más que categorías y que, además, son producto de un sistema de incentivos mal diseñados. No obstante, el artículo es indicativo de la emergencia de un nuevo debate acerca de la eficiencia en el uso de tokens.

Luis Garicano y Jesús Saa-Requejo abordan el [problema de la dependencia (estratégica) de Europa con respecto a los proveedores externos de tecnología para la IA](https://www.siliconcontinent.com/p/how-to-avoid-being-held-up-by-the). Casi todo lo que proponen es razonable, particularmente la nada velada advertencia contra la pulsión por intentar crear un modelo europeo puntero.

Armin Ronacher sostiene que [la fricción sincroniza a la gente](https://lucumr.pocoo.org/2026/7/13/the-tower-keeps-rising/). Es decir, el conocimiento sobre un proyecto (incluidos los de _software_) reside en documentación, etc., formales; pero también en conversaciones, notas, discusiones, etc. que habitan en los cerebros de quienes participan en él, que construir todo ese conocimiento consume energía pero que resolver toda esa fricción es lo que hace que los equipos trabajen de manera coordinada.