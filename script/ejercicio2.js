// Ejercicio 2

function datos(nombre, carnet, examen, tareas, asistencia, investigacion){

    nota_final = examen * 0.20 + tareas * 0.40 + asistencia * 0.10 + investigacion * 0.30;
    console.log(`El alumno ${nombre} con N° de carnet ${carnet} a obtenido una nota final de ${nota_final}`);
}

let entrada_nombre = prompt("Ingresa el nombre");
let entrada_carnet = prompt("Ingresa el carnet");
let entrada_examen = parseFloat(prompt("Ingresa tu nota del examen (0-10):"));
let entrada_tareas = parseFloat(prompt("Ingresa tu nota de tareas (0-10):"));
let entrada_asistencia = parseFloat(prompt("Ingresa tu nota de asistencia (0-10):"));
let entrada_investigacion = parseFloat(prompt("Ingresa tu nota de investigación (0-10):"));


datos(entrada_nombre, entrada_carnet, entrada_examen, entrada_tareas, entrada_asistencia, entrada_investigacion);