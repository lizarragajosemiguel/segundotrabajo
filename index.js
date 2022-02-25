//Punto 2
let numeroUno = prompt ("Ingrese un numero");
let numeroDos = prompt ("Ingrese otro numero");
let numeroTres = prompt ("Ingrese el ultimo numero");

let mayor = Math.max (numeroUno, numeroDos, numeroTres);
console.log ("El numero mayor que has ingresado es " + mayor);
let menor = Math.min (numeroUno, numeroDos, numeroTres);
console.log ("El numero menor que has ingresado es " + menor);


//Punto 3
let saludo = "Hola mundo!"

function bienvenida (){
    console.log (saludo);
    alert (saludo);
}