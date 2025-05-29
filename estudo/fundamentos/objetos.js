//Objeto -> Coleção de chaves e valores

const produto1 = {}
produto1.nome = 'SamsungA35'
produto1.preco = 3299.90
produto1['Desconto'] = 0.40 // Evitar atributos com espaço

console.log(produto1)

const produto2 = {
    nome: 'Camisa Social',
    preco: 100,
    objeto: {
        nome: 'Calca',
        preco: 140
    }
}

console.log(produto2)

// Teste Loja

const loja = {
    produto1: {
        nome: 'Celular',
        preco: 3000
    },

    produto2: {
        nome: 'Computador',
        preco: 5500
    },

    produto3: {
        nome: 'Headfone',
        preco: 350
    }
}

console.log(loja)