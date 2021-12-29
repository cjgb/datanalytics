---
author: Carlos J. Gil Bellosta
date: 2018-10-03 08:13:49+00:00
draft: false
title: ¿De qué matriz son los "embeddings" una factorización?

url: /2018/10/03/de-que-matriz-son-los-embeddings-una-factorizacion/
categories:
- ciencia de datos
tags:
- embeddings
- matrices
- nlp
- texto
---

Hoy, _embeddings_. Esto va de reducir la dimensionalidad de un espacio generado por palabras (procedentes de textos). Si a cada palabra le asignamos un vector índice (todo ceros y un uno donde le corresponde), la dimensión del espacio de palabras es excesiva.

La ocurrencia de algunos es asociar a cada palabra, $latex W_i$, un vector $latex w_i$ corto (p.e., 100) con entradas $latex w_{ij}$ a determinar de la manera que se explica a continuación.

La idea directora de todo es que palabras que aparecen en contextos similares tengan representaciones próximas. Un contexto es simplemente el conjunto de palabras que preceden y suceden a una dada en los textos. Así que igual que tenemos palabras $latex P_i$, podemos construir contextos $latex C_i$ (nota: ¡el número de contextos es horriblemente grande!) y asociarles también vectores cortos $latex c_i$. Si las palabras $latex U$ y $latex V$ son habituales en el contexto $latex C$, entonces los vectores $latex u$, $latex v$ y $latex c$ se construyen de forma que $latex uc$ sea grande y $latex vc$ sea también grande, por lo que se espera que también lo sea $latex uv$ (lo que signficaría que las representaciones de $latex U$ y $latex V$ son de alguna manera próximas).

¿Cómo se consigue esto? Comienzo con una idea naif y, como se verá, insuficiente: si $latex W$ es una palabra y $latex C$ es un contexto en el que aparece, tratar de maximizar $latex wc$. O una función creciente de ese valor, tal como $latex \sigma(wc) = 1 / 1 + \exp(-wc)$. Lo que no lleva a ningún sitio porque una solución razonable de ese programa es mapear cada palabra y cada contexto al vector $latex (1, 0, \dots)$ (nota: no he hablado de normalización, pero creo que se entiende que por algún lado se estaría aplicando). De tal manera, todos los vectores se mapearían en el mismo. Y tal. Caos.

Así que lo que se busca es que los $latex w_i$ sean próximos de las representaciones de los contextos en los que están las correspondientes palabras y lejos de aquellos en los que no están. Así que se busca maximizar por un lado

$$ \sigma(w_ic_i)$$

cuando $latex W_i$ está en el contexto $latex C_i$ y minimizar

$$ \sum_k \sigma(w_ic_k)$$

cuando $latex W_i$ no está en el contexto $latex C_k$. O, de alguna manera, combinando ambos objetivos en uno, maximizar

$$ \sigma(w_ic_i) + \sum_k \sigma(-w_ic_k).$$


Pero como los contextos $latex W_k$ son prácticamente infinitos, en lugar de usar _todos_, habremos de conformarnos con una muestra de tamaño $latex k$ de ellos:

$$ \sigma(w_ic_i) + \sum_1^k \sigma(-w_ic_j).$$

La suma de esas expresiones para cada pareja de palabras y contextos en los que aparecen es una función de un montón de parámetros (la suma del número de palabras y el número de contextos multiplicada por la longitud de la representación) que se maximiza usando esas cosas modernas.

Y ya.

Además, contra todo pronóstico, parece que funciona.

Ahora bien... los productos $latex w_ic_j = m_{ij}$ conforman una matriz (con tantas filas como palabras y tantas columnas como contextos): $latex WC = M$. Los _embeddings_ son una factorización particular de esa matriz.

Generalmente, los problemas de factorización de matrices comienzan con la matriz y, a partir de ella, se construye la correspondiente factorización. Aquí se parte de una factorización y se intuye que existe una matriz que es la que factoriza. Y la pregunta es: ¿cuál es dicha matriz?

En realidad, la pregunta no es cuál es la matriz (se multiplican las otras dos y ya, ¿no?) sino qué propiedades tiene, de dónde viene, qué significa y si otras factorizaciones suyas (p.e., vía SVD) podrían ser igual de buenas que los _embeddings_ de más arriba.

Los detalles están, entre otros, en [_Neural Word Embedding as Implicit Matrix Factorization_](https://papers.nips.cc/paper/5477-neural-word-embedding-as-implicit-matrix-factorization.pdf), que identifica $latex M$ como, casi, la matriz con entradas

$$ m_{ij} = \log \frac{P(W_i, C_i}{P(W_i) P(C_i)},$$

una expresión muy familiar (la probabilidad de que una palabra aparezca en un contexto partido por las probabilidades de ocurrencia de la palabra y el contexto por separado).

Una de las cuestiones en las que no entra demasiado el artículo es en valorar si las factorizaciones al uso de esa matriz tienen un comportamiento igual de bueno que los _embeddings_. De hecho, la descomposición de $M$ da lugar a muchos posibles _embeddings_ distintos. Por ejemplo, si $latex M = UDV$, se podrían considerar _embeddings_ de las palabras cualquiera de las matrices

$$ UD^x,$$

donde $latex x$ es un número real.

Etc.

**Nota:** todo lo que he escrito está plagado de imprecisiones. Lo sé y lo asumo.

**Otra nota:** hay más todavía al respecto. Queda para otro día.

**Otra nota más:** seguro que aquí no ha llegado a leer ni el tato. Lo sé porque las reacciones (comentarios, tuits, etc.) de mis entradas son inversamente proporcionales tanto a la longitud como a la sustancia de mis entradas. Luego os quejaréis si solo escribo mis habituales chorradas.
