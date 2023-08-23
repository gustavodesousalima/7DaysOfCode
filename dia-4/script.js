let numeroAleatorio = 5;
let tentativas = 3;

function verificarNumeros(numeroGerado, numeroInserido) {

    if (numeroGerado === numeroInserido) {
        alert("Parábens você acertou!");
    } else {
        alert("Você errou, tente novamente!");
        tentativas--;
    }

    if (tentativas < 1) {
        throw new Error("Sua tentativas se esgotaram, game over!");
    }

}

function resultado() {
    try {
        let numeroUsuario = Number(document.getElementById("numeroDoUsuario").value);
        verificarNumeros(numeroAleatorio, numeroUsuario);
    } catch (error) {
        alert(error.message);

    }
}