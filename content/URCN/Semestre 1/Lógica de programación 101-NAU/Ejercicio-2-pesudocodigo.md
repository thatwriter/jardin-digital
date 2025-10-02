---
title: Revisar las letras ingresadas y mostrar letra incorrecta en todas menos c y en "c" decir gracias
---
```PSeInt
Algoritmo sin_titulo
	Definir letra Como Caracter
	Mientras letra <> "c" Hacer // < > se escribe como <> 
		escribir "ingresa una letra"
		leer letra
		si letra <> "c" Entonces // <> se escribe como ! =
			escribir "letra incorrecta"
		FinSi
	Fin Mientras 
	Escribir "gracias"
	
FinAlgoritmo
```