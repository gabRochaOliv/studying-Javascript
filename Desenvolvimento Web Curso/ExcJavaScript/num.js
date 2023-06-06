function numero(valor)
{
    console.log(`Valor: R$ ${valor.toFixed(2).toString().replace('.',',')}`);
}

numero(0.5 / 0.9)