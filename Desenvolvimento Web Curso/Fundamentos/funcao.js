console.log(typeof Object)
//function

class Produto{} //qualquer classe criada em javaScript vai ser uma funcao
console.log(typeof Produto)
//function



//funcao sem retorno
function imprimirSoma(a, b)
{
    console.log(a + b)

}

imprimirSoma(2, 3)
imprimirSoma(3, 4, 9 ,7 ,8 ,9 ,10) //vai somar os dois primeiros apenas
imprimirSoma(2) //NaN


//funcao com retorno
function soma(a, b = 0)
{
    return a + b
}

console.log(soma(12, 20))