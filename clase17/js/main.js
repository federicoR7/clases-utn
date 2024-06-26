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
        //elementoLista.classList.add("adoptada")
        elementoLista.addEventListener("click", this.remove) //consultar profe por que tengo que hacer doble click para que se elimine 


    })
    const listaMascota = document.getElementById("listaMascotas");
    listaMascota.appendChild(elementoLista)
   }
}

const botonAgregarMascotas = document.getElementById("agregarMascota");
botonAgregarMascotas.addEventListener("click", agregarMascota)


 /** Clase 17: Funciones y DOM */
/**
class Mascota{
    constructor(nombre){
      this.nombre = nombre;
      this.adoptada = false;
    }
    //Método 
    adoptar(){
      this.adoptada = true;
    }
  } */
  /* 
  const inputMascota = document.getElementById("nuevaMascota");
  const nombreMascota = inputMascota.value.trim();
  console.log(inputMascota);
  console.log(nombreMascota);
    */
  
  
  /** 
  //Funcion para agregar mascota a la lista 
  function agregarMascota(){
    const inputMascota = document.getElementById("nuevaMascota");
    const nombreMascota = inputMascota.value.trim();
  
    if(nombreMascota != ""){
      const nuevaMascota = new Mascota(nombreMascota);
      //Crear el elemento de la lista
      const elementoLista = document.createElement("li");
      elementoLista.textContent = nuevaMascota.nombre;
      
      // Botón para eliminar 
      const botonEliminar = document.createElement("span");
      botonEliminar.textContent = " Eliminar";
      botonEliminar.classList.add("eliminar");
  
      //Evento para eliminar 
      botonEliminar.addEventListener("click", function(){
        elementoLista.remove();
      })
  
  
  
          // Agregar clase si la mascota está adoptada
      if (nuevaMascota.adoptada){
        elementoLista.classList.add("adoptada")
      }
  
      //Evento para indicar que fue adopatada
      elementoLista.addEventListener("click", function(){
        nuevaMascota.adoptar();
        elementoLista.classList.add("adoptada")
  
      });
  
      //Evitar que el evento de adoptada se dispare al hacer click en eliminar
      botonEliminar.addEventListener("click", function(event) {
        event.stopPropagation();
      });
  
      elementoLista.appendChild(botonEliminar);
      const listaMascota = document.getElementById("listaMascotas"); 
      listaMascota.appendChild(elementoLista)
  
      inputMascota.value = ""; //Limpia el input después de agregar mascotas
    }
  }
  
  
  const botonAgregarMascotas = document.getElementById("agregarMascota");
  botonAgregarMascotas.addEventListener("click", agregarMascota);
  
  //permitir agregar mascota al presionar enter
  document.getElementById("nuevaMascota").addEventListener("keyup", function(event) {
    if(event.key === "Enter"){
      agregarMascota();
    }
    
  })
 */