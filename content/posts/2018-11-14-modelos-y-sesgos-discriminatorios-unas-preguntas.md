---
author: Carlos J. Gil Bellosta
categories:
- ciencia de datos
- consultoría
date: 2018-11-14 08:13:22+00:00
draft: false
lastmod: '2025-04-06T18:48:25.259916'
related:
- 2022-11-17-igualdad-oportunidades.md
- 2023-05-25-evaluaciones-clinicas-actuariales.md
- 2019-11-18-los-ejemplos-son-las-conclusiones.md
- 2017-11-20-la-funcion-de-perdida-es-una-api-entre-los-stakeholders-de-un-analisis-estadistico.md
- 2020-02-26-algoritmos-y-acatarrantes-definiciones-de-justicia.md
tags:
- ciencia de datos
- impuestos
- sesgo
- teoría de la decisión
title: 'Modelos y sesgos (discriminatorios): unas preguntas'
url: /2018/11/14/modelos-y-sesgos-discriminatorios-unas-preguntas/
---

A raíz de mi [entrada del otro día](https://datanalytics.com/2018/11/07/cuando-oigais-que-los-algoritmos-discriminan-acordaos-de-esto-que-cuento-hoy/) he tenido una serie de intercambios de ideas. Que han sido infructuosos porque no han dejado medianamente asentadas las respuestas a una serie de preguntas relevantes.

Primero, contexto: tenemos un algoritmo que decide sobre personas (p.e., si se les concede hipotecas) usando las fuentes de información habitual. El algoritmo ha sido construido con un único objetivo: ser lo más eficiente (y cometer el mínimo número de errores) posible. Usa además datos históricos reales. Lo habitual.

En la población existe un subgrupo B que, con razón o sin ella, se siente discriminado por el algoritmo.

Una primera pregunta que cabe plantearse es **si el sesgo es _bug_ o _feature_**. En el primer caso, es culpa de los desarrolladores y cabe suponer que la entidad que lo utiliza está perdiendo dinero y cuota de mercado en favor de otras menos gañanas. Pero si es _feature_, la respuesta más interesante, ya no cabe hablar de prejuicio (sino de un juicio sinténtico a posteriori en toda regla).

En tal caso (el segundo), **cuando el algoritmo está bien calibrado, ¿debería cambiarse por otro?** Un ingrediente fundamental en la creación de un algoritmo es la definición de la función de error, que resume el objetivo que se quiere alcanzar. En nuestro caso, la rentabilidad económica (posiblemente operativizada en _accuracy_). Las funciones de error, salvo raras excepciones que confirman la regla, subsumen objetivos simples (que habitualmente son variantes de _acertar_) y resultaría complicado incluir en ellas correcciones para incluir objetivos subsidiarios (como los que precisaría el constructivismo social).

Pero ha quedado escrito por aquí como la _ciencia de datos_ no es otra cosa que [materia prima para un proceso de toma de decisiones (informadas) subsiguiente](https://datanalytics.com/2018/05/22/existira-algun-caso-de-uso-de-la-estadistica-que-no-sea-materia-prima-para-la-toma-de-decisiones-informadas/). Si hay un sesgo en el resultado del proceso de toma de decisiones, **¿es de recibo culpar a un único paso intermedio (el algoritmo)?**

Finalmente, si el proceso de toma de decisiones (a partir de la información provista por el algoritmo) conduce a tomar decisiones que algunos consideran más justas pero que son menos rentables económicamente para la entidad que opera el algoritmo, **¿debería considerarse esa pérdida de eficiencia una especie de impuesto sobre la entidad?** ¿Debería ser la entidad la responsable de cargar con el impacto económico de las ensoñaciones utopistas de algunos? Tal vez, si la mitad más uno estuviese de acuerdo, podría articularse algún tipo de subvención, línea de crédito especial o similar a cargo del erario público para compensar a las entidades esa pérdida económica.