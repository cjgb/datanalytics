---
author: Carlos J. Gil Bellosta
categories:
- consultoría
date: 2019-03-18 08:13:19+00:00
draft: false
lastmod: '2025-04-06T18:48:21.062410'
related:
- 2019-01-14-clasificacion-vs-prediccion.md
- 2018-05-22-existira-algun-caso-de-uso-de-la-estadistica-que-no-sea-materia-prima-para-la-toma-de-decisiones-informadas.md
- 2024-02-01-optimizacion-generalizacion.md
- 2018-11-28-charla-predicciones-y-decisiones-mas-alla-de-los-errores-cuadraticos.md
- 2018-11-14-modelos-y-sesgos-discriminatorios-unas-preguntas.md
tags:
- consultoría
- modelos
- teoría de la decisión
title: Las decisiones son lo primario; la estadística es subsidiaria
url: /2019/03/18/las-decisiones-son-lo-primario-la-estadistica-es-subsidiaria/
---

En Circiter estamos negociando con unos clientes potenciales acerca de, tal como nos dijeron inicialmente, construir un modelo. Todo bien.

En la última reunión surgió la pregunta (¡qué vergüenza por mi parte no haberla planteado mucho antes!): ¿cómo habría que usarlo para dar soporte al negocio? La discusión subsiguiente dejó claro que habría que cambiar sustancialmente la aproximación al modelo. Por ejemplo:

* Era tanto o más importante la discriminación intra-sujeto que la entre-sujeto (es decir, importaba más lo que el modelo pudiera decir de los ítems de cada sujeto que las diferencias que pudiera mostrar entre sujetos).
* La capacidad predictiva del modelo, aun siendo importante, se volvía una medida subsidiaria.
* Cobraba una particular relevancia el problema del _cold-start_.

En definitiva, la necesidad de uso cambiaba la estrategia de modelación de arriba a abajo.

La respuesta de alguno es predecible: un _gran_ modelo puede usarse tanto para un roto como para un descosido. Y sí. Pero con tiempo y recursos finitos, dejemos que la forma se ajuste a la función.

**Nota:** Esta entrada abunda sobre la necesidad, que he subrayado reiteradamente, de llevar la modelización estadística hasta el punto en el que se toman las decisiones y establecer un diálogo con los responsables de los mismos. Lo primario son las decisiones y la modelización estadística es otra fuente más de información para ayudar a tomarlas un poco menos ineficientemente de lo que es habitual.