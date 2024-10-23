let granCanaria = document.getElementById("granCanaria");
let tenerife = document.getElementById("tenerife");
let lanzarote = document.getElementById("lanzarote");
let fuerteventura = document.getElementById("fuerteventura");
let gomera = document.getElementById("gomera");
let hierro = document.getElementById("hierro");
let palma = document.getElementById("palma");

let tajinaste = document.getElementById("tajinaste");
let cardon = document.getElementById("cardon");
let drago = document.getElementById("drago");
let violeta = document.getElementById("violeta");
let tilo = document.getElementById("tilo");
let helecho = document.getElementById("helecho");

let modalBack = document.createElement('div');

// Hover islas

function hoverIslas() {
    tajinaste.addEventListener("mouseenter", () => {
        granCanaria.classList.add("hoverin");
    })
    tajinaste.addEventListener("mouseleave", () => {
        granCanaria.classList.remove("hoverin");
    })


    violeta.addEventListener("mouseenter", () => {
        tenerife.classList.add("hoverin");
    })
    violeta.addEventListener("mouseleave", () => {
        tenerife.classList.remove("hoverin");
    })

    helecho.addEventListener("mouseenter", () => {
        granCanaria.classList.add("hoverin");
        tenerife.classList.add("hoverin");
        gomera.classList.add("hoverin");
        hierro.classList.add("hoverin");
        palma.classList.add("hoverin");
        fuerteventura.classList.add("hoverin");
        lanzarote.classList.add("hoverin");

    })
    helecho.addEventListener("mouseleave", () => {
        granCanaria.classList.remove("hoverin");
        tenerife.classList.remove("hoverin");
        gomera.classList.remove("hoverin");
        hierro.classList.remove("hoverin");
        palma.classList.remove("hoverin");
        fuerteventura.classList.remove("hoverin");
        lanzarote.classList.remove("hoverin");
    })

    tilo.addEventListener("mouseenter", () => {
        granCanaria.classList.add("hoverin");
        tenerife.classList.add("hoverin");
        gomera.classList.add("hoverin");
        hierro.classList.add("hoverin");
        palma.classList.add("hoverin");
    })
    tilo.addEventListener("mouseleave", () => {
        granCanaria.classList.remove("hoverin");
        tenerife.classList.remove("hoverin");
        gomera.classList.remove("hoverin");
        hierro.classList.remove("hoverin");
        palma.classList.remove("hoverin");
    })

    cardon.addEventListener("mouseenter", () => {
        granCanaria.classList.add("hoverin");
        tenerife.classList.add("hoverin");
        gomera.classList.add("hoverin");
        hierro.classList.add("hoverin");
        palma.classList.add("hoverin");
        fuerteventura.classList.add("hoverin");

    })
    cardon.addEventListener("mouseleave", () => {
        granCanaria.classList.remove("hoverin");
        tenerife.classList.remove("hoverin");
        gomera.classList.remove("hoverin");
        hierro.classList.remove("hoverin");
        palma.classList.remove("hoverin");
        fuerteventura.classList.remove("hoverin");
    })


    drago.addEventListener("mouseenter", () => {
        granCanaria.classList.add("hoverin");
        tenerife.classList.add("hoverin");
        gomera.classList.add("hoverin");
        hierro.classList.add("hoverin");
        palma.classList.add("hoverin");

    })
    drago.addEventListener("mouseleave", () => {
        granCanaria.classList.remove("hoverin");
        tenerife.classList.remove("hoverin");
        gomera.classList.remove("hoverin");
        hierro.classList.remove("hoverin");
        palma.classList.remove("hoverin");
    })
}

// Scroll a fichas

function scrollAFicha() {
    let fichaTajinaste = document.getElementById("fichaTajinaste");
    let fichaVioleta = document.getElementById("fichaVioleta");
    let fichaHelecho = document.getElementById("fichaHelecho");
    let fichaTilo = document.getElementById("fichaTilo");
    let fichaCardon = document.getElementById("fichaCardon");
    let fichaDrago = document.getElementById("fichaDrago");

    let fichaMap = {
        tajinaste: fichaTajinaste,
        violeta: fichaVioleta,
        helecho: fichaHelecho,
        tilo: fichaTilo,
        cardon: fichaCardon,
        drago: fichaDrago
    }
    const btn = document.getElementsByClassName("cajaflora");
    let vistaActual = null

    Array.from(btn).forEach((img) => {
        img.addEventListener("click", () => {
            vistaActual = fichaMap[img.id].scrollIntoView({ behavior: "smooth" })
        })
    })
}

// Btn quienes somos

function btnQuienesSomos() {
    let btnQuienes = document.getElementById("contact");
    btnQuienes.addEventListener("click", QuienesFunction)
    function QuienesFunction() {
        window.scrollTo({ top: 9000, behavior: "smooth" });
    }
}

