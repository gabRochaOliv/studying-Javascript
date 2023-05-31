function NotasAlunos(nota)
{
    if(nota >= 7)
    {
        console.log('Aprovado com ' + nota)
    }


}

NotasAlunos(8.1)
NotasAlunos(6.0)

//-----------------------------------------------------------

function seForVerdadeEufalo (valor)
//faz automaticamento um boolean de true e false
{
    if(valor)
    {
        console.log('É verdade....' + valor)
    }

}

seForVerdadeEufalo()

seForVerdadeEufalo(null) 

seForVerdadeEufalo(undefined)

seForVerdadeEufalo(NaN)

seForVerdadeEufalo('')

seForVerdadeEufalo(' ') //verdade

seForVerdadeEufalo(-1)


seForVerdadeEufalo(0)


seForVerdadeEufalo({})


seForVerdadeEufalo([])