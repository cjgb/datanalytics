---
author: Carlos J. Gil Bellosta
date: 2023-03-16
title: 'El negocio bancario como corolario del teorema central del límite (y sí, de paso, sobre SVB)'

url: /2023/03/16/paradoja-patata/
categories:
- estadística
tags:
- estadística
- banca
- teorema central del límite
- svb
---

Todo lo que voy a contar aquí es cierto y a la vez falso. Es cierto en primera aproximación ---en esa en la que las vacas son esféricas--- y falso cuando se examinan los términos de orden superior del desarrollo de Taylor de lo que cuento. Advertido lo cual, comienzo.


## I

Los bancos funcionan esencialmente así: reciben dinero de unos clientes y se lo prestan a otros. Ganan dinero por la diferencia en los tipos de interés entre depósitos y préstamos.

El negocio bancario está amenazado por dos riesgos: el de crédito y el de liquidez.

* Riesgo de crédito: A deposita X euros en el banco. El banco se lo presta a Y. Pero Y es incapaz de devolver el crédito. Así que el banco no tiene dinero para pagar a X.
* Riesgo de liquidez: A deposita X euros en el banco. El banco le concede una hipoteca a 30 años a Y. X va por su dinero, pero el dinero no está: lo tiene todavía Y.

Para mitigar el riesgo de crédito, el banco busca realizar muchos préstamos buenos ---con baja probabilidad de impago---, pequeños e incorrelados. Las dos últimas características son necesarias para que se cumplan la ley de los grandes números y el teorema central del límite (TCL en lo que sigue).

La estrategia para mitigar el riesgo de liquidez es similar. Idealmente, las necesidades diarias de liquidez del banco deberían ser una $N(0, \sigma)$. Si $\sigma$ es pequeña y las reservas de liquidez suficientes, el banco no debería tener problemas para hacer frente a los retiros de los clientes. De nuevo, para que esa variable aleatoria sea normal, el negocio del banco debería ser tal que rigiese el TCL.

[En la discusión anterior se ha omitido la referencia al mercado interbancario ---que puede considerarse como un colchón de liquidez adicional--- y la gestión de los vencimientos de los activos/préstamos a largo plazo para que _acompañen_ las fluctuaciones de los movimientos de liquidez a corto.]

## II

En el negocio bancario existe una tensión entre la especialización y la diversificación. La diversificación es el nombre que dan al TCL los que no lo conocen pero tienen la intuición correcta sobre cómo funciona el mundo. Pero la diversificación, en el mundo real, tiene límites. Si quieres diversificar, tienes que comenzar a operar en otros sitios, en otros negocios, en otros mercados y eso exige esfuerzo (y es caro).

Por eso, la especialización es tentadora. Uno puede pensar en montar un banco orientado al sector agropecuario del valle del Jalón; o al sector del taxi; o a las _startups_ de Silicon Valley. Hacerlo conlleva ciertas ventajas:

* conoces muy bien a tus clientes
* puedes proporcionar productos adecuados a sus necesidades específicas
* puedes hacerlo con unos costes operativos bajos
* etc.

Pero deja de aplicar el TCL.

### III

SVB, el banco del que no habías oído hablar hasta el viernes pasado, era un banco solvente y líquido que dejó de ser las dos cosas por cumplir las condiciones del TCL.

No las cumplía porque todas las variables aleatorias cuya suma, etc., estaban correladas: todas participaban de un _factor subyacente_ que era, en primera aproximación, la liquidez del sector de las _startups_. En segunda, por mecanismos que explica
[Matt Levine en su columna](https://www.bloomberg.com/opinion/articles/2023-03-10/startup-bank-had-a-startup-bank-run), una apuesta por los bajos tipos de interés:

* Los activos del SVB consistían fundamentalmente en deuda pública estadounidense a largo plazo.
* El negocio de las _startups_ florece en contextos de bajos tipos de interés: es entonces cuando les llegan las inversiones a chorro, etc.

El negocio del SVB era pues, en el fondo, una apuesta unidireccional a que los tipos de interés habrían de mantenerse bajos.

### IV

Y por si mi opinión al respecto importa a alguien:

* SVB es un _microbanco_ dentro del orden global de las cosas: tiene el tamaño del Banco de Sabadell en términos de activos.
* No es sistémico: por lo que he leído, sus activos consistían fundamentalmente en deuda pública de EEUU.
* Es muy probable que el 100% de los clientes recuperen la totalidad de los depósitos: a nadie le conviene que pase otra cosa.
* Y sí, bueno, los accionistas del banco lo perderán todo.
* Lo significativo del asunto es que, al haber cambiado las condiciones del mercado (pasando de un entorno de bajos tipos de interés a uno de altos tipos de interés), podrían emerger muchas más empresas que, haciendo abstracción de su particular modo de operación, no dejen de ser en el fondo apuestas en la dirección _todo va a seguir siendo igual que ha venido siendo en los últimos 20 años_. Y eso sí que podría llegar a ser grave.