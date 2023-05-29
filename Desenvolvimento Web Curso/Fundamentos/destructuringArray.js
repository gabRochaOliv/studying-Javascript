function rand([ min = 0, max = 1000])
{
    if(min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)

}

console.log(rand([40, 50]))
//sortea uma valor de 40 a 50
console.log(rand([900]))
//sortea com um min de 900
console.log(rand([,20]))
//sorte até o numero 20
console.log(rand([]))
//de 0 até 1000

