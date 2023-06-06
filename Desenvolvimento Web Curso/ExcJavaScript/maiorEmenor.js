function MenorMaior(numero)
{
    var menor 
    var maior 

    
    for(var i=0; i < numero.length; i++)
    {
        if(maior === undefined && menor=== undefined)
        {
            maior = numero[i]
            menor = numero[i]
        }
        else{
        if(numero[i] > maior)
        {
           maior = numero[i]
        }
        
        if(numero[i] < menor)
        {
          menor = numero[i]
        }
    }
}
    return[menor, maior]
}


numeros = [ 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13 , 14, 15, 16, 17, 18, 19, 20, 21]
console.log(MenorMaior(numeros))