let startButton = document.getElementById("startButton");
let resultText = document.getElementById("result");
let instructions = document.getElementById("instructions");

let startTime;
let reactionTime;
let gameStarted = false;
let timeoutId;

// Função para iniciar o jogo
function iniciarJogo() {
    if (gameStarted) return; // Previne que o jogo seja reiniciado

    gameStarted = true;
    startButton.style.display = 'none'; // Esconde o botão "Iniciar Jogo"
    resultText.innerHTML = ""; // Limpa o resultado anterior
    instructions.innerHTML = "Aguarde o botão aparecer...";

    // Espera um tempo aleatório para o botão aparecer
    let delay = Math.floor(Math.random() * 3000) + 2000; // Entre 2 e 5 segundos
    timeoutId = setTimeout(mostrarBotao, delay);
}

// Função para mostrar o botão de reação
function mostrarBotao() {
    let randomX = Math.random() * (window.innerWidth - 150); // Largura da tela - largura do botão
    let randomY = Math.random() * (window.innerHeight - 150); // Altura da tela - altura do botão
    let button = document.createElement("button");

    button.textContent = "Clique!";
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
    button.style.backgroundColor = "#f7da3a";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s";

    button.onclick = function() {
        let endTime = Date.now();
        reactionTime = endTime - startTime;
        resultText.innerHTML = `Seu tempo de reação foi: ${reactionTime} ms`;
        button.remove();
        startButton.style.display = 'block'; // Exibe o botão para iniciar o jogo novamente
        instructions.innerHTML = "Clique no botão para tentar novamente!";
        gameStarted = false;
    };

    // Registra o tempo de quando o botão aparece
    startTime = Date.now();

    document.body.appendChild(button);
}

