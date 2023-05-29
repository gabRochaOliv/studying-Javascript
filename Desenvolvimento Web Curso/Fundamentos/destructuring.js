const pessoa =
{
    nome: 'Gabriel',
    idade: 19,
    endereco:
    {
        rua: 'Major Joao Antonio Pereira',
        numero: 317
    }


}

const {nome, idade } = pessoa
console.log(nome, idade)

console.log('\n******************\n')

const {nome : n, idade : i, endereco} = pessoa
console.log(n, i, endereco)

console.log('\n******************\n')

const{ endereco :{rua, numero}} = pessoa
console.log(endereco)