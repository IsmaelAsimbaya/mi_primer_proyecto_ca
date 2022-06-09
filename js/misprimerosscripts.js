function ocultarMostrarImagen() {
    //display: none, block
    var valorDisplay = document.getElementById("imagen").style.display;
    if (valorDisplay == 'none') {
        valorDisplay = 'block';
    } else {
        valorDisplay = 'none';
    }
    document.getElementById("imagen").style.display = valorDisplay;
}

function turnOn() {
    var valorImg = document.getElementById('foco').src;
    console.log(valorImg);
    document.getElementById('foco').src='../img/foco_on.png';
}

function turnOff() {
    var valorImg = document.getElementById('foco').src;
    console.log(valorImg);
    document.getElementById('foco').src='../img/foco_off.png';
}