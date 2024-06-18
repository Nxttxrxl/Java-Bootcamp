function ejercicio4(num1, num2, num3) {

    let result = num1 + num2 + num3;

    return result
}

console.log(ejercicio4(1, 2, 3))

function nombreYApellidos (nombre, apellido1, apellido2) {

    return `Mi nombre es ${nombre} ${apellido1} ${apellido2}`
}

console.log(nombreYApellidos("Anouar", "Kajaj", "Rosario"))

function numeroMayor(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}


console.log(numeroMayor(3, 2))