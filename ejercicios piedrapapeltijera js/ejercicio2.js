function gameSettings(userChoice) {
    let options = ["Piedra", "Papel", "Tijeras"];
    let computerChoice = options[Math.floor(Math.random() * 3)];
    let result = "";
    if (userChoice === computerChoice) {
        result = "Empate";
    } else if ((userChoice === "Piedra" && computerChoice === "Tijeras") || (userChoice === "Papel" && computerChoice === "Piedra") || (userChoice === "Tijeras" && computerChoice === "Papel")) {
        result = "Has ganado 🏆";
    } else {
        result = "Has perdido 😢";
    }

    let game = document.getElementById("juego-p");
    game.style.display = "none";
    let output =  document.getElementById("resultado");
    output.innerHTML = `
    <p>Has escogido: ${userChoice}</p>
    <p>La CPU ha escogido: ${computerChoice}</p>
    <p>${result}</p><button id="jugarDeNuevo" onclick="jugar()">Jugar de nuevo</button>
    `;
}

function startGame() {
    let game = document.getElementById("juego-p");
    game.style.display = "block";

    document.getElementById("piedrabtn").addEventListener("click", () => {
        gameSettings("Piedra");
    });
    document.getElementById("papelbtn").addEventListener("click", () => {
        gameSettings("Papel");
    });
    document.getElementById("tijerasbtn").addEventListener("click", () => {
        gameSettings("Tijeras");
    });

    let output =  document.getElementById("resultado");
    output.innerHTML = "";
}

startGame();