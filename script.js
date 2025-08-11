const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você conhece alguém especial em uma festa. Qual é sua primeira impressão?",
        alternativas: [
            {
                texto: "Legal",
                afirmacao: "Ele/Ela parece muito interessante e divertido(a)! "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Após algumas conversas, você percebe que têm interesses em comum. O que faz?",
        alternativas: [
            {
                texto: "Sugiro que assistamos a um filme juntos..",
                afirmacao: "Você ficou animado(a) com a ideia de passar mais tempo juntos."
            },
            {
                texto: "Convido para um café e uma conversa mais tranquila.",
                afirmacao: "Você preferiu um ambiente mais calmo para se conhecerem."
            }
        ]
    },
    {
        enunciado: "Durante o encontro, a química entre vocês é inegável. Como você se sente?",
        alternativas: [
            {
                texto: "Sinto que estamos conectados de uma forma especial.",
                afirmacao: "Você começa a imaginar um futuro juntos."
            },
            {
                texto: "Estou nervoso(a), mas animado(a) ao mesmo tempo.",
                afirmacao: "Você percebe que está se apaixonando."
            }
        ]
    },
    {
        enunciado: "Depois de alguns encontros, você decide compartilhar algo pessoal. O que conta?",
        alternativas: [
            {
                texto: "Falo sobre meus sonhos e aspirações.",
                afirmacao: "Você quer que ele/ela conheça seu lado mais profundo."
            },
            {
                texto: "Compartilho uma lembrança engraçada da minha infância",
                afirmacao: "Você quer quebrar o gelo e deixar o clima mais leve."
            }
        ]
    },
    {
        enunciado: "Após meses de encontros, você sente que é hora de dar um passo adiante. O que faz?",
        alternativas: [
            {
                texto: "Peço para ser meu/minha namorado(a).",
                afirmacao: "Você se sente pronto(a) para um compromisso sério."
            },
            {
                texto: "Sugiro uma viagem juntos para nos conhecermos melhor.",
                afirmacao: "Você acredita que uma nova experiência pode fortalecer a relação."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
