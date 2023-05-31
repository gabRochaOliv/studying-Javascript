function imprimirResultado (nota)
{
    switch(Math.floor(nota))
    {
        case 10:
        case 9:
            console.log("Resultado 1")
                break
        case 8:
        case 7:
            console.log("Resultado 2")
                break
        case 5: case 4: case 3: case 2: case 1:
            console.log("Resultado 4")
                break
        default:
            console.log('Erroorrr')

    }

    

}   

imprimirResultado(10)
imprimirResultado(-1)
imprimirResultado(2)
imprimirResultado(4)