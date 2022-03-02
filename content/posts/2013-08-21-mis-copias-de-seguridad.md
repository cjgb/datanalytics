---
author: Carlos J. Gil Bellosta
date: 2013-08-21 07:14:31+00:00
draft: false
title: Mis copias de seguridad

url: /2013/08/21/mis-copias-de-seguridad/
categories:
- programación
tags:
- programación
- linux
- shell script
- backups
---

Por referencia mía y de otros, voy a dejar acá escrito y explicado cómo gestiono mis copias de seguridad. Porque los discos duros se rompen y los ordenadores desaparecen. Etc.

Primero, mi instalación: tengo un ordenador _de bajomesa_ (`tiramisu`) y un _netbook_ (`kropotkin`). Ambos corren la misma versión de Xubuntu, la última estable.

Mi primera línea de defensa contra las pérdidas de información es la sincronización de ambas máquinas. Aquellos directorios que contienen cosas que no quiero perder (documentos, fotos, código, ¡copias de seguridad de otras máquinas, incluido esto que lees ahora!, cosas que no son documentos en desarrollo, etc.) se guardan en el directorio `.bck` de ambos ordenadores. Los directorios que veo son enlaces blandos (vía `ln`) a subdirectorios de `.bck`.

`tiramisu` es máster; `kropotkin `esclavo. Para sincronizar ambos, desde el segundo, periódicamente, ejecuto

{{< highlight R >}}
rsync -av -e "ssh -l carlos" --delete \
carlos@192.168.0.192:/home/carlos/.bck/ .bck
{{< / highlight >}}

Más interesante es cómo consigo mantener varias copias completas de los ~60GB de ficheros de `/home/carlos` en un disco duro extraíble de 160GB. De hecho, tengo dos copias anuales (junio y diciembre) desde el 2007 y algo así como mensuales durante el último año. Diríase que no caben, salvo que uno haga uso de los enlaces duros (vía, de nuevo, `ln`): guardo una única copia física de cada fichero, pero cada copia temporal contiene todos los ficheros.

Es decir, aquella foto mía de 2007 parece estar más de 15 veces en 15 directorios distintos, pero existe una única copia de sus contenidos en el disco. Y solo se desaparecerá cuando se borren todas ellas. Tal es la magia de los enlaces duros.

En términos prácticos, lo consigo de la siguiente manera. El disco duro externo tiene dos directorios:

* `folders`, que contiene directorios con marcas temporales (p.e., carlos_20130815). Cada uno de ellos contiene una copia exacta de mi `home` en la fecha en cuestión.
* `files`, un directorio que contiene únicamente ficheros y cuyo nombre es su _hash_ (vía _md5sum_).

Los ficheros de los directorios contenidos en `folders` son enlaces duros al fichero correspondiente en `files`. El código que utilizo para generar una nueva copia de seguridad hace lo previsible:

* Crear una nueva estructura de directorios debajo de `folders`.
* Calcular el _hash _de cada fichero de mi `home`.
* Buscarlo en `files` y, dependiendo de si lo encuentra o no, copiarlo y enlazarlo o únicamente enlazarlo.

Es decir:

{{< highlight R >}}
#!/bin/bash

# Variable definitions

origen=/home/carlos
destino=/media/disk-2/bck/folders/carlos_`date +%Y%m%d`
prevbck=/media/disk-2/bck/folders/`ls -t | head -1`
files_dir=/media/disk-2/bck/files2

test -d ${files_dir} || ( echo "Destination file does not exist" ; exit 2 )

cd $origen

# Creating dir structure
find . -type d -exec mkdir -p ${destino}/{} \; 2> /tmp/bck.log

function process_file {
    file=$1

    file_dest="$destino/${file}"
    file_prev="$prevbck/${file}"

    if [ -e "$file_prev" ]
    then
        if [ "$file" -ot "$file_prev" ]
        then
            ln "$file_prev" "${file_dest}"
            return 1
        fi
    fi

    # calculo el hash de cada fichero
    # creo un nombre de fichero "igual" al hash
    # pero reservo el 1er caracter del hash como nombre de directorio
    # motivo: directorios con +100k ficheros tienen mal rendimiento
    file_hash=`md5sum "$file" | cut -f1 -d" " | sed -e "s;\(.\)\(.*\);\1/\2;"`
    file_hash="${files_dir}/${file_hash}"

    if [ -e "${file_hash}" ]
    then
        ln "${file_hash}" "${file_dest}" &
    else
        cp "$file" "${file_dest}"
        ln "${file_dest}" "${file_hash}" &
    fi
}

find . -type f -name '*' -not -user root 2> /tmp/bck.log \
    | while read file
do
    echo $file >> /tmp/borrar
    process_file "$file"
done

exit 0
{{< / highlight >}}

El proceso tiene dos caveats. El primero es que estoy expuesto a [colisiones de _hash_](http://en.wikipedia.org/wiki/Collision_(computer_science)), algo que tengo sin solucionar y que me hace vivir peligrosamente. De hecho, me llena de orgullo eso de ser una persona tan sumamente sofisticada que uno de mis problemas potenciales sea explícitamente una colisión de _hash_.

La segunda y más seria es que mantener +100k ficheros en un disco formateado con `ext3` hace que se degrade el rendimiento de los `ls` y comandos similares. La solución que he ideado recientemente —aunque reconozco que igual debería probar con otro sistema de ficheros más avanzado que `ext3`— consiste en utilizar el primer dígito del _hash_ como nombre de directorio (de manera que en `files` no tengo 100k ficheros sino 16 directorios (con nombres `0`-`f`) con menos de 10k ficheros en promedio. Por eso la línea

{{< highlight bash >}}
file_hash=`md5sum "$file" | cut -f1 -d" " |
sed -e "s;\(.\)\(.*\);\1/\2;"`
{{< / highlight >}}

en mi código es marginalmente más complicada que la original.

Limpio, cómodo y sencillo, creo.
