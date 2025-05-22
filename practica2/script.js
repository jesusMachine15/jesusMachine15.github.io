document.getElementById('registroForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const edad = document.getElementById('edad').value;
      const numero = document.getElementById('numero').value;
      const pais = document.getElementById('pais').value;
      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = `
        <h3>Datos Registrados:</h3>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Numero:</strong> ${numero}</p>
        <p><strong>País:</strong> ${pais}</p>
        <p><strong>Edad:</strong> ${edad}</p>
      `;
    });