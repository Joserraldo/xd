document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('formResponse').textContent = 'Gracias, ' + name + '. Hemos recibido tu mensaje.';
        document.getElementById('formResponse').classList.remove('hidden');
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formResponse').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('formResponse').classList.remove('hidden');
    }
});
