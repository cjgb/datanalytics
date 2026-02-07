---
author: Carlos J. Gil Bellosta
categories:
- probabilidad
- r
date: 2011-05-12 07:18:12+00:00
draft: false
lastmod: '2025-04-06T19:05:39.151292'
related:
- 2011-05-16-c2bfque-nos-jugamos-addenda-no-queremos-jugarnos-nada.md
- 2014-01-09-como-apostar-si-tienes-que.md
- 2022-09-15-perder-ganando.md
- 2012-01-19-cosa-prodigiosa-ahora-con-palabras-ii.md
- 2012-01-31-cosa-prodigiosa-iii-epilogo.md
tags:
- probabilidad
- r
title: ¿Qué nos jugamos?
url: /2011/05/12/que-nos-jugamos/
---

Imagínese que le proponen participar reiteradamente en un juego de azar. Dispone de una cantidad de dinero inicial, $a$ euros, y puede apostar en un juego en el que o gana con probabilidad $p$ $b$ veces la apuesta o la pierde enteramente. Puede repetir el juego cuantas veces quiera  y apostar el porcentaje que desee de su dinero.

¿Cuánto se apostaría? ¿Qué porcentaje de su capital inicial se jugaría?

Suponga que decide apostar siempre un porcentaje fijo, $x$ del dinero del que disponga en cada momento. Tras la primera jugada, tendría $a + b a x = a(1+bx)$ de ganar y le quedarían $a (1-x)$ de perder. Puede seguir jugando y en cada partida su capital se multiplicaría por $1+bx$ o por $1-x$ según su suerte. Al cabo de $n$ partidas, de haber ganado $w$ de ellas, su capital inicial se habría multiplicado por


$$ (1+bx)^w (1-x)^{n-w}. $$


La pregunta es: ¿qué proporción $x$ de su capital maximizaría su beneficio? Tomando el logaritmo de la expresión anterior se puede definir la función


$$ f(x) = w \log(1+bx) + (n-w) \log (1-x) $$


de cuya derivada (qué tiempos) igualada a cero,


$$ f^\prime (x) = \frac{bw}{(1+bx)} - \frac{n-w}{1-x} = 0 $$


se puede despejar


$$ x = \frac{wb - (n - w)}{nb}, $$


que sería la proporción _óptima_. Nótese que uno querría fijar $x$ de antemano, pero este solo se conoce después de participar en el juego y contar el número de éxitos. No obstante,


$$x=\frac{wb-(n-w)}{nb}=\frac{bw/n-(1-w/n)}{b}$$


y el cociente $\frac{w}{n}$ tiende a $p$, la probabilidad de éxito, conforme crece $n$. En el límite, la proporción óptima sería pues


$$ x = \frac{bp-(1-p)}{b} $$,


valor conocido como _[apuesta de Kelly](http://en.wikipedia.org/wiki/Kelly_criterion)_. El criterio de Kelly en contextos similares al que planteo en esta entrada sugiere realizar apuestas de tal cuantía. Y una búsqueda en Google del término parece indicar que es conocido de los aficionados a los juegos de azar y también —alguien tal vez aquí quiera hacer un comentario obvio— entre los profesionales de las finanzas —se dice que lo utiliza incluso Warren Buffet—y otros. Fue de hecho en un foro de _quants_ que entré en conocimiento con este problema.

Tomando la esperanza de $f(x)$ —que consiste en reemplazar $w$ por $np$— y repitiendo el proceso indicado más arriba, puede probarse que la apuesta de Kelly maximiza la esperanza del logaritmo del resultado del juego para cada $n$. También, dado que la distribución subyacente es binomial, y dado que la mediana de dicha distribución es, redondeando, $np$, también se demuestra que la apuesta de Kelly maximiza la mediana de las ganancias (en cualquier escala, logarítmica o no). Pese a estas felices circunstancias, el uso de este criterio no está exento de _caveats_:



* Es raro que un _inversor_ quiera maximizar la esperanza del logaritmo
* De hecho, de acuerdo con el [CAPM](http://es.wikipedia.org/wiki/Capital_Asset_Pricing_Model), un inversor debe considerar dos parámetros simultáneamente: rentabilidad (típicamente, la media de las ganancias) y riesgo (o su varianza o alguna otra medida más robusta de la dispersión). Sin embargo, el criterio de Kelly no tiene en cuenta este último.

En efecto, en la deducción que hemos hecho más arriba de la apuesta óptima, hemos supuesto conocida la historia de resultados del juego (se ganaba $w$ de las $n$ veces), pero $w$ es una variable aleatoria con distribución binomial y no en todos los casos la proporción de éxitos va a ser $p$: típicamente, será mayor o menor. Pero de obtener $i$ éxitos por debajo de lo esperado, el resultado final sufre un recorte de $(1-x)^i$ que puede resultar muy sustancial si $x $ es cercano a 1.

El problema puede tratarse analíticamente y es fácil analizar completamente el beneficio que puede generar un juego al cabo de un número dado de iteraciones fijados $p$ y $b$. El siguiente gráfico muestra los deciles del beneficio tras 100 iteraciones de un juego con $p=0.8$ y $b=4$.

[![Kelly criterion](/img/2011/05/kelly_criterion_0.png#center)
](/img/2011/05/kelly_criterion_0.png#center)

Si por el contrario $p=0.8$ y $b=2,1$ se obtiene esta otra configuración de beneficios:

[![](/img/2011/05/kelly_criterion_1.png#center)
](/img/2011/05/kelly_criterion_1.png#center)

En los dos gráficos anteriores se aprecia cómo los rangos _interdecílicos_ se estrechan a la izquierda de la apuesta de Kelly y se ensanchan a su derecha. Un inversor cauto preferiría tal vez apostar por debajo del nivel propuesto por el criterio de Kelly para reducir la varianza del resultado de su apuesta. Esta precaución cobra más importancia en las situaciones en que no se conoce $p$ con precisión: si se sospecha que su _valor verdadero_ está en un intervalo de cierto tamaño alrededor de un estimador $p^\prime$, un inversor cauto apostaría un porcentaje inferior a


$$ \frac{bp^\prime-(1-p^\prime)}{b} $$


para evitar que el valor anterior caiga, tal vez catastróficamente, a la derecha del óptimo


$$ \frac{bp-(1-p)}{b}.$$



Finalmente, y para que mis lectores puedan cacharrear, adjunto el código ---un tanto vergonzante--- con el que he creado los gráficos de esta entrada:


{{< highlight R >}}
    game.payoff <- function(f, trials = 100, p = 0.9, b = 0.5, quantile = 0.5){
    	wins  <- qbinom(quantile, trials, p)
    	loses <- trials - wins
    	wins * log(1 + b * f) + loses * log(1 - f)
    }

    my.quantiles <- (1:9) / 10
    my.fraction <-  (1:99) / 100

    tmp <- sapply(my.fraction, function(x)
          sapply(my.quantiles, function(q)
          game.payoff(x, quantile = q)))

    plot(c(1, 99), c(0, max(tmp)), type = "n",
        main = "Resultado según % de apuesta\n (p = 0.9, b = 0.6, Kelly = 70%)",
        xlab = "%", ylab= "log del resultado")
    apply(tmp, 1, function(x) lines(x, type = "l"))

    lines(tmp[5,], type = "l", col = "red")
    abline(v = 70, lty = 2)
{{< / highlight >}}