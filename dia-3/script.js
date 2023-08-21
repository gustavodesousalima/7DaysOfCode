function avancar() {

    let opcoesDeArea = document.getElementById('opcoesDeArea').value;

    switch (opcoesDeArea) {
        case 'frontEnd':
            let aprenderNoFront = prompt("Você deseja aprender React ou Vue").toLocaleLowerCase();

            if (aprenderNoFront === 'react') {
                alert("Parabéns por escolher " + aprenderNoFront + " Dev Front, ótimos estudos!");
            } else if (aprenderNoFront === 'vue') {
                alert("Parabéns por escolher " + aprenderNoFront + " Dev Front, ótimos estudos!");
            }

            break;

        case 'backEnd':
            let aprenderNoBack = prompt("Você deseja aprender C# ou Java?");
            alert("Parabéns por escolher " + aprenderNoBack + " Dev Back, ótimos estudos!");
            break;

        default:
            alert("Opção inválida!");
            break;
    }

    let avancosNosEstudos = prompt("Você deseja se especializar ou tornar-se Fullstack?").toLocaleLowerCase();

    if (avancosNosEstudos === "especializar") {
        alert("Parábens por escolher se aprofundar na área!")
    } else if (avancosNosEstudos === "fullstack") {
        alert("Parábens por escolher se tornar Fullstack!")
    }



    for (let i = 0; i < 5; i++) {
        let liguagemEscolhida = prompt("Qual linguagem você gostaria de estudar?").toLocaleLowerCase()

        if (liguagemEscolhida) {
            alert("ótima linguagem Parábens!")
        } else {
            alert("Você não escolheu nenhuma linguagem.")
            break;
        }
    }
}