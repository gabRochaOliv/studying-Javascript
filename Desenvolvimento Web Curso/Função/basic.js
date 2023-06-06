//criar de forma literal

function funcao()
{

}

//armazenar na variavel

const funcao2 = function()
{

}

//armazenar em um array

const array = [function(a , b) { return a + b}, funcao, funcao2];
console.log(array[0] (2 , 3))

//armazenar em uma atributo de objeto

const obj = {}
obj.falar = function() {return 'Eiii'}
console.log(obj.falar())

//uma funcao que pode conter uma funcao

function soma(a ,b)
{
    return function soma2(c)
    {
        console.log(a + b + c)
        
    }
}

soma(3 , 4) (3)

