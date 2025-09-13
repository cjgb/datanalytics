---
author: Carlos J. Gil Bellosta
categories:
- estadística
- probabilidad
date: 2011-08-22 07:55:14+00:00
draft: false
lastmod: '2025-04-06T18:53:54.172022'
related:
- 2011-10-04-puedes-probar-cualquier-cosa-con-paciencia.md
- 2023-09-07-problema-modelos-bayesianos-identicabilidad.md
- 2014-06-24-causalidad-a-la-pearl-y-el-operador-do.md
- 2022-01-20-peor-pagina-taleb.md
- 2010-10-25-una-solucion-al-problema-de-la-separacion-perfecta-con-regresiones-logisticas.md
tags:
- estadística
- probabilidad
- feller
- mala ciencia
title: Si Feller levantase la cabeza...
url: /2011/08/22/si-feller-levantase-la-cabeza/
---

Tengo un amigo físico que trabaja supervisando el funcionamiento una máquina de radioterapia. Se dedica, esencialmente, a achicharrar células cancerígenas con chorros de radioactividad. Me contaba recientemente cómo hay pacientes que responden positivamente y cómo con otros con un perfil similar, aun sometidos a dosis de radioactividad muy superiores, no hay forma humana de hacer que el tumor remita. Éste y muchos otros casos análogos hacen pensar a la comunidad médica que no hay enfermedades sino enfermos y que los remedios que bien valen para uno, pueden no valer para otro.

¿Dónde pueden residir esas diferencias? Hay quien piensa que en el perfil genético: en el artículo [_Genomic signatures to guide the use of chemotherapeutics_](http://www.nature.com/nm/journal/v12/n11/full/nm1491.html) de A. Potti (et al.) se plantea el uso de indicadores genéticos para distinguir aquellos pacientes que responden a un determinado tratamiento de los que no. El objetivo final consiste en poder determinar de antemano cuál es el tratamiento más adecuado para un paciente concreto a partir de métodos de clasificación derivados de su perfil genético.

El proceso pues es relativamente simple:

1. Estudiar una población de pacientes tratados con un determinado procedimiento distinguiendo los que respondieron positivamente del resto.
2. Buscar patrones genéticos que distingan a los unos de los otros.

Se han publicado algunos artículos en que se estudian estos problemas de clasificación. Son relevantes, muy relevantes, porque pueden determinar qué tratamiento debe aplicarse a un determinado paciente. Hay vidas en juego. Tan relevantes son que K. Baggerly y K. Coombes se tomaron la molestia de estudiar unos cuantos de ellos para ver hasta qué punto los datos y procedimientos estadísticos empleados sostenían sus conclusiones. En un ejercicio que denominan _bioinformática forense_ los autores trataron de rehacer los métodos estadísticos y los cálculos, desde los datos brutos (que suelen ser públicos) hasta las conclusiones finales por ver hasta qué punto son fiables.

No sé si el artículo que escribieron al respecto,[ _Deriving chemosensitivity from cell lines: forensic bioinformatics and reproducible research in high-throughput biology_](http://projecteuclid.org/DPubS?service=UI&version=1.0&verb=Display&handle=euclid.aoas/1267453942) es divertido o preocupante. Describen varios estudios en las que las etiquetas (el tratamiento funciona / no funciona) fueron confundidas, por lo que sus conclusiones deberían ser las contrarias de las enunciadas por sus autores, y otros errores igualmente serios. Denuncian la opacidad de los estudios y el escaso detalle que ofrecen sobre los métodos empleados, que dificulta la detección de los errores.

Y mencionan un caso que es con el que quiero amenizar a mis lectores. En ocasiones, los tratamientos se administran de manera combinada. A un paciente no se lo trata con un único fármaco sino con una combinación de ellos. Conocida la _probabilidad_ de que responda aun determinado tratamiento, ¿cuál sería la de que responda a una combinación de ellos?

[![](/wp-uploads/2011/08/probability_combination.png#center)
](/wp-uploads/2011/08/probability_combination.png#center)

En los artículos se consideran varios fármacos: T, F, A, C y E. Conocidos P(T), P(F), P(A), P(C) y P(E) para cada paciente, ¿cuál sería, por ejemplo P(TFAC), la probabilidad de éxito de un tratamiento que combine T, F, A y F? En el artículo se menciona (la traducción y el subrayado son míos) que

>En los casos en que se necesita conocer la probabilidad de sensibilidad a una combinación de tratamientos en función de las de cada uno de los que lo componen, usamos el _teorema para las probabilidades combinadas_ descrito por William Feller.

Los bioinformáticos forenses trataron de identificar cuáles eran esas fórmulas de Feller que habían sido usadas en el artículo y las descubrierion que se usaron las siguientes:

$$P( TFAC ) = P( T ) + P( F ) + P( A ) + P( C ) - P( T )P( F )P( A )P( E )$$
$$P( TET ) = P( ET ) = max( P( E ), P( T ) )$$
$$P( FEC ) = 0.625 * ( P( F ) + P( E ) + P( C ) ) - 0.25$$


¡Si Feller levantase la cabeza...!

Coda: tras un par de correcciones, [el artículo de Potti fue finalmente revocado](http://www.nature.com/nm/journal/v12/n11/full/nm1491.html).