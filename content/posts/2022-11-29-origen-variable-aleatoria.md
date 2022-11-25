---
author: Carlos J. Gil Bellosta
date: 2022-11-29
title: 'El origen de uso moderno del término "variable aleatoria" podría estar en un artículo publicado en italiano en una revista oscura en 1913'

url: /2022/11/29/origen-termino-variable-aleatoria/
categories:
- probabilidad
tags:
- variables aleatorias
- historia
---

Sería muy difícil haber aprendido algo de probabilidad sin haber oído o leído a alguien quejarse de que el término "variable aleatoria" es desafortunado; que, en puridad, una "variable aleatoria" es una función; pero que todo el mundo lo hace y que no queda otra que cargar ---¡una vez más!--- con el peso del consenso y la tradición.

Pero cabe preguntarse: ¿hasta dónde y cuándo se remonta? El término tiene evocaciones viejunas y uno está tentado de buscar sus orígenes en, no sé, algún Bernoulli ---¿Jacobo?---, Laplace o el mismo Pascal. Pero estos autores todavía no habían alcanzado el nivel de abstracción al que estamos acostumbrados hoy: donde nosotros usaríamos "variable aleatoria" ellos hablan de eventos, bolas, tiradas de monedas, ganancias de un jugador u otras concreciones.

