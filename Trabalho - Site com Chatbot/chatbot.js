const respostas = [
  "Os melhores jogos de ação incluem 'Adventure Quest', 'Warrior's Spire', e 'Galactic Crusade'.",
  "Para um jogo de estratégia, eu recomendaria 'Empire Builders' por sua jogabilidade envolvente e 'Battle Tactics' por seu desafio tático.",
  "Atualmente, 'Mystic Realm' está em alta e recebendo ótimas críticas pela sua complexa construção de mundo e combate desafiador.",
  "Para melhorar sua jogabilidade, tente praticar regularmente, aprender com seus erros e usar guias e tutoriais online.",
  "Organize seu tempo de jogo definindo horários específicos para jogar, evitando distrações e usando cronômetros para limitar a duração das sessões.",
  "Hoje, você deve experimentar 'Shadowblade', um roguelike aclamado pela crítica com uma história envolvente e jogabilidade viciante.",
  "Desbloqueie conquistas mais rapidamente seguindo essas dicas: concentre-se em uma conquista por vez, use guias e DLCs, e jogue em modos de dificuldade mais baixa quando possível.",
  "Os principais lançamentos deste ano são 'Dragon Quest: Rebirth', 'Space Odyssey', e 'Kingdom's Legacy'.",
  "O jogo mais desafiador que já joguei foi 'Inferno's Labyrinth' por seus combates exigentes e mecânicas precisas.",
  "Para um ótimo jogo multijogador, experimente 'Mystery Mansion' para diversão em equipe ou 'Stormfront' para intensas partidas competitivas!",
  "Eu recomendaria o jogo de aventura 'Lost Explorers', que oferece um ótimo enredo e gráficos incríveis.",
  "Um bom jogo de RPG deve ter uma história envolvente, personagens bem desenvolvidos, e um sistema de progressão equilibrado.",
  "O melhor jogo de corrida atualmente é 'Speed Thrills', conhecido por seus gráficos realistas e emocionantes corridas.",
  "Para ganhar partidas multijogador, pratique trabalho em equipe, conheça seu papel no jogo, e mantenha a comunicação com seus colegas de equipe.",
  "O jogo mais popular no momento é 'Magical Kingdoms', com jogabilidade viciante e uma comunidade ativa.",
  "Escolha um bom jogo para crianças verificando a classificação etária, o conteúdo educativo, e se o jogo é divertido e apropriado para a idade.",
  "Um jogo indie é criado por desenvolvedores independentes, muitas vezes com orçamentos menores, mas com grande criatividade e inovação.",
  "Os jogos mais esperados do próximo ano incluem 'Galaxy Conquerors', 'Mystic Adventures 2', e 'Battle of Legends'.",
  "Para jogos de simulação, eu recomendaria 'City Builder Pro' e 'Farming Life', ambos conhecidos por suas jogabilidades detalhadas.",
  "O melhor jogo de esporte atualmente é 'Ultimate Soccer', com controles precisos e gráficos realistas."
];


const form = document.querySelector("form");
const select = document.querySelector("select");
const mensagens = document.querySelector(".mensagens");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const perguntaSelecionada = select.options[select.selectedIndex];
  const respostaIndex = perguntaSelecionada.value;

  if (!respostaIndex) {
    return;
  }

  const respostaUsuario = document.createElement("li");
  respostaUsuario.textContent = perguntaSelecionada.textContent;
  respostaUsuario.classList.add("usuario", "mensagem");

  mensagens.insertAdjacentElement("beforeend", respostaUsuario);

  const resposta = respostas[respostaIndex];

  const mensagemBot = document.createElement("li");
  mensagemBot.classList.add("bot", "mensagem");
  mensagemBot.textContent = resposta;

  mensagens.insertAdjacentElement("beforeend", mensagemBot);

  form.reset();
});
