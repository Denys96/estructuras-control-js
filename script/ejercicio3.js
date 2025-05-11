  // Ejercicio 3
function data(nombre, salario, categoria) {
    let aumento = 0;

    if (categoria == 'a'){
        aumento = salario * 0.15
    }else if (categoria == 'b'){
        aumento = salario * 0.30
    }else if (categoria == 'c'){
        aumento = salario * 0.10
    }else if(categoria == 'd'){
        aumento = salario * 0.20
    }
    total_salario = salario+aumento
    console.log(`El empleado ${nombre} su aumento es de $${aumento} asiendo un total de su salario de: $${total_salario}`);
}

let entrada_nombre = prompt("Ingresa el nombre");
let entrada_salario = parseFloat(prompt("Ingresa tu salario:"));
let entrada_categoria = prompt("Ingresa la categoria asignada a,b,c o d");

data(entrada_nombre,entrada_salario,entrada_categoria)