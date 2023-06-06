function area(largura, altrura)
{
    const area = largura * altrura
    if(area > 20)
    {
        console.log(`O valor acima do permitido é ${area}m2`)
    }
    else
    {
        return area

    }
}

console.log(area(3, 4))

console.log(area(20,3))// usou o if

console.log(area(2 , 3, 4 ,65 , 32))// pega apenas os dois primeiros