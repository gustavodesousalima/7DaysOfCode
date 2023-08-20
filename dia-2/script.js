console.log("===Dia 2===");

const usuario = [];

let nomeUsuario = prompt("Qual seu nome?");
let idadeUsuario = prompt("Qual sua idade?");
let linguagemUsuario = prompt("Qual é a sua linguagem?");

function infoUsuario() {
    let novoUsuario = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        linguagem: linguagemUsuario,
    };

    usuario.push(novoUsuario);

};

infoUsuario();

let usuarioDaLista = usuario[0];
let exibir = `Olá ${usuarioDaLista.nome}, você tem ${usuarioDaLista.idade} anos e já está aprendendo ${usuarioDaLista.linguagem}!`;

alert(exibir);


let gostaDaLinguagem = prompt(`Você gosta de estudar ${linguagemUsuario}? Dígite 1 para sim e 2 para não.`)

function perguntaSobreLinguagem() {

    switch (gostaDaLinguagem) {
        case "1":
            alert(` Muito bom! Continue estudando ${nomeUsuario} e você terá muito sucesso.`)
            break;

        case "2":
            alert(`Ahh que pena... Já tentou aprender outras linguagens ${nomeUsuario}?`)
            break;
        default:
            alert("Opção inválida!")
            break;
    }
};

perguntaSobreLinguagem();