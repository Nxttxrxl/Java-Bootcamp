const datos = () => {
    return "Anouar Kajaj"
}
console.log(datos())

function myFunctionn(boolean) {
  console.log(boolean);
}
myFunctionn(true)

function showValues(...valores){
    valores.forEach(valor => {
        console.log(valor);
    });
}

showValues(1, 2, 3, 4, 5);

