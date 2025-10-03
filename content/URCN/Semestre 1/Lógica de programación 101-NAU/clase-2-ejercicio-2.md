---
title: Ejecución hasta que el usuario quiera, y crédito por antigüedad
---
```PSeInt
Algoritmo sin_titulo
	definir finalizar Como Logico
	definir tiempo Como Entero
	definir continuar Como Caracter
	finalizar = Falso
	5*3
	Mientras finalizar = Falso Hacer
		Escribir "Ingrese la antigüedad en años: "
		Leer tiempo
		Si tiempo > 10 Entonces
			escribir "El crédito aprobado es de $1,000,000.00 "
		SiNo
			escribir "El crédito aprobado es de $500,000.00"
		Fin Si
		Escribir "Desea continuar: 1- si "
		Escribir "No - Cualquier tecla"
		Leer continuar
		Si continuar = "1" Entonces
			Escribir "Continuar"
		SiNo
			Escribir  "Se finalizó el programa"
			finalizar = Verdadero
		Fin Si
		
	Fin Mientras
FinAlgoritmo

```