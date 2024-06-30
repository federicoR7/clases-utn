

//lista vacía de super

const listaSuper = []
let coca = 1200
let fernet = 6000
let hielo = 2500


//funcien para agregar items

function agregarItems(){
    let item = prompt("agrega la opción que desees: A) CocaCoca B) Fernet C) Hielo");
    if(item === "a"){
        return coca 
    } else if(item === "b"){
        return fernet
    } else if (item === "c"){       
        return hielo
        }    
}



//bucle para agregar mas productos

let continuar = true
let sum2 = 0
while(continuar){
   // agregarItems()
     listaSuper.push(agregarItems())
    /*  sum2 +=  listaSuper [listaSuper.length - 1]
        
    console.log(sum2)   */
    continuar = confirm("desea agregar algo más?")   
}

    

//suma de productos
const cero = 0
 const suma = listaSuper.reduce((valorAnterior, valorNuevo)=>

    valorAnterior + valorNuevo , cero,);

alert("tu total es de $" + suma);
