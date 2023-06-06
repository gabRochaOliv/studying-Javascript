function baskara (a, b, c)
{
    let delta
    delta = ( b ** 2) - 4*(a * c)
    resultados = []

    if(delta < 0)
    {
        return 'O delta é negativo'
    }
    else
    {
    let x1 = (-b + Math.sqrt(delta))/(2*a)
    let x2 = (-b - Math.sqrt(delta))/(2*a)
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
    }

}


console.log(baskara(1 , 3, 2))