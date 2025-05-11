function viaje(origen, destino) {
    let precioBase = 100; // Puedes cambiar el precio base
    let descuento = 0;

    if (origen.toLowerCase() === "palma") {
        destino = destino.toLowerCase();

        if (destino === "la costa del sol") {
            descuento = precioBase * 0.05;
        } else if (destino === "panchimalco") {
            descuento = precioBase * 0.10;
        } else if (destino === "puerto el triunfo") {
            descuento = precioBase * 0.15;
        } else {
            console.log("Destino no aplica para descuento.");
            return;
        }

        let total = precioBase - descuento;
        console.log(`Origen: ${origen}, Destino: ${destino}`);
        console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
        console.log(`Total a pagar: $${total.toFixed(2)}`);
    } else {
        console.log("No aplica descuento si el origen no es Palma.");
    }
}

viaje("palma","panchimalco")