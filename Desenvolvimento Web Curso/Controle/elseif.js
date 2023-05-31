Number.prototype.entre = function(inicio, fim) {

    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {

    if(nota.entre(9 , 10))
    {
        console.log('Aprovado com sucesso')
    }
    else if(nota.entre(7 , 8.99))
    {
        console.log('Nota boa')
    }
    else if(nota.entre(0 , 6.99))
    {
        console.log('Nota horrivel')
    }
    else
    {
        console.log('Algo deu errado')
    }


}

imprimirResultado(10)
imprimirResultado(5)
imprimirResultado(8.50)
imprimirResultado(-1)