//let x = "";
//console.log(x)
//x = "oi";

//DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                    //string (a palavra texto abaixo só serve pra gente saber que dado queremos, poderia ser qualquer outro nome)
function imprimeTexto(texto) {
    console.log(texto)
}

// 2) Executa a função (1 ou + vezes)

imprimeTexto("oi")
imprimeTexto("outro texto")

// tres formas de escrever funções

//temos que usar o return para que a função retorne o resultado desejado
// a linha de return precisa ser a ultima linha do bloco da funcao
function soma() {
   return 2 + 2;
}

//console.log(soma());

imprimeTexto(soma());


