document.getElementById("agregar").addEventListener("click", function() {
    // Obtener la referencia al botón
    const botonAgregar = document.querySelector(".buy-btn");
    
    // Eliminar el botón del DOM antes de guardar el contenido
    botonAgregar.remove();

    // Obtener el HTML del main sin el botón
    const mainContent = document.querySelector("main").innerHTML;
    
    // Guardar en el almacenamiento local
    localStorage.setItem("menuFavorito", mainContent);
    
    alert("¡Menú agregado a favoritos!");
});