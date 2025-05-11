//Ejercicio 4

function mayor(num1, num2){
    if (num1 > num2 ){
        console.log(`el numero mayor es ${num1}`)
    }else if (num2 > num1){
        console.log(`el numero mayor es ${num2}`)
    }else {
        console.log('Ambos numeros son iguales')
    }
}

let entrada_num1 = parseFloat(prompt("Entrada 1 ingresa un numero para saber el mayor"));
let entrada_num2 = parseFloat(prompt("Entrada 2 ingresa un numero para saber el mayor"));

mayor(entrada_num1,entrada_num2);