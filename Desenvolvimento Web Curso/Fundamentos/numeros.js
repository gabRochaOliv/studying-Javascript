const peso1 = 2
const peso2 = Number ('4.7')

console.log(Number.isInteger(peso1)) //verficando se é inteiro (true)
console.log(Number.isInteger(peso2)) //verficando se é inteiro (false)

const avaliacao1 = 11.654
const avaliacao2 = 9.654

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //colocando duas casas após a virgula 
console.log(media.toString(2)) //tranfosmando em numero binário

console.log(typeof media) 