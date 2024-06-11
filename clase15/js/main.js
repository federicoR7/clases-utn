/* 
let pasos = 100;
while (pasos > 1){
    document.write("te quedan: " , pasos, " por caminar" , "<br>");
    pasos = pasos - 1;
} if (pasos == 1){
    document.write("te queda ", pasos, " por caminar");
}
*/


//ejercicio 1

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let paresOImpares = numeros.map((numero) =>{
    if(numero % 2 === 0){
        console.log(numero, "es par");
    } else {
        console.log(numero, "es impar");
    }
})
/* 
const parImpar = numeros.map((x)=> x % 2);
if(parImpar == 0){
    console.log(numeros, "es par");
} else if(parImpar == 1){
    
}*/

