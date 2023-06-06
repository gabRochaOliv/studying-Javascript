function vetores(vetorNumeros)
{
    var qntdPares = 0
    var qntdImpares = 0

    for(var i=0; i< vetorNumeros.length; i++)
    {
        if(vetorNumeros[i] % 2 == 0)
        {
            qntdPares++
        }
        else
        {
            qntdImpares ++

        }
    }
    console.log(`Quantidades de pares ${qntdPares} ---- Quantidade de Impares ${qntdImpares}`)

}

vetor = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 ,17]
vetores(vetor)