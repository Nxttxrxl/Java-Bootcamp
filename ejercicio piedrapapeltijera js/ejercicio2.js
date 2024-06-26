function gameSettings(userChoice) {
    let options = ["Piedra", "Papel", "Tijeras"];
    let computerChoice = options[Math.floor(Math.random() * 3)];
    let result = "";


    if (userChoice === computerChoice) {
        result = "Empate";
    } else if (
        userChoice === "Piedra" && computerChoice === "Tijeras" ||
        userChoice === "Papel" && computerChoice === "Piedra" ||
        userChoice === "Tijeras" && computerChoice === "Papel"
    ) {
        result = "Has ganado 🏆";
    } else {
        result = "Has perdido 😢";
    }


    let output = document.getElementById("resultado");
    output.innerHTML = `
    <p>Has escogido: ${userChoice}</p>
    <p>La CPU ha escogido: ${computerChoice}</p>
    <p>${result}</p>
    <button id="jugarDeNuevo" onclick="startGame()">Jugar de nuevo</button>
    `;

    let game = document.getElementById("juego-p");
    game.style.display = "none";
}

function startGame() {


    document.getElementById("piedrabtn").addEventListener("click", () => {
        gameSettings("Piedra");
    });
    document.getElementById("papelbtn").addEventListener("click", () => {
        gameSettings("Papel");
    });
    document.getElementById("tijerasbtn").addEventListener("click", () => {
        gameSettings("Tijeras");
    });

    let game = document.getElementById("juego-p");
    game.style.display = "block";

    let output = document.getElementById("resultado");
    output.innerHTML = "";
    
}

startGame();

// al darle a un boton el background color cambia(?)


