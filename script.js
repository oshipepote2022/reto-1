const inputNombre = document.querySelector("#Nombre");
const pResultado1 = document.querySelector("#Resultado1");
const cuerpopagina = document.querySelector("body");
const inputEdad = document.querySelector("#Edad");
const inputEmail = document.querySelector("#Email");
const inputDni = document.querySelector("#Dni");
const pResultado2 = document.querySelector("#Resultado2");
const pResultado3 = document.querySelector("#Resultado3");
const pResultado4 = document.querySelector("#Resultado4");
const pResultado5 = document.querySelector("#Resultado5");
const pResultado6 = document.querySelector("#Resultado6");
const imagen1 = document.querySelector("#imagen1");
const titulo1 = document.querySelector("#titulo1");
const titulo2 = document.querySelector("#titulo2");
const inputclave = document.querySelector("#clave1");

const imagen2 = document.querySelector("#imagen2");
const imagen3 = document.querySelector("#imagen3");

let nombreRecibido = "def nombre";
let edadRecibida = "def edad";
let emailrecibido = "def mail";
let dniRecibido = "def dni";
let usuarioingresado = "usu def";
let claveingresada = "clave def";

const EDAD_LIMITE = 16;
const COLOR_FONDO = "yellow";
const COLOR_TEXT = "black";
const IMG_1 = "https://iugtonline.com/moodle/pluginfile.php/129/course/overviewfiles/sistemas%20administrativos.png ";
const TIPO_TXT = "cursive";
const COLOR_TITULO = "red";
const USUARIO_1 = "Oshi_07";
const CLAVE_1 = "pepote.";
const IMG_2 = " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2sFXwcUNYjzjD7nTBPyAXxlccJODYQ3wiA&usqp=CAU ";
const IMG_3 = " https://www.celag.org/wp-content/uploads/2019/03/la-desaprobacion-de-la-derecha-regional11.jpg";

function verificar1() {

    nombreRecibido = inputNombre.value;
    edadRecibida = inputEdad.value;
    emailrecibido = inputEmail.value;
    dniRecibido = inputDni.value;
    imagen1.src = IMG_1;
    pResultado1.innerHTML = ("¡Hola! " + nombreRecibido);
    pResultado2.innerHTML = ("Verificamos que:");
    pResultado3.innerHTML = ("Tu email es:" + emailrecibido);
    pResultado4.innerHTML = ("Tu Dni:" + dniRecibido);
    cuerpopagina.style.background = COLOR_FONDO;
    cuerpopagina.style.color = COLOR_TEXT;
    cuerpopagina.style.fontFamily = TIPO_TXT;
    titulo1.style.color = COLOR_TITULO;
    titulo2.style.color = COLOR_TITULO;
    claveingresada = inputclave.value;


    if ((edadRecibida >= EDAD_LIMITE)) {
        pResultado5.innerHTML = ("Tu edad:" + edadRecibida + " años (Usuario mayor de edad)");

    } else {
        pResultado5.innerHTML = ("Tu edad:" + edadRecibida + " años (Usuario menor de edad)");

    }
}


function verificar2() {
    claveingresada = inputclave.value;

    if ((claveingresada == CLAVE_1)) {
        imagen1.src = IMG_2;
        pResultado6.innerHTML = ("Clave correcta");

    } else {
        imagen1.src = IMG_3;
        pResultado6.innerHTML = ("Clave incorrecta");
        pResultado6.style.color = "green"
    }
}