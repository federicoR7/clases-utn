/* 
let pasos = 100;
while (pasos > 1){
    document.write("te quedan: " , pasos, " por caminar" , "<br>");
    pasos = pasos - 1;
} if (pasos == 1){
    document.write("te queda ", pasos, " por caminar");
}



//ejercicio 1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let paresOImpares = numeros.map((numero) =>{
    if(numero % 2 === 0){
        console.log(numero, "es par");
    } else {
        console.log(numero, "es impar");
    }
})


//ejercicio 2

const nombres = ["fede", "matías", "fernando", "nico", "agus", "lautaro"]

const nombresCortos = nombres.filter((cortos) => cortos.length <= 5);
console.log(nombresCortos);


//ejercicio 3

const marketList = []

let entrada = prompt("agregue su producto")

const listItem = marketList.push(entrada)

while(marketList.length ){
    prompt("que más desea agregar?")
}if(prompt = "nada"){
    alert("esta es tu lista")
}


 



let frutas =["frutilla", "pera", "limón", "mora", "kiwi"];

console.log(frutas[0].length);

frutas[1].lenght;
frutas[2].lenght;
frutas[3].lenght;
frutas[4].lenght;



let i = 0

while(i <= 15){
    console.log("el valor de i = " + i);
    i=i++;
}
    

let numero = 100;
while(numero > 0){
    document.write("te queda de saldo: ", numero, "<br>");
    numero = numero - 5;
}


let i = 0;
do{
    console.log("valor de i: ", i);
    i=i + 1;
} while(i < 5);
+


let pasos = 100
while( pasos >= 2){
    document.write("te faltan ", pasos, " pasos por caminar", "<br>");
    pasos = pasos - 1
} if (pasos === 1){
    document.write("te falta un paso por caminar!");
}


for (let i = 1; i <= 5; i++){
    let ingresarNombre = prompt("ingresa tu nombre");
    alert("turno nro. " + i + " Nombre: " + ingresarNombre);
}


let frutas =[
    "manzana",
    "pera",
    "frutilla",
    "pera",
    "mora",
    "limon",
    "kiwi",
];

for(let i = 0; i <= frutas.length; i++){
    let fruta = frutas[i];
    console.log(fruta, " tiene ", fruta.length, "letras")
}
    





let sepas = ["ak47", "girl scout cookies", "sour diesel", "og kush"];


sepas.forEach(function(sepas, indice){
    console.log("la sepa con forEach es: ", sepas, indice);
})

sepas.forEach((sepas, indice) =>
    console.log("la sepa con forEach con funcio flecha es: ", sepas, indice))



const numeros = [1, 2, 3, 4, 5, 6, 10];
const porDos = numeros.map((x) => x*2);
const porCien = numeros.map((x) => x*100);

console.log(numeros);
console.log("por dos", porDos);
console.log("por cien", porCien);
*/

