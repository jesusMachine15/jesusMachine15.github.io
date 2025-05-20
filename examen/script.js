function calcular() {
      const numero = parseFloat(document.getElementById('numero').value);
      const categoria = parseFloat(document.getElementById('categoria').value);
      const resultado = numero * categoria;
      document.getElementById('resultado').textContent = resultado;
    }

