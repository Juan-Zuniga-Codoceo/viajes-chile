
$(document).ready(function() {
    $('#contactForm').submit(function(e) {
      e.preventDefault();
      if (validateForm()) {
        alert("El mensaje fue enviado con éxito.");
      } else {
        alert("Falta llenar el formulario.");
      }
    });
  
    function validateForm() {
      var nombre = $('#nombre').val();
      var email = $('#email').val();
      var mensaje = $('#mensaje').val();
      
      if (nombre !== '' && email !== '' && mensaje !== '') {
        return true;
      } else {
        return false;
      }
    }
  });
  