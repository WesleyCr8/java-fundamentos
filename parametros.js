//parametros de função

                //2     //2
function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2, 2))

//parametros x argumentos

//ordem dos parametros (respeitar a ordem dos parametros na hora de chamar a função)

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(29, "Wesley"))

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

//colocando diversos parametros (inclusive funções como parametro)
console.log(multiplica(soma(4,5), soma(3,3)))