function carro(carros){
    let precio = 1000;

    if(carros == "FORD FIESTA"){
        descuento = precio* 0.05
        console.log('descuento del 5%')
    }else if(carros == "FORD FOCUS"){
        descuento = precio * 0.10
        console.log('descuento del 10%')
    }else if(carros == "FORD ESCAPE"){
        descuento = precio * 0.20
        console.log("descuento del 20%")
    }
    precio_final = precio - descuento;
    console.log(`El precio del carro es de: ${precio} y su descuento es de: ${descuento} y su precio total con descuento es de: ${precio_final}` )
}


let carros = "FORD FIESTA";
carro(carros);
