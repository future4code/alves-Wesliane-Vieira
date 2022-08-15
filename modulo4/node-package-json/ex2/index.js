const operation = process.argv[2]
const var1 = Number(process.argv[3])
const var2 = Number(process.argv[4])

var calcular

switch (calcular) {
    case 'somar':
        return `O resultado: ${var1} + ${var2}.` 
        break;
    case 'subtrair':
        return `O resultado: ${var1} - ${var2}.` 
        break;
    case 'multiplicar':
        return `O resultado: ${var1} * ${var2}.`
        break;
    case 'dividir':
        return `O resultado: ${var1} / ${var2}.`
        break;
    default:
        return 'Operação inválida.'
        break;
}

console.log(calcular);
