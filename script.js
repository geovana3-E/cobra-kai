const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é Tory Nichols e acaba de ser convidada para voltar ao torneio All Valley. Como reage?",
        alternativas: [
            {
                texto: "Aceita imediatamente, pronta para mostrar sua força.",
                afirmacao: "Tory não foge de desafios — ela quer provar que merece seu lugar no dojo."
            },
            {
                texto: "Recusa, sentindo que precisa focar em sua vida pessoal.",
                afirmacao: "Mesmo sendo uma guerreira, Tory entende que às vezes é preciso cuidar de si mesma primeiro."
            }
        ]
    },
    {
        enunciado: "Durante um treino, um novo aluno do Cobra Kai desrespeita as regras. O que você faz?",
        alternativas: [
            {
                texto: "Repreende o aluno e mostra a ele o verdadeiro espírito do dojo.",
                afirmacao: "Tory acredita que força também exige disciplina e respeito."
            },
            {
                texto: "Ignora, afinal cada um aprende com seus próprios erros.",
                afirmacao: "Ela prefere deixar a vida ensinar, mesmo que isso leve tempo."
            }
        ]
    },
    {
        enunciado: "Você descobre que a vitória no último torneio foi manipulada. Qual é sua atitude?",
        alternativas: [
            {
                texto: "Confronta os responsáveis, mesmo que isso prejudique sua reputação.",
                afirmacao: "Tory valoriza a honra mais do que troféus."
            },
            {
                texto: "Guarda o segredo para não criar confusão no dojo.",
                afirmacao: "Ela acredita que às vezes é melhor manter a estabilidade do que causar uma guerra."
            }
        ]
    },
    {
        enunciado: "Sam tenta conversar e se desculpar por conflitos antigos. O que você faz?",
        alternativas: [
            {
                texto: "Dá uma chance ao diálogo e tenta deixar o passado para trás.",
                afirmacao: "Tory mostra maturidade e desejo de mudar."
            },
            {
                texto: "Recusa a conversa, ainda ressentida pelas mágoas antigas.",
                afirmacao: "Ela ainda carrega cicatrizes que não se curam facilmente."
            }
        ]
    },
    {
        enunciado: "Seu sensei quer que você lidere os novos alunos. Como age nessa posição?",
        alternativas: [
            {
                texto: "Lidera com firmeza e empatia, mostrando o caminho do equilíbrio.",
                afirmacao: "Ela se torna inspiração para outros, provando que aprendeu com seus erros."
            },
            {
                texto: "Impõe respeito com autoridade e disciplina rígida.",
                afirmacao: "Tory lidera com intensidade, como aprendeu no Cobra Kai."
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