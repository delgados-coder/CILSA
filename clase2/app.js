document.getElementById('datos-personales-form').addEventListener('submit', function(event) {
    const paisResidencia = document.getElementById('pais-residencia').value;
    const regex = /^[A-Za-z\s]+$/;

    if (!regex.test(paisResidencia)) {
        alert('El campo "País de Residencia" solo puede contener letras y espacios.');
        event.preventDefault();
    }
});

function estilo_normal() {
    document.getElementById('archivo_css').setAttribute('href', './normal.css');
}

function estilo_alto_contraste() {
    document.getElementById('archivo_css').setAttribute('href', './alto.css');
}