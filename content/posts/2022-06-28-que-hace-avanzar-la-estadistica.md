---
author: Carlos J. Gil Bellosta
date: 2022-06-28
title: '"Frente a la aspiración de una representación precisa, debemos considerar las limitaciones conceptuales, matemáticas y computacionales"'
description: 'Una cita de Gelman que describe los mecanismos que regulan el avance de la estadística'
url: /2022/06/28/que-hace-avanzar-la-estadistica/
categories:
- estadística
tags:
- estadística
---

La cita que da título a la entrada procede ---con mi ¿mala? traducción--- del artículo
[_Philosophy and the practice of Bayesian statistics_](http://www.stat.columbia.edu/~gelman/research/published/philosophy.pdf)
que, en realidad, trata de otra cosa. Pero que resume muy bien algo que mucha gente tiende a ignorar: mucho del _corpus_ de lo que actualmente llamamos positivamente estadística está condicionado por las circunstancias conceptuales, matemáticas y, muy especialmente, computacionales del momento en el que fueron concebidos.

Un ejemplo: hace cien años, aún se discutía cómo calcular la $\sigma$ de una muestra. Los calculadores preferían estimar

$$\sigma \sim \frac{1}{n} \sqrt{\frac{\pi}{2}} \sum_i |x_i - \bar{x}|$$

a lo que hacemos hoy en día,

$$\sigma \sim \sqrt{\frac{1}{n} \sum_i (x_i - \bar{x})^2}$$

por el simple motivo de que había que realizar menos operaciones (recuérdese: los _calculadores_ de entonces eran personas que calculaban) tal como nos recuerda Fisher en su artículo [_On the Mathematical Foundations of Theoretical Statistics_](https://royalsocietypublishing.org/doi/pdf/10.1098/rsta.1922.0009) de 1921:

![](/wp-uploads/2022/06/fisher_sd.png#center)

Es un fenómeno del que han dado cuenta muchos autores (p.e., Efron en su [_Computer Age Statistical Inference: Algorithms, Evidence, and Data Science_](https://www.goodreads.com/book/show/30462852-computer-age-statistical-inference)) y parece una obviedad abundar sobre ello.

Sin embargo, la persistencia de métodos viejunos en la estadística académica y, casi por extensión, en la estadística no académica que realizan muchos estadísticos con todavía excesivas adherencias académicas, nos hace sospechar que ese conocimiento que presumo arriba no se ha perfeccionado en resultados concretos y, particularmente, en el concomitante cambio curricular y cultural.

