
let nega = 0;
let pos = 0;
let multi15 = 0;
let pares = 0;

for (let i = 1; i < 11; i++) {
    let numero = parseInt(prompt(`Ingresa el número ${i}:`).trim());

    if (numero < 0) {
        nega++;
    } else if (numero > 0) {
        pos++;
    }

    if (numero % 15 == 0) {
        multi15++;
    }

    if (numero % 2 == 0) {
        pares += numero;
    }
}

console.log(`Cantidad de negativos: ${nega}`);
console.log(`Cantidad de positivos: ${pos}`);
console.log(`Cantidad de múltiplos de 15: ${multi15}`);
console.log(`Suma de números pares: ${pares}`);
