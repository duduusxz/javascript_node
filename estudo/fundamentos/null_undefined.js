let valor
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString()) //Erro

const prod = {}
console.log(prod.preco)
console.log(prod)

prod.preco = 3.50
console.log(prod)

prod.preco = undefined // Evitar atribuir undefined
console.log(!!prod.preco)
console.log(prod)

prod.preco = null // Sem preço
console.log(!!prod.preco)
console.log(prod)