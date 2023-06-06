function cardapio(quantidade, codigo)
{
    switch (codigo)
    {
        case 100:
            return quantidade * 3.00
            case 200:
                return quantidade * 4.50
                case 300:
                    return quantidade * 5.50
                    case 400:
                        return quantidade * 7.50
                        default: 
                        'Produto invalido'
    }
}

console.log(cardapio(2, 400))