function ImprimeValor(min, max)
{
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let numero = 0

do {
    numero = ImprimeValor(-1 , 10)
    console.log(`O numero escolhido foi ${numero}`)
      
}
while(numero != -1)

console.log('Acabou')  