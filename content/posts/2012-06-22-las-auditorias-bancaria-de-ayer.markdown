---
author: Carlos J. Gil Bellosta
date: 2012-06-22 06:26:12+00:00
draft: false
title: Las auditorías bancarias de ayer

url: /2012/06/22/las-auditorias-bancaria-de-ayer/
categories:
- estadística
- números
tags:
- estadística
- finanzas
- números
- riesgo
---

Ayer fue día de auditorías bancarias. A las cinco y media de la tarde se enfrentaron un secretario de estado y el subgobernador del Banco de España a un pelotón de periodistas anuméricos con hambre de una sola cifra (pero de muchos ceros) con la que saciar el hambre también de una sola cifra de un país merecidamente atribulado (a más de, no se sabe si por emanación o reflejo, igualmente anumérico).

Me he entretenido hojeando [uno de los informes de auditoría, el de Roland Berger](http://www.bde.es/webbde/en/secciones/prensa/info_interes/informe_rolandbergere.pdf). Son apenas 38 páginas, pocas de ellas realmente sustanciales. La consultora se ha limitado a repetir los [análisis del BdE y del FMI](http://www.datanalytics.com/blog/2012/06/12/por-que-me-quejo-del-banco-de-espana/) de los que ya nos hemos ocupado previamente:



* crear dos escenarios (el FMI consideró tres en su día),

	* el _baseline_, uno considerado probable por los analistas y
	* el _adverso_, uno bien maluco en el que el PIB estaría cayendo más del 4 % este año y el paro rebasaría el 27 % en 2014.

* hacer estimaciones, banco a banco, segmento de negocio a segmento de negocio (hipotecario, corporativo, pymes,...), de las pérdidas en que incurrirían los bancos en cada uno de los dos escenarios.
* sumarlo todo para confundirnos y que sigamos sin saber qué bancos están bien y cuáles están mal.

Los escenarios considerados están descritos en el siguiente cuadro:

[![](/wp-uploads/2012/06/escenarios_bde.png)
](/wp-uploads/2012/06/escenarios_bde.png)

Los resultados para el caso maluco (que podría no llegar a darse, recordemos) son:

[![](/wp-uploads/2012/06/resultados_bde.png)
](/wp-uploads/2012/06/resultados_bde.png)

Los 170 millardos de pérdidas globales, se cubrirían de la siguiente forma:


* 17 millardos ya han sido inyectados a lo largo del 2012
* 90 millardos serían generados por la actividad de los bancos (en forma de pérdidas o menores beneficios)
* los restantes 63 millardos habría que pedirlos fuera, es decir, formarían parte del _rescate_ (de ellos, 11 corresponden a garantías que el Estado ha concedido a algunas cajas intervenidas y que este habría de desembolsar de darse ciertas condiciones).

Así que estos 63 millardos representarían el tamaño máximo concebible de la ayuda que necesitarían los bancos que, de asumir el Reino de España —una alternativa sería desentenderse de ellos—, habría este de solicitar a los _asolícitos_ mercados o a organismos internacionales varios.

Por referencia dejo también el desglose de la pérdida por tipo de activos:

[![](/wp-uploads/2012/06/desglose_bde.png)
](/wp-uploads/2012/06/desglose_bde.png)

Desafortunadamente, reitero, el desglose por entidad viene a ser secreto de estado.

Ahora, ¿cómo se ha llegado a tales cifras? Para solaz de los estadísticos que visitan estas páginas, voy a resumir parte de la metodología.

Antes un inciso: para calcular pérdidas crediticias, es uso tradicional calcular por separado tres magnitudes distintas:



* **PD** o probabilidad de incumplimiento (_default_): la probabilidad de que un determinado préstamo deje de pagarse. Por extensión y aplicación implícita de la ley de los grandes números, el porcentaje de incumplimiento de una cartera.
* **EAD,** o exposición en el momento del incumplimiento: el saldo vivo del préstamo en la fecha en que se produce el impago.
* **LGD**, o porcentaje del EAD que se efectivamente se pierde en un impago (dado que es posible que el banco recupere otro porcentaje _ejecutando una garantía_).

Como de las tres siempre me ha gustado más el cálculo de la PD, cuento cómo lo ha hecho Roland Berger:

* Para cada banco y cada sector económico, ha considerado la variable $latex P_t$ y los indicadores $latex x_{it}$. Estos indicadores son los que definen los distintos escenarios descritos más arriba: la tasa de paro, etc.
* Ha creado las variables derivadas



$latex Y_t = \log P_t - \log P_{t-1}$ y
$latex X_{it} = x_{it} / x_{it-1} - 1$






* Han considerado la familia de regresiones (una para cada indicador $latex i$ y tras normalizar la variable objetivo $latex Y$)



$latex \frac{Y_t - \mu}{\sigma} \sim X_{it}$,






* Han seleccionado de todas ellas la _mejor_, supongo que teniendo en cuenta la $latex R^2$.

De hecho, deshaciendo la transformación queda la fórmula
[![](/wp-uploads/2012/06/formula_bde.png)
](/wp-uploads/2012/06/formula_bde.png)

que aparece en el informe. La variable elegida ha sido en todos los casos el índice de desempleo excepto para las hipotecas, en que ha resultado ser el índice de precios de la vivienda.

Y bueno, el que quiera saber cómo se modelan la EAD y la LGD, que eche un vistazo al documento. Yo me limito a quejarme, de nuevo, por la falta de un desglose por entidades (¿por qué no pueden tener, por ejemplo, los accionistas derecho a ella? ¿dónde quedan los propósitos de transparencia?) y a recabar los comentarios, seguro que agudos, de mis ilustrados lectores.
