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
*/

//ejercicio 3

const marketList = []

let entrada = prompt("agregue su producto")

const listItem = marketList.push(entrada)

while(marketList.length ){
    prompt("que más desea agregar?")
}if(prompt = "nada"){
    alert("esta es tu lista")
}



console.log(marketList);








