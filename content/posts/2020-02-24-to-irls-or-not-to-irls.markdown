---
author: Carlos J. Gil Bellosta
date: 2020-02-24 09:13:00+00:00
draft: false
title: To IRLS or not to IRLS

url: /2020/02/24/to-irls-or-not-to-irls/
categories:
- estadística
- r
tags:
- deoptimr
- mass
- matemáticas
- optim
- optimización
- paquetes
- r
- robustbase
---




A veces tomas un artículo de vaya uno a saber qué disciplina, sismología, p.e., y no dejas de pensar: los métodos estadísticos que usa esta gente son de hace 50 años. Luego cabe preguntarse: ¿pasará lo mismo en estadística con respecto a otras disciplinas?







Por razones que no vienen al caso, me he visto en la tesitura de tener que encontrar mínimos de funciones que podrían cuasicatalogarse como de mínimos cuadrados no lineales. Y por algún motivo, pareciere que no hubiese en el mundo un algoritmo de ajuste que no fuese [IRLS](https://en.wikipedia.org/wiki/Iteratively_reweighted_least_squares). Que tiene una gran tradición en estadística; es, de hecho, la base de la optimización propuesta por [Nelder y McCullagh en 1972](https://www.semanticscholar.org/paper/Generalized-Linear-Models-McCullagh-Nelder/458dd9b463f0fb0d7c52ff20601eaaa9ebfebc99).







Pero, ¿tiene sentido seguir haciendo IRLS **hoy**? ¿O ha quedado estancada la estadística en técnicas de optimización setenteras por un tonto apego a la tradición? ¿Zumba la CPU al ritmo de _The Great Gig in the Sky_ cuando ejecuta el Fortran que subyace a `glm` en R?







La verdad, estoy perdido. Por un lado, en ninguna de las casi 700 páginas de la segunda edición del libro _[Numerical Optimization](https://books.google.es/books/about/Numerical_Optimization.html?id=eNlPAAAAMAAJ)_, el de Nocedal, aparece una sola mención a IRLS. Pero igual un libro genérico de optimización no puede entrar en detalle en problemas muy particulares, en la que la función de la que se busca el mínimo tiene una forma muy particular: una suma de cuadrados de residuos o algo que se parece mucho a ello.







En un libro más especializado, Numerical Methods of Statistics (de Monahan), hay dos menciones en casi 500 páginas. Y lo hace al describir los métodos (clásicos) usados para ajustar GLMs. Ninguna, sin embargo, en la sección de optimización y ecuaciones no lineales.







La función `MASS::rls` (la versión robusta de `lm` en `MASS`) usa IRLS. Sin embargo, mis LS no son lineales. En `robustbase`, un paquete mucho más específico y moderno, la función `nlrob`, que _casi_ hace lo que pretendo, usa `DEoptimR::JDEoptim` para encontrar valores iniciales decentes y el L-`BFGS-B` de `optim` de toda la vida para afinarla.







Así que, en resumen, tengo la sospecha de en estadística deberíamos _aggiornarnos_, deshacernos de IRLS e ir adoptando optimizadores _de caja negra_ decentes que nos proporcionen nuestros colegas los matemáticos aplicados. Pero igual me equivoco.







¿Me leerá algún matemático especialista en la cosa y sin el vicio de la perífrasis que me pueda sacar de dudas?



