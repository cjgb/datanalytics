---
author: Carlos J. Gil Bellosta
date: 2020-01-07 09:13:00+00:00
draft: false
title: La probabilidad, ¿algo subjetivo?

url: /2020/01/07/la-probabilidad-algo-subjetivo/
categories:
- estadística
- probabilidad
tags:
- estadística
- estadística bayesiana
- probabilidad
- fundamentos de probabilidad
- subjetivismo
---

Esta entrada es una contestación a

{{< twitter user="AnaBayes" id="1213446900743122945" >}}

**I.**

Habrá quien sostenga que la geometría (plana, euclídea, por antonomasia) es _subjetiva_, que es una construcción de la mente, de cada mente. Igual queda todavía alguno de los que, por el contrario, creían que los triángulos equiláteros residen en una especie de edén donde tienen una existencia _ideal_ y que nuestra mente, de alguna manera, se limita a reflejarlos.

Sin embargo, a mí me vale (que es una forma de decir que tomo partido por) que la geometría tiene una existencia objetiva, ajena a la subjetividad de los individuos. Eso sin perjuicio de que individuos particulares tengan una visión incompleta y, en ocasiones, imperfecta de ella (p.e., que ignoren que las mediatrices de los lados de un triángulo se cortan en un único punto).

Tanto vale para la probabilidad. Es (o la considero) otra entidad objetiva que se rige por los axiomas de Kolmogorov, de la que se deducen una serie de propiedades no tan conocidas como debieran serlo.

Desde ese punto de vista, rechazo absolutamente que la probabilidad sea subjetiva.

**II.**

Pero sospecho que no es a esta probabilidad a la que se refiere el _tuit_ sino a su aplicación en el mundo _material_ y, en particular, a las probabilidades asociadas y que asociamos a los eventos del mundo físico. (Quiero también pensar ---aunque despiste la referencia a lo subatómico--- que el tuit no pone en cuestión la existencia objetiva del azar, que exigiría una discusión distinta de la que sigue.)

Comienzo por un ejemplo: si quisiera medir la altura de las torres de plaza de Castilla, bien podría utilizar la longitud de la sombra proyectada y aplicar principios básicos de geometría, el teorema de Tales, por ejemplo, para estimarla. Pero difícilmente podría alguien llamar subjetiva a tal estimación; ni aun cuando mil personas obtuviesen mil resultados distintos usando procedimientos dejados a su arbitrio. Ni aun si la selección del procedimiento fuese de la libérrima elección de cada uno de los participantes. Pocos negarían, además, que la altura de las torres es una magnitud objetiva.

Recapitulando, lo relevante del ejemplo anterior es que existe una magnitud objetiva (la altura de las torres) y estimaciones realizadas por sujetos. Estos se apoyan en principios geométricos (u otros de otra naturaleza, física por ejemplo) para estimar la primera. Además, es posible evaluar la bondad de las aproximaciones.

**III.**

Es asunto de la estadística ---y no propiamente de la probabilidad--- el de estimar las probabilidades asociadas a eventos (lo hace, además y típicamente, para tomar decisiones basadas en ellas). Ocurre, sin embargo, que existen eventos de interés de muchos tipos distintos, como, p.e.:

* Los relativos a lanzamientos de un dado o moneda (o, en general, los juegos de azar).
* El de si el número de pacientes que llegarán mañana a las urgencias de un cierto hospital superará un umbral determinado.
* El de si Pedro Sánchez será finalmente investido presidente (cosa que a la hora de escribir estas líneas es altamente probable pero no seguro).
* El de si el número (entero) del 1 al 10 (ambos inclusivos) que acabo de elegir es o no 7.

