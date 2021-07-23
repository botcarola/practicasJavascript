// CAMBIO DE COLOR

const rojo = document.getElementById("rojo")
console.log(rojo)
rojo.style.color = "red"
rojo.style.fontWeight = "bolder"


const azul = document.getElementById("azul")
console.log(azul)
azul.style.color = "blue"
azul.style.fontSize = "100px"

// CAMBIO DE RESOLUCIÓN DE IMAGEN

const imagen = document.querySelector ("img")
console.log(imagen)
imagen.style.width = "1000px"
imagen.style.height = "1000px"


// CAMBIO DE CAJA

const caja = document.getElementById ("caja")
console.log(caja)
caja.style.width = "600px"
caja.style.height = "600px"
caja.style.fontSize = "100px"
caja.style.border = "6px solid red"

// CAJA ONCLICK 

 const cambiarCajaColorVerde = () =>{
     if  ( caja.style.border = "6px solid red" ) {
         caja.style.border = "6px solid green"
         caja.textContent = "CAMBIÉ"
    
 }  
} 

caja.onclick = cambiarCajaColorVerde

 
 

// ABRIR Y CERRAR MODAL

const modal = document.getElementById("modal")
const abrirModal = document.getElementById ("boton")


const mostrarModal = () =>{
  modal.style.display = "block"
}

abrirModal.onclick = mostrarModal 



const botonCerrarModal = document.getElementById ("cerrar")

const cerrarModal = () => {
    modal.style.display = "none"
}

botonCerrarModal.onclick = cerrarModal



