let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('verdadeiros:...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')

console.log("FALSOS:...")
console.log(!!0)
console.log(!!'')

console.log(!!('' || null || 0 || ' ')) //vai dar verdade pois há um elemento que e true

let nome = ''
console.log(nome || 'Desconhecido') //como se fosse um if else 