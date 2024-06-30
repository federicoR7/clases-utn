//clase 17

class Mascota{
    constructor(nombre){
        this.nombre = nombre;
        this.adoptada = false;

    }
    //metodo
    adoptar(){
        this.adoptada = true;
    }
}


//funcion agregar mascota a la lista 

function agregarMascota(){
   const inputMascota = document.getElementById("nuevaMascota");
   const nombreMascota = inputMascota.value.trim();

   if(nombreMascota != ""){
    const nuevaMascota = new Mascota(nombreMascota);

    //crear elemento de la lista
    const elementoLista = document.createElement("li");
    elementoLista.textContent = nuevaMascota.nombre;
    if(nuevaMascota.adoptada){
        elementoLista.classList.add("adoptada")
    }

    //evento
    elementoLista.addEventListener("click", function(){
        nuevaMascota.adoptar();
        elementoLista.classList.add("adoptada")

    })
    const listaMascota = document.getElementById("listaMascotas");
    listaMascota.appendChild(elementoLista)
   }
}

const botonAgregarMascotas = document.getElementById("agregarMascota");
botonAgregarMascotas.addEventListener("click", agregarMascota)