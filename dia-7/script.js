function somarValores(valorX, valorY) {
    const resultado = valorX + valorY
    alert(resultado)
}

function subtrairValores(valorX, valorY) {
    const resultado = valorX - valorY
    alert(resultado)
}

function multiplicarValores(valorX, valorY) {
    const resultado = valorX * valorY
    alert(resultado)
}

function dividirValores(valorX, valorY) {
    const resultado = valorX / valorY
    alert(resultado)
}
let realizarOperacao = prompt("deseja realizar algum cálculo?").trim().toLowerCase();

while (realizarOperacao === "sim") {

    const valor1 = Number(prompt("Dígite o valor 1"))
    const operacao = prompt("Você deseja: somar, subtrair, multiplicar ou dividir?").trim().toLowerCase()
    const valor2 = Number(prompt("Dígite o valor 2"))

    switch (operacao) {
        case "somar":
            somarValores(valor1, valor2)
            break;
        case "subtrair":
            subtrairValores(valor1, valor2)
            break;
        case "multiplicar":
            multiplicarValores(valor1, valor2)
            break;
        case "dividir":
            dividirValores(valor1, valor2)
            break;

        default:
            alert("Operação inválida!")
            break;
    }

    realizarOperacao = prompt("deseja realizar outro cálculo?").trim().toLowerCase();
}

alert("Obrigado por utilizar nossos serviços.")