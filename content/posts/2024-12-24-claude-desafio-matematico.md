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


### Coda

Le pasé el problema también a [`Qwen/QwQ-32B-Preview`](https://deepinfra.com/Qwen/QwQ-32B-Preview) de la siguiente forma (sin la pista):

> Let see if you can solve this maths problem. Consider two 5 digit numbers such that their digits are the numbers 0, 1, ... 9 without repetitions, obviously. Imagine you add them and the result is a 5 digit number (i.e, less than 100000) which contains digits 1, 3, 5 and 7. Which is the only option for the other digit?

La respuesta, también correcta, aunque con varias idas y venidas, es más entretenida que la de Claude:

> Let's tackle this problem step by step. So, we have two 5-digit numbers, each using the digits 0 through 9 without repetition. When we add them together, the sum is another 5-digit number that contains only the digits 1, 3, 5, and 7, plus one other digit that we need to find.
>
> First, let's understand the constraints:
>
> Each of the two numbers is a 5-digit number without repeating digits.
>
> Their sum is also a 5-digit number, meaning it's less than 100,000.
>
> The sum contains only the digits 1, 3, 5, 7, and one other digit that we need to identify.
>
> Since the sum is a 5-digit number and it's less than 100,000, the first digit can't be 0. Also, the digits in the sum are only from the set {1, 3, 5, 7, x}, where x is the unknown digit we're trying to find.
>
> Let me think about the possible range for the sum. The smallest possible sum would be if we add the smallest possible 5-digit numbers, like 10,234 + 34,567 = 44,801, but this is just a rough estimate. The actual smallest sum might be different, but it's not crucial for now.
>
> More importantly, since both numbers use digits without repetition and the sum also uses specific digits, there must be some constraints on the possible carries during addition.
>
> Let's consider that each column (units, tens, hundreds, etc.) adds up to a digit in the sum, possibly with a carryover to the next column.
>
> Given that the sum contains only 1, 3, 5, 7, and one other digit, and considering that the digits in the two numbers are from 0 to 9 without repetition, there must be some unique property that determines the possible values for the fifth digit in the sum.
>
> Maybe I should look at the possible digit sums and see what constraints that imposes.
>
> Let's denote the two numbers as A and B, and their sum as S.
>
> A and B are both 5-digit numbers with unique digits.
>
> S is a 5-digit number with digits only from {1, 3, 5, 7, x}.
>
> Since A and B together use 10 distinct digits (from 0 to 9), and their sum S has digits from the specified set, there must be a relationship between the digits of A and B and the digits of S.
>
> Perhaps I can consider the properties of addition with carries. For each column, the sum of the digits plus any carry from the previous column determines the digit in S and any carry to the next column.
>
> This seems complicated. Maybe there's a better approach.
>
> Let me think about the total sum of all digits from 0 to 9. The sum of digits from 0 to 9 is 45.
>
> Since A and B together use all digits from 0 to 9 exactly once, the sum of their digits is 45.
>
> Therefore, the sum S should have digits that add up to 45, considering any carryover in the addition process.
>
> Wait, no. The sum of the digits of S is not necessarily 45 because carryover affects the digit sum.
>
> Let me think differently. Maybe I can consider the possible carries in each column.
>
> In a 5-digit addition, there are five columns (units to ten-thousands). Each column can have a carryover to the next column.
>
> Let me denote the carryover from column i to column i+1 as c_i, where c_i is either 0 or 1.
>
> Then, for each column, the sum of the digits plus any carry from the previous column equals the digit in S plus 10 times the carry to the next column.
>
> Mathematically, for column i:
>
> a_i + b_i + c_{i-1} = s_i + 10 * c_i
>
> Where a_i and b_i are the digits in A and B for column i, s_i is the digit in S for column i, and c_{i-1} and c_i are the carryover from the previous and to the next column, respectively.
>
> This seems too general. Maybe I need to look for a different approach.
>
> Let me consider the possible values for the fifth digit in S.
>
> The sum S has digits from {1, 3, 5, 7, x}, and we need to find x.
>
> Perhaps x must be a digit that can be obtained through the addition process given the constraints.
>
> Alternatively, maybe there's only one digit that can satisfy the condition that S is less than 100,000 and has only these digits.
>
> Wait, maybe I can consider the possible ranges for S.
>
> Since S is a 5-digit number less than 100,000, it must be between 10,000 and 99,999.
>
> Given that S contains only the digits 1, 3, 5, 7, and x, and x is a digit from 0 to 9 not used in A or B, but since A and B use all digits from 0 to 9, x must be one of the digits in S that isn't 1, 3, 5, or 7.
>
> But wait, A and B together use all digits from 0 to 9 exactly once, but S is only 5 digits, so S can have digits from A and B, but with the addition process and possible carries, it's not straightforward.
>
> This is getting complicated. Maybe I should look for an example or try to find a property that uniquely determines x.
>
> Let me consider the possible digit sums again.
>
> The sum of the digits of S is s_1 + s_2 + s_3 + s_4 + s_5, where each s_i is in {1, 3, 5, 7, x}.
>
> But I don't know the carries, so this might not help directly.
>
> Alternatively, maybe I can consider the possible values for S and see what x must be.
>
> Given that S is a 5-digit number with digits only from {1, 3, 5, 7, x}, and x is a digit from 0 to 9 not already used in S, but since A and B use all digits from 0 to 9, x must be determined by the addition process.
>
> This is still confusing. Maybe I need to think about the properties of the digits in S.
>
> Wait a minute, perhaps I can consider the possible digit sums modulo 9, since the sum of digits modulo 9 is preserved in the sum S.
>
> The sum of digits of A and B is 45, which is 0 modulo 9.
>
> Therefore, the sum S should also have digits that sum to a multiple of 9.
>
> So, s_1 + s_2 + s_3 + s_4 + s_5 ≡ 0 mod 9.
>
> Given that s_i are from {1, 3, 5, 7, x}, and x is a digit from 0 to 9, we can use this to find possible values for x.
>
> Let me calculate the sum of the known digits: 1 + 3 + 5 + 7 = 16.
>
> So, 16 + x ≡ 0 mod 9 ⇒ x ≡ -16 mod 9 ⇒ x ≡ 2 mod 9.
>
> Since x is a digit from 0 to 9, the possible values for x are 2 and 11, but 11 is not a digit, so x must be 2.
>
> Wait, but 11 mod 9 is 2, so x ≡ 2 mod 9, thus x = 2.
>
> But is this the only possible option?
>
> Let me verify this.
>
> If x = 2, then the sum of digits in S is 16 + 2 = 18, which is divisible by 9.
>
> Is there any other digit x that can satisfy this condition?
>
> If x = 11, it's not a valid digit, so x must be 2.
>
> Therefore, the only option for the other digit is 2.
>
> But wait, the problem says "which is the only option for the other digit?" and according to this, it's 2.
>
> But I need to make sure that this is indeed the case and that there are no other possibilities.
>
> Let me consider if there could be any other x that satisfies the condition.
>
> Given that s_1 + s_2 + s_3 + s_4 + s_5 ≡ 0 mod 9, and s_1 + s_2 + s_3 + s_4 = 16, then x must be such that 16 + x ≡ 0 mod 9.
>
> This implies x ≡ -16 mod 9 ≡ -16 + 18 = 2 mod 9.
>
> Therefore, x must be 2 or 11, but since x is a single digit, x = 2 is the only possibility.
>
> Thus, the only option for the other digit is 2.
>
> Final Answer
>
> [ \boxed{2} ]