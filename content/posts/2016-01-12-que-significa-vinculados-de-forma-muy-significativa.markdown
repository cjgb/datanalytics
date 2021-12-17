---
author: Carlos J. Gil Bellosta
date: 2016-01-12 08:13:43+00:00
draft: false
title: ¿Qué significa "vinculados de forma muy significativa"?

url: /2016/01/12/que-significa-vinculados-de-forma-muy-significativa/
categories:
- estadística
- números
tags:
- datos públicos
- lme4
- lmer
- p-valor
- suicidio
---

Diríase que dos fenómenos _vinculados de forma muy significativa_ guardan una potente relación causal. Creo que eso es lo que entendería cualquiera.

Traigo pues a colación dos fenómenos. El primero es

[![suicidios_espana](/wp-uploads/2016/01/suicidios_espana.png)
](/wp-uploads/2016/01/suicidios_espana.png)

Y el segundo,

[![suicidios_espana_suicidios](/wp-uploads/2016/01/suicidios_espana_suicidios.png)
](/wp-uploads/2016/01/suicidios_espana_suicidios.png)

¿Diríais que están _vinculados de forma muy significativa_?

Pues si en lugar de fiaros de vuestros propios ojos, lo hacéis de Berta Rivera, Bruno Casal o Luis Currais, los autores de [_The economic crisis and death by suicide in Spain: Empirical evidence based on a data panel and the quantification of losses in labour productivity_](http://infogen.webs.uvigo.es/WP/WP1507.pdf); o de David Lombao (que divulga el anterior [aquí](http://www.eldiario.es/galicia/Investigadores-Coruna-acreditan-significativa-suicidios_0_471403279.html) en El Diario), la respuesta es sí.

Las series anteriores representan la evolución de la tasa de paro y de suicidio (por 100k habitantes) por comunidades autónomas en España en los _últimos_ (en la muy peculiar acepción de _últimos_ del INE) años. Todos las anteriormente citados, y algunos más, hablan, hablan y hablan de _vínculos significativos_ entre ellas. Pero, ¿no han tenido la decencia intelectual de mostrar los gráficos?

(Nota: aquí va un párrafo que no voy a escribir sobre los incentivos perversos en la academia).

(Nota: aquí va otro párrafo que tampoco voy a escribir sobre si el Ministerio de Economía y Competitividad debería contribuir a financiar ese tipo de trabajos a través del proyecto ECON2013-48217-C2-2R, _Impacto económico, sanitario y social de las enfermedades y los problemas de salud: información y herramientas para la evaluación de políticas públicas_: ¿qué tipo de vínculo significativo puede llegar a tener con las políticas públicas y el muy encomiable objetivo de evaluarlas?).

Y sí, recapitulando, ya he hablado de los gráficos... Así que comienzo el repaso de otros tres temas relevantes al respecto del articulito.

El primero es que vale la pena traer a colación la [habitual confusión entre significancia y relevancia](http://www.stat.columbia.edu/~gelman/research/published/signif4.pdf). Si uno busca en algún corpus del español (p.e., [este](http://www.corpusdelespanol.org/)) los contextos en que se usa _significativo_ lo encontrará emparentado con términos como importante, reseñable, memorable, etc. Poco que ver en este caso. El coeficiente tiene un tamaño de 0.029 (sobre la variable no normalizada). Dándolo por bueno, eso significa que por cada punto de subida del paro, habría 0.029 suicidios más por cada 100k habitantes, unos 13 en toda España. Si el paro sube un 20% (que es lo que ha llegado a subir en toda la crisis), eso suponen unos 275 suicidios más al año en España, un incremento de menos del 10%. Esa variación está incluso dentro del error del modelo, i.e., otras causas no contempladas que hacen oscilar la tasa de suicidios. Casi cualquier año hay variaciones en el número de suicidios globales de esa magnitud (o de ese orden de magnitud), pero no todos los años el paro sube un 20%.

El efecto es, según los autores, significativo, pero no está claro que sea relevante y aunque la tasa de paro fuese una variable fácilmente manipulable, hacerla descender _significativamente_ produciría, a lo sumo, un efecto difícil de detectar en la tasa de suicidios.

El segundo gran tema es que un resultado (o coeficiente) puede resultar o no significativo dependiendo de lo que uno haga, las variables que utilice, etc. Aquí echo de menos ese párrafo que he omitido más arriba sobre los perversos incentivos de la academia. Como los autores (otra cosa para la que no tienen mayor incentivo) no han hecho públicos los datos (o no los han publicitado lo suficientemente bien como para que los encuentre), [los he recopilado yo mismo](/wp-uploads/2016/01/datos_suicidio_espana.txt). Se puede hacer



    dat <- read.table("/wp-uploads/2016/01/datos_suicidio_espana.txt")
    summary(dat)



para cargarlos y ver que los míos coinciden mayormente con los de los autores (comparando el `summary` con la tabla 2 del artículo y luego, por ejemplo, una cosa muy razonable,



    library(<a href="http://inside-r.org/packages/cran/lme4">lme4)
    mod.lmer.paro <- lmer(tasa.suicidio ~  edad.media + esperanza.vida + tasa.fecundidad + ratio.sexos + tasa.paro + (1 | <a href="http://inside-r.org/packages/cran/ca">ca), data = dat)
    summary(mod.lmer.paro)

    # Linear mixed model fit by REML ['lmerMod']
    # Formula: tasa.suicidio ~ edad.media + esperanza.vida + tasa.fecundidad + ratio.sexos + tasa.paro + (1 | ca)
    # Data: dat
    #
    # REML criterion at convergence: 600.9
    #
    # Scaled residuals:
    #   Min       1Q   Median       3Q      Max
    # -2.88051 -0.61372 -0.05319  0.54133  2.72389
    #
    # Random effects:
    #   Groups   Name        Variance Std.Dev.
    # ca       (Intercept) 2.2802   1.5100
    # Residual             0.7714   0.8783
    # Number of obs: 204, groups:  ca, 17
    #
    # Fixed effects:
    #   Estimate Std. Error t value
    # (Intercept)     20.46669   13.81164   1.482
    # edad.media       0.73061    0.16643   4.390
    # esperanza.vida  -0.81182    0.16148  -5.027
    # tasa.fecundidad -0.10394    0.03825  -2.717
    # ratio.sexos      0.27255    0.11415   2.388
    # tasa.paro        0.03470    0.01922   1.806
    #
    # Correlation of Fixed Effects:
    #   (Intr) edd.md esprn. ts.fcn rt.sxs
    # edad.media  -0.197
    # esperanz.vd -0.374 -0.676
    # tasa.fcnddd  0.504  0.256 -0.470
    # ratio.sexos -0.756  0.379 -0.212 -0.378
    # tasa.paro    0.532  0.197 -0.746  0.500  0.003

    <a href="http://inside-r.org/r-doc/stats/confint">confint(mod.lmer.paro)
    #                        2.5 %      97.5 %
    # .sig01           1.006864068  2.08915864
    # .sigma           0.788242966  0.96629385
    # (Intercept)     -5.978568736 47.77741996
    # edad.media       0.404543036  1.05152389
    # esperanza.vida  -1.124187712 -0.50082446
    # tasa.fecundidad -0.177069458 -0.02761042
    # ratio.sexos      0.052761800  0.49107541
    # tasa.paro       -0.002011176  0.07314789



para ilustrar cómo la significancia estadística, al igual que la belleza, está a menudo en el ojo de quien la mire.

Y con el tercer asunto, termino: los [datos de suicidios de Madrid](http://www.datanalytics.com/2015/12/03/el-curioso-caso-de-los-suicidios-en-la-villa-de-madrid/) no me los creo ni harto de vino.
