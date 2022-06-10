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

function cambiarTextos() {
    const elementos = document.getElementsByClassName('nuevo');
    console.log(elementos[0].innerHTML)
    /*
    elementos[0].innerHTML = '1er texto';
    elementos[1].innerHTML = '2do texto';
    elementos[2].innerHTML = '3er texto';
    
    for (let index = 0; index < elementos.length; index++) {
        elementos[index].innerHTML = (index + 1) + '° texto';
    }
    */
    for (let valor in elementos) {
        elementos[valor].innerHTML = valor + '° texto';
    }
    /*
    for (valor of elementos) {
        valor.innerHTML = 'A';
    }
    */
}

function cambiarTextosElemento() {
    const elementos = document.getElementsByTagName('h1')
    elementos[0].innerHTML = 'A';
    elementos[1].innerHTML = 'b';
    console.log(elementos[2])
}
/*
//forma tradicional de acceso a un elemento 
function mOver() {
    var elemento = document.getElementById('div1');
    elemento.innerHTML = 'Nuevo texto';
    elemento.style.backgroundColor = 'red';
}

function mOut() {
    var elemento = document.getElementById('div1');
    elemento.innerHTML = 'Texto para nuevos eventos';
    elemento.style.backgroundColor = 'yellow';
}
*/
function mOver(element) {
    element.innerHTML = 'Nuevo texto';
    element.style.backgroundColor = 'red';
}

function mOut(element) {
    element.innerHTML = 'Texto para nuevos eventos';
    element.style.backgroundColor = 'yellow';
}

function imprimirPersona() {

    //declaracion de arreglos
    const colores = ['rojo', 'amarillo', 'azul'];

    //desestructuracion de arreglos
    const [c1, c2, c3] = colores;
    console.log(c1);
    console.log(c2);
    console.log(c3);

    const [p1, p2, p3] = ['red', 'yellow', 'blue'];
    console.log(p1);
    console.log(p2);
    console.log(p3);

    //declaracion de objetos
    const persona = { nommbre: 'Ismael', apellido: 'Asimbaya', edad: 22 };
    console.log(persona);

    //desestructuracion de objetos
    const { nommbre, apellido, edad } = persona;
    console.log(nommbre);
    console.log(apellido);
    console.log(edad);

    const { name, scndname, age } = { name: 'PEPE', scndname: 'Asimbaya', age: 22 };
    console.log(name);
    console.log(scndname);
    console.log(age);

    //objetos compuestos
    const persona2 = { nommbre: 'Karol', apellido: 'Asimbaya', edad: 14, direccion: { calle: 'Juan Vizuete', numero: 's6-626' } };
    console.log(persona2);
}