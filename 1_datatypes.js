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


//ahora comparar el contenido de dichos arrays utilizando un bucle

var iguales=false;
for(let i =0; i<array1.length;i++){
    if(array1[i]!=array2[i]){

        iguales=false;
    }

}
console.log(iguales);



// crear un objeto "usuario", con tres propiedades
var usuario = {nombre:"Marco", edad:20, sexo:"Hombre"};
/* Operaciones con números */
//crear una constante para la gravedad y redondearla con el método Math.round
var GRAVEDAD=9.8;
console.log(Math.round(GRAVEDAD));
//incrementar una variable con otra variable con el operador  =+
n1=+n2;
console.log(n1);

//incrementar una variable con otra variable o número con el operador  +=, mostrar por pantalla la primera variable (la incrementada)

//eleva un número a otro utilizando **
console.log(n3**n4);
//eleva un número a otro utilizando un bucle
var n5=1;
for(var i=0;i<n4;i++){
    n5=n5*n3;

}
console.log(n5);
// generar un número aleatorio del 0 al 100
console.log(Math.round(Math.random()*100));
console.log(Math.random().toFixed(2)*101);
var clo=
// genera un array de 10 números aleatorios del 0 al 100 y muestra el máximo y mínimo
array=[];
for(var i=0;i<10;i++){
    array.push(Math.round(Math.random()*100));
}
console.log(array);
var maxNumber=array[0];
var minNumer=array[0];
for(var i=0;i<10;i++){
    if(array[i]<minNumer){
        minNumer=array[i];
    }

    if(array[i]>maxNumber){
        maxNumber=array[i];
    }

}

console.log("El mas pequeño es: " + minNumer + " y el mas grande es: "+ maxNumber);

// lo mismo que el anterior, pero usando las funciones Math.min y Math.max
console.log("El mas pequeño es: " + Math.min.apply(null,array)+ " y el mas grande es: "+ Math.max.apply(null,array));
/* Operaciones con strings */
//crear una cadena de caracteres y convertirla a mayúsculas y minúsculas con los métodos predeterminados destinados para ello
cadena.toUpperCase;
console.log(cadena);
cadena.toLowerCase;
console.log(cadena);

//reemplazar Pascal por Javascript en la frase "Pascal es un lenguaje de programación moderno"
var frase = "Pascal es un lenguaje de programación moderno";

console.log(frase.replace('Pascal','JS'));
//crear una variable con frase/cadena de caracteres y comprobar la longitud
console.log(frase.length);
//eliminar "script" de la palabra Javascript con el método substr

console.log(frase.substr("script"));
//comprueba si la frase "Espero que esto me sirva para algo" contiene la palabra "algo"