Otros autores, como Gosset ---sí, el de la t de Student--- tiende a hablar de muestras ---¡muy significativamente!--- para aquellas _cosas_ que tienen media, varianza, etc. y a las que nos referiríamos hoy como variables aleatorias. Algo parecido hace Fisher (ya en 1922) en su
[_On the Mathematical Foundations of Theoretical Statistics_](http://l.academicdirect.org/Horticulture/GAs/Refs/Fisher_1922_Estimation.pdf):

![](/wp-uploads/2022/11/rvs_fisher_00.png#center)

Hoy escribiríamos eso de otra manera.

¿Y los rusos? Si a Chebichev se le acredita la desigualdad

$$P(|X - \mu| > a \sigma) < 1 / a^2,$$

de alguna manera en algún sitio tendrá que haberse referido a $X$, ¿no? Pues sí, pero lo hace, al menos en la traducción al francés de su resultado (de 1867) usando términos genéricos:

![](/wp-uploads/2022/11/rvs_chebichev.png#center)


El origen del término "variable aleatoria", pues, no parece tan antiguo. De hecho, se ha rastreado hasta el artículo _Sulla legge dei grandi numeri_ de Cantelli ---sí, _ese_ Cantelli, el de Borel-Cantelli, etc.--- publicado en 1916 en la revista _Atti Reale Accademia
Nazionale Lincei, Memorie Cl. Sc. Fis._. Sin acceso directo a la misma, lo mejor que puedo mostrar de la que según algunos es la primera mención publicada del término "variable aleatoria", es la que Google ---a través de su buscador en libros--- tiene a bien mostrar:

![](/wp-uploads/2022/11/rvs_cantelli_1916.png#center)

Obviamente no dice "variable aleatoria" porque el artículo está escrito en italiano y no en español. Dice _variabile casuale_, que es no cómo los italianos traducen _random variable_ sino, como se verá, de donde los demás hemos traducido ---directa o indirectamente--- la manera en que nos referimos a ellas.

(No hace falta que diga que si algún lector tiene acceso a la publicación en cuestión y puede hacerme llegar una copia electrónica, quedaría yo y, sin duda, quedaríamos muchos, sumamente agradecidos.)

En realidad, y como se puede leer más abajo, existe una mención anterior a las "variables aleatorias" por parte Cantelli, en 1913, que bien podría ser la primera aparición en la historia de la teoría de la probabilidad.

### Variable aleatoria en inglés

Como todo el mundo sabe, _todo_ lo que merece la pena ser leído está escrito en inglés. Luego se traducen algunas cosas para que la culturilla general llegue a provincias. Así que el origen de _variable aleatoria_ tiene que ser necesariamente el de _random variable_, ¿no?

Efectivamente, _parece_ ser así. En
[_Earliest Known Uses of Some of the Words of Mathematics_](https://jeff560.tripod.com/r.html)
se lee:

> RANDOM VARIABLE is found in 1914 in Biometrika: “nDx and nDy are now random variables independent of time.” [OED]
>
> Variabile casuale is found in 1916 in F. P. Cantelli, “La Tendenza ad un limite nel senso del calcolo delle probabilità,” Rendiconti del Circolo Matematico di Palermo, 41, 191-201 (David, 1998). A. N. Kolmogorov used the term zufällige Gröβe in the Grundbegriffe der Wahrscheinlichkeitsrechnung (1933).
>
> Random variable is found in 1934 in A. Winter [sic], “On Analytic Convolutions of Bernoulli Distributions,” American Journal of Mathematics, 56, 659-663 and more visibly in H. Cramér’s Random Variables and Probability Distributions (1937) (David, 1998). Other, perhaps better, terms, including chance variable in Doob Annals of Mathematical Statistics, 6, (1935), p. 160 and stochastic variable in Wald & Wolfowitz, Annals of Mathematical Statistics, 10, (1939), p. 106 did not survive. J. L. Doob recalled the time when he was writing Stochastic Processes and W. Feller was writing his Introduction to Probability Theory and its Applications:
>
>> I had an argument with Feller. He asserted that everyone said “random variable” and I asserted that everyone said “chance variable.” We obviously had to use the same name in our books, so we decided the issue by a stochastic procedure. That is, we tossed for it and he won.
>
> From “A Conversation with Joe Doob,” Statistical Science 1997 (p. 307) Project Euclid.

Y, efectivamente, en el artículo
[_The elimination of Spurious Correlation due to position in Time or Space_](https://www.biodiversitylibrary.org/item/181863#page/215/mode/1up)
de Gosset, dice en 1914:

![](/wp-uploads/2022/11/rvs_gosset.png#center)

Efectivamente, el artículo yuxtapone las palabras _variable_ y _random_ en una frase al paso. Porque el artículo habla de unos objetos que tienen variabilidad (busca estimar la _correlación de las variaciones con respecto a la media instantánea de una serie de valores_), en algún sitio los llama variables y en un punto concreto estas variables, a diferencia de otras, son aleatorias y las cualifica como tales. Pero nunca dice algo así como _sea tal una variable aleatoria_ o, _como todo el mundo sabe, el objeto de la teoría de la probabilidad es el estudio de las variables aleatorias_ como sí ocurre tiempo después. De hecho, según los n-gramas de Google,

![](/wp-uploads/2022/11/rvs_ngrams_english.png#center)

el térmimo _random variable_ solo comenzó a popularizarse en inglés en la década de los 30.

Efectivamente, en el artículo de Wintner de 1934
[_On Analytic Convolutions of Bernoulli Distributions_](https://www.jstor.org/stable/2370961),
uno de los primeros en usar el término según la referencia anterior, el autor usa ya una nomenclatura prácticamente moderna:

![](/wp-uploads/2022/11/rvs_wintner.png#center)

Y, esta vez, no por azar: el artículo abunda en unos resultados publicados por primera vez, dice, en el libro _Calcul des Probabilités_ escrito por P. Lévy en 1925. Lo cual nos lleva a trazar el origen del término en el idioma francés.

### Variable aleatoria en francés

En _Calcul des Probabilités_ se usa _variable éventuelle_ de la manera a la que estamos acostumbrados hoy en día:

![](/wp-uploads/2022/11/rvs_levy.png#center)

De hecho, el término ---y su alternativa, _variable aléatoire_--- estaba asentándose ya en francés, como muestran los n-gramas de Google

![](/wp-uploads/2022/11/rvs_ngrams_french.png#center)

y de que _variable éventuelle_ y _variable aléatorire_ se encuentren en otras obras de la época, como los tratados de Borel. Borel tiene, de hecho, un libro sobre la teoría de la probabilidad, _Le Hasard_, de 1914 donde no recurre al término pero dos tratados de hacia la mitad de la década siguiente en los que usa, en cada uno de ellos, una de las dos versiones.

Google nos muestra también como la versión _variable éventuelle_ acabó cayendo en desuso y que _variable aléatoire_ terminó imponiéndose. Pero, ¿de dónde procede el término en francés? La respuesta se encuentra en el siguiente parrafito,

![](/wp-uploads/2022/11/rvs_bulletin_1919.png#center)

que forma parte de la reseña del libro _Calcolo delle Probabilità_ de G. Castelnuovo publicado en 1919 y que se hizo en el Bulletin des Sciences Mathématiques ese mismo año ([enlace](https://ia802609.us.archive.org/10/items/s2bulletindessci43fran/s2bulletindessci43fran_bw.pdf)).

Por su importancia, traduzco el párrafo:

> Acerca de la noción de valor medio, el autor [Castelnuovo] define lo que llama variable aleatoria (_variable casuale_): es una cantidad X que puede tomar diversos valores $x_1, x_2, \dots, x_n$ de acuerdo con la ocurrencia de los eventos $E_1, E_2, \dots, E_n$ mutuamente excluyentes y con probabilidades de ocurrencia $p_1, p_2, \dots, p_n$.
> El valor medio teórico de una variable tal es la suma
> $$p_1 x_1 + p_2 x_2 + \dots + p_n x_n.$$

Es relevante aquí mencionar cómo Lévy, por ejemplo, cita elogiosamente la obra de Castelnuovo en su _Calcul des Probabilités_.

### Variable aleatoria en italiano

Así que parece que _variable aleatoria_ se estaba usando en italiano en la década de los diez del siglo pasado. Aparece en el libro de Castelnuovo, pero una búsqueda revela que, efectivamente, fue usado previamente por Cantelli en 1916, como se ha indicado más arriba.

Pero una búsqueda más cuidadosa permite encontrar referencias previas. En efecto, Cantelli ya había hecho uso del término en
[_Sulla differenza media con ripetizione_](https://www.jstor.org/stable/23223974)
en 1913:

![](/wp-uploads/2022/11/rvs_cantelli_1913.png#center)

Esta pudiera ser, tres años antes de la primera referencia citada por las fuentes de más arriba, el momento en el que el término _variable aleatoria_ hizo su entrada en el léxico probabilístico.

Nótese que el trabajo de Cantelli de 1913 cita (y abunta en resultados contenidos en) _Variabilità e Mutabilittà_, de 1912, obra conocida del también conocido Gini. Pero en ella no se usa el término en cuestión. Es una obra que trata sobre la medida de la variabilidad de variables aleatorias, pero en ningún momento les da un nombre específico.

### En resumen

El término _variable aleatoria_ ---como _variabile casuale_--- en su uso moderno y habitual parece haber sido usado por primera vez por Cantelli, posiblemente en 1913. Su uso por parte de Castelnuovo en su tratado de probabilidad de 1919 popularizó el término ---traducido como _variable éventuelle_ o _variable aléatoire_--- en el ámbito francófono, desde donde acabó extendiéndose por doquier.