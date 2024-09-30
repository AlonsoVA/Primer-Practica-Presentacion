const BotonAgregar = document.getElementById("Botonan");
const input_tareas = document.getElementById("inputtar");
const li_tareas = document.getElementById("Lista-tareas")

BotonAgregar.addEventListener("click", () =>{
    const valorinput = input_tareas.value;

    const li_activity = document.createElement("li");
    const text_tareas = document.createTextNode(valorinput);
    li_activity.appendChild(text_tareas);
    li_tareas.appendChild(li_activity);
    const boton_borrar = document.createElement("button");
    boton_borrar.textContent = "Borrar";
    li_activity.appendChild(boton_borrar);
    boton_borrar.addEventListener("click", () =>{
        li_activity.remove();
    });
});