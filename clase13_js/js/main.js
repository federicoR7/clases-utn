/*variable con nombre*/

/*variables*/

/*let nombre="Federico"; //string
console.log(nombre);

let apellido="Rabanedo";
console.log(apellido);

let edad="26" //numerica
console.log(edad);

let tenerMascotas= true; //boleana
console.log(tenerMascotas);

//operaciones simples

let numeroA= 3;
let numeroB=5;
let resultadoSuma= numeroA + numeroB;

console.log(resultadoSuma);
console.log(numeroA + numeroB);

let nombreLet="fulano";
let apellidoLet="mengano";
const espacio=" ";

let nombreCompleto= nombreLet + espacio + apellidoLet;

console.log(nombreCompleto);

//prompt
let entrada= prompt("ingrese su nombre");
let salida="hola " + entrada;
alert(salida);

let numero=parseInt(prompt("ingrese su número"));
const numeroCons=30;

let salidaNumero=numero + numeroCons;
alert(salidaNumero);

//ejercicio clase 
let entradaPrueba=prompt("ingrese su nombre");
let salidaPrueba="hola " + entradaPrueba+"!";
alert(salidaPrueba);

let numeroPrueba=parseInt(prompt("ingresa un número"));
const numeroConsPrueba= 1;

let salidaNumeroPrueba= numeroPrueba + numeroConsPrueba;
alert(salidaNumeroPrueba);

let entradaAnimal=prompt("escribí un animal");
let salidaAnimal=prompt("escribí un color");
const espacioAnimal=" ";
let respuestaAnimal=entradaAnimal + espacioAnimal + salidaAnimal;
alert(respuestaAnimal);*/

//arrays unidimencionales

/*let numeros = [1, 2, 3, 5, 8];
console.log(numeros[1]);

let colores = ["rojo", "verde", "azul"];
console.log(colores[0]);*/

//arrays multidimencionales

/*let colorMascotas = [
    ["perro", "amarillo", "verde", "rojo"],
    ["gato", "violeta", "celeste"],
    ["pez", "naranja"],
    ["elefante", "azul"],
];

console.log(colorMascotas[1][2]);
console.log(colorMascotas[1][1].length);*/

//Objeto utilizado como array asociativo 
/*let persona = {
    nombre: "Juan",
    edad: 32,
    profesion: "Desarrollador"
  };
  
  console.log(persona["nombre"]);
  console.log(persona.edad);
  
  let empleados = [
  { nombre: "Juan", edad: 32, profesion: "Desarrollador" },
  { nombre: "Cosme", edad: 22, profesion: "Tester" },
  { nombre: "Pepito", edad: 42, profesion: "Frontend" },
  ];
  
  console.log(empleados[1].nombre);*/


/* let empleadas=[
   {nombre: "alejandra", edad: 30, tecnica: "manicura"},
   {nombre:"manuela", edad: 27, tecnica: "pedicura"},
   {nombre:"vanesa", edad:29, tecnica: "esculpidas"},
];
console.log(*/

/*let entrada = prompt("cual es tu nombre?");
const espacio = " ";
let salida = "hola " + espacio + entrada + "!";
alert(salida);*/


console.log(new Date().getDay());
let dia = new Date().getDay()
switch (dia) {
  case 1:
    dia = "lunes"
    console.log("hoy es", dia)
    break;
  case 2:
    dia = "martes"
    console.log("hoy es", dia)
    break;
  case 3:
    dia = "miercoles"
    console.log("hoy es", dia)
    break;
  case 4:
    dia = "jueves"
    console.log("hoy es", dia)
    break;
  case 5:
    dia = "viernes"
    console.log("hoy es", dia)
    break;
  case 6:
    dia = "sabado"
    console.log("hoy es", dia)
    break;
  case 0:
    dia = "domingo"
    console.log("hoy es", dia)
    break;



}