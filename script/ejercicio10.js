function estudiantepro(cantidad, turno) {
    let suma = 0;
    for (let i = 1; i <= cantidad; i++) {
        let edad = parseInt(prompt(`Ingresa la edad del estudiante ${i} del turno ${turno}:`));
        suma += edad;
    }
    return suma / cantidad;
}

let promedioManiana = estudiantepro(5, "mañana");
let promedioTarde = estudiantepro(6, "tarde");
let promedioNoche = estudiantepro(11, "noche");

// Mostrar promedios
console.log(`Promedio turno mañana: ${promedioManiana.toFixed(2)}`);
console.log(`Promedio turno tarde: ${promedioTarde.toFixed(2)}`);
console.log(`Promedio turno noche: ${promedioNoche.toFixed(2)}`);

// Comparar y mostrar el turno con mayor promedio
if (promedioManiana > promedioTarde && promedioManiana > promedioNoche) {
    console.log("El turno mañana tiene el promedio de edad más alto.");
} else if (promedioTarde > promedioNoche) {
    console.log("El turno tarde tiene el promedio de edad más alto.");
} else {
    console.log("El turno noche tiene el promedio de edad más alto.");
}

