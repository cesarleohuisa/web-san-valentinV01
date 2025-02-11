const introScreen = document.getElementById('introScreen');
const mainScreen = document.getElementById('mainScreen');
const btnContinuar = document.getElementById('btnContinuar');
const btnSi = document.getElementById('btnSi');
const btnNo = document.getElementById('btnNo');
const mensaje = document.getElementById('mensaje');
const gifElement = document.getElementById('gif');

// Array con las rutas de los GIFs
const gifs = [
    "https://i.pinimg.com/originals/77/6b/21/776b215bed3deeef47fd3aa657685a18.gif",
    "https://www.gifmaniacos.es/wp-content/uploads/2019/05/gatitos-kawaii-gifmaniacos.es-19.gif",
    "https://i.pinimg.com/originals/e1/c3/88/e1c388133e0f998e25bb17c837b74a14.gif",
    "https://media.tenor.com/Bn88VELdNI8AAAAi/peach-goma.gif",
    "https://i.pinimg.com/originals/c6/b3/0d/c6b30d1a2dc178aeb92de63295d4ae64.gif",
    "https://media.tenor.com/N2oqtqaB_G0AAAAi/peach-goma.gif",
    "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif",
    "https://media.tenor.com/cbEccaK9QxMAAAAi/peach-goma.gif",
    "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif",
    "https://media.tenor.com/I7KdFaMzUq4AAAAi/peach-goma.gif",
    "gifs/i-love-you.gif"
];

// Array con los mensajes para el botón "No"
const mensajesNo = [
    "Te prometo que será inolvidable",
    "Piénsalo de nuevo",
    "Vamos, atrévete a decir que sí",
    "No dejes que el miedo te detenga",
    "Di sí, por favor"
];

let contadorGifs = 0;
let contadorNo = 0;

// Función para cambiar el GIF
function cambiarGif() {
    contadorGifs = (contadorGifs + 1) % gifs.length; // Cicla a través del array
    gifElement.src = gifs[contadorGifs];
}

// Evento para el botón "Continuar"
btnContinuar.addEventListener('click', () => {
    introScreen.style.display = 'none';
    mainScreen.style.display = 'block';
});

// Evento para el botón "Sí"
btnSi.addEventListener('click', () => {
    cambiarGif();
    mensaje.textContent = "¡Sabía que dirías que sí! 💖";
    btnNo.style.display = 'none'; // Oculta el botón "No"
    btnSi.style.display = 'none'; // Oculta el botón "Sí"
});

// Evento para el botón "No"
btnNo.addEventListener('click', () => {
    cambiarGif();
    if (contadorNo < mensajesNo.length) {
        btnNo.textContent = mensajesNo[contadorNo];
        contadorNo++;
    } else {
        contadorNo = 0; // Reinicia el contador
        btnNo.textContent = mensajesNo[contadorNo];
        contadorNo++;
    }
});