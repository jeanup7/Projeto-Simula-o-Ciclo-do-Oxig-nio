document.getElementById("oxygenForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // captura os valores inseridos
    let carbono = parseFloat(document.getElementById("carbono").value);
    let fotossintese = parseFloat(document.getElementById("fotossintese").value);
    let queimadas = parseInt(document.getElementById("queimadas").value);
    let reflorestamento = parseInt(document.getElementById("reflorestamento").value);

    // processar os dados
    let carbonoRestante = carbono - (fotossintese / 100 * carbono) - queimadas * 2 + reflorestamento * 0.5;
    let oxigenioGerado = fotossintese * 10 + reflorestamento * 0.1;
    let co2Emitido = queimadas * 3 - reflorestamento * 0.2;

    // Exibir os resultados
    document.getElementById("carbonoOutput").innerText = `Carbono Restante: ${carbonoRestante.toFixed(2)} toneladas`;
    document.getElementById("oxigenioOutput").innerText = `Oxigênio Gerado: ${oxigenioGerado.toFixed(2)} toneladas`;
    document.getElementById("co2Output").innerText = `CO₂ Emitido: ${co2Emitido.toFixed(2)} toneladas`;

    document.getElementById("result").style.display = "block";

    // gráfico Dinâmico
    //vbm
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Carbono Restante', 'Oxigênio Gerado', 'CO₂ Emitido'],
            datasets: [{
                label: 'Simulação do Ciclo do Oxigênio',
                data: [carbonoRestante, oxigenioGerado, co2Emitido],
                backgroundColor: ['#00BFFF', '#00CED1', '#5F9EA0']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// função para baixar PDF
document.getElementById("downloadPdfBtn").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const carbonoOutput = document.getElementById("carbonoOutput").innerText;
    const oxigenioOutput = document.getElementById("oxigenioOutput").innerText;
    const co2Output = document.getElementById("co2Output").innerText;

    doc.text("Resultados da Simulação do Ciclo do Oxigênio", 10, 10);
    doc.text(carbonoOutput, 10, 20);
    doc.text(oxigenioOutput, 10, 30);
    doc.text(co2Output, 10, 40);

    // capturar o gráfico como imagem
    html2canvas(document.getElementById('chart')).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 10, 50, 190, 100);
        doc.save("simulacao_ciclo_oxigenio.pdf");
    });
});
