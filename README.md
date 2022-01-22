# Markdown Links &#127800;
Es una librería que sirve para devolver el número de enlaces que contiene un archivo MD, permitiendo ver a su vez  estadísticas sobre:&#10004; total de links.&#10004; links únicos. &#10004;links rotos.

## ✔️1. Instalación
Mediante npm:

 &#10004; npm i anakarina-links

## ✔️2. Guia de uso

Esta aplicación se puede ejecutar a través de la terminal:

md-links <path-to-file> [options]

### ejemplo:

`md-links <ruta>` 

![md-links](imagenes/mdlinks_1.png)

### Options

`md-links <ruta> [options]`

--validate o -v

 &#10004;validara cada link dentro del archivo. &#10004;obtiene ruta del archivo href.  &#10004;mensaje de OK o FAIL. &#10004;estado del link y texto.

 ![md-links-status](imagenes/status-de-links.png)

 --stats o -s

 &#10004;para obtener el total de links. &#10004;cantidad de links únicos. &#10004;links rotos.

 
 ![md-links-stats](imagenes/stats.png)

 --validate --stats 

 &#10004;podras tener toda la informacion junta.

 ![md-links-v&s](imagenes/mdlinks_2.png)

## ✔️3. Autora

Ana karina González López.&#128151;