// Btn dona

function btnDonar() {
    let buttonDonar = document.getElementById("donar");

    buttonDonar.onclick = function () {
        modalBack.style.display = "block";
    }
}

// Btn Arriba

function volverArriba() {
    let scrollToTopBtn = document.getElementById('scrollToTopBtn');

    let scrollBtn = window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    };
    scrollToTopBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

// Modal

function abrirModal() {
    modalBack.setAttribute('id', 'miModalBack');
    modalBack.style.display = "none";

    let body = document.getElementsByTagName("body")[0];
    body.appendChild(modalBack);

    let modal = document.createElement('div');
    modal.setAttribute('id', 'miModal');
    modalBack.appendChild(modal);

    let cerrar = document.createElement('span');
    cerrar.setAttribute('id', 'modalCerrar');
    cerrar.innerHTML = '<span class="material-symbols-outlined">close</span>';

    modal.appendChild(cerrar);

    cerrar.addEventListener('click', cerrarModal);

    function cerrarModal() {
        modalBack.style.display = "none"
    }

    let titulo = document.createElement('h2');
    titulo.setAttribute('id', 'modalTitulo');
    titulo.innerText = "DONA";
    modal.appendChild(titulo);

    let parrafo = document.createElement('p');
    parrafo.setAttribute('id', 'modalParrafo');
    parrafo.innerText = "¿Quieres ayudarnos en la investigación y divulgación de la flora canaria?";
    modal.appendChild(parrafo);

    let parrafoDos = document.createElement('p');
    parrafoDos.setAttribute('id', 'modalParrafo');
    parrafoDos.innerText = "Rellena el formulario y dona la cantidad que desees a nuestra causa";
    modal.appendChild(parrafoDos);

    let cajaForm = document.createElement('div');
    cajaForm.setAttribute('id', 'miCajaForm');
    modal.appendChild(cajaForm);

    let labelNombre = document.createElement('label');
    labelNombre.setAttribute('id', 'modalLabelNombre');
    labelNombre.setAttribute('for', 'nombre');
    labelNombre.innerText = "Nombre";
    cajaForm.appendChild(labelNombre);

    let inputNombre = document.createElement('input');
    inputNombre.setAttribute('id', 'modalInputNombre');
    inputNombre.setAttribute('type', 'text');
    cajaForm.appendChild(inputNombre);

    let labelApellido = document.createElement('label');
    labelApellido.setAttribute('id', 'modalLabelApellido');
    labelApellido.setAttribute('for', 'apellido');
    labelApellido.innerText = "Apellidos";
    cajaForm.appendChild(labelApellido);

    let inputApellido = document.createElement('input');
    inputApellido.setAttribute('id', 'modalInputApellido');
    inputApellido.setAttribute('type', 'text');
    cajaForm.appendChild(inputApellido);

    let labelMail = document.createElement('label');
    labelMail.setAttribute('id', 'modalLabelMail');
    labelMail.setAttribute('for', 'Mail');
    labelMail.innerText = "Correo electrónico";
    cajaForm.appendChild(labelMail);

    let inputMail = document.createElement('input');
    inputMail.setAttribute('id', 'modalInputMail');
    inputMail.setAttribute('type', 'email');
    cajaForm.appendChild(inputMail);

    let labelCantidad = document.createElement('label');
    labelCantidad.setAttribute('id', 'modalLabelCantidad');
    labelCantidad.setAttribute('for', 'Cantidad');
    labelCantidad.innerText = "Cantidad (€)";
    cajaForm.appendChild(labelCantidad);

    let inputCantidad = document.createElement('input');
    inputCantidad.setAttribute('id', 'modalInputCantidad');
    inputCantidad.setAttribute('type', 'number');
    inputCantidad.setAttribute('min', '1');
    cajaForm.appendChild(inputCantidad);

    let labelCheck = document.createElement('div');
    labelCheck.setAttribute('id', 'modalDivCheck');
    cajaForm.appendChild(labelCheck);

    let inputCheck = document.createElement('input');
    inputCheck.setAttribute('id', 'modalinputCheck');
    inputCheck.setAttribute('type', 'checkbox');
    labelCheck.appendChild(inputCheck);

    let inputCheckText = document.createElement('label');
    inputCheckText.setAttribute('id', 'modalLabelCheck');
    inputCheckText.setAttribute('for', 'modalinputCheck')
    inputCheckText.innerText = "Acepto los términos y condiciones"
    labelCheck.appendChild(inputCheckText);

    let botonEnvio = document.createElement("button");
    botonEnvio.type = "submit";
    botonEnvio.innerText = "Enviar";
    modal.appendChild(botonEnvio);
}


// LLAMADA A FUNCIONES

hoverIslas();
scrollAFicha();
btnQuienesSomos();
btnDonar();
abrirModal();
volverArriba();

