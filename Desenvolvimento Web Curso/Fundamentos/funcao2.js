//Armazenando uma funcao em uma variavel

const imprimirSoma = function (a , b)
{
    console.log(a + b)
}

imprimirSoma (2 , 7)

//Armazendo uma funcao arrow em uma variavel

const soma = (a, b) => 
{
    return a + b
}

console.log(soma(2, 9))

//retorno implicito

const subtracao = (a ,b) => a - b //arrow
console.log(subtracao(2,7))

//3 formas para fazer uma funcao 