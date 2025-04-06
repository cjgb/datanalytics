---
author: Carlos J. Gil Bellosta
categories:
- números
date: 2022-05-19
description: Una reevaluación del coste climático de nuestro día a día en la nube
lastmod: '2025-04-06T18:54:38.864177'
related:
- 2024-06-25-consumo-llms.md
- 2012-03-01-como-poner-una-lavadora.md
- 2023-06-06-energia-coches-particulares.md
- 2010-09-23-c2bfcuanta-informacion-hay-en-el-mundo.md
- 2022-07-26-hueco-termico.md
tags:
- números
- cambio climático
title: 'Algunos números sobre el cambio climático: servicios en la nube'
url: /2022/05/19/numeros-cambio-climatico/
---

Hay un reciente artículo en El País, [_Tu día a día en internet contamina al año tanto como un viaje en coche de más de 1.000 kilómetros_](https://elpais.com/tecnologia/2022-04-01/la-actividad-privada-de-un-usuario-en-la-red-contamina-al-ano-tanto-como-un-viaje-en-coche-de-mas-de-1000-kilometros.html), que es todo un ejercicio de valentía por parte de su autor: se enfrenta a la bestia parda de los periodistas que no es otra cosa que el de la correcta gestión de los órdenes de magnitud.

El titular, como se verá, es una sobrestimación (como poco, de un orden de magnitud); la entradilla, que dice

> La basura de los archivos inútiles almacenados en la nube supone 600 toneladas de C0₂ y eliminarlos o recuperarlos tendría un impacto equivalente al de plantar 10.000 árboles

es un mero asustaviejas: 600 toneladas de CO₂ son el chocolate del loro y 10k árboles, menos de 10 hectáreas, caben en cualquier lado. Seguro que el esfuerzo de identificarlos y borrarlos consume mucho más.

Pero volvamos a la estimación ---indirecta y producto de un experimento mental en mi caso--- del consumo anual del día a día de una persona _en internet_. Supongamos que cada persona tiene asignada en la nube un ordenador exclusivo. Este hipotético ordenador en la nube está exclusivamente dedicado a esta persona y renderiza los vídeos que ve, procesa sus correos electrónicos, filtra su _spam_, registra sus movimientos bancarios, etc.

La potencia de un ordenador como el mío, este con el que escribo, da de sobra para todo eso. Trae un Intel(R) Core(TM) i5-6400 CPU @ 2.70GHz, que tiene una potencia máxima de 65 W. Sin monitores, con los cuatro núcleos al 100%, no requiere más de 100 W ni de lejos. Estoy seguro de que en un centro de cálculo moderno se pueden obtener capacidades de cálculo análogas con un consumo sustancialmente menor.

Si este ordenador estuviese funcionando al 100% ininterrumpidamente para dar servicio a este sujeto, consumiría $100 \times 24 \times 365 / 1000 = 876$ kWh al año. Eso son, en España (un poco menos de medio kilo de CO₂ por kWh generado) menos de 438 kg de CO₂ al año. Quemar un litro de gasolina genera unos 2.5 kg de CO₂, luego el consumo total equivaldría a unos 175 litros de gasolina (o medio litro al día).

Que está en el orden de magnitud (aunque por encima) de ese pretendido viaje anual en coche de 1000 km. Siempre que:

- Estemos usando _mi_ ordenador (otros tan potentes o más consumen una fracción).
- Estemos usándolo constantemente al 100% de su capacidad (y tiene _muuuucha_ capacidad): con una fracción sobraría.

Para poner estas cifras de consumo en contexto, pueden compararse con las de un móvil (que es para mucha gente el punto de entrada a los servicios en la nube y que asumen gran parte de la carga computacional del _día a día_ de mucha gente en internet): un iPhone 13 tiene una batería que puede almacenar unos 12 Wh (dependiendo del modelo); de cargarse (¡completamente!) una vez al día, habría consumido menos de 5 kWh al año, que viene a ser medio litro de gasolina, de nuevo, ¡al año!