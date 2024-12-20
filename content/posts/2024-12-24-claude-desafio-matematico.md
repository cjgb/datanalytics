---
author: Carlos J. Gil Bellosta
date: 2024-12-24
title: 'Claude y el desafío matemático navideño de 2024'
url: /2024/12/24/claude-desafio-matematico
categories:
- llms
tags:
- llms
- matemáticas
---

Dice [Gaussianos](https://www.gaussianos.com/desafios-matematicos-en-el-pais-desafio-extraordinario-de-navidad-2024-tu-decimo-esconde-una-x/):

> Siguiendo la tradición desde 2012, vuelve el Desafío Matemático RSME-El País de Navidad. Este año, como hace ya tiempo, de nuevo es Adolfo Quirós (profesor de la Universidad Autónoma de Madrid (UAM) y director de La Gaceta de la Real Sociedad Matemática Española) quien nos lo presenta.

El problema es el siguiente:

> El desafío comienza cuando elegimos dos números de la Lotería de Navidad (recordemos que tienen 5 cifras), con la única condición de que cumplan estos dos requisitos:
> 1) Entre los dos números, aparecen todos los dígitos del 0 al 9, necesariamente una vez cada uno.
>
> 2) La suma de los dos números vuelve a ser un número de lotería, es decir, tiene 5 cifras.
>
> Por ejemplo, nos valen los números 01357 y 24689, que suman 26046. No nos valen 01357 y 24680, porque se repite el 0 y falta el 9. Tampoco nos valen 70135 y 42689, porque su suma, 112824, tiene 6 cifras.
>
> Una vez elegidos los dos números, observamos que en su suma aparecen, en algún orden y alguna posición, los dígitos 1, 3, 5 y 7. Esto es, llamando X a la quinta cifra, la suma puede tener la forma 1357X, o 5X371, o 75X31, o…
>
> El desafío consiste en decidir qué valores exactamente puede tomar el dígito X: ¿puede ser cualquiera entre 0 y 9? ¿pueden aparecer como X unos dígitos sí y otros no? ¿Puede ser que en realidad no aparezca ningún X (no hemos dicho que existan dos números que cumplan todas las condiciones que hemos dado)?

Se lo he pasado a [Claude](https://claude.ai/) en estos términos:

> Consider two 5 digit numbers such that their digits are the numbers 0, 1, ... 9 without repetitions, obviously. Imagine you add them and the result is a 5 digit number (i.e, less than 100000) which contains digits 1, 3, 5 and 7. Which is the only option for the other digit? (Hint: think about some known results and theorems about the digits of numbers).

Y me ha contestado lo siguiente:

> Let me solve this step by step by analyzing what we know.
> From the problem statement:
>
> We have two 5-digit numbers using digits 0-9 without repetition
> Their sum is less than 100000
> The sum contains digits 1, 3, 5, 7, and one unknown digit
>
> Key insights:
>
> If we add two 5-digit numbers whose sum is less than 100000, there must be a significant constraint on the leading digits
> A useful theorem here is the divisibility rule by 9: a number is divisible by 9 if and only if the sum of its digits is divisible by 9
>
> Let's analyze:
>
> Looking at the given digits in the sum (1,3,5,7,x), we know their sum must be: 1+3+5+7+x = 16+x
> The sum of all digits 0-9 is 45
> If we take any collection of these digits and split them into two groups (like our two numbers), their digits must sum to 45
> By the divisibility rule of 9, the sum number must have the same remainder mod 9 as the sum of its individual digits
>
> Therefore:
>
> 16+x ≡ (sum of two original numbers) mod 9
> 45 ≡ (sum of two original numbers) mod 9
>
> This means:
> 16+x ≡ 45 mod 9
> x ≡ 2 mod 9
> Therefore, x must be 2.
> We can verify this is possible by finding two numbers that satisfy our conditions. For example:
> 98740 + 12356 = 11096
> Therefore, 2 is the only possible value for the fifth digit.

Salvo por el hecho de que $98740 + 12356 \ne 11096$ (punto marrón menos para Claude), todo correcto. En menos de un segundo. Ha sido una sesión _zero-shot_: no ha habido interacciones previas. Le he pasado una pista porque previamente, con Gemini Experimental 1206, había tenido que indicarle que se remitiese a ese tipo de resultados después de una primera respuesta catastrófica.

En resumen: no vayáis diciendo que los LLMs no son sino loros estadísticos y que no son inteligentes, no vaya a ser que...