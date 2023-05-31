const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

console.log("Usando o break: ")

for (x in numeros) {
 //x é o indice do array {
    if( x == 8) 
    {
        break
    }
    console.log(`${x} = ${numeros[x]}`)
    //          indice tal = aponta para elemento tal

}

console.log('Usando o continue: ')

for(y in numeros)
{
    if(y == 6)
    {
        continue
    }
    console.log(`${y} = ${numeros[y]}`)
}
