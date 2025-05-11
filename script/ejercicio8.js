
function tablaMultiplicar(tabla){
    //10 veces
    for(let i = 1; i <= 10; i++){
        let results = tabla * i
        console.log(`${tabla} * ${i} = ${results}`);

    }
}

let entrada = Number(prompt(`Ingrese la tabla a mostrar`));
tablaMultiplicar(entrada);