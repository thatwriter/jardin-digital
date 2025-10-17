---
title: Clase 6 Ejercicios datos simples
---
Operación entre datos
```python
#Practica 7 tipo de datos simples
"""Escribe un programa que pregunte al usuario por el numero de horas
trabajadas y el coste por hora. Despues debe mostrar por pantalla
la paga que le corresponde. """
horas = float (input ("Introduce tus horas de trabajo: "))
costo = float (input ("Introduce lo que cobras por hora: "))
paga= horas*costo
print ("Tu paga es " + str (paga) )
```

## IMC
```python
#Practica 9 tipo de datos simples

"""Escribir un programa que pida al usuario su peso (en kg) y estatura

(en metros), calcule el indice de masa corporal

(IMC= peso/ (estatra*estatura)y lo almacene en una variable,

e imprima por pantalla la frase Tu indice de masa corporal es <imc> donde <imc>

es el indice de masa corporal calculado redondeado con dos decimales. """

  

peso = input("¿Cual es tu peso en kg? ")

estatura = input ("¿Cual es tu estatura en metros?")

imc = round (float (peso) /float (estatura) ** 2,2)

"""

La funcion incorporada round() toma como argumento un numero de coma flotante

y retorna un numero entero segun las reglas del redondeo.

round (1.4)

1

round (1.5)

  

2

  

Un segundo argumento indica la cantidad de digitos despues del punto respecto

de la cual se debe realizar la aproximacion.

round (1.539, 2)

1.54"""

print("Tu indice de masa corporal es " + str (imc) )
```

## Inversión Anual
```python
#Practica 11

"""Escribir un programa que pregunte al usuario una cantidad a invertir,

el interes porcentual anual y el numero de años, y muestre por pantalla

el capital obtenido en la inversion redondeado con dos decimales. """

cantidad = float (input ("¿Cantidad a invertir? "))

interes= float (input ("¿Interes porcentual anual? "))

años = int(input ("¿Años?") )

print("Capital final: " + str(round(cantidad * (interes / 100 + 1) ** años, 2)))
```

## Peso payasos y muñecas

```python
#Practica 12 tipo de datos simples

"""Una jugueteria tiene mucho exito en dos de sus productos:

payasos y munecas. Suele hacer venta por correo y la empresa

de logistica les cobra por peso de cada paquete asi que deben

calcular el peso de los payasos y munecas que saldran en cada paquete a demanda.

Cada payaso pesa 112 g y cada muneca 75 g.

Escribir un programa que lea el numero de payasos y munecas vendidos en el ultimo pedido

y calcule el peso total del paquete que sera enviado, """

  

peso_payaso = 112

peso_muñeca = 75

  

payasos = int (input ("Introduce el numero de payasos a enviar: "))

muñecas = int(input("Introduce el numero de munecas a enviar: "))

peso_total = peso_payaso * payasos + peso_muñeca * muñecas

print("El peso total del paquete es " + str (peso_total) )
```
## barras con descuento
```python
#Practica 14

"""Una panaderia vende barras de pan a 10.50 cada una.

El pan que no es el dia tiene un descuento del 60%.

Escribe un programa que comience leyendo el numero de barras vendidas

que no son del dia.

Después tu programa debe mostrar el precio habitual de una barra de pan,

el descuento que se le hace por no ser fresca y el coste final total. """

valor_barras = 10.5

descuento = 0.6

barras_anteriores = int(input("Ingrese la cantidad de barras que no son del día\n:"))

descuento = valor_barras*(descuento)*barras_anteriores

valor_final = valor_barras * barras_anteriores - descuento

print("El precio normal es de: ${}".format(valor_barras))

print("el descuento es de: ${}".format(descuento))

print("El precio final es de: ${}".format(valor_final))
```
