$().ready(() => {
    $('#boton1').click(() => {
        $('#parrafo1').toggleClass('rojo')
    })
})

document.getElementById('boton2').addEventListener('click', () => {
    document.getElementById('parrafo2').classList.toggle('azul')
})