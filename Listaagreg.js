document.addEventListener("DOMContentLoaded", () => {
    const botonAgregar = document.getElementById("Botonan");
    const inputTareas = document.getElementById("inputtar");
    const listaTareas = document.getElementById("Lista-tareas");
    const tareasBorradas = document.getElementById("Tareas-borradas");

    botonAgregar.addEventListener("click", () => {
        const valorInput = inputTareas.value.trim();

        if (valorInput === "") return;

        const liActivity = document.createElement("li");
        const textTareas = document.createTextNode(valorInput);
        liActivity.appendChild(textTareas);

        const botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Completado";
        botonBorrar.classList.add("btn-borrar");

        liActivity.appendChild(botonBorrar);
        listaTareas.appendChild(liActivity);

        botonBorrar.addEventListener("click", () => {
            liActivity.remove();
            const tareaBorrada = document.createElement("li");
            tareaBorrada.textContent = valorInput;
            tareasBorradas.appendChild(tareaBorrada);
        });

        inputTareas.value = "";
    });
});