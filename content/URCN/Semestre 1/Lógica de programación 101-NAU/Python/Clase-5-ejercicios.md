---
title: Datos simples
---
## Datos simples: Comentarios
```python
#Esto es un comentario

'''Esto es un comentario compuesto

Varias líneas

'''

print("Hola universidad Rosario Castellanos plantel Naucalpan")
```
## Declarar Variable
```python
mensaje = "Hola mundinyo"
print(mensaje)

print("adios")
```
## Solicitar Nombre 
```python
nombre = input("Ingrese su nombre: ")

print("¡Hola "+ nombre + "!")
```
alternativo
```python
nombre = input("Ingrese su nombre:\n")

print("Hola {}, Bienvenido".format(nombre))
```

## Imprimir nombre n veces
```python
#Práctica 4 tipo de datos simples

"""Escribir un programa que pregunte el

nombre del usuario en la consola

y un numero entero e imprima por pantalla en

lineas distintas el nombre del

usuario tantas veces como el numero introducido. """

  

n = input ("Introduce un numero entero: ")

name = input ("¿Como te llamas? ")

print( (name + "\n") * int(n) )
```

## Nombre y largo del texto
```python
#Practica 5 tipos de datos simples

"""Escribir un programa que pregunte el nombre del usuario en la consola

y despues de que el usuario lo introduzca muestre por pantalla

el nombre en mayusculas y el numero de caracteres que contiene

en lineas distintas. """

  

name = input ("¿Como te llamas? ")

print(name. upper() + " tiene " + str(len(name) ) + " letras")
```

## Operaciones

```python
#Práctica 6
"""Escribir un programa que realice la siguiente
operación aritmetica (3+2/2*5)2 ."""
print(((3+2)/(2*5)) ** 2)
```