const listaDeCompras = {
    frutas: [],
    laticinios: [],
    congelados: [],
    doces: []
};

let adicionarComidaNaLista;

while (adicionarComidaNaLista !== "sim" && adicionarComidaNaLista !== "não") {
    adicionarComidaNaLista = prompt("Você deseja adicionar algo na lista?").trim().toLowerCase();
    if (adicionarComidaNaLista !== "sim" && adicionarComidaNaLista !== "não") {
        alert("Resposta inserida é inválida, responda sim ou não.");
    }
}

if (adicionarComidaNaLista === "sim") {
    let adicionarAlgoMais = "sim";

    while (adicionarAlgoMais === "sim") {
        const nomeDaComida = prompt("Qual o nome do produto?").trim().toLowerCase();
        const qualCategoria = prompt("Você deseja adicionar na categoria: Frutas, Laticinios, Congelados ou Doces?").trim().toLowerCase();

        switch (qualCategoria) {
            case "frutas":
                listaDeCompras.frutas.push(nomeDaComida);
                break;

            case "laticinios":
                listaDeCompras.laticinios.push(nomeDaComida);
                break;

            case "congelados":
                listaDeCompras.congelados.push(nomeDaComida);
                break;

            case "doces":
                listaDeCompras.doces.push(nomeDaComida);
                break;

            default:
                alert("Categoria não encontrada.");
                break;
        }

        adicionarAlgoMais = prompt("Deseja adicionar algo mais?").trim().toLowerCase();
    }
    alert("Itens adicionados à lista de compras!");
    if (adicionarAlgoMais === "não") {
        alert(`Frutas: ${listaDeCompras.frutas.join(", ")},\nLaticinios: ${listaDeCompras.laticinios.join(", ")},\nCongelados: ${listaDeCompras.congelados.join(", ")},\nDoces: ${listaDeCompras.doces.join(", ")}`);
    }

} else {
    alert("Obrigado pela resposta!");
}
