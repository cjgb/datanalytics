---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
date: 2023-06-20
lastmod: '2025-04-06T18:52:38.238137'
related:
- 2023-09-21-inversiones-renta-variable.md
- 2023-09-14-gestion-liquidez.md
- 2014-01-09-como-apostar-si-tienes-que.md
- 2019-04-09-gestion-del-riesgo-una-perifrasis-con-hitos-aprovechables.md
- 2011-07-26-c2bfque-es-un-banco-c2bfque-son-las-pruebas-de-resistencia-en-primera-derivada.md
tags:
- inversiones
- goals based investment
- probabilidad
title: '"Goals based investment" (y su relación con la modelización probabilística)'
url: /2023/06/20/goals-based-investment/
---

El motivo para hablar del _goals based investment_ ---GBI en lo que sigue--- aquí hoy tiene que ver, como se comprobará más abajo, con su relación con la modelización probabilística, la optimización, etc. Se trata de una aproximación a la gestión de las inversiones muy de moda en la banca privada, pero que plantea problemas matemáticos y computacionales entretenidos. Y que, desde luego, no pueden resolverse ---al menos, bien--- con Excel.

### I. Inversiones "tradicionales"

Cuando uno ahorra e invierte a través de las plataformas habituales ---pienso aquí en cosas como [Indexa](https://indexacapital.com/)--- lo típico es:

1. Realizar algún tipo de test de propensión al riesgo.
2. Crear una cartera acomodada a ese perfil de riesgo. La cartera en cuestión es una combinación de activos con un perfil rentabilidad-riesgo determinada, generalmente acciones, bonos y, tal vez, depósitos.

Y eso es todo.

### II. GBI

El GBI está pensado para diseñar carteras más a medida de un cliente particular. El GBI tiene en cuenta:

1. La capacidad de ahorro del inversor: tantos euros anuales.
1. Sus objetivos _vitales_. Por ejemplo, _nuestro_ inversor tiene tres objetivos: coche, casa y jubilación.
2. El valor de dichos objetivos; p.e., 25k, 300k y 600k.
3. El plazo en el que desea lograr esos objetivos; p.e., 2, 5 y 25 años.
4. La prioridad de los objetivos. Tal vez la jubilación sea un sí-o-sí y le asigne un peso alto y el coche sea únicamente algo _deseable_. Esas prioridades se reflejan en determinados pesos numéricos.
5. Los activos disponibles con sus distintos perfiles de rentabilidad-riesgo y, posiblemente, correlaciones entre ellas.

Con esa información, el GBI busca crear una cartera que maximiza la probabilidad ponderada (por prioridad) de lograr los objetivos en cuestión. El resultado del proceso de optimización podría ser una cartera que garantizase _al 100%_ el objetivo de la jubilación, pero solo diese probabilidades del 50% y del 10% a los otros dos.

La diferencia del GBI con respecto a otros métodos es que el primero podría, por ejemplo, sobreponderar los activos _seguros_ en caso de que el inversor tuviese objetivos muy importantes para él a corto plazo.

La forma del código para aplicar el GBI para un inversor determinado es fácilmente adivinable. No es nada que no pueda hacerse en un ratico para un caso concreto aunque no tengo claro cuánto costaría generar un código mínimamente generalizable.