const qualquerCoisa = "Programador"

console.log(qualquerCoisa.charAt(6)); //printa a sexta letra da palavra
//começa contando pelo 0

console.log(qualquerCoisa.charCodeAt(5)) //printa o codigo relacionado a tabela unicode

console.log(qualquerCoisa.substring(5)) //printa "amador" retirando as 5 primeiras letras

console.log("Udemy ".concat(qualquerCoisa).concat(" Gabriel"))
console.log(qualquerCoisa.replace(7,'v')) //substituindo a posiçao 7 por 'v
console.log('Gabriel, Ana, Rafael'.split(','))

//template
const nome = 'Gabriel'
const concatenacao = 'Oii ' + nome + '!'

const template = `
    Oii
    ${nome}!`

    console.log(concatenacao, template)

const up = texto => texto.toUpperCase()
console.log(`Eii ... ${up(`cuidado`)}!`) //vai deixar a palavra cuidado em letra maiuscula