console.log("modal.js ONLINE");

function openContactForm(recipient) {
  console.log("OPENCONTACTFORM ejecutada!!! > " + recipient);
  document.getElementById('recipientName').value = recipient;
  
  let modal = new bootstrap.Modal(document.getElementById('contactFormModal'));
  modal.show();
}

// Respuesta al Enviar el formularip del modal ♥ // 
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Formulario Enviado!');
  
  let modal = bootstrap.Modal.getInstance(document.getElementById('contactFormModal'));
  modal.hide();
});