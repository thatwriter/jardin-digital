---
title: Suma de <50, >=50 && <70, >70
---
```PSeInt
Algoritmo menores_50_medio_mayores_70
	definir peso Como Real
	definir men_50, may_50, may_70 Como Entero
	
	Para contador <- 1 Hasta 10 Con Paso 1 Hacer
		Escribir "Ingrese el peso del alumno número :", contador
		Leer peso
		Si peso < 50 Entonces
			men_50 = men_50 + 1
		SiNo
			Si peso >= 70 Entonces
				may_70 = may_70 + 1
			SiNo
				may_50 = may_50 + 1
			Fin Si
		Fin Si
	Fin Para
	Escribir "Hay :", men_50 , " alumnos menores de 50 kg"
	Escribir "Hay :", may_50 , " alumnos entre de 50 y 69 kg"
	Escribir "Hay :", may_70 , " alumnos mayores de 70 kg"
	
FinAlgoritmo
```