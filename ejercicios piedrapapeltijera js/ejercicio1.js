function juego(eleccionJugador) {
    const opciones = ["Piedra 💎", "Papel 🧻", "Tijeras ✂"];
    const eleccionCPU = opciones[Math.floor(Math.random() * 3)];
    let resultado = "";


    if (eleccionJugador == eleccionCPU) {
        resultado = "Empate 📋";
    } else if (
        eleccionJugador === "Piedra 💎" && eleccionCPU === "Tijeras ✂" ||
        eleccionJugador === "Papel 🧻" && eleccionCPU === "Piedra 💎" ||
        eleccionJugador === "Tijeras ✂" && eleccionCPU === "Papel 🧻"
    ) {
        resultado = "Has ganado! 🏆"
    } else {
        resultado = "Has perdido 😢"
    }



    let result = document.getElementById("resultado");
    result.innerHTML = `
    <p>Has escogido: ${eleccionJugador}</p>
    <p>La CPU ha escogido: ${eleccionCPU}</p>
    <p>${resultado}</p>
    <button id="jugarDeNuevo" onclick="jugar()">Jugar de nuevo</button>
    `;

    let game = document.getElementById("juego-p");
    game.style.display = "none";
}

// document.write("Has escogido: " + eleccionJugador)
// document.write("La CPU ha escogido: " + eleccionCPU)
// document.write(resultado)
// document.write("<button onclick='jugar()'>Jugar de nuevo</button>")


function jugar() {

    document.getElementById("piedrabtn").addEventListener("click", () => {
        juego("Piedra")
    })
    document.getElementById("papelbtn").addEventListener("click", () => {
        juego("Papel")
    })
    document.getElementById("tijerabtn").addEventListener("click", () => {
        juego("Tijeras")
    })



    let game = document.getElementById("juego-p");
    game.style.display = "block";

    let result = document.getElementById("resultado");
    result.innerHTML = "";


}

jugar();