---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
date: 2019-11-18 09:13:56+00:00
draft: false
lastmod: '2025-04-06T19:00:11.595435'
related:
- 2018-11-14-modelos-y-sesgos-discriminatorios-unas-preguntas.md
- 2021-02-11-solo-el-modelo-vacio-pasa-todos-los-checks.md
- 2017-01-16-weapons-of-math-destruction.md
- 2023-05-25-evaluaciones-clinicas-actuariales.md
- 2019-03-27-sobre-la-necesaria-validacion-a-posteriori-de-modelos-de-caja-negra.md
tags:
- ai
- ciencia de datos
- ética
- gdpr
title: Los ejemplos son las conclusiones
url: /2019/11/18/los-ejemplos-son-las-conclusiones/
---

_[Ahí va otro aforismo en la línea de [este otro](https://www.datanalytics.com/2019/10/18/el-modelo-son-las-conclusiones/)]._

Me recomienda Medium muy encarecidamente la lectura de _[Optimization over Explanation](https://medium.com/berkman-klein-center/optimization-over-explanation-41ecb135763d)_ y yo a mis lectores. Trata el asunto de la responsabilidad dizque ética de los algoritmos de inteligencia artificial. Nos cuenta cómo la legislación en general y la GDPR en particular ha hecho énfasis en la explicabilidad de los modelos: según  la GDPR, los sujetos de esos algoritmos tendríamos el derecho a que se nos explicasen las decisiones que toman en defensa de nosequé bien jurídico, que nunca he tenido claro y que se suele ilustrar examinando una serie de casos en los que salen aparentemente perjudicados los miembros de unas cuantas minorías cuya agregación son todos menos yo y unos poquitos más que se parecen a mí.

Para el autor, la expicabilidad se queda corta: le resulta insuficiente, ineficiente e ineficaz. Como alternativa, sugiere un control sobre dos cosas:

* aquello que los algoritmos optimizan y
* los resultados de los modelos, por ver si se ajustan o no convenientemente a lo esperado.

Y el artículo es lógicamente consistente porque los dos ejemplos que trata, a saber, de conducción de coches autónomos y de diagnóstico médico, de manera nada sorprendente se ajustan a su tesis como el proverbial guante.

Pero reto a mis lectores a releer el artículo enlazado cuestionándolo desde la perspectiva de otros ejemplos más próximos como:

* Modelos para la concesión de créditos, hipotecas o similares.
* Modelos para la estimación de primas en seguros (vida y no vida).
* Modelos de recomendación de productos.
* Cualquiera de los últimos en los que hayan trabajado.

¿Se lee de otra manera?