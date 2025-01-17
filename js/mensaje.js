document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el envío del formulario estándar

    // Obtener valores de los campos del formulario
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validar que los campos no estén vacíos
    if (!name || !email || !subject || !message) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear el mensaje para WhatsApp
    const whatsappMessage = `Hola, soy ${name}. Mi correo es ${email}. Quisiera hablar sobre: ${subject}. Aquí está mi mensaje: ${message}`;

    // Número de teléfono para enviar el mensaje
    const phoneNumber = "+50581088124";

    // Crear el enlace de WhatsApp
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirigir al enlace de WhatsApp
    window.open(whatsappLink, "_blank");
});