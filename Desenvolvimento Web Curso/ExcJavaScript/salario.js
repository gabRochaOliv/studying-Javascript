function salario(plano, salarioAtualizado) 
{
    switch (plano)
    {
        case 'A':
        return salarioAtualizado * 1.10
        case 'B':
        return salarioAtualizado * 1.15
        case 'C':
        return salarioAtualizado * 1.20
        default: return 'Erro no salario'

    }
}

console.log(salario('B', 2000))
console.log(Math.floor(salario('A', 7000)))