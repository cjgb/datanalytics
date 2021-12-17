---
author: Carlos J. Gil Bellosta
date: 2021-05-12 09:13:00+00:00
draft: false
title: Causalidad y paraísos fiscales

url: /2021/05/12/causalidad-y-paraisos-fiscales/
categories:
- estadística
tags:
- artículos
- causalidad
- economía
- impuestos
---




El argumento del artículo _[Paraísos Fiscales, Wealth Taxation, and Mobility](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3676031)_ pivota esencialmente sobre el gráfico







![](/wp-uploads/2021/05/causalidad_patrimonio_madrid.png)








que resultará familiar a muchos lectores de este blog (y, si no, mirad [esto](https://www.datanalytics.com/tag/causalimpact/)). Se trata de un estudio causal _de libro_ en el que se pretende medir el efecto de una política ocurrida en 2010 sobre la línea roja y la línea azul.







La política en cuestión es la reintroducción del impuesto del patrimonio en España en 2010 y las líneas azul y rojas... no está claro. Deberían ser, pretenden ser, el incremento de personas sujetas a dicho impuesto en Madrid (en rojo) y en otras regiones (azul). Los autores lo resumen diciendo que el número de ricos viviendo en Madrid ha subido en 6000 mientras que en el resto de las 16 regiones ha decrecido en una media de 375. Convenientemente, 16 * 375 = 6000.







La realidad está mucho más entreverada de problemas y opciones a la mano de los autores. El pie del gráfico reza algo así como







<blockquote>This figure shows the number of wealth tax filers in Madrid and the average number of wealth tax filers among the other sixteen regions of Spain. A wealth tax filer is an individual that has wealth in excess of 700,000 Euro in 2010 and who filed wealth taxes in 2007. The locations of filers are obtained by matching their 2007 administrative wealth tax records to personal income tax records. We can thus follow a re-weighted balanced sample of filers during the pre-reform (2005-2010) and post-reform period (2011-2015). We normalize each series to zero in 2010 and use the pre-decentralization data to remove group-specific trends, such that the figure shows the change in filers that is in excess of any pre-reform trends. The latter adjustment only changes the orientation of the lines.
>
> </blockquote>







Además, como reconocen los autores, no tienen cifras reales correspondientes al patrimonio de estos sujetos sino que los estiman indirectamente a partir de datos del IRPF.







Hay que felicitarlos para que, a pesar de todos los problemas encontrados y todas las opciones que han tenido y podido adoptar de la manera, por supuseto, más ecuánime posible, los resultados logrados hayan sido tan fotogénicos y acordes con los intereses que cabría esperar de ellos biografía en mano.







Hablando en serio, ¿tomarían las agencias del medicamento una vacuna en cuya memoria de resultados apareciesen unos gráficos en que los números no estuviese claro si se probaron en humanos o monos, si los resultados de la mitad de los sujetos se estimaron, si de una buena parte del grupo de control nunca más se supo, etc.? ¡Venga!







Una sección muy relevante del artículo es la 5.2, donde se describen las _revenue simulations_ (¡eh, al menos, las llaman simulaciones!) y estiman que el impacto de todo este trasiego a Madrid de rentistas ricachones es del _5% of total wealth tax revenue in 2015_, el 5% del total del impuesto del patrimonio en 2015, dejando como ejercicio para el lector averiguar a cuánto ascendió y dividir por 20. Pues [fueron 1003 millones de euros](https://www.bankinter.com/blog/finanzas-personales/recaudacion-impuesto-patrimonio-comunidades-autonomas-espana-lista), y su 5% son 50 millones, básicamente un orden de magnitud y pico por debajo de mi nivel de atención.







Se ve que 6k ricachones vinieron a Madrid para ahorrase entre ellos 8k euros al año de media, 700 euros al mes, mucho menos de lo que pagarán de más en Madrid por vivir la mitad de bien que en su provincia.







¿En serio?







Hablando de esto con un tipo, me dijo que bueno, el impacto en el impuesto del patrimonio es pequeño y que el impacto mayor (un orden de magnitud mayor, no recuerdo bien la cifra) está en el IRPF. Lo cual plantea la pregunta: si el impacto grande está en el IRPF, ¿por qué estudiar el impacto del impuesto del patrimonio —ridículamente pequeño— en lugar de, directamente, el impacto del otro?







Tengo pendiente leer _[Causal Inference: The Mixtape](https://mixtape.scunning.com/)_ una vez me libere de unos grilletes de oro que me atan a la silla. Es un libro moderno sobre inferencia causal dirigido específicamente a científicos sociales. A ver si una vez me pongo con ello tengo que venir a pedir excusas por haber errado de ignaro en esta entrada o si, por el contrario, aprendo más argumentos para chotearme del artículo que discuto en ella.



