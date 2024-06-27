function gameSettings(userChoice) {
  let options = ["Piedra", "Papel", "Tijeras"];
  let computerChoice = options[Math.floor(Math.random() * 3)];
  let result = "";
  let victorySound = document.getElementById("victorySound");
  let defeatSound = document.getElementById("defeatSound");
  let drawSound = document.getElementById("drawSound");

  if (userChoice === computerChoice) {
    result = "Empate";
    drawSound.currentTime = 0;
    drawSound.play();
    document.body.style.backgroundColor = "";

    defeatSound.pause();
    defeatSound.currentTime = 0;
    victorySound.pause();
    victorySound.currentTime = 0;
  } else if (
    (userChoice === "Piedra" && computerChoice === "Tijeras") ||
    (userChoice === "Papel" && computerChoice === "Piedra") ||
    (userChoice === "Tijeras" && computerChoice === "Papel")
  ) {
    result = "Has ganado 🏆";
    victorySound.currentTime = 0;
    victorySound.play();
    document.body.style.background = "rgb(107, 229, 115)";

    defeatSound.currentTime = 0;
    defeatSound.pause();
    drawSound.currentTime = 0;
    drawSound.pause();
  } else {
    result = "Has perdido 😢";
    document.getElementById("defeatSound").play();
    defeatSound.currentTime = 0;
    defeatSound.play();
    document.body.style.backgroundColor = "rgb(227, 96, 96)";

    victorySound.currentTime = 0;
    victorySound.pause();
    drawSound.currentTime = 0;
    drawSound.pause();
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
  document.body.style.backgroundColor = "";

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
