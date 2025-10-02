---
title: sumas y promedios de autos nacionales, importados y total
---
 ```Pseint
Algoritmo sin_titulo
	Definir precio,precios_nacionales, precios_importados, precios_totales como Real
	Definir promedio_nacionales, promedio_importados, promedio_total Como Real
	Definir contador, nacionales, importados Como Entero
	Definir origen como caracter
	
	Para contador<-1 Hasta 2 Con Paso 1 Hacer
		Escribir "Captura el precio del auto"
		Leer precio
		Escribir "Origen del auto: n - Nacional, i - Importado "
		Leer origen
		Si origen = "n" Entonces
			nacionales = nacionales + 1
			precio_nacionales = precio_nacionales + precio
		SiNo
			importados = importados + 1	
			precio_importados = precio_importados + precio
		Fin Si
		
	Fin Para
	precios_totales = precio_importados + precio_nacionales
	promedio_nacionales = precio_nacionales / nacionales
	promedio_importados = precio_importados / importados
	promedio_total = precios_totales / (nacionales + importados)
	Escribir "promedio de autos nacionales: " , promedio_nacionales
	Escribir "promedio de autos importados: " , promedio_importados
	Escribir "promedio de autos totales: " , promedio_total
FinAlgoritmo
```
