function triangulo(lado1, lado2, lado3)
{
    if(lado1 == lado2 && lado2 == lado3)
    {
        console.log("é um triangulo equilatero")
    }
    else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1)
    {
        console.log("é um triangulo escaleno")
    } 
    else
    {
        console.log("é um triangulo isoceles")
    }

   
}

triangulo(3, 4, 2)