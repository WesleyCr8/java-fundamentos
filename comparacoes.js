// == (comparacao implicita)
//faz a conversao implicita do numero 5 para string

const numero = 5;
const texto = "5";

console.log(numero == texto) // true

// === comparacao explicita
// mais rigidas / especificas

console.log(numero === texto) // false

//typeof - fala o tipo de dado

console.log(typeof numero)
console.log(typeof texto)

// == so compara o valor
// === compara o valor e o tipo de dado

// as boas praticas mandam usar ===

