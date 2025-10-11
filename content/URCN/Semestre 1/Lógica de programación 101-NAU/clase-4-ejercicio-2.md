---
title: Clase 4 Ejercicio 2
---
Se desea registrar las ventas realizadas a diferentes
clientes. Los descuentos otorgados en cada venta son
los siguientes:
- Si la venta es menor a 500 no hay descuento.
- Si la venta es igualo mayora $500 .- y menos de
$1000 .- se otorga un 10% de descuento.
. Si la venta es igualo mayor que $1000 .- y menos de
$2000 .- se otorga un 20%
- Si es igual o mayor de $2,000 .- se otorga un 30% de
descuento.
Se deben proporcionar el nombre del cliente, clave de
articulo, cantidady precio unitario.
Calcular el importe, el descuento, subtotal, el i.va. y
el monto a pagar.
Despues de cada cliente se debe preguntar si se
desea seguir calculando a mas clientes.

```PSeInt
Algoritmo C4E2
	definir nombre Como Caracter
	Definir nombre, continuar_p, deseo Como Caracter
	Definir total, cantidad, precio, descuento Como Real
	Definir continuar, salir_p Como Logico
	continuar = Verdadero
	Mientras continuar Hacer
		Escribir "Ingrese el nombre del cliente"
		Leer nombre
		total = 0		
		salir_p = Verdadero
		Mientras salir_p Hacer
			Escribir "Para capturar un producto, ingrese el código, para salir ingrese s"
			Leer continuar_p
			Si continuar_p = "s" Entonces
				salir_p = Falso
			SiNo
				Escribir "Ingrese la cantidad"
				Leer cantidad
				Escribir "Ingrese el precio unitario"
				Leer precio
				total = total + (cantidad * precio)
			FinSi
		Fin Mientras
		Si total>=2000 Entonces
			descuento = 0.3
		SiNo
			si total >=1000 Entonces
				descuento = 0.2
			SiNo
				si total > 500 Entonces
					descuento = 0.1
				SiNo
					descuento = 0
				FinSi
			FinSi
		FinSi

		Escribir "Importe: ", total
		si descuento>0 Entonces
			Escribir "Descuento: ", descuento*100, "%"
			total = total * (1-descuento)
			Escribir "Subtotal: ", total
		SiNo
			Escribir "Subtotal: ", total 
		FinSi
		Escribir "IVA: ", total *1.16
		total = total *1.16
		Escribir "Monto a pagar: ", total
		Escribir "Desea continuar s:si,cualquier otra tecla: no "
		Leer deseo
		Si deseo = "s" Entonces
			continuar= Verdadero
		SiNo 
			continuar = Falso
		FinSi
	Fin Mientras
FinAlgoritmo

```
