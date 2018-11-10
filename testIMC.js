function calcular(peso, altura) {
    return (peso / (altura * altura)).toFixed(1)
}

function classificar(imc) {
    if (imc <= 18.5) {
        return 1
    } else if (imc > 18.5 && imc <= 24.9) {
        return 2
    } else if (imc > 24.9 && imc <= 30) {
        return 3
    } else {
        return 4
    }
}

function nomear(indice) {
    switch (indice) {
        case 1:
            return 'magreza'
        case 2:
            return 'maneiro'
        case 3:
            return 'nao maneiro'
        case 4:
            return 'procure um medico'
        default:
            return 'valor invalido'
    }
}

const peso = 78, altura = 1.73

let resultado = calcular(peso, altura)
let indice = classificar(resultado)
console.log(nomear(indice))