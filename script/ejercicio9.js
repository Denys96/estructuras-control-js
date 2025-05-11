function temperatura (fare){


    if(fare >= 14 && fare <= 32){
        console.log(`La emperatura es de ${fare} y es baja`)
    } else if(fare >= 32 && fare <= 68){
        console.log(`La emperatura es de ${fare} y es adecuada`)
    }else if(fare >= 32 && fare <= 96){
        console.log(`La emperatura es de ${fare} y es alta`)
    }else{
        console.log(`La emperatura es desconocida`)
    }
}

let entrada = Number(prompt('Ingresa la temperatura'));
temperatura(entrada);