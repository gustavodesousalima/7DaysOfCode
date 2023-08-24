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
    let adicionarItem = "sim";
    let removerItem;
    let itemRemovidoDaLista;

    while (adicionarItem === "sim") {
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

        alert("Item adicionado à lista de compras!");
        adicionarItem = prompt("Deseja adicionar algo mais?").trim().toLowerCase();

        if (adicionarItem === "não") {
            removerItem = prompt("Deseja remover algo?").trim().toLowerCase();
        }
        while (removerItem === "sim") {
            if (removerItem === "sim") {
                alert(`Frutas: ${listaDeCompras.frutas.join(", ")},\nLaticinios: ${listaDeCompras.laticinios.join(", ")},\nCongelados: ${listaDeCompras.congelados.join(", ")},\nDoces: ${listaDeCompras.doces.join(", ")}`);

                itemRemovidoDaLista = prompt("Qual item você deseja remover?").trim().toLowerCase()

                for (const categoria in listaDeCompras) {
                    const categoriaArray = listaDeCompras[categoria]
                    const index = categoriaArray.indexOf(itemRemovidoDaLista)
                    if (index !== -1) {
                        categoriaArray.splice(index, 1)
                        alert("Item removido!")
                        alert(`Frutas: ${listaDeCompras.frutas.join(", ")},\nLaticinios: ${listaDeCompras.laticinios.join(", ")},\nCongelados: ${listaDeCompras.congelados.join(", ")},\nDoces: ${listaDeCompras.doces.join(", ")}`)


                    }
                }

                removerItem = prompt("Deseja remover algo?").trim().toLowerCase();
            }
        }


    }


} else {
    alert("Obrigado pela resposta!");
}