document.getElementById("diagnosticForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const correctAnswers = {
      q1: "a",
      q2: "a",
      q3: "b",
      q4: "c",
      q5: "b",
      q6: "a",
      q7: "b"
    };
  
    const userAnswers = {};
    let score = 0;
    const results = [];
  
    for (let i = 1; i <= 7; i++) {
      const answer = document.querySelector(`input[name="q${i}"]:checked`)?.value;
      userAnswers[`q${i}`] = answer;
      const correct = answer === correctAnswers[`q${i}`];
      results.push(correct ? 1 : 0);
      if (correct) score++;
    }
  
    document.getElementById("results").innerText = `Tu calificación es: ${score} / 7`;
  
    const ctx = document.getElementById("resultsChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from({ length: 7 }, (_, i) => `Pregunta ${i + 1}`),
        datasets: [{
          label: "Puntos",
          data: results,
          backgroundColor: "#007BFF"
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 1
          }
        }
      }
    });
  });
  
  document.getElementById("downloadPDF").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const resultText = document.getElementById("results").innerText;
    doc.text("Resultados del Diagnóstico", 10, 10);
    doc.text(resultText, 10, 20);
    doc.save("diagnostico.pdf");
  });
  