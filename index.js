

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

// boton navbar quienes somos
let btnQuienes = document.getElementById("contact");
btnQuienes.addEventListener("click", QuienesFunction)
function QuienesFunction() {
    window.scrollTo({ top: 9000, behavior: "smooth" });
    console.log("scrolii")
}



// boton navbar dona

let buttonDonar = document.getElementById("donar");

buttonDonar.onclick = function () {
    modalBack.style.display = "block";
}

// boton Volver Arriba

let buttonTop = document.getElementById("topButton");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonTop.style.display = "block";
    } else {
        buttonTop.style.display = "none";
    }
}

buttonTop.addEventListener("click" , topFunction)
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Modal Back

let modalBack = document.createElement('div');
modalBack.setAttribute('id', 'miModalBack');
modalBack.style.display = "none";

let body = document.getElementsByTagName("body")[0];
body.appendChild(modalBack);


// Modal 

let modal = document.createElement('div');
modal.setAttribute('id', 'miModal');

modalBack.appendChild(modal);



// Modal Btn Cerrar

let cerrar = document.createElement('span');
cerrar.setAttribute('id', 'modalCerrar');
cerrar.innerHTML = '<span class="material-symbols-outlined">close</span>';

modal.appendChild(cerrar);

cerrar.addEventListener('click', cerrarModal);

function cerrarModal() {
    modalBack.style.display = "none"
}

// Modal Texto

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


// boton envio formulario

let botonEnvio = document.createElement("button");
botonEnvio.type = "submit";
botonEnvio.innerText = "Enviar";
modal.appendChild(botonEnvio);


// Obtener el botón

let scrollToTopBtn = document.getElementById('scrollToTopBtn');


// Mostrar el botón cuando se hace scroll

let scrollBtn = window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};


// Añadir el evento al botón

scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};




let cajaFlora = document.querySelectorAll(".cajaFlora");

cajaFlora.forEach(cajaFlora=> {
    cajaFlora.addEventListener("mouseenter", () => {
        cajaFlora.forEach(el => {
            el.style.opacity = "1"; 
            el.style.transform = "scale(1.5)"; 
        });
    });
});

cajaFlora.forEach(el => {
    if (el !== cajaFlora) {
        el.style.opacity = "0.3";
        el.style.transform = "scale(0.95)"; 
    }
});
 


cajaFlora.addEventListener("mouseleave", () => {
    cajaFlora.forEach(el => {
        el.style.opacity = "0.5"; 
        el.style.transform = "scale(1)"; 
    });
});

