---
author: Carlos J. Gil Bellosta
date: 2022-11-16
title: 'Operacionalización de la "igualdad de opotunidades"'

url: /2022/11/08/igualdad-oportunidades/
categories:
- estadística
tags:
- estadística
- justicia
---

Tiene Google (o una parte de él) un vídeo en Youtube,

{{< youtube 4uls4ApmHXE >}}

sobre el que me resulta imposible no comentar nada. Trata, esencialmente, de cómo _operacionalizar_ a la hora de poner en marcha _modelos_ esos principios de justicia, igualdad de oportunidades, etc. de los que tanto se habla últimamente.

La definición de _igualdad de oportunidades_ que se postula en el vídeo, tal vez demasiado esquemática por su orientación didáctica, es la siguiente:

Supóngase que eres un banco que concede hipotecas, que construyes un modelo estadístico para determinar quién las merece y que la población objetivo está dividida en dos grupos, A y B. Dado un sujeto $x$, la hipoteca se concede si $m(x) = 1$ y se deniega si $m(x) = 0$, donde $m$ es el modelo.

La definición pues de _igualdad de oportunidades_ es

$$P(m(x) = 1 | x \in A) = P(m(x) = 1 | x \in B).$$

Dicho de otra manera, si al 30% de los sujetos en A se les concede una hipoteca, en B habrá que concedérsela también al 30% de los sujetos. Eso y no otra cosa _es_ igualdad de oportunidades.

Esto genera una serie de sinsentidos (que ya traté en su día
[aquí](/2020/02/26/algoritmos-y-acatarrantes-definiciones-de-justicia/)),
siendo el primero de todos que el único modelo que podría ser justo sería el _vacío_, uno que no discriminase en absoluto.

En efecto, a la hora de construir el modelo, obviamente, no se podría usar la variable _dummy_ $x\in A$. Pero sí cosas como el nivel de estudios. Ahora bien, si el nivel de estudios está _correlacionado_ (en sentido amplio) con la pertenencia sea a $A$ o a $B$ de los sujetos, no podrá satisfacerse jamás la condición de _igualdad de oportunidades_ especificada más arriba.

Una solución al problema sería, simplemente, no usar modelos (véase
[mi vídeo](https://youtu.be/51VQCHv-Gr8)
al respecto). Pero eso no sería satisfactorio para una empresa como Google, que vive de hacer y dejar hacer (en sus sistemas) modelos de esta naturaleza.

Así que el interés del vídeo reside precisamente en la peculiar manera de _operacionalizar_ la definición de _igualdad de oportunidades_. En resumen, usando distintos _puntos de corte_. Efectivamente, el modelo, $m$ no proporciona directamente un valor 0 o 1 (como se ha dado a entender arriba, por simplificar), sino un _scoring_ (que puede o no representar una probabilidad) $s(x)$ para cada sujeto $x$. Sin entrar en la manera convencional de determinar el punto de corte $\alpha$, la hipoteca se concede si $s(x) > \alpha$ y se deniega en el caso contrario.

Y lo que se propone en el vídeo es usar dos puntos de corte, $\alpha_A$ y $\alpha_B$ aplicables a los sujetos de cada grupo de manera que:

* se alcance la máxima rentabilidad pero
* condicionada a que se cumpla la condición de _igualdad de oportunidades_ expresada  más arriba.

Yo, que tengo una opinión al respecto que a nadie interesa pero que estoy en el mismo negocio que Google ---crear modelos y cobrar por ellos---, aplaudo esta forma de entender el mundo y la justicia y me presto a ayudar ---por un precio justo--- a quienes quieran implementar modelos sujetos a la restricción de _igualdad de oportunidades_ ya no solo dos grupos, $A$ y $B$, sino que haya que garantizar la no discriminación por varias variables entrecruzadas, algunas de las cuales sean continuas (p.e., edad) y toque estimar prácticamente un umbral $\alpha_x$ por individuo.




