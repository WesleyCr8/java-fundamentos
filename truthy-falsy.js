//boolean

const usuarioLogado = true;
const contaPaga = false;

//truthy ou falsy

// 0 => false
// 1 => true

//casos em que o java considera como tipo false 0 - "" entre outros.
// 1 entre outros como tipo true;
console.log(0 == false);
console.log("" == false);

// undefined

// null => vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "Alura";

console.log(typeof texto);
console.log(typeof numero);

console.log(typeof minhaVar);
console.log(typeof varNull);