console.log(Math.ceil(6.1))

const object1 = {}
object1.name = 'Bola'

console.log(object1.name)

function Objc(name)
{
    this.name = name


}

const object3 = new Objc('Cavalo')
const object2 = new Objc ('Cadela')

console.log(object3.name)
console.log(object2.name)