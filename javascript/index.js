const modoOscuroBoton = document.getElementById('modoOscuro');
const body = document.body;
const icono = modoOscuroBoton.querySelector('i');

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    icono.classList.remove('bi-moon');
    icono.classList.add('bi-sun');
}

modoOscuroBoton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icono.classList.remove('bi-moon');
        icono.classList.add('bi-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icono.classList.remove('bi-sun');
        icono.classList.add('bi-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
});

function enviarFormulario() {
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var mensaje = document.getElementById('mensaje');
    var formulario = document.getElementById('contactForm');
    
    var valido = true;
    
    if (nombre.value.trim() === "") {
        nombre.classList.add('is-invalid');
        valido = false;
    } else {
        nombre.classList.remove('is-invalid');
    }

    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexEmail.test(email.value)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        email.classList.add('is-invalid');
        valido = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (mensaje.value.trim() === "") {
        mensaje.classList.add('is-invalid');
        valido = false;
    } else {
        mensaje.classList.remove('is-invalid');
    }

    if (valido) {
        alert("¡Mensaje enviado exitosamente!");
        formulario.reset();
    }
}