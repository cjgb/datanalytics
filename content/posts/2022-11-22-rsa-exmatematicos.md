---
author: Carlos J. Gil Bellosta
date: 2022-11-22
title: 'RSA para exmatemáticos'

url: /2022/11/22/rsa-para-exmatematicos/
categories:
- varios
tags:
- rsa
- criptografía
---

Me he escrito a mí mismo lo siguiente:

{{< highlight python >}}
#########################################################
# @gilbellosta, 2022-11-14
# Implementing RSA "by hand"
#########################################################

# message
msg = 3

# the two "large" primes
p1 = 7
p2 = 13

# public key
# I choose a number, 5, as part of the public key;
# the other part is p1 * p2
pub = (5, p1 * p2)
a, n = pub

# calculation of the private key
# it must be a number b such that
# x**(a * b) % n == x % n
# for all x
# for that, (this comes from Euler's totient theorem)
# we need that a*b % totient = 1
totient = (p1 - 1) * (p2 - 1)

tmp = [x for x in range(totient) if a * x % totient == 1]
b = tmp[0]

priv = (b, n)

# testing:
encrypted_msg = msg**a % n

encrypted_msg**b % n
{{< / highlight >}}

Lo quiero acompañar, para futura referencia, de unos enlaces donde se explican de manera concisa y sin perífrasis innecesarias los puntos más críticos de todo lo anterior:

* Demostración del teorema de Euler (el del _totiente_) ([aquí](https://artofproblemsolving.com/wiki/index.php/Euler%27s_Totient_Theorem)). Este es, en esencia, el resultado matemático en el que se basa RSA. No está claro, por ejemplo, que la función $f(x) = x^a$ pueda ser _invertible_ (módulo $n$) para algún valor $a$. Es el teorema de Euler el que nos lo garantiza. Y no solo eso: permite encontrar eficientemente el exponente $b$ tal que $x^{ab} = x$ (módulo $n$). De otra manera, el algoritmo sería inaplicable: sería tan difícil encontrar un par de claves pública/privada como romperlas.
* Explicación del vínculo entre el teorema de Euler y RSA ([aquí](https://en.wikipedia.org/wiki/Fermat%27s_little_theorem#Generalizations)). Aunque trata del teorema menor de Fermat, el hermanito pequeño del de Euler, en la sección a la que apunta en enlace se discute precisa y concisamente cómo se usa el teorema de Euler en RSA.
* Una discusión sobre los aspectos prácticos de todo lo anterior ([aquí](https://crypto.stackexchange.com/questions/22490/rsa-key-generation-how-is-multiplicative-inverse-computed)). Los enlaces previos describen el cómo; en este enlace se habla del por qué.
