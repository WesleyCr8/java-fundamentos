// HOJE EM DIA USAMOS APENAS LET E CONST, A VARIAVEL
// VAR É POUCO UTILIZADA PELO FATO DE 
// SER MUITO FÁCIL DE OCASIONAR BUGS.

//var

// var altura = 5;
// var comprimento = 7;

// var area = altura * comprimento;
// console.log(area);
// var area;

// let forma = 'retangulo';
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retangulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * altura) / 2;
// }

// console.log(area);

const forma = 'triangulo';
const altura = 5;
const comprimento = 7;
let area; 

if (forma === 'quadrado') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);
