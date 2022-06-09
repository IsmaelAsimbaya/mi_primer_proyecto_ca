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
    document.getElementById('foco').src = '../img/foco_on.png';
}

function turnOff() {
    var valorImg = document.getElementById('foco').src;
    console.log(valorImg);
    document.getElementById('foco').src = '../img/foco_off.png';
}

function turnOnOff() {
    var valorImg = document.getElementById('foco').src;
    if (valorImg.match('../img/foco_off.png')) {
        valorImg = '../img/foco_on.png';
    } else {
        valorImg = '../img/foco_off.png';
    }
    document.getElementById('foco').src = valorImg;
}