Todos ellos y más que se nos puedan ocurrir tienen una naturaleza distinta y podría decirse que los vincula casi exclusivamente el hecho de que sus probabilidades, típicamente desconocidas, satisfacen los axiomas de Kolmogorov (al respecto, véase [esto](https://statmodeling.stat.columbia.edu/2018/12/26/what-is-probability/)).

Para asignarles probabilidades podemos usar muchas técnicas ---o, más específicamente, tecnologías--- distintas (aunque siempre dependiendo del escenario):

* Teóricos, como [el principio de indiferencia](https://en.wikipedia.org/wiki/Principle_of_indifference).
* Mediante réplicas y/o simulaciones.
* Usando datos históricos (por ejemplo, para estimar el [ratio de masculinidad](https://es.wikipedia.org/wiki/%C3%8Dndice_de_masculinidad)).
* Construyendo modelos que exploten correlaciones entre fenómenos conocidos y otros de interés.
* ...

La elección de unos y otros (o de subtipos dentro de cada categoría) podría incorporar elementos de subjetividad. Pero lo mismo ocurría con nuestros torremedidores, sin que por ello estuviésemos legitimados a tachar de subjetivas sus estimaciones.

Es cierto que determinadas técnicas (y se va a notar mucho que me refiero a las bayesianas) incorporan _slots_ a través de los cuales es posible incorporar información _previa_ y que cierta gente, sin que se sepa muy bien por qué, tacha de _subjetiva_. Pero esa información previa puede ser perfectamente objetiva: por ejemplo, como _priori_ para un determinado parámetro se puede usar una distribución basada en las estimaciones realizadas en estudios anteriores, o incorporar restricciones de positividad, etc. Sigue sin haber motivos para hablar de subjetividad (al menos, necesariamente, aunque fuese posible que alguien quisiese utilizar información previa _totalmente subjetiva_).

Pudiera ocurrir también en determinados casos concretos que sujetos distintos tuviesen información distinta. P.e., yo podría _soplarle_ a alguien que ese número del 1 al 10 que he pesando, realmente está entre el 1 y el 5. Que viene a ser como si a unos sujetos les dejásemos acercarse a las torres y utilizar cintas métricas mientras a otros solo se las dejásemos ver de lejos.

**IV.**

En cualquier caso, y esto es lo más relevante, igual que existe objetivamente esa magnitud que es la altura de las torres, existen objetivamente esas probabilidades objetivas asociadas a los eventos físicos de las que construimos estimaciones utilizando técnicas de diversa índole (y sin que por ello podamos llamarlas subjetivas en propiedad). De otro modo, ¿tendrían sentido técnicas de calibración (como [esta](https://en.wikipedia.org/wiki/Brier_score), p.e.)?

Entre el dado y la moneda, ambos objetivos y físicos, que hay sobre mi mesa, existe una distancia que, por no ser corpórea, no deja de ser objetiva, existente y, de hecho, medible. De la misma manera y por analogía, podríamos decir que entre el evento y el no evento sigue existe una relación de disimilitud que podríamos pensar igualmente objetiva y, de nuevo, medible.

Sujetos distintos podrían medirla de distinta manera y con resultados desiguales; pero no por ello la probabilidad del evento ha de ser subjetiva. De hecho, el que entendamos ---y podamos llegar a demostrar--- que algunas de las estimaciones son manifiestamente erróneas es indicio claro de que debajo de las opiniones, hay un sustrato de objetividad. ¿No despediríamos al hombre del tiempo que anunciase nieve en el agosto de Madrid ---y sin que luego nevase, por supuesto?

**V.**

Y, para terminar y aunque esto nos llevaría muy lejos, hay que tener en cuenta que la estadística es un paso intermedio a la decisión. Estimaciones de probabilidades erróneas implican malas decisiones. Y las malas decisiones ponen en peligro el bienestar, cuando no la supervivencia, de los sujetos.

Podrá sostener alguien ideas muy subjetivas, excéntricas y alejadas de la equiprobabilidad sobre las tiradas de mi dado. Sería para mí un placer muy lucrativo invitarle a unas partidas con las que separarlo de su dinero.