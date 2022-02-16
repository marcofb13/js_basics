console.log("1.datatypes: 👋 Bienvenidos, en este fichero se harán ejercicios sobre los tipos de datos");

/* Datos primitivos y no primitivos*/
//crear dos variables con el mismo contenido y comparar si ambas son iguales
var n1=0;
var n2=0;
if(n1==n2){
    console.log(true);
}else{
    console.log(false);
}
//crear dos variables con el distinto contenido y comparar si ambas son iguales
var n3 = 3;
var n4 = 5;
if(n3==n4){
    console.log(true);
}else{
    console.log(false);
}
//crear una variable de tipo string y otra de tipo int, ambas con el mismo valor numérico. Compararlas para ver si contienen el mismo valor
var cadena = "3";

if(cadena==n3){
    console.log(true);
}else{
    console.log(false);
}
//utilizar las mismas variables del ejercicio anterior y realizar una comparación estricta
if(cadena===n3){
    console.log(true);
}else{
    console.log(false);
}
//crear dos arrays con el mismo contenido y comparar con "==" si ambos arrays son iguales
var array1 =[1,2,3];
var array2 =[1,2,3];

if(array1==array2){
    console.log(true);
}else{
    console.log(false);
}



// crear un objeto "usuario", con tres propiedades
var usuario = {nombre:"Marco", edad:20, sexo:"Hombre"};
/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
var GRAVEDAD=9.8;
console.log(Math.round(GRAVEDAD));
//incrementar una variable con otra variable con el operador  =+
n1=+n2;
console.log(n1);

//eleva un número a otro utilizando **
console.log(n3**n4);
//eleva un número a otro utilizando un bucle
var n5=1;
for(var i=0;i<n4;i++){
    n5=n5*n3;

}
console.log(n5);
// generar un número aleatorio del 0 al 100

// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max

/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"

//crear una variable con frase/cadena de caracteres y comprobar la longitud

//eliminar "script" de la palabra Javascript con el método substr

//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
