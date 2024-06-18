let numero = 1;
let i = 0;
do {
    if(i === 0){
        i++;
        numero--;
        console.log(numero);
    } else {
        numero++;
        console.log(numero);
    }
} while (numero < 5)

// El codigo imprime siempre imprime
// el valor de la variable numero
// Empieza siendo 1, se le resta 1 en la primera iteracion
// y luego se le va sumando 1 en cada iteracion hasta que
// cumple la condicion (numero < 5)
// Hace 6 iteraciones
// Entra en el if en la primera iteracion ya que
// el valor de i es 0 y esa es la condicion del if
// el resto de iteraciones ocurren en el else
// ya que el valor de i es diferente de 0.