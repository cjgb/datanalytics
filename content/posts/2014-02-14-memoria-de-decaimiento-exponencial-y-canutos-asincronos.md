---
author: Carlos J. Gil Bellosta
categories:
- consultoría
- estadística
date: 2014-02-14 07:32:10+00:00
draft: false
lastmod: '2025-04-06T19:06:39.061516'
related:
- 2014-08-11-procesos-puntuales-una-primera-aproximacion.md
- 2012-06-25-para-los-expertos-en-series-estadisticas-ii.md
- 2023-10-24-timesnet.md
- 2020-05-28-sobre-la-funcion-de-riesgo-en-el-analisis-de-la-supervivencia.md
- 2024-12-05-beta-binomial-deriva.md
tags:
- decaimiento exponencial
- frecuencia
- recencia
title: Memoria de decaimiento exponencial y canutos asíncronos
url: /2014/02/14/memoria-de-decaimiento-exponencial-y-canutos-asincronos/
---

Primero, canuto es como llamo yo a los _streams_: lugares por donde nos llegan datos —de sujetos que sacan dinero del cajero, de sensores de lo que sea, de clientes que llaman por teléfono—, típicamente en forma asíncrona. Es decir, que los eventos suceden cuando se les antoja, sin una periodicidad preestablecida.

Y uno quiere medir cosas. Por ejemplo, la frecuencia. O la intensidad de uso —¿cuánto se utiliza una tarjeta de crédito?—. Son estos fines para los que la gente todavía utiliza técnicas mandadas a recoger. Y ni siquiera. Podría contar la anécdota de un muy desavisado —por no decir cosas peores— que trabajaba conmigo no hace tanto. Se ufanaba de que tirando de su mucho ingenio y utilizando tecnologías punterísimas era capaz de asociar a cada sujeto de nuestra base de datos la serie temporal de sus actividades (asíncronas) durante los últimos meses. Y la verdad, a fuerza de tesón, lo consiguió durante un fin de semana en el que, me da la sensación, durmió poco. Llegó la reunión del lunes y nos contó con prolijidad de detalles sus muchos méritos y logros. Pero entonces se encogió un poco, se deshinchó un mucho y preguntó con mucha humildad: _y ahora que tengo todo esto, ¿qué más puedo hacer? _(entiéndase: para realizar un análisis estadístico del comportamiento de los sujetos).

Efectivamente, se necesitan medidas sintéticas de series temporales —las escupa en tiempo real un canuto o estén convenientemente listadas en una tabla— que recojan características útiles para la modelación. Típicamente la frecuencia y la intensidad.

Una familia de medidas habituales —y que me resultan antipáticas— son las de los promedios temporales (en horas, meses, años). Si los sucesos asociados a un sujeto son $latex (a_0,t_0),\dots,(a_n,t_n)$ la gente todavía recurre casi siempre a medidas de la frecuencia del tipo

$$ \sum_{t_i\in (t-T,t)} 1$$

(donde $latex t$ significa ahora) y para la intensidad

$$ \sum_{t_i\in (t-T,t)} a_i$$

La combinación de varios valores de $latex T$ permite construir simultáneamente, por ejemplo, medidas mensuales y trimestrales. Y hacer cosas como restarlas (convenientemente normalizadas) para intuir tendencias.

Esta aproximación equivale al uso en las fórmulas anteriores de una función de memoria (o _cutoff_) de tipo escalón: se recuerda todo tal cual hasta el tiempo $latex T$ y se olvida por completo a partir de entonces. Y presenta ciertas complicaciones. La primera de ellas es que es computacionalmente engorrosa. Además, que obliga a guardar el histórico de eventos completo.

La alternativa —¡que a ver si tienen a bien dejarme utilizar algún día en algún lado!— es utilizar una función de memoria exponencial. Es decir, una medida de la frecuencia de la forma

$$ \sum_i \exp(-t_i \alpha)$$

para un cierto valor de $latex \alpha$ y de la intensidad tal como

$$ \sum_i a_i \exp(-t_i \alpha).$$

Es decir, sometiendo a las observaciones a un decaimiento que depende del tiempo.

¿Qué ventajas tiene este procedimiento? Por ejemplo, computacionales. El indicador se actualiza sin necesidad de guardar un histórico. Basta con contar con el último valor, $latex a$ y su data, $latex t_a$. El valor actualizado ahora mismo, en $latex t$, es $latex a\exp(-\alpha(t - t_a))$. ¡Solo hacen falta dos números para almacenar (lo relevante de) la serie! ¡Y se puede conocer el valor del indicador en tiempo rabiosamente real!

Combinando un par de valores de $latex \alpha$, que mide la velocidad del olvido, pueden también intuirse tendencias (p.e., si la frecuencia tiende a crecer).

Finalmente, este procedimiento tiene la ventaja de dar más peso a observaciones recientes que a pasadas: no es lo mismo que aquellas sucedan hace casi un año (para medias anuales) que hayan sucedido recientemente. Las funciones de memoria escalonadas pierden el matiz.

En general, no le veo desventajas a usar técnicas de decaimiento exponencial. Salvo que molestan a los del _que inventen ellos_, claro.

Y termino con un par de notas:

* Los economistas (y más gente, claro) usan una técnica parecida con las series temporales: el [alisado exponencial](http://en.wikipedia.org/wiki/Exponential_smoothing). No es lo mismo (promedian más que suman; los datos son periódicos y no asíncronos) pero guardan una similitud notable.
* Que lo que cuento aquí no me lo he inventado esta tarde según venía a casa. Es muy conocido y está publicadísimo por doquier. Buscad "exponential memory decay streaming" en Google y lo veréis.