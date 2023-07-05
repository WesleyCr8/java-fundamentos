const nome = "ju";
const idade = 2021-1981;
const cidadeDeNascimento = "São Paulo";

//sem template
//const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;

//com template-string (usamos crase no começo e fim)
const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao)

//surgiu para facilitar a concatenacao




