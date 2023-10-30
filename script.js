document.getElementById("gerarReuniao").addEventListener("click", function() {
    const checkboxes = document.querySelectorAll("#checkboxes input[type=checkbox]:checked");
    const selectedDeliveries = Array.from(checkboxes).map(checkbox => checkbox.value);

    const meeting = generateMeeting(selectedDeliveries);

    document.getElementById("resultadoReuniao").innerText = "Reunião: " + meeting;
});

function generateMeeting(selectedDeliveries) {
    // Lógica para gerar a reunião com base nas entregas selecionadas
    // Você pode criar um mapeamento de entregas para reuniões e usar aqui
    // Exemplo simples para fins de ilustração:
    if (selectedDeliveries.includes("A") && selectedDeliveries.includes("B")) {
        return "Reunião Tipo 1";
    } else if (selectedDeliveries.includes("C") && selectedDeliveries.includes("D")) {
        return "Reunião Tipo 2";
    }
    // Adicione mais lógica conforme necessário
    return "Reunião Padrão";
}
