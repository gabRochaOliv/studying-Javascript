function imprimirNomeGritado(obj)
{
    try{
    console.log(obj.name.toUpperCase() + '!!!!');
} catch (e){
    tratarErro(e)
}

finally
{
    console.log('ERROOOOOO')
}
} 
const obj ={nome:'Ana Leticia'}
//           ^ erro
imprimirNomeGritado(obj)

function tratarErro(erro)
{
    throw new Error ('Ocorreu um erro... Me desculpe')

}