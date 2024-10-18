

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

tajinaste.addEventListener("mouseenter", () => {
    granCanaria.style.fill = "#FF0000";
})
tajinaste.addEventListener("mouseleave", () => {
    granCanaria.style.fill = "";
})



violeta.addEventListener("mouseenter", () => {
    tenerife.style.fill = "#FF0000";
})
violeta.addEventListener("mouseleave", () => {
    tenerife.style.fill = "";
})


helecho.addEventListener("mouseenter", () => {
    granCanaria.style.fill = "#FF0000";
    tenerife.style.fill = "#FF0000";
    fuerteventura.style.fill = "#FF0000";
    lanzarote.style.fill = "#FF0000";
    gomera.style.fill = "#FF0000";
    hierro.style.fill = "#FF0000";
    palma.style.fill = "#FF0000";

})
helecho.addEventListener("mouseleave", () => {
    granCanaria.style.fill = "";
    tenerife.style.fill = "";
    fuerteventura.style.fill = "";
    lanzarote.style.fill = "";
    gomera.style.fill = "";
    hierro.style.fill = "";
    palma.style.fill = "";
})



tilo.addEventListener("mouseenter", () => {
    granCanaria.style.fill = "#FF0000";
    tenerife.style.fill = "#FF0000";
    gomera.style.fill = "#FF0000";
    hierro.style.fill = "#FF0000";
    palma.style.fill = "#FF0000";
})
tilo.addEventListener("mouseleave", () => {
    granCanaria.style.fill = "";
    tenerife.style.fill = "";
    gomera.style.fill = "";
    hierro.style.fill = "";
    palma.style.fill = "";
})



cardon.addEventListener("mouseenter", () => {
    granCanaria.style.fill = "#FF0000";
    tenerife.style.fill = "#FF0000";
    fuerteventura.style.fill = "#FF0000";
    gomera.style.fill = "#FF0000";
    hierro.style.fill = "#FF0000";
    palma.style.fill = "#FF0000";

})
cardon.addEventListener("mouseleave", () => {
    granCanaria.style.fill = "";
    tenerife.style.fill = "";
    fuerteventura.style.fill = "";
    gomera.style.fill = "";
    hierro.style.fill = "";
    palma.style.fill = "";
})


drago.addEventListener("mouseenter", () => {
    granCanaria.style.fill = "#FF0000";
    tenerife.style.fill = "#FF0000";
    gomera.style.fill = "#FF0000";
    hierro.style.fill = "#FF0000";
    palma.style.fill = "#FF0000";

})
drago.addEventListener("mouseleave", () => {
    granCanaria.style.fill = "";
    tenerife.style.fill = "";
    gomera.style.fill = "";
    hierro.style.fill = "";
    palma.style.fill = "";
})




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
        console.log("click")
        vistaActual = fichaMap[img.id].scrollIntoView({ behavior: "smooth" })
    })
})


// boton navbar dona

let buttonDonar = document.getElementById("donar");

buttonDonar.onclick = function () {
    modal.style.display = "block";
}


// Modal 

let modal = document.createElement('div');
modal.setAttribute('id', 'miModal');
modal.style.display="none"

let body = document.getElementsByTagName("body")[0];
body.appendChild(modal);

// Modal Btn Cerrar

let cerrar = document.createElement('span');
cerrar.setAttribute('id', 'modalCerrar');
cerrar.innerText = "x";
modal.appendChild(cerrar);

cerrar.addEventListener('click', cerrarModal);

function cerrarModal() {
    modal.style.display = "none"
}

// Modal Texto

let titulo = document.createElement('h2');
titulo.setAttribute('id', 'modalTitulo');
titulo.innerText = "Dona";
modal.appendChild(titulo);

let parrafo = document.createElement('p');
parrafo.setAttribute('id', 'modalParrafo');
parrafo.innerText = "¿Quieres ayudarnos en la investigación y divulgación de la flora canaria?";
modal.appendChild(parrafo);

let parrafoDos = document.createElement('p');
parrafoDos.setAttribute('id', 'modalParrafo');
parrafoDos.innerText = "Rellena el formulario y dona la cantidad que desees a nuestra causa";
modal.appendChild(parrafoDos);

// Modal Caja formulario

let cajaForm = document.createElement('div');
cajaForm.setAttribute('id', 'miCajaForm');
modal.appendChild(cajaForm);

//Nombre

let labelNombre = document.createElement('label');
labelNombre.setAttribute('id', 'modalLabelNombre');
labelNombre.setAttribute('for', 'nombre');
labelNombre.innerText = "Nombre";
cajaForm.appendChild(labelNombre);

let inputNombre = document.createElement('input');
inputNombre.setAttribute('id', 'modalInputNombre');
inputNombre.setAttribute('type', 'text');
cajaForm.appendChild(inputNombre);

//Apellidos

let labelApellido = document.createElement('label');
labelApellido.setAttribute('id', 'modalLabelApellido');
labelApellido.setAttribute('for', 'apellido');
labelApellido.innerText = "Apellidos";
cajaForm.appendChild(labelApellido);

let inputApellido = document.createElement('input');
inputApellido.setAttribute('id', 'modalInputApellido');
inputApellido.setAttribute('type', 'text');
cajaForm.appendChild(inputApellido);

//Mail

let labelMail = document.createElement('label');
labelMail.setAttribute('id', 'modalLabelMail');
labelMail.setAttribute('for', 'Mail');
labelMail.innerText = "Correo electrónico";
cajaForm.appendChild(labelMail);

let inputMail = document.createElement('input');
inputMail.setAttribute('id', 'modalInputMail');
inputMail.setAttribute('type', 'email');
cajaForm.appendChild(inputMail);

//Cantidad

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

//Check términos

let labelCheck = document.createElement('label');
labelCheck.setAttribute('id', 'modalLabelCheck');
cajaForm.appendChild(labelCheck);

let inputCheck = document.createElement('input');
inputCheck.setAttribute('id', 'modalinputCheck');
inputCheck.setAttribute('type', 'checkbox');
labelCheck.appendChild(inputCheck);

let inputCheckText = document.createElement('p');
inputCheckText.innerText = "Acepto los términos y condiciones"
labelCheck.appendChild(inputCheckText);


// boton envio formulario

let botonEnvio = document.createElement("button");
botonEnvio.type = "submit";
botonEnvio.innerText = "Enviar";
modal.appendChild(botonEnvio);







