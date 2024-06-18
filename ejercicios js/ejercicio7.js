function replaceLetters(string) {
    return string.toLowerCase().replace("a", "o")
}

console.log(replaceLetters("Hola Munda"))

function empiezaPor (string) {
    return  string.toLowerCase().startsWith("aca");
}

console.log(empiezaPor("academia"))
console.log(empiezaPor("escuela"))

function saludar (saludo) {
    return saludo.repeat(3)
}

console.log(saludar("Hola "))