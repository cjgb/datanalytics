---
author: Carlos J. Gil Bellosta
date: 2013-12-05 07:14:48+00:00
draft: false
title: ¿Cuántos peces hay en un lago?

url: /2013/12/05/cuantos-peces-hay-en-un-lago/
categories:
- estadística
- probabilidad
- r
tags:
- estadística
- estimación
- hipergeométrica
- lago
- peces
- probabilidad
- r
---

Quien haya estudiado estadística o probabilidad en algún tipo de institución que ofrece educación reglada se habrá topado con el problema de estimar el número de peces de un lago.

Esencialmente, lo que puede hacerse (dado que es imposible realizar un censo completo) es lo siguiente:

* Pescar cierto número de peces, p1, marcarlos y devolverlos al lago.
* Pescar cierto número de peces, p2, y contar cuántos de ellos fueron marcados el día anterior, n.
* Estimar el número de peces como p1 * p2 / n (dado que la proporción de peces marcados en el lago, p1 / x debiera ser similar a la de pescados el segundo día, n / p2).


Con R puede hacerse una estimación (incluso del error), así:

{{< highlight R >}}
n <- 4000
p1 <- 300
p2 <- 300

res <- replicate(10000, sum(sample(rep(0:1, times = c(n-p1, p1)), p2)))

hist(p1*p2 / res, col = "grey",
        main = "Estimación del número de peces",
        xlab = "estimacion")
abline(v = 4000, col = "red")
{{< / highlight >}}

Para obtener

[![](/wp-uploads/2013/12/peces_en_el_lago.png#center)
](/wp-uploads/2013/12/peces_en_el_lago.png#center)

Por supuesto, en esos cursos que tomábamos, ese ejemplo servía para justificar la existencia sobre la faz de la tierra de la [distribución hipergeométrica](http://en.wikipedia.org/wiki/Hypergeometric_distribution). Lo que nunca nos contaron fue lo que se describe en _[The Body Counter](http://jointheclub.org/2012/04/the-body-counter/)_ y que resumo a continuación.

Es un artículo que habla de Patrick Ball y de su labor como estadístico al servicio de organizaciones humanitarias que operan en zonas donde han ocurrido asesinatos masivos (o genocidios) y se intenta realizar una estimación del número de muertos. Suele haber organizaciones que recopilan listas (p.e., la Cruz Roja, la iglesia Católica, etc.), pero que son incompletas.

Sin embargo, si uno piensa en los muertos como en peces del lago y en los recuentos parciales como capturas (marcadas, porque habiendo nombres y apellidos, se puede estimar el solapamiento) es posible recurrir a las técnicas descritas arriba para estimar el número total.

El artículo no habla del margen de error (la cola de la derecha de la distribución parece larga) pero, eso sí, apunta a una extensión del problema que dejo planteada a mis lectores: ¿cómo realizar la estimación cuando en lugar de una pesca se hacen varias? ¿Y cuando —como en el caso de las ONG— hay varias pescas con solapamientos entre ellas?
